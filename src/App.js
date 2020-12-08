import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const todoItem = {
    status: 'done',
    message: 'todo one',
  };

  return (
    <div className="App">
      <header className="App-header">
        <TodoItem todoItem={todoItem} />
      </header>
    </div>
  );
}

export default App;
