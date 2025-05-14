const store = require('../data')

export async function PUT(req, {params}) {
    const { id } = await params;
    const { title, completed } = await req.json();

    const todo = store.todos.find((todo) => todo.id === Number(id))
    if (!todo) return new Response('Not Found', { status: 404 });

    if (title !== undefined) todo.title = title
    if (completed !== undefined) todo.completed = completed;

    return Response.json(todo);
}


export async function DELETE(_, { params }) {
    const { id } = await params;
    const index = store.todos.filter((todo) => todo.id === Number(id));
    if (index === -1) return new Response('Not Found', { status: 404 });

    store.todos.splice(index, 1)
    return new Response(null, { status: 200 })
}