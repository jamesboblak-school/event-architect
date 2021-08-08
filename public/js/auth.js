function login() {
	// const loginBtn = document.getElementById('signin-btn');
	const signinForm = document.getElementById('signin-form');

	signinForm.addEventListener('submit', async (e) => {
		console.log('here')
		e.preventDefault();
		const loginUserInput = document.getElementById('signin-user').value.trim();
		const loginPwInput = document.getElementById('signin-pw').value.trim();

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
				const {username, userId} = await response.json();
				document.location.replace(`/dashboard/${userId}`);
			}
		} else {
			console.log('No username or password input')
		}
	});
}

function signUp() {
	// const signUpBtn = document.getElementById('signup-btn');
	const signUpForm = document.getElementById('signup-form');

	signUpForm.addEventListener('submit', async (e) => {
		console.log('signup')
		e.preventDefault();
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

			console.log('here signup')
			if (response.ok) {
				const {id} = await response.json();
				document.location.replace(`/dashboard/${id}`)
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