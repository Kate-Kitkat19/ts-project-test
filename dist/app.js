"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
let age;
let name1;
let toggle;
let empty;
let notInitialize;
let callback;
callback = (a) => {
    return 100 + a;
};
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
    console.log("str", str);
}
let person;
var Progress;
(function (Progress) {
    Progress[Progress["LOADING"] = 0] = "LOADING";
    Progress[Progress["READY"] = 1] = "READY";
})(Progress || (Progress = {}));
let somevalue;
let isAble;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
const page3 = {
    title: "Python ",
    likes: 6,
    accounts: ["Alex", "New User"],
    status: "open",
};
console.log(page1, page2);
