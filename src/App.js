import logo from './logo.svg';
import './App.css';
import Form from './components/form-register/form-register';
import ColorBox from './components/ColorBox/ColorBox';
import { useState, useEffect } from 'react';
import queryString from 'query-string';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend!' },
    { id: 2, title: 'We love Easy Frontend!' },
    { id: 3, title: 'They love Easy Frontend!'},
  ]);

  const [postList, setPostList]= useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
      //_limit=10&_page=1
      const paramsString = queryString.stringify(filters);
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
      const reponse = await fetch(requestUrl);
      const reponseJSON = await reponse.json();
      console.log({reponseJSON});

      const {data, pagination} = reponseJSON;
      setPostList(data);
      setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }
    console.log('POST list effect');
    fetchPostList();
  }, [filters]);

  useEffect(() => {
    console.log("TODO list effect");
  });

  function handlePageChange(newPage){
    console.log("New Page", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id == todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValues) {
    console.log('Form submit', formValues);
    //add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1, //Id of List + 1
      ...formValues, //title
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div className="App">
      <h1>React hooks - PostList</h1>
      {/* <Form></Form>
      <ColorBox></ColorBox>
      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList> */}
      <PostList posts={postList}></PostList>
      <Pagination 
        pagination={pagination}
        onPageChange={handlePageChange}>
        </Pagination>
    </div>
  );
}
export default App;
