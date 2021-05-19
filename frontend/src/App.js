import React, {Component} from 'react'
import { Modal } from 'reactstrap';
import './App.css';
import CustomModal from './components/Modal'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      taskList: tasks
    };
  }

// toggle property
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    alert('Saved' + JSON.stringify(item));
  }
  handleDelete = item => {
    alert('Deleted' + JSON.stringify(item));
  }

  createItem = () => {
    const item = { title: "", modal: !this.state.modal };
    this.setState({ activeItem: item, modal: !this.state.modal});
  }

  editItem = () => {
    this.setState({ activeItem: item, modal: !this.state.modal});
  }

  displayCompleted = status => {
    if(status){
      return this.setState({viewCompleted: true});
    }  
    else {
      return this.setState({viewCompleted: false});
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
    return (
      <main className="context mb-2 p-3 bg-info">
        <h1 className="text-black text-uppercase my-5"> Project Manager </h1>
        <div className="row">
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
        </div>
        <footer className="my-2 mb-2 bg-info text-white text-center">
          &copy; 2021
          { this.state.modal ? (
            <Modal activeItem={ this.state.activeItem} toggle={this.toggle}
            onSave={ this.handleSubmit }/>
           ): null
          }
        </footer>
      </main>
    )
  }
}
export default App;
