import Counter from "../components/Counter";
import ToDoList from "../components/ToDoList/ToDoList";
import Calculator from "../components/Сalculator.jsx";
const routes = [
    { path: "/", element: < Counter / > },
    { path: "/todo", element: < ToDoList / > },
    { path: "/calculator", element: < Calculator / > },
];

export default routes;