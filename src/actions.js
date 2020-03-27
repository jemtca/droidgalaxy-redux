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

	for (let i = 1; i < 10; i++) {
		fetch(`https://swapi.co/api/people/?page=${i}`)
			.then(response => response.json())
			.then(data => {
				for (let j = 0; j < data.results.length; j++) {
		            if (data.results[j].species[0] === 'https://swapi.co/api/species/2/') {
		              let found = false;
		              for (let x = 0; x < swapiLocal.length && !found; x++) {
		                if (data.results[j].name === swapiLocal[x].name) {
		                  data.results[j].homeworld = swapiLocal[x].homeworld;
		                  found = true;
		                }
		              }
		              d.push(data.results[j]);
		            }
	          	}
				dispatch({ type: REQUEST_DROIDS_SUCCESS, payload: addingIndexKey(d) })
			})
			.catch(error => dispatch({ type: REQUEST_DROIDS_FAILED, payload: error }));
	}
}
