import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google-map";

class WeatherList extends Component {

	renderWeather (cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart color="orange" data={temps} units="K"/></td>
				<td><Chart color="red" data={pressures} units="hPa"/></td>
				<td><Chart color="blue" data={humidities} units="%"/></td>
			</tr>
		)
	}

	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temprature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{
						(this.props.weather.length == 0) ? <tr><td className="no-record" colSpan="4">No Record Added!</td></tr> : this.props.weather.map(this.renderWeather)
					}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);
