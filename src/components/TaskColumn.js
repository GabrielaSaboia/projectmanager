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
        });

        const ProgressCards = inProgressTasks.map(task => {
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
                prevCol="todo"
                nextCol="review"
            />
        });

        const DoneCards = doneTasks.map(task => {
            return <TaskCard
                task={task}
                key={task.id}
                markDone={this.markDone}
                prevCol="todo"
                nextCol="review"
            />
        });

        return(
            <div className="container">
                    <div className="card-column" >
                        <div className="card-column" >
                            <h2>To Do</h2>
                            {TodoCards}
                        </div>
                        <div className="card-column" >
                            <h2>In Progress</h2>
                            {ProgressCards}
                        </div>

                            <h2>Review</h2>
                            {ReviewCards}

                            <h2>Done</h2>
                            {DoneCards}
                    </div>
            </div>

        );
    }
}

export default TaskColumn;