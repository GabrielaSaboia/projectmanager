import React from 'react';

import TaskItem from './TaskItem';
import TaskListFilter from './TaskListFilter';

class TaskList extends React.Component{

    state = {
        listView: '',

    }


    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        taskList.splice(taskIndex, 1);
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }

    onViewChange = (view) => {
        this.setState({ view });
    }

    wrapPage = (jsx) => {
        const { listView } = this.state;
        return (
            <div className="container">
                <TaskListFilter currentView={listView}
                          onViewChange={this.onViewChange.bind(this)}/>
                {jsx}
            </div>
        );
    }
    render(){

        const typeTasks = this.props.tasks.filter(task => task.type === '');
        const nameTasks = this.props.tasks.filter(task => task.name === '');
        const idTasks = this.props.tasks.filter(task => task.id === '');

        const typeList = typeTasks.map(task =>{
           return <TaskItem task={task} key={task.id} markDone={this.markDone} />
        });
        const nameList = nameTasks.map(task => {
            return <TaskItem task={task} key={task.id} markDone={this.markDone} />
        });
        const idList = idTasks.map(task => {
            return <TaskItem task={task} key={task.id} markDone={this.markDone} />
        });

        const taskItems = this.props.tasks.map(task => {
            return <TaskItem task={task} key={task.id} markDone={this.markDone} />
        });

        const { view } = this.state.listView;

        switch (view){
            case 'type':
                return (this.wrapPage(

                    <ul className="task-list list-group">
                        { typeList }
                    </ul>
                ));
            case 'name':
                return (this.wrapPage(
                    <ul className="task-list list-group">
                        { nameList }
                    </ul>
                ));
            case 'id':
                return (this.wrapPage(
                    <ul className="task-list list-group">
                        { idList }
                    </ul>
                ));
            default:
                return (this.wrapPage(
                    <ul className="task-list list-group">
                        { taskItems }
                    </ul>
                ));
        }




    }
}

export default TaskList;

/*
Part 3: Task List Component (Two People, Choose One. Three People, Required)
Description
The task list component should operate very similar to the filtered lists we’re
done before, but this one should be created in React.
It should display all the tasks in a table or list of some kind with all of its data displayed.
The list should be able to be filtered by Column/Status and Type as well as sorted by all
of the task’s properties.

Requirements
1. Display all of the tasks in a list or table with all of the its properties displayed
    a. See Working with Lists in React Video in Moodle
2. Be able to sort the list by Title, Status/Column, and Type.
    a.See Working with Lists in React Video in Moodle
3. Include filters to narrow the list of tasks down. Should be able to filter by
Column/Status and Type, with a drop down include for each option.
    a. See Working with Lists in React Video in Moodle
*/