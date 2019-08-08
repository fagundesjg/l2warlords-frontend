import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./styles.scss";

export default function DownloadPage() {
	return (
		<Fragment>
			<Navbar />
			<div className="downloads" align="center">
				<div className="content" align="center">
					<div align="center">
						<p className="title">Instalação</p>
						<p className="description">
							Caso você não possua o cliente de Lineage 2 High Five, faça o
							download no link a seguir:
						</p>
						<button style={{ marginTop: "20px" }}>
							Download Cliente High Five
						</button>
						<p className="description" style={{ marginTop: "20px" }}>
							Após ter o cliente High Five baixado e instalado, você deverá
							deletar a pasta System e copiar e colar a nossa. Para fazer o
							download clique no link a seguir:
						</p>
						<button style={{ marginTop: "20px", marginBottom: "10px" }}>
							Download System L2Warlords
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}
