import React from 'react';

export default class AddNewTask extends React.Component{
	constructor(){
		super();
		this.justSubmitted = this.justSubmitted.bind(this);
	}
	justSubmitted(event){
		event.preventDefault();
		var input = event.target.querySelector('input');
		var value = input.value;
		input.value = '';
		this.props.updatedList(value);
	}
	render(){
		return(

            <form onSubmit={this.justSubmitted}>
            	<input type="text" />
            </form>
			);
	}
}