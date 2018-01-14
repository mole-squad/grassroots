import React, { Component } from 'react';

export class Navbar extends Component {
	render () {
		const styles = {
			display: 'flex',
			justifyContent: 'space-between',
			backgroundColor: '#EFEFEF',
			padding: '10px 25px'
		};

		return (
			<div style={styles}>
				<h1>Grassroots</h1>
			</div>
		)	
	}
	
};

