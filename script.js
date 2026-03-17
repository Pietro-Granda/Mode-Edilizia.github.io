var ajaxurl = "https://edil-milano.it/wp-admin/admin-ajax.php";

(function() {
				var file     = ["https:\/\/edil-milano.it\/wp-content\/et-cache\/6\/et-divi-dynamic-tb-1977-6-late.css"];
				var handle   = document.getElementById('divi-style-inline-inline-css') || document.querySelector('link[href="style.css"]');
				var location = handle ? handle.parentNode : document.head;

				if (0===document.querySelectorAll('link[href="' + file + '"]').length) {
					var link  = document.createElement('link');
					link.rel  = 'stylesheet';
					link.id   = 'et-dynamic-late-css';
					link.href = file;

					if (handle && handle.nextSibling) {
						location.insertBefore(link, handle.nextSibling);
					} else {
						location.appendChild(link);
					}
				}
			})();

var et_animation_data = [{"class":"dipi_dual_heading_0","style":"zoom","repeat":"once","duration":"1000ms","delay":"0ms","intensity":"50%","starting_opacity":"0%","speed_curve":"ease-in-out"}];
					var et_link_options_data = [{"class":"et_pb_blurb_2","url":"https:\/\/edil-milano.it\/ristrutturazioni-residenziali-milano-e-provincia\/","target":"_self"},{"class":"et_pb_blurb_3","url":"https:\/\/edil-milano.it\/ristrutturazioni-per-esterni-abitativi-a-milano-e-provincia\/","target":"_self"},{"class":"et_pb_blurb_4","url":"https:\/\/edil-milano.it\/ristrutturazioni-locali-commerciali-a-milano-e-provincia\/","target":"_self"},{"class":"et_pb_blurb_5","url":"https:\/\/edil-milano.it\/ristrutturazione-edifici-aziendali-e-industriali-a-milano-e-provincia\/","target":"_self"},{"class":"et_pb_blurb_20","url":"https:\/\/edil-milano.it\/costruttori-civili-residenziali-a-milano-e-provincia\/","target":"_self"},{"class":"et_pb_blurb_21","url":"https:\/\/edil-milano.it\/costruzioni-industriali-a-milano-e-provincia\/","target":"_self"},{"class":"et_pb_blurb_0_tb_footer","url":"tel:3446653780","target":"_blank"}];

/* <![CDATA[ */
var cnArgs = {"ajaxUrl":"https:\/\/edil-milano.it\/wp-admin\/admin-ajax.php","nonce":"fa4627d234","hideEffect":"fade","position":"bottom","onScroll":false,"onScrollOffset":100,"onClick":false,"cookieName":"cookie_notice_accepted","cookieTime":2592000,"cookieTimeRejected":2592000,"globalCookie":false,"redirection":false,"cache":false,"revokeCookies":false,"revokeCookiesOpt":"automatic"};

//# sourceURL=cookie-notice-front-js-before
/* ]]> */

/* <![CDATA[ */
var dipi_CollapseSubmenu_data = {"collapse_submenu_prevent_parent_opening":""};
//# sourceURL=DIPI_CollapseSubmenu-js-extra
/* ]]> */

/* <![CDATA[ */
var dipi_data = {"slide_menu_class":"dipi-menu-animation-slide-right","background_animation_class":"dipi-menu-background-animation-slide-right"};
//# sourceURL=DIPI_MobileMenuFullscreen-js-extra
/* ]]> */

/* <![CDATA[ */
var dipi_scroll_top_vars = {"use_btt_custom_link":"","btt_link":"tel:+1 123 456 7890","btt_custom_text":"Call Now!","btt_button_style":"display_icon","btt_text_placement":"vertically","btt_hover_anim":"zoomup"};
//# sourceURL=dipi_scroll_top_js-js-extra
/* ]]> */

/* <![CDATA[ */
var DIVI = {"item_count":"%d Item","items_count":"%d Items"};
var et_builder_utils_params = {"condition":{"diviTheme":true,"extraTheme":false},"scrollLocations":["app","top"],"builderScrollLocations":{"desktop":"app","tablet":"app","phone":"app"},"onloadScrollLocation":"app","builderType":"fe"};
var et_frontend_scripts = {"builderCssContainerPrefix":"#et-boc","builderCssLayoutPrefix":"#et-boc .et-l"};
var et_pb_custom = {"ajaxurl":"https://edil-milano.it/wp-admin/admin-ajax.php","images_uri":"https://edil-milano.it/wp-content/themes/Divi/images","builder_images_uri":"https://edil-milano.it/wp-content/themes/Divi/includes/builder/images","et_frontend_nonce":"9032480c78","subscription_failed":"Si prega di verificare i campi di seguito per assicurarsi di aver inserito le informazioni corrette.","et_ab_log_nonce":"f53992a520","fill_message":"Compila i seguenti campi:","contact_error_message":"Per favore, correggi i seguenti errori:","invalid":"E-mail non valido","captcha":"Captcha","prev":"Indietro","previous":"Precedente","next":"Accanto","wrong_captcha":"Hai inserito un numero errato nei captcha.","wrong_checkbox":"Casella di controllo","ignore_waypoints":"no","is_divi_theme_used":"1","widget_search_selector":".widget_search","ab_tests":[],"is_ab_testing_active":"","page_id":"6","unique_test_id":"","ab_bounce_rate":"5","is_cache_plugin_active":"no","is_shortcode_tracking":"","tinymce_uri":"https://edil-milano.it/wp-content/themes/Divi/includes/builder/frontend-builder/assets/vendors","accent_color":"#2ea3f2","waypoints_options":[]};
var et_pb_box_shadow_elements = [];
//# sourceURL=divi-custom-script-js-extra
/* ]]> */

jQuery(document).ready(function($){
        $("#top-menu-nav #top-menu li a").not(".dipi-cta-button").wrapInner("<span></span>");
        $(".et_pb_menu__menu > nav > ul > li > a").not(".dipi-cta-button").wrapInner("<span></span>");
    });

