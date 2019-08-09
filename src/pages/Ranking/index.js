import React, { Component, Fragment } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../services/api";
import "./styles.scss";

export default class Ranking extends Component {
	state = {
		top_pvp: [],
		top_pk: [],
		top_online: []
	};

	secondsToTime = seconds => {
		seconds = Number(seconds);
		var d = Math.floor(seconds / (3600 * 24));
		var h = Math.floor((seconds % (3600 * 24)) / 3600);
		var m = Math.floor((seconds % 3600) / 60);
		var s = Math.floor(seconds % 60);

		var dDisplay = d > 0 ? d + (d === 1 ? " dia, " : " dias, ") : "";
		var hDisplay = h > 0 ? h + (h === 1 ? " hora, " : " horas, ") : "";
		var mDisplay = m > 0 ? m + (m === 1 ? " minuto e " : " minutos e ") : "";
		var sDisplay = s > 0 ? s + (s === 1 ? " segundo" : " segundos") : "";
		return dDisplay + hDisplay + mDisplay + sDisplay;
	};

	componentDidMount = async () => {
		const { data: top_pvp } = await api.get("/characters/filter=top_pvp");
		const { data: top_pk } = await api.get("/characters/filter=top_pk");
		const { data: top_online } = await api.get("/characters/filter=top_online");
		this.setState({ top_pvp, top_pk, top_online });
	};

	render() {
		const { top_pvp, top_pk, top_online } = this.state;
		return (
			<Fragment>
				<Navbar />
				<div className="ranking" align="center">
					<div className="content" align="center">
						<p className="title">Top PvP</p>
						<table cellSpacing="0">
							<thead>
								<tr>
									<th>Nick</th>
									<th>PvP's</th>
								</tr>
							</thead>
							<tbody align="center">
								{top_pvp.map((char, index) => (
									<tr key={index}>
										<td>{char.char_name}</td>
										<td>{char.pvpkills}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="content" align="center">
						<p className="title">Top PK</p>
						<table cellSpacing="0">
							<thead>
								<tr>
									<th>Nick</th>
									<th>PK's</th>
								</tr>
							</thead>
							<tbody align="center">
								{top_pk.map((char, index) => (
									<tr key={index}>
										<td>{char.char_name}</td>
										<td>{char.pkkills}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="content" align="center">
						<p className="title">Top Online</p>
						<table cellSpacing="0">
							<thead>
								<tr>
									<th>Nick</th>
									<th>Tempo Online</th>
								</tr>
							</thead>
							<tbody align="center">
								{top_online.map((char, index) => (
									<tr key={index}>
										<td>{char.char_name}</td>
										<td>{this.secondsToTime(char.onlinetime)}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<Footer />
			</Fragment>
		);
	}
}
