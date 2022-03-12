import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "./components/nav/Nav";
import Home from "./components/Home";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TodoList from "./components/todolist/TodoList";
import MyComponent from "./components/example/MyComponent";
import './App.css'
import ListUser from "./components/users/ListUser";
import DetailUser from "./components/users/DetailUser";
function App() {
  return (
      <BrowserRouter>
        <div>
        <Nav/>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/todo">
                    <TodoList />
                </Route>
                <Route path="/about">
                    <MyComponent />
                </Route>
                <Route path="/user" exact>
                    <ListUser />
                </Route>
                <Route path="/user/:id">
                    <DetailUser />
                </Route>
            </Switch>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        </div>
      </BrowserRouter>
  );
}

export default App;
