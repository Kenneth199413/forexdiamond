<?php
defined('_JEXEC') or die;
JHtml::_('behavior.framework', true);
$menu_name = JSite::getMenu()->getActive()->alias;
$column3   = (strcmp($menu_name, "home") == 0);
$column3   = $column3 || (strcmp($menu_name, "faqs") == 0);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>"
      lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
<head>
	<jdoc:include type="head" />
	<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/ForexCss.css"
	      type="text/css">
	<script type="text/javascript"
	        src='<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/jquery-1.7.2.min.js'></script>
</head>
<body bgcolor="#CCC">
<div id="mainLightBoxFilter" class="mainLightBoxFilter">
</div>
<div id="quotes_bar2">
	<div style="margin-bottom:0;z-index:999">
		<a href="http://www.forex-metal.com/affiliate/24810/3"><img alt="100_bonus_986"
		                                                            src="images/banners/100_bonus_986.png"/></a>
	</div>
</div>
<!--<div class="panel_followus" id="followusIco">
	<div align="left">
		<a href="http://www.facebook.com/pages/ForexDiamond/237835509579865" title="" class="fb" target="_blank">Follow
			Us on</a>
	</div>
	<div align="left">
		<a href="http://twitter.com/forex_diamond" title="" class="tw" target="_blank">Follow Us on</a>
	</div>
</div>-->
<div id="site-container">
<div id="main-container">
<div class="header">
	<div class="top-header">
		<div class="network">
			To succeed in the market one must first surrender to it.
		</div>
		<div class="flags">
			<ul class="flags_menu">
				<li class="selected">
					<div class="network_t shadowHorizontal outSideTopSmallShadow"></div>
					<img
						src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/images/flag/flags_usa.png"
						width="16" height="16" alt="Forex Trading">
				</li>
				<li class="not_selected">
					<a href="vn"><img
							src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/images/flag/flags_vn.png"
							width="16" height="16" alt="Giao dich Forex"></a>
				</li>
			</ul>
		</div>
	</div>
	<div class="banner">
<!--		<div class="logo">
			<a href=""><img src="<?php /*echo $this->baseurl */?>/templates/<?php /*echo $this->template; */?>/images/logo.png"
			                                           width="140" height="140"/></a>
		</div>-->
		<div class="ban">
			<jdoc:include type="modules" name="user-banner"/>
		</div>
	</div>
	<div class="search_area">
		<div class="make_us">
			<jdoc:include type="modules" name="user-login-box"/>
		</div>
		<div class="date">
			<?php
			echo '<div class="date" style="font-size:11px;">';
			date_default_timezone_set('GMT');
			echo date('F j, Y. l H:i:s ');
			echo 'GMT';
			echo '</div>'
			?>
		</div>
	</div>
	<div id="nav_bar">
		<div id="primary_nav">
			<ul class='base_state'>
				<li class="home_tab">
					<a href="index.php">
						<div style="margin-top:-5px">HOME</div>
					</a>
				</li>
				<li class="<?php if (strcmp($menu_name, "faqs") == 0) echo 'active_' ?>first_tab">
					<a href="index.php/faqs">
						<div style="margin-top:-5px">FAQs</div>
					</a>
				</li>
				<li class="<?php if (strcmp($menu_name, "compare-brokers") == 0) echo 'active' ?>">
					<a href="index.php/compare-brokers">
						<div style="margin-top:-5px">COMPARING BROKERS</div>
					</a>
				</li>
				<li class="<?php if ((strcmp($menu_name, "promotions") == 0) || (strcmp($menu_name, "sign-up") == 0) || (strcmp($menu_name, "no-sign-up") == 0) || (strcmp($menu_name, "gifts") == 0)) echo 'active' ?>">
					<a href="index.php/promotions">
						<div style="margin-top:-5px">PROMOTIONS</div>
					</a>
				</li>
				<li class="<?php if ((strcmp($menu_name, "trade-tool") == 0) || (strcmp($menu_name, "indicators") == 0) || (strcmp($menu_name, "ea") == 0)) echo 'active' ?>">
					<a href="index.php/trade-tool">
						<div style="margin-top:-5px">TRADE TOOLS</div>
					</a>
				</li>
				<li class="<?php if (strcmp($menu_name, "contact") == 0) echo 'active_' ?>last_tab">
					<a href="index.php/contact">
						<div style="margin-top:-5px">CONTACT US</div>
					</a>
				</li>
			</ul>
		</div>
		<div id="secondary_nav" style='' class=''>
			<ul>
				<li><a href="index.php"><div>Number of accounts: 11111</div></a></li>
			</ul>
		</div>
		<div id="chat_search">
			<jdoc:include type="modules" name="user-search-box"/>
		</div>
	</div>
