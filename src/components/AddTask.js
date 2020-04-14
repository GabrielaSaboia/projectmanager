import React from 'react';

class AddTask extends React.Component {
    state = {
        newTask: '',
        type: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.newTask);
        this.setState({newTask: ''})

        this.props.onSubmit(this.state.type);
        this.setState({type: ''})
    }

    render(){
        return(
            <form className="task-input form-group" onSubmit={this.onFormSubmit}>
                <label htmlFor="newTask">Enter New Task</label>
                <input type="text" className="form-control"
                       name="newTask"
                       value={this.state.newTask}
                       onChange={(e) =>
                           this.setState({newTask: e.target.value})}/>

                <label htmlFor="type">Select type of task</label>
                <select className="form-control"
                                   name="type"
                                  type="drop-down"
                                  value={this.state.type}
                                  onChange={(e) =>
                                      this.setState({type: e.target.value})}>
                    <option value="Home">Home</option>
                    <option value="School">School</option>
                    <option value="Work">Work</option>
                </select>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }
}

export default AddTask;

/*
* Part 4: Add Task Component (Two People, Choose One. Three People, Required)
    Description
    The Add Task Form component should be able to mock adding a task to the database.
    * Since we don’t have a proper API, we won’t be sending a POST request like we normally would.
    * Instead we’ll just update the state variables on the App component so any other component in the
    application can see the new Task until a hard refresh (when the API is called again, and all
    local data is lost).
    * Upon Submitting the form, the user should be taken to the Board or List view
    where they’ll see their newly added Task.

    Requirements
    1. A form that takes a Title and Type for your new task (should default column to to do).
        a. See Working with Forms in React Video in Moodle
    2. When the form is submitted, the App component should be the one that adds it to the array of
    existing tasks.
        a. See Working with Forms in React Video in Moodle
        b. See Managing Data between Parent and Child video in Moodle
    3.After the form is submitted, the User should be taken to the Board or List view where they can
    see the task they just added.
        a. See Conditional Rendering in React Video on Moodle
*/