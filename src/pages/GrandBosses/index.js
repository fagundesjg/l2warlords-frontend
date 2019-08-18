import React, { Fragment, Component } from "react";

import api from "../../services/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./styles.scss";

export default class GrandBosses extends Component {
	state = {
		grandbosses: [
			{ id: 29001, status: "off" },
			{ id: 29006, status: "off" },
			{ id: 29014, status: "off" },
			{ id: 29022, status: "off" },
			{ id: 29020, status: "off" },
			{ id: 29028, status: "off" },
			{ id: 29118, status: "off" },
			{ id: 29068, status: "off" }
		]
	};

	componentDidMount = async () => {
		const { data } = await api.get("/grandbosses");
		var bosses = this.state.grandbosses;
		data.forEach(d => {
			bosses.forEach(b => {
				if (b.id === d.boss_id && d.status === 0) {
					b.status = "on";
				}
			});
		});

		this.setState({ grandbosses: bosses });
	};

	render() {
		const { grandbosses } = this.state;
		return (
			<Fragment>
				<Navbar />
				<div className="grandbosses" align="center">
					<div className="content" align="center">
						<p className="title">Grand Bosses Status</p>
						<div className="boss-status">
							{grandbosses.map((boss, index) => (
								<img
									key={index}
									src={"/grandbosses/" + boss.id + "_" + boss.status + ".png"}
									alt={"Boss Status"}
								/>
							))}
						</div>
					</div>
				</div>
				<Footer />
			</Fragment>
		);
	}
}
