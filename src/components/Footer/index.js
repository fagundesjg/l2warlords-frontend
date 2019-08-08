import React from "react";
import "./styles.scss";

export default function Footer() {
	return (
		<div className="footer">
			<p>
				© Copyright {new Date().getFullYear()} L2WARLORDS - Based on L2J-Server
			</p>
		</div>
	);
}
