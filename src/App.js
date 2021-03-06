import './App.css';
import TodoList from './components/TodoList';
import { Col, Row } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DoneListContainer from './containers/DoneListContainer';
import NotFoundPage from './components/NotFoundPage';
import AppHeader from './components/AppHeader';
import TagsManageTab from './components/tags/TagsManageTab';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={24}>
          <BrowserRouter>
            <AppHeader />
            <Switch>
              <Route exact path="/done" component={DoneListContainer} />
              <Route exact path="/tags" component={TagsManageTab} />
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
