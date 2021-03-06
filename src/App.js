import React from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

const App = () => (
  <div style={{padding: '20px'}}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
