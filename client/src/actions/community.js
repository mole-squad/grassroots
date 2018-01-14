
export function loadCommunities() {
	return function(dispatch) {
		return fetch('/api/community')
			.then(resp => resp.json())
			.then(data => {
				dispatch(communitiesLoaded(data.items));
			});
	}
}

export const COMMUNITIES_LOADED = 'COMMUNITIES_LOADED';
function communitiesLoaded(communities) {
	return {
		type: COMMUNITIES_LOADED,
		communities
	};
}