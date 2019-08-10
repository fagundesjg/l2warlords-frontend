import React, { Fragment } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./styles.scss";

export default function Donates() {
	const list = [
		{ item: "Necklace of Frintezza", value: 80 },
		{ item: "Necklace of Valakas", value: 70 },
		{ item: "Earning of Antharas", value: 60 },
		{ item: "Ring of Belleth", value: 50 },
		{ item: "Ring of Baium", value: 50 },
		{ item: "Earning of Zaken", value: 40 },
		{ item: "Ring of Queen Ant", value: 30 },
		{ item: "Dragão Voador", value: 50 },
		{ item: "Clan LvL 11 Full Skill", value: 100 },
		{ item: "50x Gold Einhashed", value: 10 },
		{ item: "125x Gold Einhashed", value: 20 },
		{ item: "300x Gold Einhashed", value: 50 },
		{ item: "650x Gold Einhashed", value: 100 },
		{ item: "1325x Gold Einhashed", value: 200 },
		{ item: "2700x Gold Einhashed", value: 500 }
	];
	return (
		<Fragment>
			<Navbar />
			<div className="donates" align="center">
				<div className="content" align="center">
					<p className="title">Doações</p>
					<p className="description">
						Ao realizar uma doação, você estará ajudando o servidor a se manter
						online e com qualidade. Você receberá uma recompensa proporcional ao
						valor doado. Os valores foram definidos baseado na dificuldade de
						conseguir os itens in-game, pois buscamos um servidor justo para
						todos os jogadores.
					</p>
					<p className="title" style={{ marginTop: "30px" }}>
						Brinde / Valor Doado
					</p>
					<table cellSpacing="0">
						<tbody>
							{list.map((i, index) => (
								<tr key={index}>
									<td>{i.item}</td>
									<td>{"R$ " + i.value.toFixed(2).replace(".", ",")}</td>
								</tr>
							))}
						</tbody>
					</table>
					<p className="title" style={{ marginTop: "30px" }}>
						Como é feita a doação?
					</p>
					<p className="description donate">
						A doação poderá ocorrer via: depósito,transferência, ou boleto.
						Possuimos conta no Banco do Brasil e NuBank.
					</p>
					<p className="description donate">
						Você deverá enviar um e-mail para{" "}
						<font color="#f68902">doacao@l2warlords.com</font> informando o
						valor, itens que deseja de brinde e qual método deseja utilizar para
						doar. Logo em seguida enviaremos um e-mail com um boleto ou os dados
						necessários para a transferência/depósito.
					</p>
					<p className="description donate">
						A entrega dos brindes ocorrerá assim que o boleto/depósito ou
						transferência for debitado.
					</p>
					<p className="title" style={{ marginTop: "20px" }}>
						Dúvidas?
					</p>
					<p className="description" style={{ marginBottom: "30px" }}>
						Envie um e-mail para{" "}
						<font color="#f68902">suporte@l2warlords.com</font>
					</p>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}
