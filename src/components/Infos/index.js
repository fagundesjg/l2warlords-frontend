import React, { Component } from "react";
import api from "../../services/api";
import "./styles.scss";

export default class Infos extends Component {
	state = {
		usersOnline: 0,
		accounts: 0,
		characters: 0
	};

	componentDidMount = async () => {
		const { data: users } = await api.get("/characters/filter=players_online");
		const { data: accounts } = await api.get("/accounts");
		const { data: characters } = await api.get(
			"/characters/filter=total_players"
		);
		this.setState({
			usersOnline: users.length || 0,
			accounts: accounts.length || 0,
			characters: characters.length || 0
		});
	};

	render() {
		const { usersOnline, accounts, characters } = this.state;

		return (
			<div className="info">
				<p>
					Login Server:{" "}
					<font color="00FF00">
						<b>ONLINE</b>
					</font>
				</p>
				<p>
					Game Server:{" "}
					<font color="00FF00">
						<b>ONLINE</b>
					</font>
				</p>
				<p>
					Players Online: <b>{usersOnline}</b>
				</p>
				<p>
					Contas: <b>{accounts}</b>
				</p>
				<p>
					População: <b>{characters}</b>
				</p>
			</div>
		);
	}
}
