"use client";

import Headline from "@/components/Headline";
import IconedInput from "@/components/Fields/IconedInput";
import { PlusIcon, SearchIcon } from "@/components/Icons";
import { ChangeEvent, useEffect, useState } from "react";
import TodoCard from "@/components/TodoCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import "./page.css";
import Divider from "@/components/Divider";

export default function Home() {
    const [newTask, setNewTask] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    // const todos = useSelector((state: RootState) => state.todos);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("http://localhost:3001/todos/");

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setTodos(result);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        })();
    }, []); // Empty d

    return (
        <main>
            <Headline />

            {todos && todos.length > 0 && (
                <div className="todos">
                    <Divider />
                    {todos.map((todo, index: number) => (
                        <TodoCard {...todo} key={index} />
                    ))}
                    <Divider />
                </div>
            )}

            <IconedInput
                icon={<PlusIcon />}
                value={newTask}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setNewTask(event.target.value)
                }
                placeholder="New task"
                width="full"
            />
        </main>
    );
}
