import React, { Component } from 'react';

export class CommunityList extends Component {
	componentDidMount() {
		this.props.fetchCommunities();
	}

	render() {
		const communitiesElms = this.props.communities.map(aCommunity => {
			return (
				<h3 key={aCommunity._id}>{ aCommunity.name }</h3>
			)
		});

		return (
			<div>
				<h1>All Communities</h1>
				<div className="list">{communitiesElms}</div>
			</div>
		);	
	}
	
}