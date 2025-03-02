import Counter from "../components/Counter";
import Filter from "../components/Filter.jsx";
import Stopwatch from "../components/Stopwatch.jsx";
import ToDoList from "../components/ToDoList/ToDoList";
import Calculator from "../components/Сalculator.jsx";
const routes = [
  { path: "/", element: <Counter /> },
  { path: "/todo", element: <ToDoList /> },
  { path: "/calculator", element: <Calculator /> },
  { path: "/stopwatch", element: <Stopwatch /> },
  { path: "/filter", element: <Filter /> },
];

export default routes;
