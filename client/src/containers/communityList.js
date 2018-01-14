import { connect } from 'react-redux';

import { loadCommunities } from '../actions/community.js';
import { CommunityList } from '../components/communityList.jsx';

const mapStateToProps = (state) => {
	return {
		communities: Object.keys(state.communitiesById).map(anId => state.communitiesById[anId])
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCommunities: () => dispatch(loadCommunities())
	};
}

export const CommunityListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CommunityList);