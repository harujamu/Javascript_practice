// alert("Hello, World")

let hello = "Hello, World";
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

// 1を基準に何度２をかけたら１００を超えるか調べる
let int1 = 1;
let int2 = 2;
let int3 = (int1 * int2) / 2;
let count = 0;

while(int3 < 100){
  int3 = int3 * int2;
  count = count +1;
}
alert(count + "回目で100を超えた");
