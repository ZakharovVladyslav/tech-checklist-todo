import { createSlice } from "@reduxjs/toolkit";

const initialState: Todo[] = [
    {
        id: "1",
        isDone: true,
        priority: 1,
        title: "Task 1",
    },
    {
        id: "2",
        isDone: true,
        priority: 1,
        title: "Task 2",
    },
    {
        id: "3",
        isDone: false,
        priority: 1,
        title: "Task 1",
    },
    {
        id: "4",
        isDone: true,
        priority: 1,
        title: "Task 2",
    },
    {
        id: "5",
        isDone: true,
        priority: 1,
        title: "Task 1",
    },
    {
        id: "6",
        isDone: true,
        priority: 1,
        title: "Task 2",
    },
    {
        id: "7",
        isDone: false,
        priority: 1,
        title: "Task 1",
    },
    {
        id: "8",
        isDone: true,
        priority: 1,
        title: "Task 2",
    },
    {
        id: "9",
        isDone: false,
        priority: 1,
        title: "Task 1",
    },
    {
        id: "10",
        isDone: true,
        priority: 1,
        title: "Task 2",
    },
    {
        id: "11",
        isDone: true,
        priority: 1,
        title: "Task 1",
    },
    {
        id: "12",
        isDone: false,
        priority: 1,
        title: "Task 2",
    },
    {
        id: "13",
        isDone: true,
        priority: 1,
        title: "Task 1",
    },
    {
        id: "14",
        isDone: true,
        priority: 1,
        title: "Task 2",
    },
    {
        id: "15",
        isDone: false,
        priority: 1,
        title: "Task 1",
    },
    {
        id: "16",
        isDone: true,
        priority: 1,
        title: "Task 2",
    },
];

export const todoSlicer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const { id, isDone, priority, title } = action.payload;

            state.push({ id, isDone, priority, title });
        },
        changeTodo: (state, action) => {
            const { id, isDone, priority, title } = action.payload;
            const todoToChange = state.find((todo) => todo.id === id);

            if (todoToChange) {
                todoToChange.isDone = isDone;
                todoToChange.priority = priority;
                todoToChange.title = title;
            }
        },
        deleteTodo: (state, action) => {
            const { id } = action.payload;
            const todoToDelete = state.findIndex((todo) => todo.id === id);

            if (todoToDelete !== -1) state.splice(todoToDelete, 1);
        },
    },
});

export const { addTodo, changeTodo, deleteTodo } = todoSlicer.actions;
export default todoSlicer.reducer;
