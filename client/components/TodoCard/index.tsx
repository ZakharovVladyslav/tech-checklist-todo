"use client";

import { useEffect, useState } from "react";
import Checkbox from "../Fields/RoundedCheckbox";
import IconedButton from "../IconedButton";
import { BasketIcon, PencilIcon } from "../Icons";
import "./TodoCard.css";
import { useDispatch } from "react-redux";
import { changeTodo, deleteTodo } from "@/slicers/todoSlicer";

interface TodoCardProps extends Todo {}

export default function TodoCard({
    id,
    isDone,
    priority,
    title,
}: TodoCardProps): JSX.Element {
    const [cardIsDone, setCardIsDone] = useState<boolean>(isDone);
    const [cardPriority, setCardPriority] = useState<number>(priority);
    const [cardTitle, setCardTitle] = useState<string>(title);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            changeTodo({
                id,
                isDone: cardIsDone,
                priority: cardPriority,
                title: cardTitle,
            })
        );
    }, [cardIsDone, cardPriority, cardTitle]);

    const handleEditTodo = (id: string) => {};

    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className="todo-card">
            <Checkbox checked={cardIsDone} setChecked={setCardIsDone} />

            <p className="title">{title}</p>

            <div className="management-buttons">
                <IconedButton
                    icon={<PencilIcon />}
                    onClick={() => handleEditTodo(id)}
                />
                <IconedButton
                    icon={<BasketIcon />}
                    onClick={() => handleDeleteTodo(id)}
                />
            </div>
        </div>
    );
}
