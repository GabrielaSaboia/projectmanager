import React from 'react';

import TaskCard from './TaskCard';

class TaskColumn extends React.Component{

    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskColumn = this.props.tasks;
        taskColumn.splice(taskIndex, 1);
        console.log(this.props);
        this.props.onUpdateTaskColumn(taskColumn);
    }

    render(){
        const TaskCards = this.props.tasks.map(task => {
            return <TaskCard
                column={column}
                task={task}
                key={task.id}
                markDone={this.markDone}
            />
        });
        return(
            <div className="card-columns">
                {TaskCards}
            </div>
        );
    }
}

 export default TaskColumn;