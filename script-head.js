document.documentElement.className = 'js';

let jqueryParams=[],jQuery=function(r){return jqueryParams=[...jqueryParams,r],jQuery},$=function(r){return jqueryParams=[...jqueryParams,r],$};window.jQuery=jQuery,window.$=jQuery;let customHeadScripts=!1;jQuery.fn=jQuery.prototype={},$.fn=jQuery.prototype={},jQuery.noConflict=function(r){if(window.jQuery)return jQuery=window.jQuery,$=window.jQuery,customHeadScripts=!0,jQuery.noConflict},jQuery.ready=function(r){jqueryParams=[...jqueryParams,r]},$.ready=function(r){jqueryParams=[...jqueryParams,r]},jQuery.load=function(r){jqueryParams=[...jqueryParams,r]},$.load=function(r){jqueryParams=[...jqueryParams,r]},jQuery.fn.ready=function(r){jqueryParams=[...jqueryParams,r]},$.fn.ready=function(r){jqueryParams=[...jqueryParams,r]};

/* <![CDATA[ */
jqueryParams.length&&$.each(jqueryParams,function(e,r){if("function"==typeof r){var n=String(r);n.replace("$","jQuery");var a=new Function("return "+n)();$(document).ready(a)}});
//# sourceURL=jquery-js-after
/* ]]> */

/* <![CDATA[ */
var dipi_preloader_vars = {"preloader_reveal_duration":"300","preloader_reveal_delay":"300"};
//# sourceURL=dipi_preloader_js-js-extra
/* ]]> */

