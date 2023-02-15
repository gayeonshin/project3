$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query : "폭풍의 시간" },
    headers: { Authorization: "KakaoAK 22d09795b27362ac422ebecb474d1968" }
  })
    .done(function( msg ) {
      console.log(msg.documents[1].thumbnail);

      $(".book").append("<img src='" + msg.documents[0].thumbnail + "'/>");
      $(".sale span").append(+ msg.documents[0].price)
    });