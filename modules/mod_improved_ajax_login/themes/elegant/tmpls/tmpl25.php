<?php
/*-------------------------------------------------------------------------
# mod_improved_ajax_login - Improved AJAX Login and Register
# -------------------------------------------------------------------------
# @ author    Balint Polgarfi
# @ copyright Copyright (C) 2013 Offlajn.com  All Rights Reserved.
# @ license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
# @ website   http://www.offlajn.com
-------------------------------------------------------------------------*/
?><?php
defined('_JEXEC') or die('Restricted access');
// init user menu
if (!$guest && ($usermenu = $params->get('usermenu', 0))) {
  require_once JPATH_SITE.'/modules/mod_menu/helper.php';
  $menuparams = new JObject(array(
    'menutype' => $usermenu,
    'startLevel' => 0,
    'endLevel' => 0,
    'showAllChildren' => 1
  ));
  $menulist = modMenuHelper::getList($menuparams);
} ?>
<div id="<?php echo $module->instanceid ?>">

<?php if ($guest): // LOGIN ?>
  <?php if (@$module->view != 'reg'): ?>
    <?php if ($loginpopup): ?>
      <a class="logBtn selectBtn" onclick="return false" href="<?php echo JRoute::_('index.php?option=com_users&view=login') ?>">
        <?php if (!$params->get('wndcenter', 0)): ?>
      		<span class="loginBtn leftBtn">
      			<?php echo JText::_('JLOGIN') ?>
      		</span><span class="loginBtn rightBtn">&nbsp;<img src="<?php echo JRoute::_("modules/{$module->module}/themes/elegant/images/arrow.png")?>" alt="\/" width="10" height="7"/>&nbsp;</span>
        <?php else: ?>
          <span class="loginBtn"><?php echo JText::_('JLOGIN') ?></span>
        <?php endif ?>
      </a>
    	<div class="ial-window">
        <div class="loginWndInside" style="padding: 15px 20px 8px">
          <div class="ial-arrow-up">
            <div style="position:relative">
    					<div class="upArrowOutside"></div>
    					<div class="upArrowInside"></div>
            </div>
    			</div>
    			<button class="ial-close loginBtn"><img src="<?php echo JRoute::_("modules/{$module->module}/themes/elegant/images/x.png")?>" alt="x" width="8" height="10"/></button>
          <?php if ($loginpopup) require dirname(__FILE__).'/log25.php' // LOGIN FORM ?>
        </div>
    	</div>
    <?php else: ?>
      <?php require dirname(__FILE__).'/log25.php' // LOGIN FORM ?>
      <div class="loginBrd"></div>
    <?php endif ?>
  <?php endif ?>

	<?php if ($allowUserRegistration): // REGISTRATION ?>
    <?php if (@$module->view == 'reg'): ?>
      <div class="loginWndInside">
        <?php require dirname(__FILE__).'/reg25.php' // REGISTRATION FORM ?>
      </div>
    <?php else: ?>
  	  <a class="regBtn selectBtn <?php if (!$loginpopup) echo 'fullWidth' ?>" href="<?php echo $regpage ?>">
      <?php if ($regp[0] == 'joomla' && !$params->get('wndcenter', 0)): ?>
    		<span class="loginBtn leftBtn">
    			<?php echo JText::_('JREGISTER') ?>
    		</span><span class="loginBtn rightBtn">&nbsp;<img src="<?php echo JRoute::_("modules/{$module->module}/themes/elegant/images/arrow.png")?>" alt="\/" width="10" height="7"/>&nbsp;</span>
      <?php else: ?>
        <span class="loginBtn"><?php echo JText::_('JREGISTER') ?></span>
      <?php endif ?>
  		</a>
    <?php endif ?>
  <?php endif ?>


	<div class="ial-window">
    <div class="loginWndInside">
      <div class="ial-arrow-up">
        <div style="position:relative">
					<div class="upArrowOutside"></div>
					<div class="upArrowInside"></div>
        </div>
			</div>
			<button class="ial-close loginBtn"><img src="<?php echo JRoute::_("modules/{$module->module}/themes/elegant/images/x.png")?>" alt="x" width="8" height="10"/></button>
      <?php if ($allowUserRegistration && @$module->view != 'reg' && ($regp[0] == 'joomla' || isset($_SESSION['oauth']['twitter']))) require dirname(__FILE__).'/reg25.php' // REGISTER FORM ?>
    </div>
	</div>

<?php else: // LOGOUT ?>
  <a class="userBtn selectBtn" onclick="return false" href="<?php echo $mypage ?>">
	  <span class="loginBtn leftBtn">
			<?php echo $params->get('name')? $user->get('name') : $user->get('username')?>
		</span><span class="loginBtn rightBtn">&nbsp;<img src="<?php echo JRoute::_("modules/{$module->module}/themes/elegant/images/arrow.png")?>" alt="\/" width="10" height="7"/>&nbsp;</span>
	</a>
	<div class="ial-usermenu">
    <div class="loginWndInside">
      <div class="ial-arrow-up">
        <div style="position:relative">
					<div class="upArrowOutside"></div>
					<div class="upArrowInside"></div>
        </div>
			</div>
			<div class="loginLst">
        <?php if($params->get('profile', 1)):?>
				<a class="settings" href="<?php echo $mypage ?>"><?php echo JText::_('COM_USERS_PROFILE_MY_PROFILE') ?></a>
        <?php endif ?>
				<?php if ($mycart): ?>
				<a class="cart" href="<?php echo JRoute::_($mycartURL) ?>" ><?php echo $mycart ?></a>
				<?php endif ?>
				<?php if ($usermenu): ?>
					<?php foreach ($menulist as $mi): ?>
					<a class="mitem" href="<?php echo JRoute::_($mi->flink) ?>" ><?php echo $mi->title ?></a>
					<?php endforeach ?>
        <?php endif ?>
				<a class="logout" href="javascript:;" ><?php echo JText::_('JLOGOUT') ?></a>
			</div>
    </div>
  	<form action="<?php echo JRoute::_('index.php', true, $params->get('usesecure')) ?>" method="post" name="ialLogout" class="ial-logout hidden">
      <input type="hidden" value="com_users" name="option" />
      <input type="hidden" value="user.logout" name="task" />
  		<input type="hidden" name="return" value="<?php echo $return ?>" />
    	<?php echo JHtml::_('form.token') ?>
  	</form>
	</div>
<?php endif ?>
</div>