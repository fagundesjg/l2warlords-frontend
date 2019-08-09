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

	handleSubmit = async (data, { resetForm }) => {
		let error = "";
		let status = false;
		if (data.password < 8) {
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
							seguir, e não se esqueça de utilizar um e-mail válido, pois
							enviaremos um link de ativação para você começar a jogar!
						</p>
						<Form onSubmit={this.handleSubmit}>
							<div className="register-field">
								<p>Login *</p>
								<Input type="text" name="login" />
							</div>
							<div className="register-field">
								<p>Senha *</p>
								<Input type="password" name="password" />
							</div>
							<div className="register-field">
								<p>Confirmar senha *</p>
								<Input type="password" name="confirmPassword" />
							</div>
							<div className="register-field">
								<p>E-Mail *</p>
								<Input type="text" name="email" />
							</div>
							<div className="register-field">
								<p>Confirmar E-mail *</p>
								<Input type="text" name="confirmEmail" />
							</div>
							<div className="register-button">
								<button type="submit">
									{loading ? (
										<i className="fa fa-spinner fa-pulse" />
									) : (
										"CADASTRAR"
									)}
								</button>
								<a href="/recuperar-senha">Recuperar senha</a>
							</div>
						</Form>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
