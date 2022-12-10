import { IsOptional, IsString } from 'class-validator';

export class UpdateMarketDto{
    @IsOptional()
    @IsString({message: "Must be string"})
    readonly name: string
}