</div>
<div id="content-container">
	<div style="margin-bottom:10px">
		<a href="http://www.etoro.com/B896_A28065_TClick.aspx" Target="_Top">
			<img border="0"
			     src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/images/986x40_social-woman_en_v2.gif"
			     alt="" width="986" height="40">
		</a>
	</div>
	<div id="column-l" class="float_lang_base_1">
		<table cellspacing="0" cellpadding="0" border="0" class="column-l-table">
			<tbody>
			<tr>
				<?php if ($column3) : ?>
				<td width="120px">
					<div id="column-ads">
						<div class="grey-zone">
							<p>
								<a href="http://secure.efxnow.com/NewOLS_GCUK_EN/applyforex.aspx?BC=MQUV&IBC=QTRA&SIBC=QTR1"
								   target='_blank'><img src="images/brokers/forexcom.gif" border='0' alt='' width='100'
								                        height='33'></a></p>

							<p><a href="http://www.liteforex.com/?uid=2109002317" target='_blank'><img
										src="images/brokers/LiteForex.jpg" border='0' alt='' width='100'
										height='33'></a></p>

							<p><a href="http://www.avafx.com/?tag=24125" target='_blank'><img
										src="images/brokers/avafx.gif" border='0' alt='' width='100' height='33'></a>
							</p>

							<p><a href="http://instaforex.com/ru/index.php?x=DKNW" target='_blank'><img
										src="images/brokers/instaforex.gif" border='0' alt='' width='100'
										height='33'></a></p>

							<p><a href="http://www.etoro.com/B530_A28065_TClick.aspx" Target="_Blank"><img border="0"
							                                                                               src="images/brokers/etoro.gif"
							                                                                               alt=""
							                                                                               width="100"
							                                                                               height="33"></a>
							</p>

							<p><a href="http://www.easy-forex.com/gtw/191290.aspx" Target="_Blank"><img border="0"
							                                                                            src="images/brokers/easyforex.jpg"
							                                                                            alt=""
							                                                                            width="100"
							                                                                            height="33"></a>
							</p>

							<p><a href="http://www.uwcfx.com/?uuid=60148578532971440" Target="_Blank"><img border="0"
							                                                                               src="images/brokers/uwc.jpg"
							                                                                               alt=""
							                                                                               width="100"
							                                                                               height="33"></a>
							</p>

							<p><a href="http://www.hotforex.com/?refid=11922" Target="_Blank"><img border="0"
							                                                                       src="images/brokers/HotForex.jpg"
							                                                                       alt="" width="100"
							                                                                       height="33"></a></p>

							<p><a href="http://ads.4xp-partners.com/redirect.aspx?pid=3694&bid=3859"
							      Target="_Blank"><img border="0" src="images/brokers/4xp.jpg" alt="" width="100"
							                           height="33"></a></p>

							<p><a href="http://www.forex-metal.com/affiliate/24810/3" Target="_Blank"><img border="0"
							                                                                               src="images/brokers/forexmetal.jpg"
							                                                                               alt=""
							                                                                               width="100"
							                                                                               height="33"></a>
							</p>
						</div>
					</div>
				</td>
				<td style="width:12px">&nbsp;</td>
				<?php endif; ?>
				<td>
					<div id="column-content">
						<?php if (strcmp($menu_name, "trade-tool") == 0) : ?>
							<div class="feature">
								<p class="box-header">Best Trading Systems</p>
								<jdoc:include type="modules" name="user-indicators-box"/>
								<ul class="more">
									<a href="/technical/technical-studies">More Trading Systems</a>
								</ul>
							</div>
							<div class="feature">
								<p class="box-header">Best Expert Advisors</p>
								<jdoc:include type="modules" name="user-eas-box"/>
								<ul class="more">
									<li><a href="/technical/technical-studies">More Expert Advisors</a></li>
								</ul>
							</div>
						<?php	else : ?>
							<div class="feature" <?php if ($column3) echo ' style="width:570px" ' ?>>
								<jdoc:include type="message"/>
								<jdoc:include type="component" />
							</div>
						<?php endif; ?>
					</div>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
	<?php if ($column3) : ?>
	<div id="column-r" class="float_lang_base_2">
		<table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr>
				<td>
					<div class="sideblock_quotes">
						<iframe height="240" width="285" frameborder="0" marginheight="0" marginwidth="0"
						        src="http://media.avapartner.com/javatools/dailycharts/newtool.asp?langID=1&currs=1;2;3;4;5;6&CommX=51;63;64;67;70;86&IndexX=52;53;55;56;59;60&c1=808080&c2=132E72&c3=ECF2F9&c4=FFFFFF&c5=FFFF99&Tag=24125&Tag2=Default"
						        id="StreamingDemo" scrolling="no" border="0" frameborder="0"></iframe>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<a style="margin-bottom:30px" href="http://www.easy-forex.com/gtw/191290.aspx?bid=2767"
					   target="_blank"><img src="http://www.forex-affiliate.net/files/300x250_bonus_en.gif" width=300
					                        height=250 border=0></a>
				</td>
			</tr>
			<td>
				<a style="margin:30px 0 30px 0" href="http://www.etoro.com/B2791_A28065_TClick.aspx" Target="_Top"><img
						border="0"
						src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/images/1_300x250_forever.gif"
						alt="" width="300" height="250"></a>
			</td>
			</tr>
			<tr>
				<td>
					<a style="margin-bottom:30px"
					   href="http://ads.4xp-partners.com/redirect.aspx?pid=3694&bid=5416"><img
							src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/images/renderimage.aspx.gif"
							border=0></img></a>
				</td>
			</tr>
		</table>
	</div>
	<?php endif; ?>
