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
		this.removeTask = this.removeTask.bind(this);
	}

	updatedList(text){
     var updatedTask = this.state.tasks;
       updatedTask.push(text);
       this.setState({
       	tasks: updatedTask
       });
       this.updateLocalStorage(updatedTask);

	}
    

    removeTask(text){
		var removeTasks= this.state.tasks;
       removeTasks.splice(removeTasks.indexOf(text), 1);
       this.setState({
       	tasks: removeTasks
       });
        this.updateLocalStorage(removeTasks);

	}

	updateLocalStorage(updatedTask, removeTasks){
		localStorage.setItem('storedTasks', JSON.stringify(updatedTask, removeTasks))
	}


	render(){
		
		return(
			<div>
			<h1>ToDo App</h1>
			<AddNewTask updatedList={this.updatedList} />
			<ToDoAppList tasks={this.state.tasks} remove={this.removeTask}/>
			</div>
			);
	}
}
