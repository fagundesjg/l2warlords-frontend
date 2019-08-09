import React, { Fragment } from "react";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

import "font-awesome/css/font-awesome.min.css";
import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<Fragment>
			<Routes />
			<ToastContainer autoClose={5000} />
		</Fragment>
	);
}

export default App;
