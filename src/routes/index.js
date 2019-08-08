import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Informations from "../pages/Informations";
import DownloadPage from "../pages/DownloadPage";
import Donates from "../pages/Donates";
import GrandBosses from "../pages/GrandBosses";
import RulesPage from "../pages/RulesPage";
import Ranking from "../pages/Ranking";

const Routes = () => (
	<BrowserRouter>
		<Fragment>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/cadastrar" component={Register} />
				<Route exact path="/informacoes" component={Informations} />
				<Route exact path="/downloads" component={DownloadPage} />
				<Route exact path="/doacoes" component={Donates} />
				<Route exact path="/grandbosses" component={GrandBosses} />
				<Route exact path="/regras" component={RulesPage} />
				<Route exact path="/ranking" component={Ranking} />
			</Switch>
		</Fragment>
	</BrowserRouter>
);

export default Routes;
