import { useRef, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const todoElement = useRef(null);
  const todoDate = useRef(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const todoName = todoElement.current?.value.trim();
    const dueDate = todoDate.current?.value.trim();
    setIsFormValid(todoName && dueDate);
  };

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoElement.current.value;
    const dueDate = todoDate.current.value;

    if (todoName.trim() === "" || dueDate.trim() === "") return;

    onNewItem(todoName, dueDate);
    
    // Clear input fields after adding the todo
    todoElement.current.value = "";
    todoDate.current.value = "";

    // Reset form validation
    setIsFormValid(false);
  };

  return (
    <div className="todo-container">
      <form className="row kg-row" onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            type="text"
            ref={todoElement}
            placeholder="Enter the todo here"
            onChange={validateForm}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDate}
            onChange={validateForm}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
            disabled={!isFormValid}
          >
            <BiAddToQueue />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
