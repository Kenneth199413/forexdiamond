<?php
/*-------------------------------------------------------------------------
# mod_improved_ajax_login - Improved AJAX Login and Register
# -------------------------------------------------------------------------
# @ author    Balint Polgarfi
# @ copyright Copyright (C) 2013 Offlajn.com  All Rights Reserved.
# @ license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
# @ website   http://www.offlajn.com
-------------------------------------------------------------------------*/
$revision = '2.028';
$revision = '2.028.333';
?><?php
defined('_JEXEC') or die('Restricted access');

if (defined('mod_improved_ajax_login')) return;
else define('mod_improved_ajax_login', 1);

if (version_compare(JVERSION,'3.0.0','l') && !function_exists('Offlajnjimport')){
  function Offlajnjimport($key, $base = null){
    return jimport($key);
  }
}

if (!extension_loaded('gd') || !function_exists('gd_info')) {
  echo "{$module->name} needs the <a href='http://php.net/manual/en/book.image.php'>GD module</a> enabled
	in your PHP runtime environment. Please consult with your System Administrator and he will enable it!";
  return;
}

require_once(dirname(__FILE__).'/helpers/functions.php');

$db = JFactory::getDBO();
$module->instanceid = $module->module.'-'.$module->id;

// init params
if ($params->get('moduleclass_sfx', '') != @$params->get('advancedTab')->moduleclass_sfx) {
  $params->set('moduleclass_sfx', $params->get('advancedTab')->moduleclass_sfx);
  $db->setQuery('UPDATE #__modules SET params=\''.addslashes($params->toString()).'\' WHERE id='.$module->id);
  $db->query();
}
require_once(dirname(__FILE__).'/params/offlajndashboard/library/flatArray.php');
$params->loadArray(offflat_array($params->toArray()));

// For demo parameter editor
if(defined('DEMO')){
  $_SESSION['module_id'] = $module->id;
  if(!isset($_SESSION[$module->module.'a'][$module->id])){
    $_SESSION[$module->module.'a'] = array();
    $a = $params->toArray();
    $a['params'] = $a;
    $params->loadArray($a);
    $_SESSION[$module->module."_orig"] = $params->toString();
    $_SESSION[$module->module.'a'][$module->id] = true;
    $_SESSION[$module->module."_params"] = $params->toString();
    header('LOCATION: '.$_SERVER['REQUEST_URI']);
  }
  if(isset($_SESSION[$module->module."_params"])){
    $params = new JRegistry();
    $params->loadJSON($_SESSION[$module->module."_params"]);
  }
  $a = $params->toArray();
  require_once(dirname(__FILE__).'/params/offlajndashboard/library/flatArray.php');
  $params->loadArray(o_flat_array($a['params']));
  $themesdir = JPATH_SITE.'/modules/'.$module->module.'/themes/';
  $xmlFile = $themesdir.$params->get('theme', 'elegant').'/theme.xml';
  $xml = new SimpleXMLElement(file_get_contents($xmlFile));
  $skins = $xml->params[0]->param[0];
  $sks = array();
  foreach($skins->children() AS $skin){
    $sks[] = $skin->getName();
  }
  DojoLoader::addScript('window.skin = new Skinchanger({theme: "'.$params->get('theme', 'elegant').'",skins: '.json_encode($sks).'});');
  if(isset($_REQUEST['skin']) && $skins->{$_REQUEST['skin']}){
    $skin = $skins->{$_REQUEST['skin']}[0];
    foreach($skin AS $s){
      $name = $s->getName();
      $value = (string)$s;
      $params->set($name, $value);
    }
    $_SESSION[$module->module."_params"] = $params->toString();
  }
}

// init login popup
if (isset($module->view)) $loginpopup = $params->set('loginpopup', $module->view == 'reg');
else $loginpopup = $params->get('loginpopup', 1);
if (!$loginpopup || isset($module->view)) $params->set('wndcenter', 1);
$socialpos = $params->get('socialpos','bottom');

$theme = $params->get('theme', 'elegant');
$_SESSION['ologin'] = array('https' => $params->get('usesecure'));

