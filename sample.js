// alert("Hello, World")

// let hello = "Hello, World";
// alert(hello);

// // 整数代入
// let int1 = 1;
// alert(int1);

// // 負数代入
// let int2 = -10
// alert(int2);
// // 小数代入
// let float1 = 3.14
// alert(float1);

// let str1 = "Javascriptを覚えよう！";
// alert(str1);

// // 四則演算
// alert(int1 + int2);
// alert(int1 - float1);
// alert(int2 * float1);
// alert(int1 / int2);

// alert("Hello" + "World");

// let str2 = "Hello,"
// let str3 = "World!!"
// alert(str2 + str3);

// // 条件比較
// let orange = 2000
// let apple = 200

// if(orange < apple){
//   alert("みかんはりんごより安い")
// }
// else if(orange == apple){
//   alert('みかんとりんごは同じ値段')
// }
// else{
//   alert('みかんはりんごより高い')
// }

// // 1を基準に何度２をかけたら１００を超えるか調べる
// let int1 = 1;
// let int2 = 2;
// let int3 = (int1 * int2) / 2;
// let count = 0;

// while(int3 < 100){
//   int3 = int3 * int2;
//   count = count +1;
// }
// alert(count + "回目で100を超えた");

// // for文で1~10を足して結果を返す処理書く
// let i;
// let num = 0;

// for(i=1;i<=10;i++){
//   num = num + i;
// }

// alert('1~10の和は' + num + 'です');

// // varによる再宣言のみ可能
// var catname = "Haru"
// console.log(catname)

// var catname = "Jamu"
// console.log(catname)


// // var letのみ再代入可能
// let nickname = "Haru-chan"
// console.log(nickname)

// nickname ="Jamu-kun"
// console.log(nickname)


// //グローバルスコープ
// var str = "webcamp"

// function foo(){
//   console.log(str)
//   // 関数コープ
//   var y = "hello"
// }

// foo()
// console.log(y)

// // ブロックスコープ（ローカルスコープ）
// function foo(){
//   let x ="webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
//   }
  
//   foo()

// var str = "webcamp"

// function foo(){
//   console.log(str)
//   var str = "dmm webcamp"
//   console.log(str)
// }

// foo()

// // 関数に文字代入して戻り値表示
// let alertString;
// alertString = addString("Webcamp");

// alert(alertString);

// function addString(strA){
//   let addStr = "Hello" + strA;
//   return addStr;
// }

// // 入力ダイアログで入力した文字をアラートで表示
// let promptStr = prompt("何か好きな文字を入力する");
// alert(promptStr);


// // ジャンケンでユーザーが入力した手とJSがランダムで返す手で勝負
// // じゃんけんの手を入力してもらうプロンプト欄を生成
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// // じゃんけんの手をランダムに作成する関数を呼び出す
// let js_hand = getJShand();

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
// let judge = winLose(user_hand, js_hand);

// // 結果を表示する
// alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// // ランダムでじゃんけんの手を作成する関数
// function getJShand(){
//   let js_hand_num = Math.floor( Math.random() * 3 );
//   let hand_name;

//   if(js_hand_num == 0){
//     hand_name = "グー";
//   } else if(js_hand_num == 1){
//     hand_name = "チョキ";
//   } else if(js_hand_num == 2){
//     hand_name = "パー";
//   }

//   return hand_name;
// }

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数
// function winLose(user, js){
//   let winLoseStr;

//   if(user == "グー"){
//     if(js == "グー"){
//       winLoseStr = "あいこ";
//     } else if(js == "チョキ"){
//       winLoseStr = "勝ち";
//     } else if(js == "パー"){
//       winLoseStr = "負け";
//     }
//   } else if(user == "チョキ"){
//     if(js == "グー"){
//       winLoseStr = "負け";
//     } else if(js == "チョキ"){
//       winLoseStr = "あいこ";
//     } else if(js == "パー"){
//       winLoseStr = "勝ち";
//     }
//   } else if(user == "パー"){
//     if(js == "グー"){
//       winLoseStr = "勝ち";
//     } else if(js == "チョキ"){
//       winLoseStr = "負け";
//     } else if(js == "パー"){
//       winLoseStr = "あいこ";
//     }
//   }

//   return winLoseStr;
// }


// ジャンケンでユーザーとJSが勝負するプログラム
// 入力ダイアログ表示
let prompt_user_hand;

// 変数randomNumにランダムに0~2の３つの数字を代入する

// let randomNum = Math.floor(Math.random()*3);
// let jsHand;
// let js_hand;

// function jsRandom(Num){
//   if(Num == 0){
//     js_hand = "グー";
//   }
//   else if(Num == 1){
//     js_hand = "チョキ";
//   }
//   else if(Num == 2){
//     js_hand = "パー";
//   }
  
//   let js_choice = "JSは" + js_hand + "を出しました"
//   alert(js_choice)
// }

// let winLoseAlert;

// function winLose(user_hand, js_hand){
//   if((user_hand == "グー" && js_hand =="チョキ")||(user_hand == "チョキ" && js_hand =="パー")||(user_hand == "パー" && js_hand == "グー"))
//   {alert("ユーザーの勝ち")}
//   else if(user_hand == js_hand){
//     alert("アイコ")
//   }
//   else{
//     alert("ユーザーの負け")
//   }
// }

// // 入力値がグーチョキパーのいずれかJSとジャンケンさせる
// // キャンセルならまたチャレンジしてねと表示
// // グーチョキパー以外入力時は再入力させる
// do{
//   prompt_user_hand = prompt("グー、チョキ、パーのいずれかを入力してください")
//   if(prompt_user_hand == "グー" || prompt_user_hand == "チョキ" || prompt_user_hand == "パー"){
//     let user_choice = "あなたは" + prompt_user_hand +"を出しました"
//     alert(user_choice);
//     jsHand = jsRandom(randomNum);
//     winLoseAlert = winLose(prompt_user_hand, js_hand);
//   }
//   else if(prompt_user_hand == null){
//     alert("またチャレンジしてね")
//   }
// }
// while(prompt_user_hand != "グー" && prompt_user_hand != "チョキ" && prompt_user_hand != "パー" && prompt_user_hand != null);

// jQuery練習
// $ (document).ready(function() {
//   $ ('body').html('<h1>Hello jQuery!!</h1>');
// });


// // jQueryでCSS操作
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// スライドダウン
// $(function(){
//   $('.box1').slideDown();
// });

// // スライドアップ
// $(function(){
//   $('.box1').slideUp();
// });

// // 非表示→表示
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// // 非表示→表示
// $(function(){
//   $('.box1').hide();
// });

// // 要素を上から下へスライドさせた後、赤色の正方形を青色の長方形（幅200px、高さ100px）に変更
// // 下から上へスライド
// // 引数に関数入れられる、1000=1sec

// $(function (){
//   $('.box2').slideDown(1000,function (){
//     $('.box2').css({
//       'width': '200px', 
//       'height': '100px', 
//       'background-color': '#0000FF'
//     }).slideUp(5000);
//   });
// });


// マウスオーバー時に背景色を青に変える、マウスアウトすると元の赤色に戻る
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css('background-color', '#0000FF');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css('background-color', '#FF0000');
//   });
// });

// // マウスオーバー時黒枠ができ、マウスアウトすると消える
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });


// // マウスクリック時にイベント発生
// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// // クリックするとSlideUp
// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });
//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });
//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });
//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });

// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

$(function(){
  $('.box').on('click', function(){
    $('.box').children().slideUp();
  });
});