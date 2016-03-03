import axios from "axios";
//const API_KEY="f6676c90ab39762f338a06cda9e4b683";
//const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL = `/api-request.php`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {

	//const url = `${ROOT_URL}&q=${city},us`;
	const url = `${ROOT_URL}?city=${city}&country=us`;
	const request = axios.get(url);

	return {
		type : FETCH_WEATHER,
		payload: request
	}
}
