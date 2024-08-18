import { useContext } from "react";
import { TodoContext } from "../store/todo-app-store";

const Welcome = () => {  
    const contextobj = useContext(TodoContext);
    const todoItems = contextobj.item;

    return todoItems.length === 0 && <p>Enjoy your Day!</p>;
};

export default Welcome;
