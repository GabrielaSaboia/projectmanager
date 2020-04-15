import React from 'react';

import TaskColumn from './TaskColumn';


class TaskBoard extends React.Component{
   render() {
      return (
        <div>
           <TaskColumn
               tasks={this.props.tasks}
               onUpdateTaskList={this.props.onUpdateTaskList}/>
        </div>
      );
   }

}

export default TaskBoard;

/*
* Part 2: Task Board Component (Required for All)

* Description
The Task Board will allow the user to see all of the tasks sorted into columns by their status:
* to do
* in progress
* review
* done
*
* The component should display all tasks in a card like UI, sorted into their appropriate columns.
* The Board should also have the ability to move a card/task from one column to another

* Requirements
1. Display all of the tasks in columns sorted by their status.
    a. See Working with Lists in React Video in Moodle

* 2. Allow for the ability to move a task between columns. Task should stay in it’s new
column until a hard refresh (when data is pulled from the API again).
    a. See JSON Server Tutorial video in Moodle
    b. See Handing User Events in React video in Moodle

* 3. On Mobile resolutions, show only one column at a time with a drop down menu to select which
column to show.
    a. See Programmatic Responsive Design video in Moodle

* 4. TaskBoard shouldn’t manage isn’t own data, that responsibility
should be in the App component and transmitted to the TaskBoard via props.
    a. See Managing Data between Parent and Child video in Moodle
* */