jQuery(document).ready(function($) {

    var currentLogoMode = '';


    let $mainHeader = $('header#main-header');
    let $tbHeader = $('header.et-l--header');
        function dipi_update_logo($logo, $is_tb_logo) {
        // Clone $logo so we can replace it rather than just change src attr (because this causes a bug in Safari browser) 
        let $mainLogo = $logo.clone();
        let $tbLogoContainer = $logo.closest(".et_pb_menu__logo")
        let $tbLogoContainer_a = $logo.closest(".et_pb_menu__logo a")
        let $tbLogoWrapper = $tbLogoContainer_a.length ? $tbLogoContainer_a : $tbLogoContainer
        if($mainLogo.length) {
            $mainLogo.attr("data-logo-type", "main");
            $mainLogo.attr("data-actual-width", $mainLogo[0].naturalWidth);
            $mainLogo.attr("data-actual-height", $mainLogo[0].naturalHeight);
        }
        // Clone $logo to use in fixed header. If fixed header logo is not enabled, we simple use the original logo
                    let $fixedLogo = $logo.clone();
                if($fixedLogo.length) {
            $fixedLogo.attr("data-actual-width", $fixedLogo[0].naturalWidth);
            $fixedLogo.attr("data-actual-height", $fixedLogo[0].naturalHeight);
        }
        
        // Clone $logo to use in mobile. If mobile logo is not enabled, we simple use the original logo
        let $use_mobile_logo = false;
                let $mobileLogo = $logo.clone();
                
        if($use_mobile_logo && ($(window).width() <= 1045)){
            setTimeout( function(){
                $mobileLogo.show();
            }, 500)
        } else {
            setTimeout( function(){
                $fixedLogo.show();
                $mainLogo.show();
            }, 500)
        }

        $fixedLogo.removeAttr("srcset")
        $mobileLogo.removeAttr("srcset")
        function callback(mutationList, observer) {
            mutationList.forEach(function(mutation){
                if('attributes' != mutation.type || 'class' !== mutation.attributeName){
                    return;
                }
                if($is_tb_logo) {
                    dipi_tb_header_change();
                } else {
                    dipi_default_logo_change();
                }
            });
        }

        var targetNode = document.querySelector("#main-header,header.et-l--header > .et_builder_inner_content");
        var observerOptions = {
            childList: false,
            attributes: true,
            subtree: false
        }

        if(targetNode){
            var observer = new MutationObserver(callback);
            observer.observe(targetNode, observerOptions);
        }

        
        if($is_tb_logo) {
            // Observe resize events to switch between mobile/fixed logos
            $(window).resize(dipi_tb_header_change);
            // finally call the callback manually once to get started
            dipi_tb_header_change(true);
        } else {
            // Observe resize events to switch between mobile/fixed logos
            $(window).resize(dipi_default_logo_change);
            // finally call the callback manually once to get started
            dipi_default_logo_change(true);
        }

        
        function dipi_tb_header_change(first_loading = false) {
            if($mainLogo.length)
                $mainLogo.attr("data-actual-width", $mainLogo[0].naturalWidth);
            
            
            if($use_mobile_logo && $(window).width() <= 1045 && currentLogoMode != 'mobile'){
                currentLogoMode = 'mobile';
                $tbLogoWrapper.find("img").remove();
                $tbLogoWrapper.append($mobileLogo);
            } else if ($(window).width() > 1045) {
                if ($tbHeader.find('.has_et_pb_sticky').length !== 0  && currentLogoMode != 'desktop-fixed'){
                    currentLogoMode = 'desktop-fixed';
                    $tbLogoWrapper.find("img").remove();
                    $tbLogoWrapper.append($fixedLogo);
                                    } else if($tbHeader.find('.has_et_pb_sticky').length == 0 && currentLogoMode != 'desktop-normal' ){
                    currentLogoMode = 'desktop-normal';
                    $tbLogoWrapper.find("img").remove();
                    $tbLogoWrapper.append($mainLogo);
                                    }
            }
        }

        // Callback to fire when window is resized or scrolled
        function dipi_default_logo_change(first_loading = false) {
            if($mainLogo.length){
                $mainLogo.attr("data-actual-width", $mainLogo[0].naturalWidth);
            }

            if($use_mobile_logo && $(window).width() <= 1045 && currentLogoMode != 'mobile'){
                currentLogoMode = 'mobile';
                let $a = $(".logo_container a");
                $a.find("#logo").remove();    
                $a.append($mobileLogo);
            } else if($(window).width() > 1045) {                
                if ($mainHeader.hasClass('et-fixed-header') && currentLogoMode != 'desktop-fixed'){
                    currentLogoMode = 'desktop-fixed';
                    let $a = $(".logo_container a");
                    $a.find("#logo").remove();    
                    $a.append($fixedLogo);
                                    } else if(!$mainHeader.hasClass('et-fixed-header') && currentLogoMode != 'desktop-normal') {
                    currentLogoMode = 'desktop-normal';
                    let $a = $(".logo_container a");
                    $a.find("#logo").remove(); 
                    $a.append($mainLogo);
                                    }
            }
        }
    }

});

jQuery(document).ready(function() {
		jQuery(document).on('hover', '.dipi-related-article-column', function (e) {
			if(e.type == 'mouseenter') {
				if (jQuery(this).find(".dipi-related-article-thumb").hasClass("dipi-zoom-in") ) {
					jQuery(this).find(".dipi-related-article-thumb").addClass("dipi-zoom-in-hover");
				}
				if (jQuery(this).find(".dipi-related-article-thumb").hasClass("dipi-zoom-out") ) {
					jQuery(this).find(".dipi-related-article-thumb").addClass("dipi-zoom-out-hover");
				}
				if ( jQuery(this).find(".dipi-related-article-thumb").hasClass("dipi-zoom-rotate") ) {
					jQuery(this).find(".dipi-related-article-thumb").addClass("dipi-zoom-rotate-hover");
				}
				jQuery(this).find(".dipi-related-article-title").addClass("dipi-related-article-title-hover");
				jQuery(this).find(".dipi-image-overlay").addClass("dipi-image-overlay-hover");
				jQuery(this).find(".dipi-related-article-arrow").addClass("dipi-related-article-arrow-hover");
			} else if (e.type == 'mouseleave') {
				if ( jQuery(this).find(".dipi-related-article-thumb").hasClass("dipi-zoom-in") ) {
					jQuery(this).find(".dipi-related-article-thumb").removeClass("dipi-zoom-in-hover");
				}
				if ( jQuery(this).find(".dipi-related-article-thumb").hasClass("dipi-zoom-out") ) {
					jQuery(this).find(".dipi-related-article-thumb").removeClass("dipi-zoom-out-hover");
				}
				if ( jQuery(this).find(".dipi-related-article-thumb").hasClass("dipi-zoom-rotate") ) {
					jQuery(this).find(".dipi-related-article-thumb").removeClass("dipi-zoom-rotate-hover");
				}
				jQuery(this).find(".dipi-related-article-title").removeClass("dipi-related-article-title-hover");
				jQuery(this).find(".dipi-image-overlay").removeClass("dipi-image-overlay-hover");
				jQuery(this).find(".dipi-related-article-arrow").removeClass("dipi-related-article-arrow-hover");
			}
	    });
	});

