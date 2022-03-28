function form() {
     let message = {
		loading: 'Загрузка...',
		succes: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	let form = document.querySelector('.main-form'),
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		let formData = new FormData(form);
		
		function postData(data) {
			return new Promise(function(resolve, reject) {
				let request =  new XMLHttpRequest;
				request.open('POST', 'server.php');
				//request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

				let obj = {};
				data.forEach(function(value, key) {
					obj[key] = value;
				});
				let json = JSON.stringify(obj);

				request.onreadystatechange = function() {
					if (request.readyState < 4) {
						resolve();
					} else if (request.readyState === 4 && request.status == 200) {
						resolve();
					} else {
						reject();
					}
				};

				request.send(json);
			});
		}
		

		function claerInput() {
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		}

		postData(formData)
			.then(() => statusMessage.innerHTML = message.loading)
			.then(() => statusMessage.innerHTML = message.succes)
			.catch(() => statusMessage.innerHTML = message.failure)
			.then(claerInput);
	});
}

module.exports = form;