import {
	CHANGE_SEARCH_FIELD,
	REQUEST_DROIDS_PENDING,
	REQUEST_DROIDS_SUCCESS,
	REQUEST_DROIDS_FAILED
} from './constants';

const initialStateSearch = {
	searchField: ''
};

export const searchDroids = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: action.payload });
		default:
			return state;
	}
}

const initialStateDroids = {
	isPending: false,
	droids: [],
	error: ''
};

export const requestDroids = (state=initialStateDroids, action={}) => {
	switch(action.type) {
		case REQUEST_DROIDS_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_DROIDS_SUCCESS:
			return Object.assign({}, state, { isPending: false, droids: action.payload });
		case REQUEST_DROIDS_FAILED:
			return Object.assign({}, state, { isPending: false, error: action.payload });
		default:
			return state;
	}
}
