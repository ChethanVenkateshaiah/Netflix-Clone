import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3/discover/tv?api_key=3e2ccc31d1085ec88418cabd5fadeac1&with_networks=213",
});

export default instance;
