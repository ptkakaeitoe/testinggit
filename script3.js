// var fistitem = parseInt(prompt("price of fistitem"));
// var secitem = parseInt(prompt("price of second item:"));
// var summ = fistitem + secitem;
// var tip = prompt("how much percent of tip you wanna give");
// const totalp = summ + summ * (tip / 100);
// const discount = function (totalpp) {
//   return totalpp > 1000 ? totalpp * 0.1 : totalpp * 10;
// };
// const lee = discount(totalp);
// alert(summ);
// alert(totalp);
// alert(lee);
const ptk = {
  fistname: "paing",
  secondname: "thuka",
  age: 19,
  job: "student",
  location: "yangon",
  interested: ["game", "sor", "lmao"],
};
console.log(ptk);
console.log(ptk.fistname);
console.log(ptk["age"]);
let namekey = "name";
console.log(ptk["second" + namekey]);
wanna = prompt("what ya wanna know");

res = ptk[wanna];
if (wanna) {
  alert(res);
} else alert("type someting bruh");
ptk.extra = "dick";
console.log(ptk);
