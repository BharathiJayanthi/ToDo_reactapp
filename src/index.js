import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import AddNewTask from './components/addnewtask';
import ToDoAppList from './components/todoapplist';

class Todo extends Component{
	constructor() {
		super();
	}

	render(){
		return(
			<div>
			<h1>ToDo App</h1>
			<AddNewTask />
			<ToDoAppList />
			</div>
			);
	}
}

ReactDOM.render(<Todo />, document.getElementById('root'));