jQuery(document).ready(function ($) {
		window.dipi_apply_hide_top_bar_timer = null;
		window.dipi_apply_hide_top_bar = function () {
			var $mainContent = $('#page-container'),
				$mainHeader = $('#main-header');
			if($mainHeader.length === 0 && $('.et-l--header').length > 0 )
				$mainHeader = $('.et-l--header');
			
			var $topHeader = $('#top-header'),
				$adminBar = $('#wpadminbar'),
				adminBarHeight = $('#wpadminbar').height(),
			 	mainHeaderHiehgt = $mainHeader.height(),
				topBarHeight = 0;
			

			if($topHeader.length > 0)
				topBarHeight = $('#top-header').height();

			var didScroll = false;
			var lastScrollTop = 0;
			var delta = 5;
			if(!$('body').hasClass('admin-bar'))
				adminBarHeight = 0;

				$mainHeader.css('top', adminBarHeight + topBarHeight );
			$topHeader.css('top', adminBarHeight );

			if($mainHeader.css('position') === 'relative'){
				$mainHeader.css('top', 0 );
			}
			
			if(window.innerWidth > 1045){
					
					
					$(window).scroll(function(event){
						didScroll = true;
					});
					clearInterval(window.dipi_apply_hide_top_bar_timer);
					window.dipi_apply_hide_top_bar_timer = setInterval(function() {
						if (didScroll) {
							hideTopBarOnScroll();
							didScroll = false;
						}
					}, 200);
					
				
				return;
			}
							function dipi_check_fixed_mobile_header() {
					clearInterval(window.dipi_apply_hide_top_bar_timer);
					if(window.innerWidth <= 1045){
						var container_padding = topBarHeight + mainHeaderHiehgt;
						 
						$mainContent.css('cssText', 'padding-top: ' + container_padding +'px !important;')
						
						$(window).scroll(function(event){
							if (window.pageYOffset > 0) {
								$('body').addClass('dipi-fixed-header');
								didScroll = true;
							} else {
								$('body').removeClass('dipi-fixed-header');
							}
						});
						window.dipi_apply_hide_top_bar_timer = setInterval(function() {
							if (didScroll) {
								hasScrolled();
								didScroll = false;
							}
						}, 200);
					} else {
						$mainContent.css("padding-top", "");
						$('body').removeClass('dipi-fixed-header');
					}
				}
				var dipi_check_fixed_mobile_rtime;
				var dipi_check_fixed_mobile_timeout = false;
				var dipi_check_fixed_mobile_delta = 200;
				$(window).resize(function() {
					dipi_check_fixed_mobile_rtime = new Date();
					if (dipi_check_fixed_mobile_timeout === false) {
						dipi_check_fixed_mobile_timeout = true;
						setTimeout(dipi_check_fixed_mobile_resizeend, delta);
					}
				});
				
				function dipi_check_fixed_mobile_resizeend() {
					if (new Date() - dipi_check_fixed_mobile_rtime < dipi_check_fixed_mobile_delta) {
						setTimeout(dipi_check_fixed_mobile_resizeend, dipi_check_fixed_mobile_delta);
					} else {
						dipi_check_fixed_mobile_timeout = false;
						dipi_check_fixed_mobile_header();
					}               
				}
				dipi_check_fixed_mobile_header()
			
			function hideTopBarOnScroll(){
				var scrollTop = $(this).scrollTop();
				var adminBarHeight = $('#wpadminbar').height();
				var topBarHeight = 0;
				if($topHeader.length > 0)
					topBarHeight = $('#top-header').height();
				if(Math.abs(lastScrollTop - scrollTop) <= delta){
					return;
				}
				if (scrollTop > lastScrollTop && scrollTop > topBarHeight) { // scroll down
					$('#top-header').css('transform', 'translateY(-' + topBarHeight + 'px)');
					$('#main-header').css('transform', 'translateY(-' + topBarHeight + 'px)');
				} else if(scrollTop + $(window).height() < $(document).height()) {
					$('#top-header').css('transform', 'translateY(0px)');
					$('#main-header').css('transform', 'translateY(0px)');
				}
				lastScrollTop = scrollTop;
			}
			function hasScrolled() {
				var adminBarHeight = $('#wpadminbar').height();
				var topBarHeight = 0;
				if($topHeader.length > 0)
					topBarHeight = $('#top-header').height();
				
					if(!$('body').hasClass('admin-bar'))
						adminBarHeight = 0;
				var scrollTop = $(this).scrollTop();
				
				if(Math.abs(lastScrollTop - scrollTop) <= delta){
					return;
				}
				if (scrollTop > lastScrollTop && scrollTop > topBarHeight) { // scroll down
					if(window.innerWidth > 600)
						adminBarHeight = 0;
											$('#top-header').css('transform', 'translateY(-' + (topBarHeight + adminBarHeight) + 'px)');
						$('#main-header').css('transform', 'translateY(-' + (topBarHeight + adminBarHeight) + 'px)');
									} else if(scrollTop + $(window).height() < $(document).height()) {
					$('#top-header').css('transform', 'translateY(0px)');
					$('#main-header').css('transform', 'translateY(0px)');
				}

				lastScrollTop = scrollTop;
			}
		}
		window.dipi_apply_hide_top_bar();
		$(window).on('resize', function(){
			window.dipi_apply_hide_top_bar();
		})
	});

