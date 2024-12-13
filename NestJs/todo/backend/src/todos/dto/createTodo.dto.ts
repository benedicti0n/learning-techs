import { IsString, Length } from "class-validator";

export class CreateTodoDto {
    @IsString()
    @Length(1, 100)
    title: string;

    @IsString()
    @Length(1, 400)
    description: string;
}