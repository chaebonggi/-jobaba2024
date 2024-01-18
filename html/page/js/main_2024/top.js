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