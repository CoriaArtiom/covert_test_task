import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import CommentFormContainer from './CommentFormContainer';
import UsersCarousel from './UsersCarousel'

export default class Layout extends Component {

	getTime = (date) => {
		return (date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() + " " + date.getHours() +":" +("0"+date.getMinutes()).slice(-2))
	}

	commentsSort = (data) => {
		let commentsSorted = data.sort(this.compareNumeric);
		return commentsSorted.slice(0,4)
	}

	compareNumeric = (a, b) => {
 		 return b.date-a.date;
	}

	render() {
		const users = this.props.users;
		const user = users.find(user => user.id === this.props.match.params.userId)
	  	return (
			<div className="flex_row_cell--2">
				<div className="sidebar_title">
		  			<h4>User profile</h4>
		  		</div>
		  		<div className="carousel">
		  			<UsersCarousel users={this.props.users} user={user}/>
		  		</div>
		  		<div className="flex_row info_page">
			  		<div className="flex_row_cell avatar">
			  			<Image src={user.avatar} rounded className="avatar_full"/>
			  		</div>
			  		<div className="flex_row_cell user_info">
				  		<Col xs={12}>
							<h2>{user.name} {user.family_name}</h2>
						</Col> 
						<Col xs={12}>
							Post: {user.post} 
						</Col> 
						<Col xs={12}>
							Adress: {user.adress}
						</Col>
					</div>
				</div>
				<div className="flex_row comment_box">
					<div className="flex_row ">
							<h2>Latest five comments</h2>
					</div>
						{
						user.comments[0] ? (
							this.commentsSort(user.comments).map(comment => (
								<div className="flex_row " key={comment.date}>
						  			 <div>
							  			<div className="comment_title">
							  			 	{comment.title}
							  			</div>
							  			<div className="comment_text">
							  			 	{comment.text}
							  			</div>
							  			<div className="comment_date">
							  			 	{this.getTime(new Date((comment.date)))}
							  			</div>	  			 			  			 	
							  		</div>
							  	</div>))
				  		) : (
						  	<div className="flex_row ">
						  		No comments here, u can leave a comment
						  	</div>
								)
				  		}
				</div>
				<div className="flex_row comment_box">
					<CommentFormContainer 				
						user={user}
					/>
				</div>	
			</div>
	  	);
	}
}
