import {FETCH_WEATHER} from "../actions";
/*
	State snapshot at a point of time:
	weather : [
			{
				city: {..},
				list: [
					{main: {humidity:123, pressure: 123, temp: 123, ...}}
				],
				...
			},
			...
	]
*/
export default function (state = [], action) {
	switch(action.type){
		case FETCH_WEATHER:
			return [action.payload.data, ...state];
	}
	return state;
}