jQuery(document).ready(function($) {
		const $meta_selector = `body.archive #main-content article.et_pb_post .post-meta, body.blog #main-content article.et_pb_post .post-meta,
			body.single article.et_pb_post .post-meta,
			body.dipi-custom-archive-page .et_pb_module.et_pb_posts.dipi-styled-blog .et_pb_ajax_pagination_container article.et_pb_post .post-meta,
			body.dipi-custom-archive-page .et_pb_module.et_pb_blog_grid_wrapper.dipi-styled-blog .et_pb_ajax_pagination_container article.et_pb_post .post-meta`
		const $category_wrap_selector = `
			body.archive #main-content article.et_pb_post .post-meta .dipi-categories-wrap, body.blog #main-content article.et_pb_post .post-meta .dipi-categories-wrap,
			body.single article.et_pb_post .post-meta .dipi-categories-wrap,
			body.dipi-custom-archive-page .et_pb_module.et_pb_posts.dipi-styled-blog .et_pb_ajax_pagination_container article.et_pb_post .post-meta .dipi-categories-wrap,
			body.dipi-custom-archive-page .et_pb_module.et_pb_blog_grid_wrapper.dipi-styled-blog .et_pb_ajax_pagination_container article.et_pb_post .post-meta .dipi-categories-wrap
			`

		function applyMetaStyle(){
			$($meta_selector).html(function() {
				return $(this).html().replace(/\|/g, '').replace('by', '').replace('...', '').replace(/,/g, '');
			});

			$($meta_selector).each(function() {
				$("a", this).not(".author a, .comments-number a, .published a").wrapAll( "<span class='dipi-categories-wrap'></span>");
			});

			$($category_wrap_selector).each(function() {
				$("a", this).wrapAll( "<span class='dipi-categories'></span>");
			});

			$($meta_selector).addClass('dipi-post-meta-icon');
			document.querySelectorAll('.dipi-post-meta-icon').forEach(function(meta){
				var metaNodes = meta.childNodes;
				if(typeof metaNodes.length !== 'undefined' && metaNodes.length > 0){
					if(metaNodes[metaNodes.length -1].nodeType  === 3 && metaNodes[metaNodes.length -1].textContent.indexOf('Comment') > -1) {
						let node = metaNodes[metaNodes.length -1]
						const span = document.createElement('span');
						span.className = "comments-number";
						node.after(span);
						span.appendChild(node);
					}
				}
			})
		}
		applyMetaStyle();
		// fix icons after ajax calls
		let observer = new MutationObserver(applyMetaStyle);
		document.querySelectorAll('.et_pb_posts').forEach(function(node){
			observer.observe(node, {
				childList: true
			});
		})
	});

