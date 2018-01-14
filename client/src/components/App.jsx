import React, { Component } from 'react';

import { Navbar } from './navbar.jsx';
import { CommunityListContainer } from '../containers/communityList.js';

export class App extends Component {
  render() {
    return (
    	<div>
   			<Navbar />
   			<CommunityListContainer />
 			</div>
		)
  }
}