</div>
<div class="clearit">&nbsp;</div>
</div>
<div id="offers">
	<div id="offers-container">
		<p class="title"><strong>Special Offers:</strong></p>
		<table cellpadding="0" cellspacing="0" dir="ltr" width="100%">
			<tr>
				<td style="padding-left:5px;padding-right:5px">
					<p><a href='http://secure.efxnow.com/NewOLS_GCUK_EN/applyforex.aspx?BC=MQUV&IBC=QTRA&SIBC=QTR1'
					      target='_blank'><img src='images/brokers/forexcom.gif' border='0' alt='' width='100'
					                           height='33'></a></p>
				</td>
				<td style="padding-left:5px;padding-right:5px">
					<p><a href='http://instaforex.com/ru/index.php?x=DKNW' target='_blank'><img
								src='images/brokers/instaforex.gif' border='0' alt='' width='100' height='33'></a></p>
				</td>
				<td style="padding-left:5px;padding-right:5px">
					<p><a href='http://www.uwcfx.com/?uuid=60148578532971440' target='_blank'><img
								src='images/brokers/uwc.jpg' border='0' alt='' width='100' height='33'></a></p>
				</td>
				<td style="padding-left:5px;padding-right:5px">
					<p><a href='http://ads.4xp-partners.com/redirect.aspx?pid=3694&bid=3859' target='_blank'><img
								src='images/brokers/4xp.jpg' border='0' alt='' width='100' height='33'></a></p>
				</td>
			</tr>
		</table>
	</div>
