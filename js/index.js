// 윌라만의 스페셜 라인업, 큐레이션 시리즈
// 책 정보 불러오기
var search;
search = ["인생","지혜","magazine","더글러스 케네디","그림책 동화","기욤 뮈소"];

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

            var divs = document.getElementsByClassName('ab' + i);


            for (var j = 0; j < divs.length; j++) {

                $('.ab' + i ).eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>");

            }

        });

}

// 윌라 시그니차 오디오북, 독점 오디오북, 매거진, 이달의 오디오북, 아동/주니어, Coming Soon 기대작
$(function(){
    
    var page=0;

    $('.before').hide();
    
    $('.before').click(function(){    
        
        page--; 

        $(this).stop().fadeOut();
        $(this).siblings().stop().show();

        if(page<0){
            page=0;            
            
        }
        
        $(this).siblings('.ab').stop().animate({ marginLeft: -180 * page}, 800);

    });
    
    $('.after').click(function(){
        
        page++;

        if(page > $(this).siblings('.ab').find('li').length-9){
            page = $(this).siblings('.ab').find('li').length-9;            
            return;
        }else if(page=$(this).siblings('.ab').find('li').length-9){
            $(this).stop().fadeOut();
            $(this).siblings().stop().show();
        }

        $(this).siblings('.ab').stop().animate({ marginLeft: -180 * page}, 800);

    });

}); 

// 윌라 클래스, 북토크, 테마별 클래스 슬라이드
function slidewilla(){
    $(".book1_4 .willa").animate({marginLeft : '-25%'}, 3000,"linear", function(){
        $(".book1_4 .willa li:first").appendTo(".book1_4 .willa");
        $(".book1_4 .willa").css({marginLeft : 0});
    });

    $(".book1_5 .willa").animate({marginLeft : '-25%'}, 3000,"linear", function(){
        $(".book1_5 .willa li:first").appendTo(".book1_5 .willa");
        $(".book1_5 .willa").css({marginLeft : 0});
    });

    $(".themawrap").animate({marginLeft : '-16.66%'}, 3000,"linear", function(){
        $(".thema:first").appendTo(".themawrap");
        $(".themawrap").css({marginLeft : 0});
    });
}

setInterval(slidewilla, 3000);

// 이용 후기
$(function(){
    
    var page=0;

    $('.prev').hide();
    
    $('.prev').click(function(){    
        
        page--; 
        
        if(page<0){
            page=0;
            $(this).stop().fadeOut();
            $(this).siblings().stop().show();
            return;
        }
        
        $('.r_video').stop().animate({ marginLeft: -408 * page}, 800);

    });
    
    $('.next').click(function(){
        
        page++;

        if(page > $('.r_video li').length-4){
            page = $('.r_video li').length-4;
            $(this).stop().fadeOut();
            $(this).siblings().stop().show();
            return;
        }

        $('.r_video').stop().animate({ marginLeft: -408 * page}, 800);

    });

});                     

// FAQ
$(function(){
    $(".question div").click(function(){
        $(this).children("p").slideToggle();
        $(this).children("span").find("i").toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
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