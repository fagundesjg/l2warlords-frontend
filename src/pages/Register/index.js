import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./styles.scss";

export default function Register() {
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
					<div className="register-field">
						<p>Login *</p>
						<input type="text" />
					</div>
					<div className="register-field">
						<p>Senha *</p>
						<input type="text" />
					</div>
					<div className="register-field">
						<p>Confirmar senha *</p>
						<input type="text" />
					</div>
					<div className="register-field">
						<p>E-Mail *</p>
						<input type="text" />
					</div>
					<div className="register-field">
						<p>Confirmar E-mail *</p>
						<input type="text" />
					</div>
					<div className="register-button">
						<button onClick={() => {}}>CADASTRAR</button>
						<a href="/recuperar-senha">Recuperar senha</a>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
