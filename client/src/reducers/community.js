import { COMMUNITIES_LOADED } from '../actions/community.js';

export function communitiesById(state={}, action) {
	switch(action.type) {
		case COMMUNITIES_LOADED:
			const newCommunities = Object.assign({}, state);

			action.communities.forEach(aCommunity => newCommunities[aCommunity._id] = aCommunity);
			console.log(newCommunities);
			return newCommunities;

		default:
			return state;
	}
}