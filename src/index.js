import React from 'react';
import ReactDOM from 'react-dom';

import ToDo from './components/todo';


var tasksList = ["tasks1", "tasks2"];
var tasks = localStorage.getItem('storedTasks');
if (tasks){
	tasksList = JSON.parse(tasks);
}

ReactDOM.render(<ToDo tasks={tasksList} />, document.getElementById('root'));

