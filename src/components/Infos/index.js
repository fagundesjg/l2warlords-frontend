import React, { Component } from "react";
import api from "../../services/api";
import "./styles.scss";

export default class Infos extends Component {
	state = {
		usersOnline: 0
	};

	componentDidMount = async () => {
		const { data: users } = await api.get("/characters/filter=players_online");
		if (users.length > 0) {
			this.setState({ usersOnline: users.length });
		}
	};

	render() {
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
					Players Online: <b>{this.state.usersOnline}</b>
				</p>
			</div>
		);
	}
}
