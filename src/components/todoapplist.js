import React from 'react';

export default class ToDoAppList extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(

            <ul>
            	<li>Task 1</li>
            	<li>Task 2</li>
            	<li>Task 3</li>
            </ul>
			);
	}
}