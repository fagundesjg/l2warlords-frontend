import React, { Fragment } from "react";

import Navbar from "../../components/Navbar";
import Infos from "../../components/Infos";
import "./styles.scss";
import Footer from "../../components/Footer";

export default function Home() {
	return (
		<Fragment>
			<Navbar />
			<div className="home">
				<div className="content">
					<Infos />
					<span>
						<p className="title">Servidor aberto!</p>
						<p className="description">
							É com imenso prazer que declaro oficialmente aberto o servidor.
						</p>
						<p className="author">Admin L2Warlords</p>
						<p className="date">09/08/2019</p>
					</span>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}
