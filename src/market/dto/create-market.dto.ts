import { IsNotEmpty, IsString } from "class-validator";

export class CreateMarketDto {
    @IsNotEmpty({message: "Market nomini kiriting"})
    @IsString({message: "Must be string"})
    readonly name: string
}
