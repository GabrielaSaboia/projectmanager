import React from 'react';

const TaskCard = props =>{
    return (
        <div className="card" style={{width: "18rem;"}}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.task.title}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {props.task.id}</h6>
                <p className="card-text">
                    {props.task.type}</p>
                <a href="#" className="card-link"
                   onClick={() => props.markDone(props.task, props.prevCol)}>More Work Required</a>
                <a href="#" className="card-link"
                   onClick={() => props.markDone(props.task, props.nextCol)}>
                    Next Column
                </a>
                <a href="#" className="card-link"
                   onClick={() => props.markDone(props.task, 'done')}>
                    Mark Done
                </a>
            </div>

        </div>
    );
}

 export default TaskCard;
