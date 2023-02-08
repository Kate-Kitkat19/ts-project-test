var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var age;
var name1;
var toggle;
var empty;
var notInitialize;
var callback;
callback = function (a) {
    return 100 + a;
};
var anything;
anything = -20;
anything = "Text";
anything = {};
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
    console.log("str", str);
}
var person;
var Progress;
(function (Progress) {
    Progress[Progress["LOADING"] = 0] = "LOADING";
    Progress[Progress["READY"] = 1] = "READY";
})(Progress || (Progress = {}));
var somevalue;
var isAble;
/////////
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01"
    }
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close"
};
console.log(page1, page2);