jQuery(document).ready(function($) {
	const et_pb_post_selector = `body.archive #main-content article.et_pb_post,
		body.blog #main-content article.et_pb_post`

	$(et_pb_post_selector).each(function() {
		
		var dipi_permalink = $(this).find('.entry-title').find('a').attr('href');
		$(this).find(".more-link").remove()

				
			var dipi_readmore_button_only_text = '<div class="dipi-read-more-wrap dipi-button-none"><a href="'+dipi_permalink+'" class="dipi-read-more-button dipi-button-zoomin ">View Full Post</a></div>';
		
			$(dipi_readmore_button_only_text).appendTo($(this));
		
				
	});

	const et_pb_module_posts_selector = `
		.et_pb_module.et_pb_posts .et_pb_ajax_pagination_container article.et_pb_post,
		.et_pb_module.et_pb_blog_grid_wrapper .et_pb_ajax_pagination_container article.et_pb_post`
	
	function blogModuleButtonStyle(){
		$(et_pb_module_posts_selector).each(function() {
			
			var dipi_permalink = $(this).find('.entry-title').find('a').attr('href');
			let read_more_button = $(this).find(".more-link")

			if (read_more_button.length > 0) {
				read_more_button.remove()

								
					var dipi_readmore_button_only_text = '<div class="dipi-read-more-wrap dipi-button-none"><a href="'+dipi_permalink+'" class="dipi-read-more-button dipi-button-zoomin ">View Full Post</a></div>';
				
					$(dipi_readmore_button_only_text).appendTo($(this));
				
							}
		});
	}
	
	blogModuleButtonStyle();
	let observer = new MutationObserver(blogModuleButtonStyle);
	document.querySelectorAll('.et_pb_posts').forEach(function(node){
		observer.observe(node, {
			childList: true
		});
	})
});

