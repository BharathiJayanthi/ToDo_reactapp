import React,{ Component } from 'react';


import AddNewTask from './addnewtask';
import ToDoAppList from './todoapplist';

export default class ToDo extends Component{
	constructor(props) {
		super();
		this.state={
			tasks: props.tasks
		}
		this.updatedList = this.updatedList.bind(this);
	}
	updatedList(text){
     var updatedTask = this.state.tasks;
       updatedTask.push(text);
       this.setState({
       	tasks: updatedTask
       })
	}

	render(){
		
		return(
			<div>
			<h1>ToDo App</h1>
			<AddNewTask updatedList={this.updatedList} />
			<ToDoAppList tasks={this.state.tasks} />
			</div>
			);
	}
}
