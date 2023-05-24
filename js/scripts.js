$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};
    
    
    
    
    //form
    $('.field-button-clear').on('click', function() {
        $(this).parent().find('.form-input').val('');
        $(this).parent().removeClass('inp-value');
        return false;
    })
    $('.frm-field-input .form-input').on('keyup', function() {
        if ($(this).val() =='') {
            $(this).parent().removeClass('inp-value');
        } else {
            $(this).parent().addClass('inp-value');
        }
    })
    $('.frm-main-search .button-clear').on('click', function() {
        $(this).parent().find('.form-input').removeClass('inp-value');
        $('body').removeClass('search-show');
    })
    $('.frm-main-search .form-input').on('keyup', function() {
        if ($(this).val() =='') {
            $(this).removeClass('inp-value');
            $('body').removeClass('search-show');
        } else {
            $(this).addClass('inp-value');
            $('body').addClass('search-show');
        }
    })


    //frm counter   
    $('.js-counter .js-button-counter-minus').on('click', function () {
        var cnt = $(this).parents('.js-counter').find('.js-input-counter').val();
        cnt = parseInt(cnt);
        if (cnt > 0) {
            $(this).parents('.js-counter').find('.js-input-counter').val(cnt - 1);
        }
        return false;
    })
    $('.js-counter .js-button-counter-plus').on('click', function () {
        var cnt = $(this).parents('.js-counter').find('.js-input-counter').val();
        $(this).parents('.js-counter').find('.js-input-counter').val(cnt - 1 + 2);
        return false;
    })


    //btn tgl
    $('.js-btn-tgl:not(.tgl-one)').on('click', function () {
        $(this).toggleClass('active');
        return false;
    })
    $('.js-btn-tgl.tgl-one').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).parents('.tgl-wrap').find('.js-btn-tgl.active').removeClass('active');
            $(this).addClass('active');
        }
        return false;
    })

    //swipebox
    if (!!$('[data-swipebox]').offset()) {
        $('[data-swipebox]').swipebox();
    }


    //popups
    let popupCurrent;
    $('.js-popup-open').on('click', function () {
        $('.popup-outer-box').removeClass('active');
        $('body').addClass('popup-open');
        popupCurrent = $(this).attr('data-popup');
        $('.popup-outer-box[id="' + popupCurrent + '"]').addClass('active');
        return false;
    })
    $('.js-popup-close').on('click', function () {
        $('body').removeClass('popup-open');
        $('.popup-outer-box').removeClass('active');
        return false;
    })


    //popup block
    $('.js-popup-wrap .js-btn-toggle').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('menu-show');
            $('.js-popup-wrap').removeClass('popup-right');
        } else {
            $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
            $(this).addClass('active');
            if ($(this).parent().hasClass('main-menu-wrap')) {
                $('body').addClass('menu-show');
            }
            pLeft = $(this).parent('.js-popup-wrap').find('.js-popup-block').offset().left;
            pWidth = $(this).parent('.js-popup-wrap').find('.js-popup-block').outerWidth();
            pMax = pLeft + pWidth;
            if ( pMax > $('.wrap').width() ) {
                $(this).parent('.js-popup-wrap').addClass('popup-right');
            } else {
                $('.js-popup-wrap').removeClass('popup-right');
            }
        }
        return false;
    })
    $('.js-popup-wrap .js-btn-close').on('click', function() {
        $(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
        $('.js-popup-wrap').removeClass('popup-right');
        $('body').removeClass('menu-show');
        return false;
    })
    $(document).click(function(event) {
        if ($(event.target).closest(".js-popup-block").length) return;
        $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
        $('.js-popup-wrap').removeClass('popup-right');
        $('body').removeClass('menu-show');
        event.stopPropagation();
    });
    $('.js-popup-wrap').each(function() {
        if ($(this).hasClass('js-popup-select')) {
            if ($(this).find('.js-popup-block').find('.active').length>0) {
                $(this).find('.js-btn-toggle').addClass('selected');
                var currentSelect = $(this).find('.js-popup-block').find('.active').html();
                $(this).find('.js-btn-toggle').html(currentSelect);
            } else {
                $(this).find('.js-btn-toggle').removeClass('selected');
            }
        }
    })
    $('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
        if ($(this).hasClass('active')) {} else {
            $(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tab-block').removeClass('active');
            $('.js-tabs-nav').each(function() {
                $('.js-tab-block[data-tab*="'+$(this).find('.js-popup-block').find('.active').attr('data-tab')+'"]').addClass('active');
            })
        }
        $('.js-popup-wrap').each(function() {
            if ($(this).hasClass('js-popup-select')) {
                if ($(this).find('.js-popup-block').find('.active').length>0) {
                    $(this).find('.js-btn-toggle').addClass('selected');
                    var currentSelect = $(this).find('.js-popup-block').find('.active').html();
                    $(this).find('.js-btn-toggle').html(currentSelect);
                } else {
                    $(this).find('.js-btn-toggle').removeClass('selected');
                }
            }
        })
        $(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
        return false;
    })

    //tabs
    $('.js-tabs-nav').each(function() {
        $('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
    })
    $('.js-tabs-nav').on('click', 'a[data-tab]', function() {
        if ($(this).hasClass('active')) {} else {
            $('.js-tab-block').removeClass('active');
            $(this).parents('.js-tabs-nav').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tabs-nav').each(function() {
                $('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
            })
        }
        return false;
    })
    
    
    //filter box
    $(".inp-number").keypress(function(event){
        event = event || window.event;
        if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
            return false;
    });
    $('.filter-box .button-filter-more').on('click', function() {
        $(this).parents('.filter-section-wrap').toggleClass('filter-section-all');
        return false;
    })
    $('.button-filter-toggle').on('click', function() {
        $('body').toggleClass('filter-show');
        return false;
    })


    //mobile menu
    $('.footer .menu-wrap li ul').each(function () {
        $(this).parent().addClass('submenu');
    })
    $('.footer .menu-wrap li a').on('click', function () {
        if ($(this).next('ul').length > 0) {
            if ($(window).innerWidth() < 768) {
                if ($(this).parent().hasClass('menu-open')) {
                    $(this).parent().removeClass('menu-open').children('ul').slideUp(200);
                } else {
                    $('.footer .menu-wrap li.open').removeClass('menu-open').children('ul').slideUp(200);
                    $(this).parent().addClass('menu-open').children('ul').slideDown(200);
                }
                return false;
            }
        }
    })


    //main-slider-box
    if (!!$('.main-slider-box').offset()) {
        $('.main-slider-box .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 5000,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
    }
	
});




$(window).on('load', function () {

    //gallery slider
    if (!!$('.photos-slider-box').offset()) {
        let pSlider = $('.photos-slider-box .slider-wrap .slider').slick({
            dots: false,
            slidesToShow: 1,
            infinite: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
            ],
        });
        let pSliderPreview = $('.photos-slider-box .slider-preview-wrap .slider').slick({
            dots: false,
            slidesToShow: 5,
            vertical: true,
            infinite: false,
            prevArrow: false,
            nextArrow: false,
            rows: 1,
            swipeToSlide: true,
            touchMove: false,
            swipe: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        vertical: false,
                        slidesToShow: 4,
                        prevArrow: false,
                        nextArrow: false,
                        touchMove: true,
                        swipe: true,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        vertical: false,
                        slidesToShow: 4,
                        prevArrow: false,
                        nextArrow: false,
                        touchMove: true,
                        swipe: true,
                    }
                },
            ]
        });
        //pSlider.slick('refresh');
        //pSliderPreview.slick('refresh');
        $('.photos-slider-box .slider-wrap .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.photos-slider-box .slider-preview-wrap .sl-wrap.active').removeClass('active');
            $('.photos-slider-box .slider-preview-wrap .sl-wrap[data-slide="' + currentSlide + '"]').addClass('active');
        });
        $('.photos-slider-box .slider-preview-wrap .slider .elm-photo').click(function () {
            let newSlide = $(this).parent().attr('data-slide');
            /*$('.photos-slider-box .slider-preview-wrap .sl-wrap.active').removeClass('active');
            $(this).parent().addClass('active');*/
            $('.photos-slider-box .slider-wrap .slider').slick('slickGoTo', newSlide);
            return false;
        })
        $('.photos-slider-box .sl-wrap[data-slide="0"]').addClass('active');
    }



});