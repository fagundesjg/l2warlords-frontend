import React from "react";

import "./styles.scss";

export default function Infos() {
	return (
		<div className="info">
			<p>
				Login Server:{" "}
				<font color="FF0000">
					<b>OFFLINE</b>
				</font>
			</p>
			<p>
				Game Server:{" "}
				<font color="FF0000">
					<b>OFFLINE</b>
				</font>
			</p>
			<p>
				Players Online: <b>0</b>
			</p>
		</div>
	);
}
