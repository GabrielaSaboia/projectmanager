import React from 'react';
import axios from 'axios';

import PageTabs from './PageTabs';
import TaskBoard from './TaskBoard';
import TaskList from './TaskList';
import AddTask from './AddTask';
import TaskColumn from './TaskColumn';

// conditional rendering

class App extends React.Component{
    state = {
    tasks:[],
    column: [],
    view: 'page1',
    errorMessage:''
    }

    componentDidMount(){
    this.getData();
    }

    getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
    .then(response => {
    this.setState({tasks: response.data });
    }).catch(error => {
    this.setState({ errorMessage: error.message });
    });
    }

    onAddTask = (taskName) => {
    let tasks = this.state.tasks;
    tasks.push({
        title: taskName,
        id: this.state.tasks.length +1,
        type: 'task',
        column:'todo'
    });
    this.setState({ tasks });
    }

    onColumnChange = (columnName) =>{
    let column = this.state.column;
    column.push({
    title:
    });
    }

    onUpdateTaskList = (newTaskList) => {
     this.setState({ tasks: newTaskList });
    }

    onUpdateTaskColumn = (newTaskColumn) => {
    this.setState({ Column: newTaskColumn });
    }

    onViewChange = (view) => {
    this.setState({ view });
    }

    wrapPage = (jsx) => {
        const { view } = this.state;
        return (
            <div className="container">
             <PageTabs currentView={view}
                onViewChange={this.onViewChange.bind(this)}/>
             {jsx}
            </div>
        );
    }


    render(){
    const { view } = this.state;

    switch (view){
        case 'page1':
            return (this.wrapPage(
            <TaskBoard
            tasks={this.state.tasks}
            onUpdateTaskColumn={this.onUpdateTaskColumn}
            />
            ));
        case 'page2':
            return (this.wrapPage(
            <TaskList
            tasks={this.state.tasks}
            onUpdateTaskList={this.onUpdateTaskList}
            />
            ));
        case 'page3':
            return (this.wrapPage(
            <AddTask
            onSubmit={this.onAddTask}
            />
            ));
        default:
            return (this.wrapPage(
            <h2> Invalid Tab, Choose another</h2>
            ));
    }


    }
}

export default App;

/*
Part 1: App Component (Required for All)
Description
The App component will be the top-level component of your application and should be
responsible for making requests to the API and updating the data after the fact.
It should control which of the other components is currently being viewed through conditional
rendering and be the single source of truth for any data retrieved from the API.

Requirements
1.API Requests to JSON Server should be made inside the App component
    a. See JSON Server Tutorial Video in Moodle
    b. See API Requests in React Video in Moodle
2. App Component should be responsible making any updates to the data after it has been
retrieved from the API. Any additions, updates, or deletions should be handled in the App
component.
    a. See API Requests in React Video in Moodle
3. App component should control which of the other 2-3 components are currently being
viewed through conditional rendering
    a. See Conditional Rendering Video in Moodle
*/