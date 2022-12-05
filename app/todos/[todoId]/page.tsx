import React from "react";
import { Todo } from "../../../typings";
import {notFound} from "next/navigation";

type PageProps = {
    params:{
        todoId: string;
    };
}

const fetchTodo =async (todoId:string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

    const todo: Todo = await res.json();
    return todo;
}

async function TodoPage({params: {todoId}} : PageProps) {
    const todo = await fetchTodo(todoId);

    if (!todo.id) return notFound()

    return ( <div className="p-10">
        <p>#{todo.id}: {todo.title}</p>
        <p>completed: {todo.completed ? "Yes" : "No"}</p>
        <p className="">By user: {todo.userId}</p>
    </div> );
}

export default TodoPage;