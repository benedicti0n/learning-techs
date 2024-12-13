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
        <div>
            <TodoForm />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
