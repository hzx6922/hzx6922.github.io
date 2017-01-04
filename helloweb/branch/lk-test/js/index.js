/**
 * Created by Administrator on 2016/12/29.
 */
$(function () {
    $(".nav-mobile").toggle(function () {
        $(".nav-mobile>span").css("background-color","transparent");
        $(".nav-mobile>span").addClass("off");
        $(".nvaTL").css("border-bottom-color","rgba(255, 255, 255, 0.75)");
        $(".nav-mobile-menu").slideDown(100).css("display","flex");
    },function () {
        $(".nav-mobile>span").css("background-color","#b38b4d");
        $(".nav-mobile>span").removeClass("off");
        $(".nvaTL").css("border-bottom-color","#d4d5d4");
        $(".nav-mobile-menu").slideUp(100);
    });
});