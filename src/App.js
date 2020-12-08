import './App.css';
import TodoItem from './components/TodoItem';
import TodoGeneratorContainer from './containers/TodoGeneratorContainer';

function App() {
  const todoItem = {
    status: 'done',
    message: 'todo one',
  };

  return (
    <div className="App">
      <header className="App-header">
        <TodoItem todoItem={todoItem} />
        <TodoGeneratorContainer />
      </header>
    </div>
  );
}

export default App;
