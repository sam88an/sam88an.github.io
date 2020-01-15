$(function(){
    var docao=$ (window).height();
    $('.top1').css({'height' :docao});
    $(window).resize(function(){
        var docao=$ (window).height();
    $('.top1').css({'height' :docao});
    })
})
// khi click vao nut menu
$('.nutmenu').click(function(){
    $('.menuphai').addClass('ra');
    return false; 
})