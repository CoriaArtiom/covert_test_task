import React, { Component } from 'react';
import { getUsers } from '../store/sidebar/sidebar/action';
import { setTitle, setText, setPhone } from '../store/infocontainer/commentform/actions';
import { connect } from 'react-redux';
import Layout from './Layout';

class LayoutContainer extends Component {

	componentWillMount() {
		this.props.getUsers();
	}

	render() {
		if (this.props.status) {	
		  	return (
				<Layout
					title={this.props.title}
					text={this.props.text}
					phone={this.props.phone}
					users={this.props.users}

					setTitle={this.props.setTitle}
					setText={this.props.setText}
					setPhone={this.props.setPhone}
					status={this.props.status}
				/>
		  	);
		} else {
			return <div>Loading...</div>
		}
	}
}

const mapStateToProps = state => {
	return{
		title: state.commentForm.title,
		text: state.commentForm.text,
		phone: state.commentForm.phone,
		status: state.users.status,
		users: state.users.data
	};
}

const mapDispatchToProps =  {
	setTitle,
	setText,
	setPhone,
	getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);