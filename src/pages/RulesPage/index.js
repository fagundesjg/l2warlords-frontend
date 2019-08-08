import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./styles.scss";

export default function RulesPage() {
	const list = [
		{
			title: "1. Mantenha-se dentro da lei.",
			description:
				"Não poste nem divulgue material que possa estragar ou atrapalhar o computador de outro usuário, bem como praticar spam, divulgar ou exibir pornografia, insinuar a ilegalidade ou a criminalidade, sob o risco de ter seus dados como endereço de E-mail e IP entregues as autoridades competentes."
		},
		{
			title: "2. Direitos dos GMs.",
			description:
				"Os GMs do L2Warlords, a seu critério e sem aviso prévio estão autorizados a remover postagens ou vetar participantes considerados indesejáveis.\nÉ direito dos GMs, expulsarem e/ou bloquearem usuários que não estejam dentro desse código de conduta."
		},
		{
			title: "3. Respeite nossos GMs.",
			description:
				"Trate todos os GMs com respeito, não por estarem em um cargo elevado, mas sim porque são pessoas que estão dando o melhor de si, sem receber nenhuma espécie de recompensa (monetária). O cargo de GM, não é um cargo de status, mas sim de alta responsabilidade, por isso merece todo o nosso respeito."
		},
		{
			title: "4. Respeite todos os Players.",
			description:
				"Trate todos os outros participantes com respeito e não use os serviços do servidor L2Warlords para ameaçar, molestar, perseguir ou abusar de outros usuários."
		},
		{
			title: "5. Direitos dos Usuários.",
			description:
				"Todos os usuários têm o direito a ser bem atendido por nossos GMs, portanto, se algum GM lhe tratar de forma indesejada, comunique ao Admin."
		},
		{
			title: "6. Bot não é permitido.",
			description:
				"Logar no servidor e usar programas Bot para adquirir XP/SP, itens/materiais ou adena não será tolerado e a conta será banida. A utilização de qualquer outro programa, artifício ou blefe, que traga algum benefício, por mínimo que seja, em detrimentos aos demais players, será punido com suspensão ou banimento definitivo da conta. Se aproveitar de bugs ou desajustes econômicos de qualquer tipo em benefício próprio e não comunicar ao GM também é proibido."
		},
		{
			title: "7. KS é permitido.",
			description:
				"Se o jogador estiver insatisfeito, poderá abandonar a área que está jogando e procurar outra, lutar contra o indivíduo ou ainda ignorá-lo. "
		},
		{
			title: "8. PK é permitido.",
			description:
				"Seja em grupo, clan ou jogador de nível mais alto. Qualquer jogador poderá se tornar PK. Quando um char comete o PK (Player Killer - ato de matar outro player), este receberá uma penalidade de Karma. O player com Karma fica sujeito a dropa seus itens caso seja morto por outro player."
		},
		{
			title: "9.",
			description:
				'Chars com level acima de 25 que estiverem em cidades iniciais matando chars abaixo de lvl 20 serão punidos com suspensão ou banimento definitivo em caso de reincidência. Esta regra só é aplicável em ocorrências em cidade inicial. Provas como fotos devem ser enviadas com o mapa aberto ou ainda o comando "/loc" na tela para que fique visível a localização do mesmo.'
		},
		{
			title:
				"10. Mantenha um mínimo de respeito ao utilizar os chats globais (Shout, Trade e Hero Voice).",
			description:
				"Os outros jogadores não têm obrigação de aturar nada que não queiram. Palavrões considerados graves são passíveis de suspensão ou banimento conforme gravidade e interpretação do GM responsável. Ofender a moral do L2Warlords, xingar, ofender, acusar a Staff, são passíveis de banimento ou suspensão conforme interpretação do GM. Essa regra vale também para título de clans, nome de chars, pets e mensagens de lojas particulares. Ofensas por mensagem privada (Whisper) e chat geral normal não se enquadram nessa regra, já que o jogador incomodado pode se afastar ou simplesmente bloquear o chat de outro jogador."
		},
		{
			title: "11. ",
			description:
				"Acusações infundadas analisadas pelo GM onde ficarem claras as intenções únicas de prejudicar outrem, são passíveis de suspensão, e em caso de reincidência, banimento. Isso vale também para fotos (ScreenShots) forjadas, editadas com intuito de enganar a staff e prejudicar outro jogador. Quando for denunciar, tenha certeza absoluta do que está fazendo, ou você poderá sofrer a punição."
		},
		{
			title:
				"12. Se passar por GM é uma atitude que leva ao banimento imediato.",
			description:
				"Também não é permitido a utilização em títulos de clans para se fazer passar por GM´s. Ameaçar, coagir e chantagear outros players se passando por parente ou amigo do GM, é proibido."
		},
		{
			title:
				'13. É proibido por parte dos jogadores o comércio de itens, equipamentos ou chars em troca de "moeda real" ou "produtos reais" (escambo).',
			description:
				'Se comprovado o fato, o banimento será imediato. Não compre char nem itens de ninguém. Se descoberto você perderá tudo. Se alguém lhe oferecer a "venda" de algum ítem ou char, tire uma SS da tela e envie para a administração. Denuncie!'
		},
		{
			title: "14. É proibida a venda (ou troca por itens) de contas no jogo ",
			description:
				"assim como anunciar a venda. Se comprovado que a conta foi vendida, a mesma será definitivamente banida."
		},
		{
			title:
				"15. Não peça teleporte, itens, equipamentos, armas, ou qualquer outro item que o beneficie aos GM's.",
			description:
				'O abuso desta atitude causará sua suspensão e em casos extremos ou de reincidência, banimento. O GM também não devolve itens desaparecidos, seja por roubo de conta, por bug ou qualquer outro evento atípico, salvo os casos em que forem comprovados e localizados os itens com os responsáveis. O GM não "cria" itens para dar aos jogadores, portanto faça a gentileza de não insistir. Verificamos que em muitas ocorrências do sumiço de itens é por irresponsabilidade do jogador, por não tomar o devido cuidado com sua própria conta fornecendo seu login e senha para amigos, parentes ou ainda falta de cuidado com o local de onde loga (Computador de terceiros) ou falta de prevenção à vírus, keyloggers ou trojans em seu próprio computador. Insistir na devolução de itens, ou transgredir qualquer outra regra em função do "sumiço" de itens, poderá resultar em penalidade para seu char. Você está jogando no L2Warlords estando ciente e de acordo com as regras.'
		},
		{
			title: "16. ",
			description:
				"Atrapalhar o andamento de eventos, transgredindo as regras do mesmo de forma proposital, obter qualquer vantagem em detrimento aos demais jogadores ou ainda floodar o chat com intenção de atrapalhar o bom andamento é proibido. Essa atitude pode levar à jaula ou suspensão temporária de acordo com a interpretação do GM. Em casos extremos ou de reincidência, banimento definitivo."
		},
		{
			title: "17. ",
			description:
				"Criar contas fantasmas in-game se passando por outra pessoa com intuito de enganar ou confundir Staff e Players, é proibido. A pena é de suspensão à banimento definitivo, tanto das contas fantasmas, quanto das contas originais de tais players."
		},
		{
			title: "18. ",
			description:
				"Criar chars ou contas no fórum ou no jogo para divulgar outros servidores concorrentes ao L2Warlords.com é proibido e tal atitude será passível de suspensão ou banimento conforme julgamento do GM."
		},
		{
			title: "19. ",
			description:
				"Atrapalhar a movimentação de outros jogadores pelo cenário sumonando personagens ou pets ou criando lojas particulares em locais como respawn ou GateKeepers é proibido e pode causar a prisão do char em jaula ou suspensão do infrator."
		},
		{
			title:
				"20. Sua conta dentro do L2Warlords é pessoal e intransferível. Isso significa que a responsabilidade por seu login, senha e chars são de inteira responsabilidade do próprio jogador. ",
			description:
				"GMs não moverão chars entre contas, não passarão itens para ninguém, GMs não têm acesso às senhas de nenhum jogador nem as solicita. Se você, na condição de jogador, optar por informar seu login e senha a outra pessoa, qualquer acontecimento será de sua inteira responsabilidade. O L2Warlords não recomenda troca de chars e contas com outros jogadores, não se responsabiliza e não se envolve neste tipo de negociação in-game."
		},
		{
			title: "21. ",
			description:
				"Os membros da staff (GMs, Administradores, Moderadores), podem a qualquer tempo alterar ou remover uma punição anteriormente dada, de acordo com sua interpretação e análise posterior de cada caso."
		},
		{
			title: "22. ",
			description:
				"Todas as regras aqui aplicadas, valem também para qualquer área referente ao Servidor L2Warlords. Também haverá punição em casos que o GM interprete como ilegal, mesmo que não conste dentre as regras citadas acima. O L2Warlords respeita em primeiro lugar a constituição vigente no país e proíbe qualquer ato como apologias a drogas, prostituição, pedofilia, comércio de armas de fogo e qualquer outra ação que vá contra a lei. O L2Warlords se reserva no direito e dever de fornecer dados de seu usuário como IP, logs e datas de acesso à polícia ou à justiça, em caso de solicitação formal."
		}
	];

	return (
		<Fragment>
			<Navbar />
			<div className="rules" align="center">
				<div className="content" align="center">
					<p className="title">Código de conduta</p>
					<p className="description">
						O Código de Conduta abaixo visa construir uma comunidade mais
						tranquila e amigável. Contamos com a colaboração dos jogadores para
						manter a ordem em nossa comunidade.
					</p>
					<table cellSpacing="0">
						<tbody>
							{list.map((i, index) => (
								<tr key={index}>
									<td>
										<font color="#f68902">{i.title + ": "}</font>{" "}
										{i.description}
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<p
						className="description"
						style={{ marginTop: "20px", marginBottom: "10px" }}
					>
						As regras foram atualizadas pela última vez em: 08/08/2019.
					</p>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}
