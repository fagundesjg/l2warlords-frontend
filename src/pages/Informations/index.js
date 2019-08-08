import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import "./styles.scss";
import Footer from "../../components/Footer";

export default function Informations() {
	return (
		<Fragment>
			<Navbar />
			<div className="informations">
				<div className="content">
					<h1 style={{ marginTop: "15px" }}>Informações do Server</h1>
					<p>
						O L2Warlords é um servidor emulado do jogo Lineage 2 High Five.
						Nosso principal objetivo é proporcionar diversão aos jogadores,
						mantendo ao máximo a jogabilidade original unida à praticidade de um
						servidor PVP, sem edições e classes totalmente equilibradas, além de
						um principal diferencial: totalmente gratuito. No L2Warlords Shop
						você encontra itens diversos incluindo Armaduras, Armas, Joias e
						Capas para todas as classes. Todos os itens podem ser adquiridos sem
						nenhuma recompensa monetária (doação) ao servidor.
					</p>
					<h1 style={{ marginTop: "15px" }}>Rates</h1>
					<p>XP 1000x - SP 1000x - Adena 1000x</p>
					<p>Safe Enchant +3 / Max + 16</p>
					<p>Normal Enchant 70%</p>
					<p>Blessed Enchant 85%</p>
					<p>Divine Enchant (S,A,B) 100%</p>
					<h1 style={{ marginTop: "30px" }}>Shop</h1>
					<p>Moeda de troca: Gold Einhashed e Silver Shillen</p>
					<p>Nobless: Caradine Letter</p>
					<p>Quest Baium, Valakas e Antharas no GMSHop</p>
					<p>Jóias Boss: Drop</p>
					<h1 style={{ marginTop: "30px" }}>Npc's</h1>
					<p>NPC Buffer +18</p>
					<p>Gatekeeper Global</p>
					<p>Augment</p>
					<p style={{ marginBottom: "30px" }}>
						TvT event de hora em hora premiando Gold
					</p>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}
