  $('.s').slick({
    autoplay: true,//自動でスライドさせる
    autoplaySpeed: 5000,//次の画像に切り替えるまでの時間 今回の場合は0
    speed: 1000,//画像が切り替わるまでの時間 今回の場合は何秒で1枚分動くか
    cssEase: 'linear',//動きの種類は等速に
    arrows:true,//左右に出る矢印を非表示
    swipe: true,//スワイプ禁止
    pauseOnFocus: false,//フォーカスが合っても止めない
    pauseOnHover: false,//hoverしても止めない
    centerMode: true,//一枚目を中心に表示させる
    initialSlide: 3,//最初に表示させる要素の番号を指定
    variableWidth: true,//スライドの要素の幅をcssで設定できるようにする
  });
