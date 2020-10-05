import React, { useReducer } from 'react';
import './App.css';

import List from './components/List';
import TodoForm from './components/TodoForm';
import Completed from './components/Completed';

import formReducer, { initToDos } from './reducers/formReducer';

function App() {
  const [state, dispatch] = useReducer(formReducer, initToDos);

  const markCompleted = todo => {
    dispatch({ type: 'TOGGLE_TODO', index: todo, id: todo.id })
  }

  return (
    <div className="App">
      <TodoForm list={state} dispatch={dispatch} />
      <List state={state} markCompleted={markCompleted} />
      <Completed />
    </div>
  );
}

export default App;
