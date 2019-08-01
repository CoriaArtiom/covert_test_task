import React, { Component } from 'react';
import CommentForm from './CommentForm';
import { setTitle, setText, setPhone, setTitleError, setTextError, setPhoneError } from '../../store/infocontainer/commentform/actions';
import { updateUsers } from '../../store/sidebar/sidebar/action';
import { connect } from 'react-redux';

class CommentFormContainer extends Component {

	render() {	
	  	return (
			<CommentForm
				title={this.props.title}
				text={this.props.text}
				phone={this.props.phone}
				titleError={this.props.titleError}
				textError={this.props.textError}
				phoneError={this.props.phoneError}

				user={this.props.user}
				users={this.props.users}

				setTitle={this.props.setTitle}
				setText={this.props.setText}
				setPhone={this.props.setPhone}
				setTitleError={this.props.setTitleError}
				setTextError={this.props.setTextError}
				setPhoneError={this.props.setPhoneError}

				updateUsers={this.props.updateUsers}
			/>
	  	);
	}
}

const mapStateToProps = state => {
	return{
		title: state.commentForm.title,
		text: state.commentForm.text,
		phone: state.commentForm.phone,

		titleError: state.commentForm.titleError,
		textError: state.commentForm.textError,
		phoneError: state.commentForm.phoneError,

		users: state.users.data
	};
}

const mapDispatchToProps =  {
	setTitle,
	setText,
	setPhone,
	updateUsers,
	setTitleError,
	setTextError,
	setPhoneError
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentFormContainer);