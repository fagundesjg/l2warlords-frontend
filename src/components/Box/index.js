import React from "react";

import "./styles.scss";

export default function Box({ title, description }) {
	return (
		<div className="box">
			<p className="title">{title}</p>
			<p className="description">{description}</p>
		</div>
	);
}
