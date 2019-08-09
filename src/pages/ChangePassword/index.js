import React, { Component, Fragment } from "react";
import { Form, Input } from "@rocketseat/unform";
import api from "../../services/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { toast } from "react-toastify";
import "./styles.scss";

export default class ChangePassword extends Component {
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
		} else if (data.newPassword < 8) {
			error = "Erro. A senha deve ter no mínimo 8 caracteres!";
		} else if (data.newPassword !== data.confirmNewPassword) {
			error = "Erro. As novas senhas devem ser iguais!";
		} else {
			this.setState({ loading: true });

			const response = await api.put("/accounts", data);

			if (response.data.error) {
				error = response.data.error;
			} else status = true;
		}

		if (status) {
			this.successNotify("Senha alterada com sucesso!");
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
			<Fragment>
				<Navbar />
				<div className="change-password">
					<div className="content">
						<p className="title">Alterar Senha</p>
						<p className="description">
							Para alterar a senha, é necessário preencher todos os campos a
							seguir.
						</p>
						<Form onSubmit={this.handleSubmit}>
							<div className="register-field">
								<p>Login *</p>
								<Input type="text" name="login" required />
							</div>
							<div className="register-field">
								<p>Senha Atual*</p>
								<Input type="password" name="oldPassword" required />
							</div>
							<div className="register-field">
								<p>Nova Senha *</p>
								<Input type="password" name="newPassword" required />
							</div>
							<div className="register-field">
								<p>Confirmar Nova Senha *</p>
								<Input type="password" name="confirmNewPassword" required />
							</div>
							<div className="register-button">
								<button type="submit">
									{loading ? (
										<i className="fa fa-spinner fa-pulse" />
									) : (
										"CONFIRMAR"
									)}
								</button>
							</div>
						</Form>
					</div>
				</div>
				<Footer />
			</Fragment>
		);
	}
}
