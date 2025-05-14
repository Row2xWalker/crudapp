import React, { useState } from 'react'

export default function TodoItem({ todo, onUpdate, onDelete, onToggle }) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);

    const handleUpdate = () => {
        onUpdate(todo.id, title);
        setIsEditing(false)
    }

    return (
        <li className="flex items-center justify-between p-3 bg-white border rounded shadow-sm">
            <div className="flex items-center gap-2 flex-1">
                <input type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="w-4 h-4"
                />
                {isEditing ? (
                    <input value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-1 rounded w-full"
                    />
                ) : (<span className={`flex-1 ${todo.completed ? 'line-through text-black-400' : ''}`}>
                    {todo.title}
                </span>)}
            </div>
            <div className="flex gap-2">
                {isEditing ? (
                    <button
                        onClick={handleUpdate}
                        className="text-green-600 hover:underline">
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-green-600 hover:underline">
                        Edit
                    </button>)}
                <button
                    onClick={() => onDelete(todo.id)}
                    className="text-red-600 hover:underline">
                    Delete
                </button>
            </div>
        </li>
    )
}
