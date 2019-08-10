import React, { Component } from "react";
import api from "../../services/api";
import "./styles.scss";

export default class Infos extends Component {
	state = {
		usersOnline: 0
	};

	componentDidMount = async () => {
		const users = await api.get("/characters/filter=players_online");
		this.setState({ usersOnline: users.length });
	};

	render() {
		return (
			<div className="info">
				<p>
					Login Server:{" "}
					<font color="FF0000">
						<b>OFFLINE</b>
					</font>
				</p>
				<p>
					Game Server:{" "}
					<font color="FF0000">
						<b>OFFLINE</b>
					</font>
				</p>
				<p>
					Players Online: <b>{this.state.usersOnline}</b>
				</p>
			</div>
		);
	}
}
