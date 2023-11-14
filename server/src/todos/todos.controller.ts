import {
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    Query,
    UsePipes,
} from "@nestjs/common";
import { TodosService } from "./todos.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import { CreateCatDto, createTodoSchema } from "src/schemas/todos.schema";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Controller("todos")
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    getAllTodos(): Todo[] {
        return this.todosService.getAllTodos();
    }

    @Get(":id")
    getTodoById(@Param() param: any): Todo {
        return this.todosService.getTodoById(param.id);
    }

    @Delete(":id")
    deleteTodoById(@Param() param: any): void {
        this.todosService.deleteTodoById(param.id);
    }

    @Post()
    @UsePipes(new ZodValidationPipe(createTodoSchema))
    createTodo(@Query() createTodoDto: CreateTodoDto): void {
        this.todosService.createTodo(createTodoDto);
    }

    @Put("id")
    updateTodoById(
        @Param() param: any,
        @Query() updateTodoDto: UpdateTodoDto,
    ): void {
        this.todosService.updateTodoById(param.id, updateTodoDto);
    }

    @Patch("id")
    updateTodoPropertiesById(
        @Param() param: any,
        @Query() updateTodoDto: Partial<UpdateTodoDto>,
    ): void {
        this.todosService.updateTodoById(param.id, updateTodoDto);
    }
}
