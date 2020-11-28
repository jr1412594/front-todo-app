import { Component } from 'react'
import './App.css';
import TodoContainer from './components/TodoContainer'
const baseURL = "http://localhost:7000"
const todosURL = `${baseURL}/todos`

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount(){
    this.getTodos()
  }
getTodos = () => {
  fetch(todosURL)
  .then(response => response.json())
  .then(todos => this.setState({todos}))
}
  render(){
    return (
      <div className="App">
        <h1> Todo App </h1>
        <TodoContainer todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