// init oauth
$_SESSION['oauth'] = null;
$oauths = '{}';
if ($params->get('social', 1)) {
  $db->setQuery('SELECT name, alias, app_id, app_secret, auth, token, userinfo FROM #__offlajn_oauths WHERE published = 1');
  $oauths = $db->loadObjectList('alias');
  if ($oauths) {
    $_SESSION['oauth'] = $oauths;
    $oauths = array();
    $redirect = urlencode(JURI::root().'index.php?option=com_improved_ajax_login&task=');
    foreach ($_SESSION['oauth'] as $alias => $oauth) {
      $oauths[$alias] = $oauth->auth?
        "{$oauth->auth}&client_id={$oauth->app_id}&redirect_uri=$redirect{$oauth->alias}" :
        JURI::root().'index.php?option=com_improved_ajax_login&redirect=1&task='.$oauth->alias;
    }
    $oauths = json_encode($oauths);
    $_SESSION['ologin']['curl'] = $params->get('use_curl', 0);
  } else $oauths = '{}';
}

// init captcha
if ($params->get('captcha', 0)) {
  $_SESSION['reCaptcha'] = array(
    'public' => $params->get('public_key', '6Lc8m9USAAAAAPmbY8EiK9eVXKClTwNqSsqK6TGZ'),
    'private'=> $params->get('private_key', '6Lc8m9USAAAAAOEiVujNJbLFv-41oBMO2oN8klBO')
  );
} else $_SESSION['reCaptcha'] = null;

// Load image helper
require_once(dirname(__FILE__).'/classes/ImageHelper.php');

// Build the CSS
require_once(dirname(__FILE__).'/classes/cache.class.php');
$cache = new OfflajnMenuThemeCache('default', $module, $params);
$cache->addCss(dirname(__FILE__).'/themes/clear.css.php');
$cache->addCss(dirname(__FILE__)."/themes/$theme/theme.css.php");
$cache->assetsAdded();

// Set up enviroment variables for the cache generation
$module->url = JUri::root(true).'/modules/'.$module->module.'/';
$cache->addCssEnvVars('module', $module);
$themeurl = JUri::root(true).'/modules/'.$module->module.'/themes/'.$theme.'/';
$cache->addCssEnvVars('themeurl', $themeurl);
$cache->addCssEnvVars('helper', new OfflajnHelper7($cache->cachePath, $cache->cacheUrl));

// Add cached contents to the document
$cacheFiles = $cache->generateCache();
$document = JFactory::getDocument();
$document->addStyleSheet($cacheFiles[0]);

// get usermenu or redirection link
$usersConfig = JComponentHelper::getParams('com_users');
$allowUserRegistration = $usersConfig->get('allowUserRegistration');

$allowReg = $params->get('registration', 'def');
if ($allowReg != 'def') {
  if ($allowReg == 'hide') $allowUserRegistration = 0;
  elseif ($allowUserRegistration != $allowReg) {
    $allowUserRegistration = $allowReg;
    $usersConfig->set('allowUserRegistration', $allowReg);
    $db->setQuery('UPDATE #__extensions SET params=\''.addslashes($usersConfig->toString()).'\' WHERE element=\'com_users\';');
    $db->query();
  }
}

$user = JFactory::getUser();
$guest = $user->get('guest', 0);
$itemid = $params->get($guest? 'login' : 'logout');
if ($itemid) {
	$menu =& JSite::getMenu();
	$item = $menu->getItem($itemid);
  if ($item) $url = JRoute::_($item->link.(strpos($item->link, '?')?'&':'?').'Itemid='.$itemid, false);
  // stay on the same page
	else $url = JFactory::getURI()->toString(array('path', 'query', 'fragment'));
} else $url = JFactory::getURI()->toString(array('path', 'query', 'fragment'));
$return = base64_encode($url);

// If IE then no full AJAX support
if (isset($_SERVER['HTTP_USER_AGENT']) && strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== false)
  $params->set("ajax", 0);

// init profil links
$myp = explode('|*|', $params->get('mypage', 'joomla|*|'));
$mypage = array(
  'joomla' => 'index.php?option=com_users&view=profile&layout=edit',
  'virtuemart' => 'index.php?option=com_virtuemart&view=user');
