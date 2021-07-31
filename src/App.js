import logo from './logo.svg';
import './App.css';
import Form from './components/form-register/form-register';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Form></Form>
    </div>
  );
}

// function App() {
//   const [count, setCount] = useState(0);
//   console.log(count);
// // Ta có useState là một Hook. Hàm useState nhận tham số initial state
// // sau đó sẽ trả về một mảng 2 phần tử:
// // phần tử đầu tiên là state hiện tại
// // thứ 2 là hàm để update state - (hàm thứ hai này giống với setState khi chúng sử dụng dạng Class)

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   )
// }
export default App;
