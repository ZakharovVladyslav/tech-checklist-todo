import { Inject, Injectable, Query } from "@nestjs/common";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { v4 } from "uuid";
import { DEFAULT_FACTORY_CLASS_METHOD_KEY } from "@nestjs/common/module-utils/constants";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Injectable()
export class TodosService {
    constructor(@Inject("TODOS_MOCK") private readonly todos: Todo[]) {}

    getAllTodos(): Todo[] {
        return this.todos;
    }

    getTodoById(id: string): Todo {
        return this.todos.find((todo) => todo.id === id);
    }

    deleteTodoById(id: string): void {
        const todoToDelete = this.todos.find((todo) => todo.id === id);
        this.todos.splice(this.todos.indexOf(todoToDelete), 1);
    }

    createTodo(createTodoDto: CreateTodoDto) {
        const newTodo: Todo = {
            id: v4(),
            title: createTodoDto.title,
            isDone: false,
            priority: 1,
        };

        this.todos.push(newTodo);
    }

    updateTodoById(id: string, query: any): void {
        const todoToUpdate = this.todos.find((todo) => todo.id === id);
        const todoToUpdateIndex = this.todos.indexOf(todoToUpdate);

        Object.assign(todoToUpdate[todoToUpdateIndex], query);
    }

    updateTodoPropertiesById(
        id: string,
        partialUpdateTodoDto: Partial<UpdateTodoDto>,
    ): void {
        const targetTodo = this.todos.find((todo) => todo.id === id);

        Object.assign(targetTodo, partialUpdateTodoDto);
    }
}
