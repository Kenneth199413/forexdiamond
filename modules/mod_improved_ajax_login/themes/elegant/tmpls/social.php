<?php
/*-------------------------------------------------------------------------
# mod_improved_ajax_login - Improved AJAX Login and Register
# -------------------------------------------------------------------------
# @ author    Balint Polgarfi
# @ copyright Copyright (C) 2013 Offlajn.com  All Rights Reserved.
# @ license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
# @ website   http://www.offlajn.com
-------------------------------------------------------------------------*/
?><?php defined('_JEXEC') or die('Restricted access'); ?>

<?php if ($socialpos == 'bottom'): ?>
  <div class="loginBrd"><div class="loginOr"><?php echo JText::_('COM_USERS_OR')?></div></div>
<?php endif;?>
<?php if ($icontype == 'socialIco'):?>
  <div style="text-align:center; height:36px; *display:inline">
    <?php foreach($_SESSION['oauth'] as $oauth):?>
    <div class="socialIco" data-oauth="<?php echo $oauth->alias ?>" title="<?php echo JText::_("IAL_LOGIN_WITH_".strtoupper($oauth->alias)) ?>">
      <div class="socialImg <?php echo $oauth->alias?>Img"></div>
    </div>
    <?php endforeach;?>
  </div>
<?php else:?>
  <div class="ial-oauths">
  <?php foreach($_SESSION['oauth'] as $oauth):?>
  <span class="loginBtn ial-submit" data-oauth="<?php echo $oauth->alias?>"><span class="btnIco <?php echo $oauth->alias?>Ico">&nbsp;</span><?php echo JText::_("IAL_LOGIN_WITH_".strtoupper($oauth->alias)) ?></span>
  <?php endforeach;?>
  </div>
<?php endif;?>
<?php if ($socialpos == 'top'): ?>
  <div class="loginBrd"><div class="loginOr"><?php echo JText::_('COM_USERS_OR')?></div></div>
<?php endif;?>