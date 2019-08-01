import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import InfoPage from './infocontainer/InfoPage';
import SideBar from './sidebar/SideBar';
import EmptyPage from './infocontainer/EmptyPage';

export default class Layout extends Component {

	render() {	
	  	return (
		  	<div className='flex-container'>
			  	<Router>
				  	<div className="flex_row">
			  			<SideBar users={this.props.users} status={this.props.status}/>
		  				<Route exact path='/' component={EmptyPage}/>
				        <Route path='/:userId' render={(props)=><InfoPage users={this.props.users} {...props}/>}/> 
					</div>
				</Router>
		  	</div>
	  	);
	}
}
