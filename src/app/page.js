'use client'
import { useEffect, useState } from "react";
import TodoForm from "@/app/components/TodoForm";
import TodoList from "@/app/components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, [])

  const fetchTodos = async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    console.log(data)
    setTodos(data);
  }

  const addTodo = async (title) => {
    const res = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ title })
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
  }

  const updateTodo = async (id, title) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title })
    });
    const updatedTodo = await res.json();
    setTodos(todos.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo))
  }

  const toggleComplete = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const res = await fetch(`/api/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ complted: !todo.completed })
    });
    const updatedTodo = await res.json();
    setTodos(todos.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo))
  }
  const deleteTodo = async (id) => {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE'
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CRUD App</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onUpdate={updateTodo}
        onDelete={deleteTodo}
        onToggle={toggleComplete}
      />
    </main>
  );
}