$mypage['hikashop'] = 'index.php?option=com_hikashop&view=user&layout=cpanel';
$mypage['community'] = 'index.php?option=com_comprofiler';
$mypage['jomsocial'] = 'index.php?option=com_community&view=profile';
$mypage['custom'] = @$myp[1];
$mypage = JRoute::_($mypage[$myp[0]]);
// init registration links
$regp = explode('|*|', $params->get('regpage', 'joomla|*|'));
if ($guest) {
  $regpage = array(
    'joomla' => 'index.php?option=com_users&view=registration',
    'virtuemart' => 'index.php?option=com_virtuemart&view=user');
  $regpage['hikashop'] = 'index.php?option=com_hikashop&view=user&layout=form';
  $regpage['community'] = 'index.php?option=com_comprofiler&task=registers';
  $regpage['jomsocial'] = 'index.php?option=com_community&view=register&task=register';
  $regpage['custom'] = @$regp[1];
  $regpage = JRoute::_($regpage[$regp[0]]);
  if (!$params->get('socialregauto', 1) && $regp[0] == 'joomla') $_SESSION['ologin']['regpage'] = $regp[0];
  else $_SESSION['ologin']['regpage'] = 'auto';
} else {
  // Show cart
  if ($params->get('showcart', 1)
  &&  file_exists(JPATH_SITE.'/components/com_virtuemart/router.php')) {
    $lang->load('com_virtuemart');
    $mycart = JText::_('COM_VIRTUEMART_CART_SHOW');
    $mycartURL = 'index.php?option=com_virtuemart&view=cart';
  } else $mycart = 0;
}

// init language
$lang->load('mod_improved_ajax_login', dirname(__FILE__));
$lang->load('com_users');
$lang->load('mod_login');
$lang->load('plg_user_profile', JPATH_ADMINISTRATOR);
$username = JText::_('JGLOBAL_USERNAME');
$password = JText::_('JGLOBAL_PASSWORD');
$email = JText::_('JGLOBAL_EMAIL');

$usernamemail = $username.' / '.$email;
if ($auth = $params->get('username', 1))
  if ($auth == 2) $auth = $usernamemail;
  else $auth = $username;
else $auth = $email;
$icontype = $params->get('icontype', 'socialIco');

if (!function_exists('lng')) {
  function lng($lng) {
    return addslashes(JText::_($lng));
  }
}

// Add scripts
if (version_compare(JVERSION, '3.0.0', 'l')) {
  $document->addScript('//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js');
  $document->addScript(JURI::root()."modules/{$module->module}/script/jquery.noconflict.js");
} else JHtml::_('jquery.framework');
JHTML::_('behavior.modal'); // open tos in popup
$instance = "
  var params = {
    isGuest: $guest,
    oauth: $oauths,
    bgOpacity: '{$params->get('blackoutcomb', 40)}'.match(/\d+/)[0]/100.,
    returnUrl: '$url',
    border: '{$params->get('popupcomb', '|*|3')}'.split('|*|')[1].split('||')[0],
    padding: '{$params->get('buttoncomb', '3')}'.split('|*|')[0].split('||')[0],
    useAJAX: {$params->get('ajax', 0)},
    openEvent: '{$params->get('openevent', 'onclick')}',
    wndCenter: {$params->get('wndcenter', 0)},
    dur: 300,
    timeout: {$params->get('timeout', 5000)},
    base: '".JURI::base()."',
    theme: '$theme',
    socialProfile: {$params->get('socialprofil', 0)}? '$mypage' : '',
    socialType: '$icontype',
    cssPath: '{$cacheFiles[0]}',
    regPage: '{$regp[0]}',
    captcha: '".(isset($_SESSION['reCaptcha'])? $_SESSION['reCaptcha']['public']:'')."',
    showHint: {$params->get('showhint', 0)},
    requiredLng: '".lng('COM_USERS_REGISTER_REQUIRED')."',
    regLng: '".lng('COM_USERS_REGISTRATION')."',
    passwdCat: ['', '".lng('IAL_VERY_WEAK')."', '".lng('IAL_WEAK')."', '".lng('IAL_REASONABLE')."', '".lng('IAL_STRONG')."', '".lng('IAL_VERY_STRONG')."']
	};
  new ImprovedAJAXLogin(params);
";

$document->addScript(JURI::root()."modules/{$module->module}/script/improved_ajax_login.js");
$document->addScriptDeclaration('(window.jq183 || jQuery)(function($) {'.$instance.'});');

// Load template
include(dirname(__FILE__)."/themes/$theme/tmpls/tmpl25.php");
?>