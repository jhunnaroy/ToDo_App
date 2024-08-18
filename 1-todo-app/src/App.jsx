import AppName from "./component/Appname";
import AddTodo from "./component/Addtodo";
import TodoItem from "./component/TodoItem1";
import "./App.css";
import { useState } from "react";
import Welcome from "./component/Message";
import { TodoContext } from "./store/todo-app-store";

const initialTodoItems = [
  { name: "Sample Task", dueDate: "2024-08-15" }
];

function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentVal) => [
      ...currentVal, 
      { name: itemName, dueDate: itemDueDate }
    ]);
    console.log(`Added new item: Name - ${itemName}, Due Date - ${itemDueDate}`);
  };

  const deleteItem = (index) => {
    const updatedItems = todoItems.filter((_, i) => i !== index);
    setTodoItems(updatedItems);
  };

  return (
    <TodoContext.Provider value={{
      item: todoItems,
      addNewItem: addNewItem,
      deleteItem: deleteItem
    }}>
      <center className="todo-container" style={{ textAlign: 'center' }}>
        <AppName />
        <AddTodo onNewItem={addNewItem} />
        <Welcome />
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            name={item.name}
            dueDate={item.dueDate}
            onDelete={() => deleteItem(index)}
          />
        ))}
      </center>
    </TodoContext.Provider>
  );
}

export default App;
