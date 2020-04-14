import React from 'react';

import TaskCard from './TaskCard';

class TaskColumn extends React.Component{

    markDone = (task, newColumn) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        taskList[taskIndex].column = newColumn;
        this.props.onUpdateTaskList(taskList);
    }

    render(){
        const todoTasks = this.props.tasks.filter(task => task.column === 'todo');
        const inProgressTasks = this.props.tasks.filter(task => task.column === 'in-progress');
        const reviewTasks = this.props.tasks.filter(task => task.column === 'review');
        const doneTasks = this.props.tasks.filter(task => task.column === 'done');

        const TodoCards = todoTasks.map(task => {
            return <TaskCard
                task={task}
                key={task.id}
                markDone={this.markDone}
                nextCol="in-progress"
            />
        });        const ProgressCards = inProgressTasks.map(task => {
            return <TaskCard
                task={task}
                key={task.id}
                markDone={this.markDone}
                prevCol="todo"
                nextCol="review"
            />
        });


        const ReviewCards = reviewTasks.map(task => {
            return <TaskCard
                task={task}
                key={task.id}
                markDone={this.markDone}
            />
        });


        const DoneCards = doneTasks.map(task => {
            return <TaskCard
                task={task}
                key={task.id}
                markDone={this.markDone}
            />
        });

        return(
            <div className="container">
                <div className="card-columns" >
                    {TodoCards}
                </div>
                <div className="card-columns" >
                    {ProgressCards}
                </div>
                <div className="card-columns" >
                    {ReviewCards}
                </div>
                <div className="card-columns" >
                    {DoneCards}
                </div>
            </div>

        );
    }
}

export default TaskColumn;