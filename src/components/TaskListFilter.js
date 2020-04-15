import React from 'react';

const TaskListFilter = () =>{
   return (<div>
        <form>
            <label htmlFor="filter">
                Filter:
            </label>
            <select id="filter" onChange={(e)=>{
                this.setState({listView: e.target.value})}}>
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

export default TaskListFilter;