import React from "react";

import Navbar from "../../components/Navbar";
import Box from "../../components/Box";
import Infos from "../../components/Infos";
import "./styles.scss";
import Footer from "../../components/Footer";

export default function Home() {
	return (
		<div className="home">
			<Navbar />
			<div className="content">
				<Infos />
				<div className="center">
					<Box
						title="Testando box 1!"
						description="Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Quem num gosta di mim que vai caçá sua turmis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.

Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.

Pra lá , depois divoltis porris, paradis. Quem num gosta di mé, boa gentis num é. Per aumento de cachacis, eu reclamis. Viva Forevis aptent taciti sociosqu ad litora torquent.

Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Casamentiss faiz malandris se pirulitá."
					/>
					<Box title="Testando box 2!" description="Baguio é doido tio!" />
					<Box title="Testando box 1!" description="Funcionou msm hahaha!" />
					<Box title="Testando box 2!" description="Baguio é doido tio!" />
					<Box title="Testando box 1!" description="Funcionou msm hahaha!" />
					<Box title="Testando box 2!" description="Baguio é doido tio!" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
