let money, time;

function start() {
     money = +prompt("Ваш бюджет на месяц?", '');
     time = prompt("Введите дату в формате YYYY-MM-DD", '');

     while(isNaN(money) || money == '' || money ==null) {
          money = +prompt("Ваш бюджет на месяц?", '');
     }
}  

start();
    
let appData = {
          budget: money,
          timeData: time,
          expenses: {},
          optionalExpenses: {},
          income: [],
          savings: false                
};

function chooseExpenses() {
     for (let i = 0; i < 2; i++) {

          let answer1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
              answer2 = prompt("Во сколько обойдется?", '');
     
          if ((typeof(answer1) === 'string') && (typeof(answer1) !== null) && (typeof(answer2) !== null)
               && answer1 !== '' && answer2 !== '' && answer1.length < 50) {
               appData.expenses[answer1] = answer2;
          } else {
               i--;
          }
     }
}
chooseExpenses();

function detectDayBudget() {
     appData.moneyPerDay = (appData.budget / 30).toFixed();
     alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
     if (appData.moneyPerDay < 1000) {
          console.log("Маловато будет");
     } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
          console.log("Жить можно");
     } else if (appData.moneyPerDay < 2000) {
          console.log("Другое дело");
     } else {
          console.log("Что-то пошло не так");
     }
}
detectLevel();

function checkSavings() {
     if (appData.savings == true) {
          let save = +prompt("Какова сумма накоплений?", ''),
               percent = +prompt("Под какой процент?", '');

          appData.monthIncome = save/100/12 * percent;
          alert("Доход в месяц с вашего депозита: " + appData.monthIncome)
     }
}
checkSavings();

function chooseOptExpenses() {
     for (let i = 0; i < 3; i++) {
          let answer1 = prompt("Введите необязательную статью расходов в этом месяце", '');
          appData.expenses[i] = answer1;
     }
}
chooseOptExpenses();