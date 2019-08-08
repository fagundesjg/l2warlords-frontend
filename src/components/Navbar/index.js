import React, { Component } from "react";
import "./styles.scss";

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<div className="navbar">
					<ul>
						<li>
							<a href="/">Início</a>
						</li>
						<li>
							<span className="dropdown">
								<button className="dropbtn">
									Informações <i className="fa fa-angle-down" />
								</button>
								<div className="dropdown-content">
									<a href="/informacoes">Características</a>
									<a href="/grandbosses">Grand Bosses Status</a>
									<a href="/regras">Regras</a>
									<a href="/ranking">Ranking</a>
								</div>
							</span>
						</li>
						<li>
							<a href="/cadastrar">Cadastro</a>
						</li>
						<li>
							<a href="/downloads">Downloads</a>
						</li>
						<li>
							<a href="/doacoes">Doações</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
