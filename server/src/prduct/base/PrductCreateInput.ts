import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  ValidateNested,
  IsOptional,
  IsString,
  IsNumber,
} from "class-validator";
import { BrandWhereUniqueInput } from "../../brand/base/BrandWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class PrductCreateInput {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  available!: boolean;

  @ApiProperty({
    required: false,
    type: () => BrandWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BrandWhereUniqueInput)
  @IsOptional()
  @Field(() => BrandWhereUniqueInput, {
    nullable: true,
  })
  brand?: BrandWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  type!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  unitPrice!: number;
}
export { PrductCreateInput };
