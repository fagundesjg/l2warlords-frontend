import axios from "axios";

const api = axios.create({
	baseURL: "http://144.217.145.40:3333"
	//baseURL: "http://localhost:3333"
});

export default api;
