import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      addValue: '',
    }
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.addValue],
      addValue: ''
    })
  }

  li_delete = (i) => {
    this.state.todos.splice(i, 1)
    this.setState({
      todos: this.state.todos
    })
  }

  delete_all = () => {
    this.setState({
      todos: this.state.todos = []
    })
  }

  li_update = (i) => {
    let promp = prompt("Enter New Todo")
    this.state.todos[i] = promp
    this.setState({
      todos: this.state.todos
    })
  }

  render() {
    return (
      <div >
        <div style={{ textAlign: 'center', fontSize: '25px' }}>
          <h1 style={{ fontSize: "30px", marginBottom: "15px" ,textShadow:'2px 4px 3px #666666'}}>Your Todo :</h1>
          <input style={{ fontSize: '28px', marginBottom: '15px' }} value={this.state.addValue} type="text" placeholder='Enter Todo' onChange={(e) => this.setState({ addValue: e.target.value })} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={{ fontSize: '20px', marginRight: '10px' }} onClick={this.addTodo}>Add Item</button>
          <button style={{ fontSize: '20px' }} onClick={this.delete_all}>Delete All</button>
        </div>
        <ol>
          {this.state.todos.map((v, i) => {
            return <li key={i} style={{ fontSize: '25px', marginBottom:'10px' , listStyle:'decimal'}}>
              {v}
              <button onClick={() => this.li_delete(i)} style={{ fontSize: '25px', marginRight: '5px', marginLeft: '5px' }}>Delete</button>
              <button onClick={() => this.li_update(i)} style={{ fontSize: '25px' }}>Edit</button>
            </li>
          })}
        </ol>
      </div>
    )
  }
}

export default App;