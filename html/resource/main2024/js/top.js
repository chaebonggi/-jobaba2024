// header all menu
function allMenu() {
    if(window.innerWidth < 1024) {
        $('.h_mobile').toggleClass('show');
    } else {
        $('.h_gnb_bg').stop().slideToggle(300);
        $('.h_menu').toggleClass('active');
    }
}
$('.h_mobile_close').click(function(){
    $('.h_mobile').removeClass('show');
    $('.h_menu').removeClass('active');
});
//통합검색 버튼
$('#newHeader .h_search').on('click', function(){
    $('.modal_search_wrapper').show();
    $('.search_menu').show();
    $('.search_menu input[type="text"]').focus();
});  

// random logo img
// const logoImages = document.querySelectorAll('h1.logo img');
// if (document.location.pathname != '/main/main.do') {
// 	logoImages.forEach((image) => {
// 		let randomNumber = Math.floor(Math.random() * 4) + 1;
// 		image.setAttribute('src', `/resource/images/main2023/logo_0${randomNumber}.png`);
// 	});
// }
$("#newHeader .newGnb .depth1").bind('focus mouseover',function(){   
    if (window.innerWidth > 1024  ){
        $('#newHeader .newGnb').addClass('on');
    }
});
$('#newHeader .newGnb').mouseleave(function(){
    if (window.innerWidth > 1024){
        $('#newHeader .newGnb').removeClass('on');
    }
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
   "hideChannelButtonOnBoot": false
});