/* eslint-disable prettier/prettier */
import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  id: string;

  @IsOptional()
  title: string;

  @IsDefined() // class-validator (pipes)
  description?: string;
}
