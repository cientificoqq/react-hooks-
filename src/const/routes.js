import Counter from "../components/Counter";
import Stopwatch from "../components/Stopwatch.jsx";
import ToDoList from "../components/ToDoList/ToDoList";
import Calculator from "../components/Сalculator.jsx";
const routes = [
  { path: "/", element: <Counter /> },
  { path: "/todo", element: <ToDoList /> },
  { path: "/calculator", element: <Calculator /> },
  { path: "/stopwatch", element: <Stopwatch /> },
];

export default routes;
