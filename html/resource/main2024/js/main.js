//mainBanner
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
            const slides = document.querySelectorAll('#newMain .mainBanner .swiper-slide');            
            slides.forEach((slide) => {
                slide.style.width = '330px';
                bannerSwiper.update();
            });            
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
            slidesPerView: 2.9,
            spaceBetween: 10,
            simulateTouch: true,
        });
    } else if (window.innerWidth >= 641 && menuSwiper != undefined) {
        menuSwiper.destroy();
        menuSwiper = undefined;
    }
}
itemSwiper();

$('#newMain .policyWrap .checkItem .areaMore').click(function(){
    $('#newMain .policyWrap .checkItem .checkList.area').toggleClass('on');
    if ($('#newMain .policyWrap .checkItem .checkList.area').hasClass('on')) {
        $(this).find('span').text('접기');
    } else {
        $(this).find('span').text('더보기');
    }
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
handleTabClick($('.tipWrap .tabList li'), $('.tipWrap .tabItem'), 'data-tab');
handleTabClick($('.publicWrap .tabList li'), $('.publicWrap .tabItem'), 'data-tab');
handleTabClick($('.enterWrap .tabList li'), $('.enterWrap .tabItem'), 'data-tab');
handleTabClick($('.indWrap .tabList li'), $('.indWrap .tabItem'), 'data-tab');

var tipSlide = $('#newMain .tipWrap .tabItem');
tipSlide.find('.swiper-container').each(function(i){
    var $this = $(this);
    $this.addClass("type" + i);
    var policySwiper = new Swiper($(this), {
        slidesPerView: 1.2,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2.2,
                spaceBetween: 10,
            },
        },
    });
});

var policySlide = new Swiper("#newMain .policySlide .swiper-container", {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    slidesPerColumn: 1,
    spaceBetween: 10,
    slidesPerColumnFill: "row", 
    observer: true,
    watchOverflow: true,
    observeParents: true,
    pagination: {
        el: '#newMain .policySlide .swiper-pagination',
        type: 'bullets'
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerColumn: 2,
            slidesPerGroup: 4,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerColumn: 2,
            slidesPerGroup: 3,
        },
        480: {
            slidesPerView: 2.2,
            spaceBetween: 10,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
        },
    },
}); 

var issueSlide = new Swiper("#newMain .issueSlide .swiper-container", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    observer: true,
    watchOverflow: true,
    observeParents: true,
    pagination: {
        el: '#newMain .issueSlide .swiper-pagination',
        type: 'bullets'
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2.2,
            spaceBetween: 10,
        },
    },
}); 

var orderSlide = new Swiper("#newMain .orderSlide .swiper-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerColumn: 2,
    spaceBetween: 10,
    slidesPerColumnFill: "row", 
    observer: true,
    watchOverflow: true,
    observeParents: true,
    pagination: {
        el: ".orderSlide .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerColumn: 2,
            slidesPerGroup: 4,
        },
        860: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerColumn: 2,
            slidesPerGroup: 3,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 1,
            slidesPerGroup: 2,
        },
    },
}); 
var infoSlide = new Swiper("#newMain .infoSlide .swiper-container", {
    slidesPerView: 1.5,    
    watchOverflow: true,
    breakpoints: {
        1024: {
            slidesPerView: 4,            
        },
        860: {
            slidesPerView: 3.5,
        },
        480: {
            slidesPerView: 2.5,
        },
    },
}); 

var publicSlide = $('#newMain .publicWrap .tabItem');
publicSlide.find('.swiper-container').each(function(i){
    $(this).find(".swiper-pagination").addClass("type"+i);
    var policySwiper = new Swiper($(this), {
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 2,
        spaceBetween: 10,
        slidesPerColumnFill: "row", 
        observer: true,
        watchOverflow: true,
        observeParents: true,
        pagination: {
            el: publicSlide.find('.swiper-pagination.type'+i),
            type: 'bullets'
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerGroup: 4,
            },
            860: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerGroup: 3,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerColumn: 1,
                slidesPerGroup: 2,
            },
        },
    });
});
var enterSlide = $('#newMain .enterWrap .tabItem');
enterSlide.find('.swiper-container').each(function(i){
    $(this).find(".swiper-pagination").addClass("type"+i);
    var policySwiper = new Swiper($(this), {
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
        spaceBetween: 10,
        slidesPerColumnFill: "row",
        observer: true,
        watchOverflow: true,
        observeParents: true,
        pagination: {
            el: enterSlide.find('.swiper-pagination.type'+i),
            type: 'bullets'
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerGroup: 4,
            },
            860: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerGroup: 3,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerColumn: 1,
                slidesPerGroup: 2,
            },
        },
    });
});
var indSlide = $('#newMain .indWrap .tabItem');
indSlide.find('.swiper-container').each(function(i){
    $(this).find(".swiper-pagination").addClass("type"+i);
    var policySwiper = new Swiper($(this), {
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 2,
        spaceBetween: 10,
        slidesPerColumnFill: "row", 
        observer: true,
        watchOverflow: true,
        observeParents: true,
        pagination: {
            el: indSlide.find('.swiper-pagination.type'+i),
            type: 'bullets'
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerGroup: 4,
            },
            860: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerGroup: 3,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerColumn: 1,
                slidesPerGroup: 2,
            },
        },
    });
});
var recruitSlide = new Swiper("#newMain .recruitSlide .swiper-container", {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    slidesPerColumn: 1,
    spaceBetween: 10,
    slidesPerColumnFill: "row", 
    observer: true,
    watchOverflow: true,
    observeParents: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerColumn: 2,
            slidesPerGroup: 3,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
        },
    },
}); 
if ($.fn.scrollbar) {
    $('#newMain .scrollbar-outer').scrollbar();
}

 // 모바일 체크박스 탭
 const mtabButton = $(".moFindBtn .mo_cont_list li");
 const mtabContent = $(".moFindBtn .mo_cont_Wrap .mo_cont_box");
 mtabButton.on("click", function(){
     let tabIdx = $(this).index();
     mtabButton.removeClass("active");
     $(this).addClass("active");
     mtabContent.removeClass("active");
     mtabContent.eq(tabIdx).addClass("active");
 });
 const mBottomCont = $('.moFindBtn');
 const mPopupOpenBtn = mBottomCont.find('.btn_pop_open');
 const mSearchBtn = mBottomCont.find('.btn_search');
 const mPopCloseBtn = mBottomCont.find('.mo_btn_close');
 const mLayerTop = $(".m_find_top");
 const mLayerBottom = $(".m_find_bottom");
 const dimShadow = $('#newMain .dim_shadow');
 mPopupOpenBtn.on("click", function(){
     mBottomCont.addClass('on');
     $(this).hide();
     mSearchBtn.show();
     $('body').addClass('scrollLock');
 });
 mPopCloseBtn.on("click", function(){
     mBottomCont.removeClass('on');
     mPopupOpenBtn.show();
     $('body').removeClass('scrollLock');
 });
 mSearchBtn.on("click", function(){ 
     mBottomCont.removeClass('on');
     mPopupOpenBtn.show();
     $('body').removeClass('scrollLock');
 });
 $(document).mouseup(function (e) {
    if (!mLayerTop.is(e.target) && mLayerTop.has(e.target).length === 0 && !mLayerBottom.is(e.target) && mLayerBottom.has(e.target).length === 0) {
        mBottomCont.removeClass('on');
        mPopupOpenBtn.show();
        $('body').removeClass('scrollLock');
    }
});