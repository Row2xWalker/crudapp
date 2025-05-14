const  store = require('./data')
export async function GET() {
    return Response.json(store.todos);
}

export async function POST(req) {
    const { title } = await req.json();
    const newTodo = { 
        id: store.todoIds++, 
        title, 
        completed: false 
    };
    store.todos.push(newTodo);
    return Response.json(newTodo, { status: 201 })
}