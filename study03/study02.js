// 문제 3) 책 511 페이지의 마무리 문제 2번 풀기
let num = prompt("1에서 몇까지의 숫자 중에서 3의 배수를 찾을까요? ");
num = Number(num);
let count = 0;
for (let i = 1; i <= num; i++) {
    if ((i % 3) == 0) {
        console.log(i)
        count++;
    }
}

console.log(`${num}까지의 3의 배수 개수 : ${count}`);


// 문제 4) 커피 자판 프로그램을 작성하세요
// 1. 사용자가 가지고 있는 금액을 입력 받기
// 2. 커피 1잔의 금액은 300원
// 3. 자판기에 들어있는 커피의 양은 10개
// 4. 커피를 판매할 때마다 1개의 커피가 소비됨
// 5. 소지 금액이 부족 시 '돈이 부족합니다' 를 출력
// 6. 커피가 부족할 경우 '커피가 다 팔렸습니다' 를 출력
// 7. 커피 판매 시 '커피를 한잔 판매 합니다.' 와 커피 재고량을 출력
//      ex) 커피를 한잔 판매합니다.
//          남은 커피 00 잔
console.log("\n----- 문제 4 -----\n");

let money = prompt("소지하고 있는 금액을 입력하세요 : ");
console.log(`현재 소지금액은 ${money}원 입니다.`);
let coffee = 10;

//for문의 무한반복
// for (;;) {
//
// }

while (true) {
    console.log('커피를 주문합니다.');

    if (money >= 300) {
        if (coffee > 0) {
            coffee--;
            money -= 300;
            console.log('커피를 한잔 판매합니다.');
            console.log(`현재 남은 커피량 : ${coffee}`);
        }
        else {
            console.log('커피가 다 팔렸습니다.');
            console.log('영업을 종료합니다.');
            break;
        }
    }
    else {
        console.log('돈이 부족합니다.');
        break;
    }
}

// 문제 5) 은행 프로그램을 작성하세요
// 1. 프로그램 시작 시 안내 메시지와 메뉴가 출력
//  ex) 안녕하세요 java505 은행입니다.
//  ex) 1: 입금, 2: 예금 확인, 3: 출금, 0: 종료

// 2. 메뉴를 선택하면 해당 기능을 실행
// 3. 메뉴는 기능을 실행 후 계속 출력
// 4. 0 실행 시 '프로그램을 종료합니다.' 출력 후 프로그램 종료
// 5. 1 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에 추가
// 6. 2 실행 시 기존에 저장된 금액을 출력
// 7. 3 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에서 차감
// 8. 기존 금액보다 큰 금액을 출금 시 기존 금액을 0으로 만들고 모든 금액을 출금

console.log("\n----- 문제 5 -----\n");

bankMoney = 0;
console.log('안녕하세요 java505 은행입니다.');

while (true) {
    console.log('메뉴를 입력해주세요');
    console.log('1 : 입금, 2 : 예금 확인, 3 : 출금, 0 : 종료');

    let menu = prompt('메뉴 선택 : (1 : 입금, 2 : 예금 확인, 3 : 출금, 0 : 종료)');

    if (menu == 1) {
        let inMoney = prompt('입력할 금액을 입력해 주세요 : ');
        if (isNaN(inMoney)) {
            console.log('잘못된 입력입니다.\n메뉴로 돌아갑니다.');
        }
        else {
            inMoney = Number(inMoney);
            bankMoney += inMoney;
            console.log(`입금한 금액은 ${inMoney}원 이고, 예금 금액은 ${bankMoney}원 입니다.`);
        }
    }
    else if (menu == 2) {
        console.log(`현재 예금 금액은 ${bankMoney}원 입니다.`);
    }
    else if (menu == 3) {
        while (true) {
            let outMoney = prompt('출금할 금액을 입력하세요 : ');

            if (isNaN(outMoney)) {
                console.log('잘못된 입력입니다.\n숫자로만 입력해주세요');
            }
            else {
                outMoney = Number(outMoney);

                if (outMoney > bankMoney) {
                    console.log('출금 금액이 예금 금액보다 많습니다.\n모든 예금 금액을 출금 합니다.');
                    console.log(`출금 금액은 ${bankMoney}원 입니다.`);
                    bankMoney = 0;
                }
                else {
                    bankMoney -= outMoney;
                    console.log(`출금 금액은 ${outMoney}원 이고, 남은 예금 금액은 ${bankMoney}원 입니다.`);
                }
                break;
            }
        }
    }
    else if (menu == 0) {
        console.log('저희 java505 은행을 이용해 주셔서 감사합니다.');
        break;
    }
    else {
        console.log('잘못된 입력입니다.')
    }

}







