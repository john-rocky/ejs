//Fade Slide
$(function(){
// 設定
var $width =356; // 横幅
var $height =434; // 高さ
var $interval = 3000; // 切り替わりの間隔（ミリ秒）
var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
$("#slide ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
$("#slide ul li").hide().css({"position":"absolute","top":0,"left":0});
$("#slide ul li:first").addClass("active").show();
setInterval(function(){
var $active = $("#slide ul li.active");
var $next = $active.next("li").length?$active.next("li"):$("#slide ul li:first");
$active.fadeOut($fade_speed).removeClass("active");
$next.fadeIn($fade_speed).addClass("active");
},$interval);
});

//Fade Slide2
$(function(){
// 設定
var $width =356; // 横幅
var $height =434; // 高さ
var $interval = 3000; // 切り替わりの間隔（ミリ秒）
var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
$("#slide2 ul li").css({"position":"relative", "overflow":"hidden","width":$width,"height":$height});
$("#slide2 ul li").hide().css({"position":"absolute"});
$("#slide2 ul li:first").addClass("active").show();
setInterval(function(){
var $active = $("#slide2 ul li.active");
var $next = $active.next("li").length?$active.next("li"):$("#slide2 ul li:first");
$active.fadeOut($fade_speed).removeClass("active");
$next.fadeIn($fade_speed).addClass("active");
},$interval);
});

//Pop Up
$('.parent-container').magnificPopup({
delegate: 'a', // child items selector, by clicking on it popup will open
type: 'image'
// other options
});

//Single Popup
$('.Single-popup').magnificPopup({
  type: 'image'
  // other options
});

$('i').velocity(
    {
        width: '100px',
        height: '100px',
        backgroundColor: '#ccc',
        translateX: '+=200px',
        translateY: '+=150px'
    }, {
        // Option
        duration:1000, // アニメーション時間
        easing: 'ease-in-out', // イージング : linear, swing, ease, ease-in, ease-out, ease-in-out, [200, 15]
        begin: function(){console.log('start');}, // or null
        progress: 5, // 進捗率
        complete: function(){console.log('end');}, // or null
        loop: 100, // 繰り返し : or false
        delay: 500, // 開始、ループ時に遅延させる Ex.1000
        display: 'none' // 表示・非表示 : false, 'none', 'block'
    }
);

// 省略記法
// $('i').velocity({...}, 500, 'ease-in-out'); 

// チェーンで繋ぐことも可能
// $('i')
//    .velocity({...}, 500, 'ease-in-out')
//    .velocity({...}, 500, 'ease-in-out'); 
$('u').velocity(
    {
        width: '0px',
        height: '434px',
        backgroundColor: '#FFF',
        translateX: '+=250px',
        translateY: '-=150px'
    }, {
        // Option
        duration:1000, // アニメーション時間
        easing: 'ease-in-out', // イージング : linear, swing, ease, ease-in, ease-out, ease-in-out, [200, 15]
        begin: function(){console.log('start');}, // or null
        progress: 5, // 進捗率
        complete: function(){console.log('end');}, // or null
        loop: 100, // 繰り返し : or false
        delay: 1000, // 開始、ループ時に遅延させる Ex.1000
        display: 'none' // 表示・非表示 : false, 'none', 'block'
    }
);
