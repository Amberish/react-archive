import React, {Component} from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";

export default class SearchBar extends Component {

	constructor (props) {
		super(props);

		this.state = {term : ""};

		//binding context for this on function "onInputChange"
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange (event) {
		this.setState({term : event.target.value});
	}

	onFormSubmit (event) {
		event.preventDefault();

		//Fetch weather data; An action in initiated through action creator fetchWeather(cityName)
		this.props.fetchWeather(this.state.term);
		this.setState({term : ''});
	}

	render () {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
					placeholder="Enter city name (US) to get forecast..."/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-primary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
