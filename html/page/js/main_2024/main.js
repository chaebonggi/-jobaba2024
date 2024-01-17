// header all menu
function allMenu() {
    if(window.innerWidth < 860) {
        $('.h_mobile').toggleClass('show');
    } else {
        $('.h_gnb_bg').stop().slideToggle(300);
        $('.h_menu').toggleClass('active');
    }
}
$(document).mouseup(function(e){
    var navMenu = $(".h_gnb_bg");
    var navBg = $('.h_ui');
    var navBtn = $('.h_menu');
    if(navMenu.has(e.target).length === 0 && navBg.has(e.target).length === 0){
        navMenu.stop().slideUp(300);
        navBtn.removeClass('active');
    }
});
$('.h_mobile_close').click(function(){
    $('.h_mobile').removeClass('show');
    $('.h_menu').removeClass('active');
});

// footer menu
$('.footer_btn').click(function () {
$(this).toggleClass('active');
    var footerWrap = $('.footer_wrap');

    footerWrap.slideToggle(300, function() {
        if (footerWrap.is(':visible')) {
            $('html, body').animate({scrollTop: $(document).height()}, 300);
        }
    });
});

// channel talk
(function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
    
ChannelIO('boot', {
   "pluginKey": "92271334-7ce9-457f-92a1-988a347ab637",
   "customLauncherSelector": ".channelTalk",
   "hideChannelButtonOnBoot": true
});


function handleTabClick($btn, $items, tabAttr) {
    $btn.click(function() {
    var tab = $(this).attr(tabAttr);
    $btn.removeClass('active');
    $(this).addClass('active');
    $items.removeClass('active');
    $items.filter('[data-tab="' + tab + '"]').addClass('active');
    });
}
handleTabClick($('.infoWrap .infoBtn li'), $('.infoWrap .infoTab'), 'data-tab');
handleTabClick($('.mainPolicy .policyBtn li'), $('.mainPolicy .policyCont'), 'data-tab');

// employ company slide
var companySwiper = new Swiper(".companySlide", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight : false,
    loop: false,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            autoHeight : true,
        },
        860: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 2,
            autoHeight : true,
        },
    },
});

//policy mainBanner
var bannerSwiper = new Swiper(".m_slider", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    preventClicks:true,
    observer: true,
    observeParents: true,
    loop:true,
    autoplay:{
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        init: function () {
            $('.m_slider .swiper-slide').addClass('changed');
        },
        slideChangeTransitionStart : function() {
            $('.m_slider .swiper-slide').addClass('changing');
            $('.m_slider .swiper-slide').removeClass('changed');
        },
        slideChangeTransitionEnd : function() {
            $('.m_slider .swiper-slide').removeClass('changing');
            $('.m_slider .swiper-slide').addClass('changed');
        }
    },
    breakpoints: {
        1300: {
            centeredSlides: false,
            slidesPerView: 'auto',
            spaceBetween: 0,
        },
        859: {
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 0,
        },
        640: {
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});

const RESIZE_DELAY = 300;
let resizeTimer = null;

function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 860) {
            const slides = document.querySelectorAll('#renewMain .mainBanner .swiper-slide');            
            slides.forEach((slide) => {
                slide.style.width = '330px';
            });
            // bannerSwiper.update();
            itemSwiper();
        } else {
            itemSwiper();
        }
    }, RESIZE_DELAY);
}

window.addEventListener('resize', handleResize);

// policy main menu btn
var menuSwiper = undefined;
function itemSwiper() {
    if (window.innerWidth  < 641 && menuSwiper == undefined) {
            menuSwiper = new Swiper(".itemSwiper", {
            slidesPerView: 'auto',
            spaceBetween: 16,
            simulateTouch: true,
        });
    } else if (window.innerWidth >= 641 && menuSwiper != undefined) {
        menuSwiper.destroy();
        menuSwiper = undefined;
    }
}
itemSwiper();

