// footer (주) 인플루엔셜 사업자 정보
$(function(){
    $(".owner").click(function(){
        $(this).siblings(".owner_info").slideToggle();
        $(this).find("i").toggleClass('fa-caret-down').toggleClass('fa-caret-up');
    });
});