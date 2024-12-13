"use client"
import React from 'react'

const TodoForm = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ title, description });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow-md">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Add Todo
            </button>
        </form>
    )
}

export default TodoForm