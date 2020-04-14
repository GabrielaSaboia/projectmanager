import React from 'react';

import TaskCard from './TaskCard';

class TaskColumn extends React.Component{

    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        taskList.splice(taskIndex, 1);
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }

    render(){
        const TaskCards = this.props.tasks.map(task => {
            return <TaskCard
                task={task}
                key={task.id}
                markDone={this.markDone}
            />
        });
        return(
            <div className="container">
                <div className="card-columns" >
                    {TaskCards}
                </div>
                <div className="card-columns" >
                    {TaskCards}
                </div>
                <div className="card-columns" >
                    {TaskCards}
                </div>
            </div>

        );
    }
}

 export default TaskColumn;