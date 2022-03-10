let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');   
    
let appData = {
          budget: money,
          timeData: time,
          expenses: {},
          optionalExpenses: {},
          income: [],
          savings: false                
};


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

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 1000) {
     console.log("Маловато будет");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
     console.log("Жить можно");
} else if (appData.moneyPerDay < 2000) {
     console.log("Другое дело");
} else {
     console.log("Что-то пошло не так");
}

/*
let i = 0;

while (i < 2) {
     let answer1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
          answer2 = prompt("Во сколько обойдется?", '');

     appData.expenses[answer1] = answer2;
     i++;
}


do {
     let answer1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
          answer2 = prompt("Во сколько обойдется?", '');

     appData.expenses[answer1] = answer2;
     i++;
} while (i < 2);
*/

