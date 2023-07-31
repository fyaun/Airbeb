
window.addEventListener('DOMContentLoaded', function(){


  // ヘッダー色


  $(window).scroll(function () {

    const headerBg = $('#masthead');

    if ($(this).scrollTop() > 600) {
        headerBg.css('background-image', 'linear-gradient(180deg, rgba(0, 223, 252, 0.8), rgba(200, 200, 200, 0.23) 90%)');
  
    } else {
        headerBg.css('background-image', '');

    }
  });

  //ページ内リンク
  $('.page-link a[href^="#"]').on('click', function(){

    //headerの高さを取得
    let header = $('#masthead').innerHeight();
    // idを取得
    let id = $(this).attr('href');
    // 位置を取得
    let position = $(id).offset().top - header;
    console.log(id);
    console.log(position);
    

      $("html, body").animate({
          scrollTop: position
      }, 500);
  });







  $('.drawer-icon').on('click', function(e) {
    e.preventDefault();
  
    $('.drawer-icon').toggleClass('is-active');
    $('.drawer-contents').toggleClass('is-active');

    $('body').toggleClass('is-active');
  
    return false;
  });



//アコーディオン
$('.access-guid_up').on('click', function(){
    $(this).next().slideToggle();
    $(this).children('.access-guid_btn').toggleClass('is-open');
    $(this).children('.access-guid_icon').toggleClass('is-open');
  });



  // トップ画面
  const swiper = new Swiper('.swiper', {
    loop: true,
    effect: "fade", //フェードのエフェクト
    speed: 2000,
    autoplay: {
      delay: 10000, //5秒後に次の画像へ
      disableOnInteraction: false, //ユーザー操作後に自動再生を再開する
    },
  
  
  });





  const swiper_container = new Swiper('.swiper-container', {
    loop: true,
    speed: 800,
    allowTouchMove: false, // スワイプ操作をできないようにする
    slidesPerView: '1.2',

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    	// ページネーションが必要なら追加
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true
	},
  

  });



$('.gallery-link_tab').first().show();
$('.gallery-link a').first().addClass('active').css('color', '#63AAB3');

$('.gallery-link a').on('click', function() {
  var galleryTab = $(this).attr('href');
  $('.gallery-link_tab').hide(); // すべてのタブを非表示にする
  $(galleryTab).fadeIn(500); // クリックされたタブを表示する

  $('.gallery-link a').removeClass('active').css('color', ''); // すべてのリンクのactiveクラスと色をリセット
  $(this).addClass('active').css('color', '#63AAB3'); // クリックされたリンクにactiveクラスを追加し、色を指定する（ここでは赤色に設定）
  return false;
});





  // モーダルを開くためのクリックイベント処理
  $('.thumbnail-link').on('click', function(e) {
      e.preventDefault();

      // モーダルに表示する画像とタイトルを取得
      var imageUrl = $(this).data('img');
      var title = $(this).data('title');

      // モーダル内の要素に画像とタイトルをセット
      $('.modal-image').attr('src', imageUrl);
      $('.modal-title').text(title);

      // モーダルを表示する
      $('.modal').fadeIn(300);
  });

  // モーダルを閉じるためのクリックイベント処理
  $('.modal-close').on('click', function() {
      // モーダルを非表示にする
      $('.modal').hide();
  });



});



// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}



// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".eachTextAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



jQuery(function($) {
  $(window).on('load scroll', function (){
  
    var box = $('.fadeIn');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh + 100 ){
        $(this).addClass(animated);
      }
    });
  });

  });
