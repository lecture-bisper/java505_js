console.log("----- 함수 사용하기 -----");

function sum(num1, num2) {
    const a = 10;
    const b = 20;
    const result = a + b;
    console.log(`두 수의 덧셈은 ${result}`);
}

// sum();
sum(10, 20);

//함수의 4가지 형태
// 1. 매개변수 X, 반환값 X
// 2. 매개변수 O, 반환값 X
// 3. 매개변수 X, 반환값 O
// 4. 매개변수 O, 반환값 O

function add1() {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(`두 수의 덧셈은 ${c}`);
}

function add2(a, b) {
    const c = a + b;
    console.log(`두 수의 덧셈은 ${c}`);
}

function add3() {
    const a = 10;
    const b = 20;
    const c = a + b;
    return c;
}

function add4(a, b) {
    const c = a + b;
    return c;
}

console.log("------------------");

// var btn = document.getElementById("aaa");
// btn.addEventListener("click", function () {
//     alert("aaaaa");
// });

// 익명함수 : 이름이 없어서 호출(실행) 불가한 함수, 매개변수로 함수를 사용 시 사용 (콜백함수)
// 변수에 익명 함수를 대입하여 변수명으로 익명 함수를 호출할 수 있음
const noname = function (num1, num2) {
    const a = 10;
    const b = 20;
    console.log(`두 수의 합은 ${a + b}`)
};

noname(10, 20);

function funcName(num1, num2) {

}

// 즉시 실행 함수 (일회용 함수) : 프로그램 실행 시 단 한번만 실행해야되는 부분을 실행하기 위해서 사용함
(function () {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(c);
}());


// 문제 6) 문제 3의 소스코드를 함수를 사용하는 방식으로 수정하세요
// 1. 사용자 입력 부분을 함수로 생성, quiz6Input
// 2. 3의 배수를 계산하는 부분을 함수로 생성, quiz6Cal
function quiz6Input() {
    let num = prompt("1에서 몇까지의 숫자 중에서 3의 배수를 찾을까요? ");
    num = Number(num);

    return num;
}

function quiz6Cal(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if ((i % 3) == 0) {
            console.log(i)
            count++;
        }
    }

    console.log(`${num}까지의 3의 배수 개수 : ${count}`);
}

let num = quiz6Input();
quiz6Cal(num);

// let num = prompt("1에서 몇까지의 숫자 중에서 3의 배수를 찾을까요? ");
// num = Number(num);
// let count = 0;
// for (let i = 1; i <= num; i++) {
//     if ((i % 3) == 0) {
//         console.log(i)
//         count++;
//     }
// }
//
// console.log(`${num}까지의 3의 배수 개수 : ${count}`);

// 문제 7) 문제 4의 소스코드를 함수를 사용하는 방식으로 수정하세요
// 1. money, coffee, price 의 초기값을 설정하는 함수 생성, quiz7Setup
// 2. 커피 판매 부분을 함수로 생성, quiz7CoffeeSale

// 문제 8) 문제 5의 소스코드를 함수를 사용하는 방식으로 수정하세요
// 1. 입금 부분을 함수로 생성, quiz8InputMoney
// 2. 예금 확인 부분을 함수로 생성, quiz8CheckMoney
// 3. 출금 부분을 함수로 생성, quiz8OutputMoney




