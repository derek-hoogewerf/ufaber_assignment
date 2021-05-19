import React, {Component} from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      taskList: tasks

    };
  }

  tasks = [];

  displayCompleted = status => {
    if(status){
      return this.setstatus({viewCompleted: true});
    }  
    else {
      return this.setstatus({viewCompleted: false});
    }
  }

  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Completed
        </span>
        <span
          onClick={()=> this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
          >
            Incomplete
          </span>
      </div>
    )
  }

  // Rendering completed or imcomplete items
  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(
      item => item.completed == viewCompleted
    );

    return newItems.map(item => (
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`} title={item.name}>
          {item.name}
        </span>
        <span>
          <button className="btn btn-info mr-2"> Edit </button> 
          <button className="btn btn-danger mr-2"> Delete </button>
        </span>
      </li>
    ))
  }

  render() {
    <main className="context">
      <h1 className="text-black text-uppercase my-5"> Project Manager </h1>
      <h3 className="row">
        <div className="col-md-5 col-sma-10 mx-auto p-0">
          <div className="card p-3">
            <div>
              <button  className="btn btn-primary"> Add Project </button>
            </div>
            {this.renderTabList()}
            <ul className="list-group list-group-flush">
              {this.renderItems()}
            </ul>
          </div>
        </div>
      </h3>
    </main>
  }
}
export default App;
