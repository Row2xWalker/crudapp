import React from 'react'
import TodoItem from '@/app/components/TodoItem'

export default function TodoList({ todos, onUpdate, onDelete, onToggle }) {
    if (todos.length === 0) return <p className="text-gray-500">No tasks yet</p>

    return (
        <ul className="space-y-3">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    )
}