</div>
<div id="site-index">
	<div id="site-index-container">
		<div id="new-index"><p class="title"><strong>Forex Diamond Site Map:</strong></p>
			<table cellpadding="0" cellspacing="0" width="100%">
				<tr>
					<td>
						<table style="width:648px">
							<tr>
								<td style="width:150px"><h3>Main site</h3>
									<ul>
										<li><a href="index.php/brokers">Best Brokers</a></li>
										<li><a href="index.php/live-news">Live News</a></li>
										<li><a href="index.php/analytics">Live Analytics</a></li>
										<li><a href="index.php/promotions">Best Promotions</a></li>
										<li><a href="index.php/trade-tool">Trade Tools</a></li>
										<li><a href="index.php/contact-en">Contact Us</a></li>
									</ul>
								</td>
								<td style="width:150px"><h3>Live Education</h3>
									<ul>
										<li><a href="index.php/lessons">Live Forex School</a></li>
										<li><a href="index.php/videos">Forex Videos</a></li>
										<li><a href="index.php/ebooks">Ebooks</a></li>
									</ul>
								</td>
								<td style="width:150px"><h3>Promotions</h3>
									<ul>
										<li><a href="index.php/sign-up">Deposit Bonus</a></li>
										<li><a href="index.php/no-sign-up">No Deposit Bonus</a></li>
										<li><a href="index.php/gifts">Gifts and Competitions</a></li>
									</ul>
								</td>
								<td style="width:150px"><h3>Trade Tools</h3>
									<ul>
										<li><a href="index.php/indicators">Best Indicators</a></li>
										<li><a href="index.php/ea">Best Expert Advisors</a></li>
									</ul>
								</td>
							</tr>
							<tr>
						</table>
					</td>
					<td style="padding-top:2px;padding-left:10px;width:310px">
						<h3>Languages</h3>
						<ul class="languages">
							<ul class="float_lang_base_1" style="padding-right:30px;width:140px">
								<li><a href="index.php"><img
											src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/images/flag/flags_usa.png"
											width="16px" height="16px" alt="Forex Trading"/></a>&nbsp;<a
										href="http://www.forexpros.com">Forex Trading</a></li>
								<li><a href="index.php/vn"><img
											src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/images/flag/flags_vn.png"
											width="16px" height="16px" alt="Trading De Devises"/></a>&nbsp;<a href="vn">Giao
										dịch Forex</a></li>
							</ul>
						</ul>
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>
<div id="footer">
	<div id="footer-container">
		<p>2010-2012 Forex Diamond Limited. All Rights Reserved <br/>
			<a href="index.php/contact-en">Contact Us</a>&nbsp;|
			<a href="index.php/trade-tool">Trading Tools</a>&nbsp;|
			<a href="index.php/promotions">Promotions</a>&nbsp;|
			<a href="http://secure.hostgator.com/~affiliat/cgi-bin/affiliates/clickthru.cgi?id=fxdm92">Hosted by
				Hostgator</a>

		<div class="note">
			<p>&quot;Trading foreign currencies is a challenging and potentially profitable opportunity for educated and
				experienced investors. However, before deciding to participate in the Forex market, you should carefully
				consider your investment objectives, level of experience and risk appetite. Most importantly, do not
				invest money you cannot afford to lose. There is considerable exposure to risk in any off-exchange
				foreign exchange transaction, including, but not limited to, leverage, creditworthiness, limited
				regulatory protection and market volatility that may substantially affect the price, or liquidity of a
				currency or currency pair.</p>

			<p>More over, the leveraged nature of forex trading means that any market movement will have an equally
				proportional effect on your deposited funds. This may work against you as well as for you. The
				possibility exists that you could sustain a total loss of initial margin funds and be required to
				deposit additional funds to maintain your position. If you fail to meet any margin requirement, your
				position may be liquidated and you will be responsible for any resulting losses. To manage exposure,
				employ risk-reducing strategies such as 'stop-loss' or 'limit' orders.&quot;</p>

			<p><br/>
			</p>
		</div>
	</div>
</div>
</div>
</body>
</html>