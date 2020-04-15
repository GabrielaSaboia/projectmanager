import React from 'react';

class TaskListFilter extends React.Component{

    onFilterSelection(event, filterChoice){
        this.props.onViewChange(filterChoice);
    }

    render() {
       return (
       <div>
        <form>
            <label htmlFor="filter">
                Filter:
            </label>
            <select id="filter" onChange={(e)=>{
                this.onFilterSelection(e, e.target.value)}}>
                <option value="type">type</option>
                <option value="name">name</option>
                <option value="id">id</option>
                <button>
                    Submit
                </button>
            </select>
        </form>
       </div>);
   }
}

export default TaskListFilter;