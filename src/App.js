import './App.css';
import TodoList from './components/TodoList';
import { Button, Col, Row } from 'antd';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import DoneListContainer from './containers/DoneListContainer';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={24}>
          <BrowserRouter>
            <Row>
              <Col span="3">
                <NavLink to="/">
                  <Button block>Todo Page</Button>
                </NavLink>
              </Col>
              <Col span="3">
                <NavLink to="/done">
                  <Button block>Done Page</Button>
                </NavLink>
              </Col>
            </Row>
            <Switch>
              <Route path="/done" component={DoneListContainer} />
              <Route exact path="/" component={TodoList} />
              <Route component={NotFoundPage} />
            </Switch>
          </BrowserRouter>
        </Col>
      </Row>
    </div>
  );
}

export default App;
