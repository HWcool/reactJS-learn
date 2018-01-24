import React, {
  Component
} from 'react';
import 'normalize.css';
import './App';
import TodoList from './Todo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;