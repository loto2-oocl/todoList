import './App.css';
import TodoList from './components/TodoList';
import { Col, Row } from 'antd';

function App() {
  return (
    <div className="App">
      <Row>
        <Col flex="auto">
          <TodoList />
        </Col>
      </Row>
    </div>
  );
}

export default App;
