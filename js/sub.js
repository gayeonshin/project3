// 책 정보
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query : "폭풍의 시간" },
    headers: { Authorization: "KakaoAK 22d09795b27362ac422ebecb474d1968" }
})
    .done(function( msg ) {
      // console.log(msg.documents[1].thumbnail);

      // $(".book").append("<img src='" + msg.documents[0].thumbnail + "'/>");
      $(".sale s").append(msg.documents[0].price + "원");
      $(".total span").append(msg.documents[0].sale_price + "원 ");
    });

// 메모장으로 sub 텍스트 가져오기
$(function () { 
  $.get("./sub_txt/txt1.txt", function (data) {
    $(".info1>.tmpBox").html(data);
  })

  $.get("./sub_txt/txt2.txt", function (data) {
    $(".info2>.tmpBox").html(data);
  })

  $.get("./sub_txt/txt3.txt", function (data) {
    $(".info3>.tmpBox").html(data);
  })
      
  $.get("./sub_txt/txt4.txt", function (data) {
    $(".info4>.tmpBox").html(data);
  })

  $.get("./sub_txt/txt5.txt", function (data) {
    $(".info5>.tmpBox").html(data);
  })

  $.get("./sub_txt/txt6.txt", function (data) {
    $(".info6>.tmpBox").html(data);
  })
});

// 목차, 출판사 서평, 분류, ISBN, 배송 안내, 교환 및 환불 안내
$(function () {
  $(".info div").click(function(){
    $(this).children(".tmpBox").slideToggle();
    $(this).children("span").find("i").toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
  });
});

// 작가의 다른 상품
// 책 정보 가져오기
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "넬레 노이하우스" },
    async: false,
    headers: { Authorization: "KakaoAK 22d09795b27362ac422ebecb474d1968" }
})
    .done(function (msg) {

        console.log(msg);

        var lis = document.getElementsByClassName('a_book1');


        for (var j = 0; j < lis.length; j++) {

            $('.a_book1 a' ).eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>" + "<br>");
            $('.a_book1 a').eq(j).append("<strong>" + msg.documents[j].title + "</strong>");
            $('.a_book1 a').eq(j).append("<p>" + msg.documents[j].sale_price + "원" + " " + "(10% 할인)" + "</p>");

        }

    });

// 작가의 다른 상품
// 슬라이드
$(function () {
      
  $('.before').hide();

  $('.before').click(function(){
    $('.before').stop().fadeOut();
    $('.another ul').stop().animate({'margin-left' : '0'});
    $('.after').stop().show();
  });

  $('.after').click(function(){
    $('.after').stop().fadeOut();
    $('.another ul').stop().animate({'margin-left' : '-100%'});
    $('.before').stop().show();
  });

});
    