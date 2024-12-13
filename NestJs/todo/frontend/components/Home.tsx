"use client"
import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';

const HomePage = () => {
    type Todo = {
        id: string;
        title: string;
        description: string;
    };

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch('/api/todos');
            const data = await response.json();
            setTodos(data);
        };
        fetchTodos();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <TodoForm />
            <ul className="mt-4 space-y-4">
                {todos.map((todo) => (
                    <li key={todo.id} className="p-4 border rounded shadow">
                        <h3 className="text-xl font-bold">{todo.title}</h3>
                        <p className="text-gray-700">{todo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
