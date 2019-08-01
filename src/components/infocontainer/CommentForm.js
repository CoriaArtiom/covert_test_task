import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import InputMask from 'react-input-mask';

export default class CommentForm extends Component {

	onTitleChange = (e) => {
		this.props.setTitle(e.target.value)
	}

	onTextChange = (e) => {
		this.props.setText(e.target.value)
	}

	onPhoneChange = (e) => {
		this.props.setPhone(e.target.value)
	}

	currentUserDataUpdate = () => {
		let newComment = {
			title: this.props.title,
			text: this.props.text,
			phone: this.props.phone,
			date: Date.now()
		}

		let currentUsers = this.props.users;
		let currentUser = this.props.user;

		currentUser.comments.push(newComment)

		let index = currentUsers.indexOf(currentUser);

		if (index !== -1) {
			currentUsers[index] = currentUser;
			this.props.updateUsers(currentUsers);
		}
	}

	checkTitleValidation = () => {
		if(this.props.title){
			if(this.props.title.length < 5 || this.props.title.length > 80) {
				this.props.setTitleError("Title must be more than 5 and less then 80 symbols");
				return false
			} else {
				this.props.setTitleError("");
				return true
			}
		} else {
			this.props.setTitleError("");
		}
	}

	checkTextValidation = () => {
		if(this.props.text){
			if(this.props.text.length > 128) {
				this.props.setTextError("Text must be less then 128 symbols");
				return false
			} else {
				this.props.setTextError("");
				return true
			}
		} else {
			this.props.setTextError("");
		}	
	}

	checkPhoneValidation = () => {
		if(this.props.phone){
			if(this.props.phone.length !== 16) {
				this.props.setPhoneError("Phone number is incorrect");
				return false
			} else {
				this.props.setPhoneError("");
				return true
			}
		} else {
			this.props.setPhoneError("");
		}	
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.currentUserDataUpdate();
		this.props.setTitle('');
		this.props.setText('');
		this.props.setPhone('');
	}

	buttonActive = () => {
		if (this.props.title && this.props.text && this.props.phone && !this.props.titleError && !this.props.textError && !this.props.phoneError) {
			return true
		}
	}

	render() {	
	  	return (
	  		<div className="flex_row">
				<Form onSubmit={this.handleSubmit}>
					<h3>Leave a comment about profile</h3>
					<Form.Group>
					    <Form.Label>Title</Form.Label>
					    <div className="input_area">
						    <InputMask className="flex_row input_box"						
								type="text"
								id="title"
								name="title"
								value={this.props.title}
								onBlur={this.checkTitleValidation}
								onChange={this.onTitleChange}
								placeholder='Title...'
							/>
							{this.props.titleError ? 
							<div className="error">
							   {this.props.titleError ? this.props.titleError:null}
							</div> : null}
						</div>
						<Form.Label>Your comment</Form.Label>
						<div className="input_area">
						    <textarea className="flex_row input_box"
						    	rows="4"					
								type="textarea"
								id="comment"
								name="comment"
								value={this.props.text}
								onBlur={this.checkTextValidation}
								onChange={this.onTextChange}
								placeholder='Comment...'
							/>
								{this.props.textError ? 
								<div className="error">
								   {this.props.textError ? this.props.textError:null}
								</div> : null}
			    		</div>
						<Form.Label>Your phone</Form.Label>
						<div className="input_area">
							<InputMask className="flex_row input_box"
      							mask="+7(999)999-99-99"
      							maskChar={null}
      							type="text"
								id="phone"
								name="phone"
								value={this.props.phone}
								onBlur={this.checkPhoneValidation}
								onChange={this.onPhoneChange}
								placeholder='Phone...'
    						/>
								{this.props.phoneError ? 
								<div className="error">
								   {this.props.phoneError ? this.props.phoneError:null}
								</div> : null}
			    		</div>
				  	</Form.Group>
					<Button variant="primary" type="submit" disabled={!this.buttonActive()}>
						Submit
					</Button>
				</Form>
			</div>
	  	);
	}
}