import Counter from "../components/Counter";
import ToDoList from "../components/ToDoList/ToDoList";

const routes = [
    { path: "/", element: < Counter / > },
    { path: "/todo", element: < ToDoList / > },
];

export default routes;