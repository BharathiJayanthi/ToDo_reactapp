import React from 'react';
import ReactDOM from 'react-dom';

import ToDo from './components/todo';


var tasksList = ["tasks1", "tasks2"];


ReactDOM.render(<ToDo tasks={tasksList} />, document.getElementById('root'));