jQuery(document).ready(function($) {

	const et_pb_post_selector = `body.archive #main-content article.et_pb_post,
		body.blog #main-content article.et_pb_post,
		body.dipi-custom-archive-page.search #main-content article.et_pb_post,
		body.dipi-custom-archive-page #main-content .et_pb_module.et_pb_posts.dipi-styled-blog .et_pb_ajax_pagination_container article.et_pb_post,
		body.dipi-custom-archive-page #main-content .et_pb_module.et_pb_blog_grid_wrapper.dipi-styled-blog .et_pb_ajax_pagination_container article.et_pb_post`
		const et_pb_post_image_selector = `body.archive #main-content .et_pb_post .entry-featured-image-url,
			body.blog #main-content .et_pb_post .entry-featured-image-url,
			body.dipi-custom-archive-page.search #main-content .et_pb_post .entry-featured-image-url,
			body.dipi-custom-archive-page #main-content .et_pb_module.et_pb_posts.dipi-styled-blog .et_pb_ajax_pagination_container article.et_pb_post .entry-featured-image-url,
			body.dipi-custom-archive-page #main-content .et_pb_module.et_pb_blog_grid_wrapper.dipi-styled-blog .et_pb_ajax_pagination_container article.et_pb_post .entry-featured-image-url`

	const ajax_container_selector = '.dipi-styled-blog'
	
	let observer = new MutationObserver(function(mutationRecords)   {
		if(document.querySelector(ajax_container_selector) === null) return;
		loadStyle().then(function(){
			observer.observe(document.querySelector(ajax_container_selector), {
				childList: true,
				subtree: true
			});
		});
	});
	loadStyle().then(function(){
		if(document.querySelector(ajax_container_selector) === null) return;
		observer.observe(document.querySelector(ajax_container_selector), {
			childList: true,
			 subtree: true
		});
	});
	async function loadStyle(){
		observer.disconnect()
		$('body.dipi-custom-archive-page #main-content .et_pb_module.et_pb_blog_grid_wrapper.dipi-styled-blog .et_pb_ajax_pagination_container article.et_pb_post .et_pb_image_container .entry-featured-image-url').unwrap()
		$('body.dipi-custom-archive-page #main-content .et_pb_module.et_pb_blog_grid_wrapper.dipi-styled-blog .et_pb_ajax_pagination_container article.et_pb_post').unwrap().unwrap()
		$(et_pb_post_selector).contents().filter(function() {
			return this.nodeType == 3 && $.trim(this.nodeValue).length;
		}).wrap('<p class="dipi-post-content">');

		$(et_pb_post_selector).each(function() {
			if ($('.dipi-post-wrap', this).length < 1) {
				$('>:not(.entry-featured-image-url)', this).wrapAll('<div class="dipi-post-wrap"></div>');
			}
		});

		$(et_pb_post_image_selector).each(function() {
				$(this).wrapAll('<div class="entry-featured-image-wrap"></div>');
		});

				$(et_pb_post_selector).addClass('dipi-post-zoomin');
		
				$(et_pb_post_selector).addClass('dipi-image-overlay-active');
		$(et_pb_post_image_selector).append('<div class="dipi-image-overlay"><span class="et-pb-icon dipi-overlay-icon dipi-image-overlay-icon-onhover"></span></div>');
			}	
});

document.addEventListener("DOMContentLoaded", function() {
		document.body.classList.add('dipi-dropdown-arrow');
	});

jQuery(document).ready(function($) {

  // Mobile device check
  $is_mobile_device = null !== navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/);

  if ($is_mobile_device) {

    // Function to check if an element is in the Viewport
    isInViewport = function(elem) {
        elementTop = elem.offset().top, elementBottom = elementTop + elem.outerHeight(), viewportTop = $(window).scrollTop(), viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    // Apply Parallax transform calculations when scrolling
    $(window).scroll(function() {
        $(".et_parallax_bg").each(function() {
           var $this_parent = $(this).parent();
           // Check if the parent element is on-screen
           var $is_visible = isInViewport($this_parent);
           if ($is_visible) {
             element_top = $this_parent.offset().top,
             parallaxHeight = $(this).parent(".et_pb_fullscreen").length && $(window).height() > $this_parent.innerHeight() ? $(window).height() : $this_parent.innerHeight(),
             bg_height = .3 * $(window).height() + parallaxHeight,
             main_position = "translate(0, " + .3 * ($(window).scrollTop() + $(window).height() - element_top) + "px)";
             $(this).css({height: bg_height,"-webkit-transform": main_position,"-moz-transform": main_position,"-ms-transform": main_position,transform: main_position});
           }
        });
    });

  }
});

