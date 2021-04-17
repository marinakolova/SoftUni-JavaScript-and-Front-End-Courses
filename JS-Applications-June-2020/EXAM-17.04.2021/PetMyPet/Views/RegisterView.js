import { html } from '../node_modules/lit-html/lit-html.js';
import { createFormObject } from '../src/helper.js';
import { user } from '../requests/requests.js';
import { saveUserInStorage } from '../src/helper.js';
import page from '../node_modules/page/page.mjs';

const errors = {
	email: 'Email is required',
	password: 'Password is required',
	repeatPass: 'Passwords do not match',
	409: 'Email already taken',
};

const checkForValidInput = (formObj) => {
	const checks = {
		email: (email) => email !== '',
		password: (password) => password !== '',
		'confirm-pass': (repass, password) => password === repass,
	};

	Object.entries(formObj).forEach(([key, value]) => {
		if (!checks[key](value, formObj.password)) {
			throw new Error(key);
		}
	});

	return true;
};

const register = async (e) => {
	e.preventDefault();
	const formObject = createFormObject(e.target);

	try {
		checkForValidInput(formObject);

		const response = await user.register({
			email: formObject.email,
			password: formObject.password,
		});

		saveUserInStorage(response);
		page.redirect('/');
	} catch (error) {
		return alert(errors[error.message]);
	}
};

const RegisterView = () => html`
	<section id="register-page" class="register">
		<form id="register-form" @submit="${register}">
			<fieldset>
				<legend>Register Form</legend>
				<p class="field">
					<label for="email">Email</label>
					<span class="input">
						<input type="text" name="email" id="email" placeholder="Email">
					</span>
				</p>
				<p class="field">
					<label for="password">Password</label>
					<span class="input">
						<input type="password" name="password" id="password" placeholder="Password">
					</span>
				</p>
				<p class="field">
					<label for="repeat-pass">Repeat Password</label>
					<span class="input">
						<input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
					</span>
				</p>
				<input class="button submit" type="submit" value="Register">
			</fieldset>
		</form>
	</section>`;

export { RegisterView }