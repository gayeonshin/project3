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
  $(".info span").click(function(){
    $(this).siblings(".tmpBox").slideToggle();
    $(this).find("i").toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
  });
});