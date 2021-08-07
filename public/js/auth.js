function login() {
	const loginBtn = document.getElementById('login-btn');
	
	loginBtn.addEventListener('click', async (e) => {
		e.preventDefault();
		const loginUserInput = document.getElementById('login-user').value.trim();
		const loginPwInput = document.getElementById('login-pw').value.trim();

		if (loginUserInput && loginPwInput) {
			const body = {
					username: loginUserInput,
					password: loginPwInput,
			};

			const response = await fetch('/auth', {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {'Content-Type': 'application/json'}
			});


			if (response.ok) {
				const {message} = await response.json();			
				console.log(`here: ${message}`)
			}
		} else {
			console.log('No username or password input')
		}
	});
}

function signUp() {
	const signUpBtn = document.getElementById('sign-up-btn');

	signUpBtn.addEventListener('click', async () => {
		const signUpUser = document.getElementById('signup-user').value.trim();
		const signUpPw = document.getElementById('signup-pw').value.trim();
		const signUpEmail = document.getElementById('signup-email').value.trim();

		if (signUpUser && signUpPw && signUpEmail) {
			const body = {
				username: signUpUser,
				password: signUpPw,
				email: signUpEmail
			};

			const response = await fetch('/api/member', {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {'Content-Type': 'application/json'}
			});

			if (response.ok) {
				const {message} = await response.json();
				console.log(message);
			} else {
				console.log('No username, password, or email input')
			}
		}


	})
}

function auth() {
	signUp();
	login();
}

auth();