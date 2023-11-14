import { string, z } from "zod";

export const createTodoSchema = z.object({
    title: z.string(),
});

export type CreateCatDto = z.infer<typeof createTodoSchema>;
