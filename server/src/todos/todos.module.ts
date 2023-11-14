import { Module } from "@nestjs/common";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";
import { todos } from "./data/todos";

@Module({
    controllers: [TodosController],
    providers: [
        TodosService,
        {
            provide: "TODOS_MOCK",
            useValue: todos,
        },
    ],
})
export class TodosModule {}
