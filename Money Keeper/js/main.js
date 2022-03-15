let startBtn = document.querySelector('#start'),
	budgetValue = document.querySelector('.budget-value'),
	dayBudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearSavingsValue = document.querySelector('.yearsavings-value'),

	expensesItem = document.querySelectorAll('.expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function () {
	time = prompt("Введите дату в формате YYYY-MM-DD", '');
	money = +prompt("Ваш бюджет на месяц?", '');

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

	expensesBtn.removeAttribute('disabled');
	optionalExpensesBtn.removeAttribute('disabled');
	countBtn.removeAttribute('disabled');
});

expensesBtn.addEventListener('click', function () {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {

		let answer1 = expensesItem[i].value,
			answer2 = expensesItem[++i].value;

		if ((typeof (answer1) === 'string') && (typeof (answer1) !== null) && (typeof (answer2) !== null) &&
			answer1 !== '' && answer2 !== '' && answer1.length < 50) {
			appData.expenses[answer1] = answer2;
			sum += +answer2;
		} else {
			i--;
		}
		expensesValue.textContent = sum;
	}

	appData.budget -= sum;
});

optionalExpensesBtn.addEventListener('click', function () {
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let optional = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = optional;
		optionalExpensesValue[i].textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBtn.addEventListener('click', function () {
	if (appData.budget != undefined) {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;
		if (appData.moneyPerDay < 1000) {
			levelValue.textContent = "Маловато будет";
		} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Жить можно";
		} else if (appData.moneyPerDay < 2000) {
			levelValue.textContent = "Другое дело";
		} else {
			levelValue.textContent = "Что-то пошло не так";
		}
	} else {
		dayBudgetValue.textContent = "Кликните по кнопке 'Нвчать расчет' и затем на 'Расчетать'";
	}
});

incomeItem.addEventListener('input', function () {
	let.items = incomeItem.value;
	appData.income = items.split(", ");
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum/100/12 * percent;
		appData.yearIncome = sum/100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum/100/12 * percent;
		appData.yearIncome = sum/100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false,
};