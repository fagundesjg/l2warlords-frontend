import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform";
import api from "../../services/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { toast } from "react-toastify";
import "./styles.scss";

export default class Register extends Component {
	state = {
		loading: false
	};

	errorNotify = msg => toast.error(msg);
	successNotify = msg => toast.success(msg);
	checkLogin = str => {
		for (let i = 0; i < str.length; i++) {
			if (
				!(
					(str[i] >= "a" && str[i] <= "z") ||
					(str[i] >= "A" && str[i] <= "Z") ||
					(str[i] >= "0" && str[i] <= "9")
				)
			)
				return false;
		}
		return true;
	};

	handleSubmit = async (data, { resetForm }) => {
		let error = "";
		let status = false;

		if (!this.checkLogin(data.login)) {
			error =
				"Erro. Certifique-se que no login contém apenas letras e numeros.";
		} else if (data.login < 6) {
			error = "Erro. O login deve ter no mínimo 6 caracteres!";
		} else if (data.password < 8) {
			error = "Erro. A senha deve ter no mínimo 8 caracteres!";
		} else if (data.password !== data.confirmPassword) {
			error = "Erro. As senhas devem ser iguais!";
		} else if (data.email !== data.confirmEmail) {
			error = "Erro. Os e-mail devem ser iguais!";
		} else {
			this.setState({ loading: true });

			const { data: login } = await api.get(
				"/accounts/show/login=" + data.login
			);

			if (login.length === 0) {
				status = true;
				const accountData = {};
				accountData["login"] = data.login;
				accountData["email"] = data.email;
				accountData["password"] = data.password;
				await api.post("/accounts", accountData);
			} else {
				status = false;
				error = "Erro. Já existe uma conta com esse login!";
			}
		}

		if (status) {
			this.successNotify("Conta cadastrada com sucesso!");
		} else {
			this.errorNotify(error);
		}

		this.setState(
			{ loading: false, error: "", registerStatus: false },
			resetForm()
		);
	};

	render() {
		const { loading } = this.state;
		return (
			<div className="register">
				<Navbar />
				<div className="content">
					<div className="register-box">
						<p className="title">Criar Conta</p>
						<p className="description">
							Para criar sua conta, é necessário preencher todos os campos a
							seguir, e não se esqueça de utilizar um e-mail válido!
							{/* , pois
							enviaremos um link de ativação para você começar a jogar! */}
						</p>
						<Form onSubmit={this.handleSubmit}>
							<div className="register-field">
								<p>Login *</p>
								<Input type="text" name="login" required />
							</div>
							<div className="register-field">
								<p>Senha *</p>
								<Input type="password" name="password" required />
							</div>
							<div className="register-field">
								<p>Confirmar senha *</p>
								<Input type="password" name="confirmPassword" required />
							</div>
							<div className="register-field">
								<p>E-Mail *</p>
								<Input type="email" name="email" required />
							</div>
							<div className="register-field">
								<p>Confirmar E-mail *</p>
								<Input type="email" name="confirmEmail" required />
							</div>
							<div className="register-button">
								<button type="submit">
									{loading ? (
										<i className="fa fa-spinner fa-pulse" />
									) : (
										"CADASTRAR"
									)}
								</button>
							</div>
						</Form>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
