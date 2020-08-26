import {
	CHANGE_SEARCH_FIELD,
	REQUEST_DROIDS_PENDING,
	REQUEST_DROIDS_SUCCESS,
	REQUEST_DROIDS_FAILED
} from './constants';
import { swapiLocal } from './droids';
import { newDroid, addingIndexKey } from './helpers';

export const setSearchField = (text) => {
	return {
		type: CHANGE_SEARCH_FIELD,
		payload: text
	}
}

export const requestDroids = () => (dispatch) => {
	dispatch({ type: REQUEST_DROIDS_PENDING })

	let d = [];
    const randomNumber = Math.floor(Math.random() * (15 - 5 + 1) + 5);
    for (let y = 0; y < randomNumber; y++) {
      d.push(newDroid());
    }

	fetch(`https://swapi.dev/api/species/2/`)
	.then(response => response.json())
	.then(data => {
		for (let i = 0; i < data.people.length; i++) {
			fetch(`https://${data.people[i].substring(7)}`)
			.then(response => response.json())
			.then(data => {

				// changing the homeworld url to a real name
				for (let j = 0; j < swapiLocal.length ; j++) {
					if (data.name === swapiLocal[j].name) {
						data.homeworld = swapiLocal[j].homeworld;
					} 
				}

				d.push(data);
				dispatch({ type: REQUEST_DROIDS_SUCCESS, payload: addingIndexKey(d) })
			});
		}
	})
	.catch(error => dispatch({ type: REQUEST_DROIDS_FAILED, payload: error }));
}
