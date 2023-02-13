// 윌라 시그니처 오디오북,윌라 독점 오디오북,윌라 매거진,이달의 오디오북,아동/주니어,Coming Soon 기대작
var search;
search = ["넛지","인생","지혜","매거진","더글러스 케네디","어린이 동화","기욤 뮈소"];

for (i = 0; i < search.length; i++) {

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: search[i] },
        async: false,
        headers: { Authorization: "KakaoAK 22d09795b27362ac422ebecb474d1968" }
    })
        .done(function (msg) {

            console.log(msg);

            var divs = document.getElementsByClassName('b_inner' + i);


            for (var j = 0; j < divs.length; j++) {

                $('.b_inner' + i).eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>");

            }

        });

}

// 이용 후기
$(function(){
    
    var page=0;
    
    $('.prev').click(function(){    
        
        page--; 
        
        if(page<0){
            page=0;
            return;
        }
        
        $('.r_video').stop().animate({ marginLeft: -408 * page}, 800);

    });
    
    $('.next').click(function(){
        
        page++;

        if(page > $('.r_video li').length-4){
            page = $('.r_video li').length-4;
            return;
        }

        $('.r_video').stop().animate({ marginLeft: -408 * page}, 800);

    });

});                     

// FAQ
$(function(){
    $(".question>div span").click(function(){
        $(this).siblings("p").slideToggle();
        $(this).find("i").toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
    });
    // $(".question2 span").click(function(){
    //     $(".question2 p").slideToggle();
    // });
    // $(".question3 span").click(function(){
    //     $(".question3 p").slideToggle();
    // });
    // $(".question4 span").click(function(){
    //     $(".question4 p").slideToggle();
    // });
    // $(".question5 span").click(function(){
    //     $(".question5 p").slideToggle();
    // });
});