// policy main
var $slider = $('.policyCont');
$slider.find('.policySlide').each(function(i){
    var $this = $(this);
    $this.siblings().addClass("type" + i);
    var policySwiper = new Swiper($(this), {
        slidesPerView: 1.5,
        spaceBetween: 8,
        observer: true,
        observeParents: true,
        breakpoints: {
            1024: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            860: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,

            },
            460: {
                slidesPerView: 2.5,
                spaceBetween: 8,
            },
        },
    });
});

// policy tag 
$('.m_tagBtn').click(function () {
    $(this).parent().toggleClass('active');
});

// policy scroll
$('.scrollbar-outer').scrollbar();

// policy recomend swiper
var recomendSwiper = new Swiper('.recomendSlide', {
    slidesPerView: 1,
    spaceBetween : 10,

    pagination: {
        el: ".recomendInfo .swiper-pagination",
        clickable: true,
    },
    navigation: {
            nextEl: ".recomendInfo .swiper-button-next",
            prevEl: ".recomendInfo .swiper-button-prev",
    },
});

//policy category
$('#renewMain .contentsBox .categoryMenu li').click(function(){
    var ctab = $(this).attr('data-tab');
    $('.contentsBox .categoryMenu li').removeClass('active');
    $(this).addClass('active');
    $('.contentsBox .categoryCont').removeClass('active');
    $('.contentsBox .categoryCont[data-tab='+ctab+']').addClass('active');
});

$("#renewMain #tabMobile").on("change",function(){
var select_data = $(this).find('option:selected').data('tab');
    $('.contentsBox .categoryMenu li[data-tab='+select_data+']').addClass("active").siblings().removeClass('active');
    $('.contentsBox .categoryCont').removeClass('active');
    $('.contentsBox .categoryCont[data-tab='+select_data+']').addClass('active');
});
var $categorySlider = $('#renewMain .categoryCont');
$categorySlider.find('.thumbList').each(function(i){
    $(this).find(".swiper-pagination").addClass("type"+i);
    var thumbSwiper  = new Swiper($(this), {
        slidesPerView: 1,
        slidesPerColumn: 2,
        spaceBetween: 20,
        slidesPerColumnFill: "row", 
        observer: true,
        observeParents: true,
        pagination: {
            el: $categorySlider.find('.swiper-pagination.type'+i),
            type: 'bullets'
        },
        breakpoints: {
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            860: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        },
    }); 
});

// policy jobRecomend
function updSwiperNumericPagination() {
    this.el.querySelector(".swiper-counter").innerHTML = '<span class="count">0' + (this.realIndex + 1) + '</span><span class="total">/ 0' + this.el.slidesQuantity + "</span>";
}

$(".jobSlide").each(function () {
    this.slidesQuantity = this.querySelectorAll(".swiper-slide").length;

    var jobSwiper = new Swiper('.jobSlide', {
        slidesPerView: 1.2,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        observer: true,
        observeParents: true,
        on: {
            init: updSwiperNumericPagination,
            slideChange: updSwiperNumericPagination,
            init: function () {
                $('.jobSlide .swiper-slide').addClass('changed');
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3.8,
                centeredSlides: false,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1.5,
                centeredSlides: true,
                spaceBetween: 30,
            }
        },
    }); 
    $('.wrap-autoplay-control > .swiper-button-pause').click(function () {
        $(this).hide();
        jobSwiper.autoplay.stop();
        $('.wrap-autoplay-control > .swiper-button-play').show()

    });

    $('.wrap-autoplay-control > .swiper-button-play').click(function () {
        $(this).hide();
        jobSwiper.autoplay.start();
        $('.wrap-autoplay-control > .swiper-button-pause').show();
    });

    var resizeCheck;
    $(window).resize(function(){
        if(resizeCheck){ 
            clearTimeout(resizeCheck);
        };            
        resizeCheck = setTimeout(function(){
            const jobslides = document.querySelectorAll('#renewMain .jobRecomend .swiper-slide');
            if (window.innerWidth < 1024) {
                jobslides.forEach((slide) => {
                    slide.classList.remove('changed');
                });
            } else {
                jobslides.forEach((slide) => {
                    slide.classList.add('changed');
                });                    
            }               
        },300);
    });
});