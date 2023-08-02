/**
 * const, let
 */

// // var は編集できる
// var var1 = "var1";
// console.log(var1);
// var1 = "update";
// console.log(var1);

// // var は再宣言できる
// var var1 = "var1_";
// console.log(var1);

// letは編集可能
// let var2 = "var_let";
// console.log(var2);
// var2 = "var_let_";
// console.log(var2);

// // let は再宣言できない
// let var2 = "var_let"

// constは編集できない
// const var3 = "const";
// var3 = "const_";
// // var3 = "const_";

// constで定義したオブジェクトはプロパティの編集可能
// const var3 = {
//   name: "tomoya",
//   age: 31,
// };
// console.log(var3);
// var3.name = "tanu";
// var3.adress = "Osaka";
// console.log(var3);

// constで定義した配列の要素は編集可能
// const var3 = ["tomoya", 31];
// console.log(var3);
// var3[0] = "tanu";
// var3.push("Osaka");
// console.log(var3);

/**
 * テンプレート文字列
 */
// const name = "tomoya";
// const age = 31;
// const message = `私は${name}で、${age}歳です`;
// console.log(message);

/**
 * アロー関数
 */
// let funcStr = "AAAAAAAAAAAAAAAAA";
// function func1(str) {
//   return str;
// }
// const func2 = function (str) {
//   return str;
// };
// const funcArrow = (str) => {
//   return str;
// };
// const addddd = (num0, num1) => num0 + num1;
// console.log(func1(funcStr));
// console.log(func2(funcStr));
// console.log(funcArrow(funcStr));
// console.log(funcArrow(addddd(1, 2)));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "tomoya",
//   age: 31,
// };
// const message = `私は${myProfile.name}で、${myProfile.age}歳です`;
// console.log(message);

// const { name, age } = myProfile;
// const message2 = `私は${name}で、${age}歳です`;
// console.log(message2);

// const myProfile2 = ["tomoya", 31];
// const [name2, age2] = myProfile2;
// const message3 = `私は${name2}で、${age2}歳です`;
// console.log(message3);

/**
 * デフォルト値、引き数など
 */
// const sayHallo = (say = "tomoya") => console.log(say);
// sayHallo("yes");
// sayHallo();

/**
 * スプレッド構文
 */
// // 配列展開(配列の要素が順に取り出される,ループしている感じ)
// const arr1 = [0, 1, 2];
// console.log(arr1);
// console.log(...arr1);

// 配列をまとめる
// const arr2 = [0, 1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー(参照のコピーでなく複製)、結合
// const arr4 = [4, 10];
// const arr5 = [5, 20];
// const arr6 = [...arr4];
// const arr7 = [...arr4, ...arr5];
// console.log(arr6);
// console.log(arr7);

/**
 * mapやfilter
 */
const nameArr = ["tomoya", "tanu", "taro"];
for (let idx = 0; idx < nameArr.length; idx++) {
  console.log(idx);
}

// forEachはあんま使わんらしい

// map
nameArr.map((name) => {
  console.log(name);
});
const nameArr1 = nameArr.map((name) => {
  return name;
});
console.log(nameArr1);

// filer
