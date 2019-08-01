import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {

	render() {	
	  	return (
	  		<div className="flex_row_cell side_bar">
		  		<div className="sidebar_title">
		  			<h4>List of users</h4>
		  		</div>
	  			{
					this.props.users.map(item => (
	  			 	<Link to={item.id} key={item.id}>
		  			 	<div className='item_list'>
			  			 	<div className="flex_row">
				  			 	<div className="flex_row_cell side_bar_item">
				  			 		<Image src={item.avatar} roundedCircle className="avatar_small"/>
				  			 	</div>
				  			 	<div className="flex_row_cell--4 side_bar_user_info">
						  				<div className="flex_row">
						  			 		{item.name} {item.family_name}
						  			 	</div>
						  			 	<div className="flex_row">
						  			 		{item.post}
						  			 	</div>		  			 			  			 	
					  			</div>
				  			</div>
			  			</div>
		  		</Link>
	  			 	))
				}
			</div>
	  	);
	}
}