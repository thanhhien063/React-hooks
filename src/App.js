import logo from './logo.svg';
import './App.css';
import Form from './components/form-register/form-register';
import ColorBox from './components/ColorBox/ColorBox';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend!' },
    { id: 2, title: 'We love Easy Frontend!' },
    { id: 3, title: 'They love Easy Frontend!' },
  ]);
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id == todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
    <div className="App">
      <h1>React hooks - TodoList</h1>
      <Form></Form>
      <ColorBox></ColorBox>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList>
    </div>
  );
}
export default App;
