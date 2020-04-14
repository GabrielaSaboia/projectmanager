import React from 'react';

const TaskCard = props =>{
    return (
        <div className="card" style={{width: "18rem;"}}>
            <div className="card-body">
                <h5 className="card-title">
                    Task Name
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    Task ID</h6>
                <p className="card-text">
                    Task Type</p>
                <a href="#" className="card-link">More Work Required</a>
                <a href="#" className="card-link"
                   onClick={() => props.markDone(props.task)}>
                    Mark Done
                </a>
            </div>

        </div>
    );
}

 export default TaskCard;


/*
{props.task.id}
{props.task.title}*/