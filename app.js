var password = "12345678910"
var isAdmin = confirm('Вы администратор?')
if (!isAdmin) {
	console.log('Добро пожаловать, гость!')
}
else {
	var userPassword = prompt('Введите пароль')
	if (userPassword !== password) {
		var login = confirm('Неверный пароль у вас осталось 2 попытки')
		var secondPassword = prompt('Введите пароль еще раз')
		if (secondPassword !== password) {
			var acount = confirm('Неверный пароль у вас осталась 1 попыткa')
			var thirdPassword = prompt('Введите пароль еще раз')
			if (thirdPassword !== password) {
				var login2 = confirm('Этот аккаунт временно недоступен, попробуйте еще раз позже')
			}
			else {
		      console.log('Добро пожаловать, администратор')
	        }
		}
		else {
		console.log('Добро пожаловать, администратор')
	    }
	}
	else {
		console.log('Добро пожаловать, администратор')
	}
}