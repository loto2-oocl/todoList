import './App.css';
import TodoList from './components/TodoList';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
