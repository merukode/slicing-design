import React, { useState } from 'react';
import dots from '/dots.svg';
import add from '/add.svg';

type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

const DraggableBox: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: 'Reminder Item 1', completed: false },
    { id: 2, text: 'Reminder Item 2', completed: false },
    { id: 3, text: 'Reminder Item 3', completed: false },
  ]);

  const [newTodoText, setNewTodoText] = useState<string>('');
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [draggingItem, setDraggingItem] = useState<number | null>(null);
  const [dragOverItem, setDragOverItem] = useState<number | null>(null);

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: newTodoText, completed: false }
      ]);
      setNewTodoText('');
      setIsAdding(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };

  const handleCheckboxChange = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleDragStart = (id: number) => {
    setDraggingItem(id);
  };

  const handleDragEnter = (id: number) => {
    setDragOverItem(id);
  };

  const handleDragEnd = () => {
    if (draggingItem !== null && dragOverItem !== null && draggingItem !== dragOverItem) {
      const updatedTodos = [...todos];
      const draggingIndex = updatedTodos.findIndex(todo => todo.id === draggingItem);
      const dragOverIndex = updatedTodos.findIndex(todo => todo.id === dragOverItem);
      const [draggedItem] = updatedTodos.splice(draggingIndex, 1);
      updatedTodos.splice(dragOverIndex, 0, draggedItem);
      setTodos(updatedTodos);
    }
    setDraggingItem(null);
    setDragOverItem(null);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl">Reminder</span>
        <button 
          onClick={() => setIsAdding(true)}
          className="border-green-400  border-2 flex  px-4 py-2 rounded items-center gap-3 text-[#00C9B1] font-bold"
        >
          <img src={add} alt="plus" className="w-6 h-6" />
          ADD
        </button>
      </div>
      {isAdding && (
        <div className="mb-4">
          <input
            type="text"
            value={newTodoText}
            onChange={handleInputChange}
            placeholder="Enter new reminder"
            className="border p-2 rounded w-full"
          />
          <button 
            onClick={handleAddTodo}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Reminder
          </button>
        </div>
      )}
      <article className='overflow-y-scroll h-96'>
        <div className="space-y-6 mt-16">
          {todos.map((todo) => (
            <div 
              key={todo.id}
              className={`flex items-center p-5 border border-gray-300 rounded bg-white ${dragOverItem === todo.id ? 'bg-gray-200' : ''}`}
              draggable
              onDragStart={() => handleDragStart(todo.id)}
              onDragEnter={() => handleDragEnter(todo.id)}
              onDragEnd={handleDragEnd}
            >
              <img src={dots} alt="dot" className="w-4 h-4 mr-3 cursor-move" />
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxChange(todo.id)}
                className="mr-2"
              />
              <span className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>
                {todo.text}
              </span>
              <button 
                onClick={() => handleDeleteTodo(todo.id)}
                className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
              <button 
                className="ml-4 bg-red-300 text-white px-2 py-1 rounded"
              >
                Due in 2 hours
              </button>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default DraggableBox;
