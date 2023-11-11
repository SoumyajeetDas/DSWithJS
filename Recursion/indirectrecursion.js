let money = 100;
let totalApple = 0;


const buyApple = (money) => {

    if (money >= 0) {
        console.log(`I have Rs. ${money} and I have bought ${totalApple} apples`);

        totalApple++;

        deductMoney(money);
    }

}


const deductMoney = (money) => {
    buyApple(money - 10)
}

console.clear();
buyApple(money);
