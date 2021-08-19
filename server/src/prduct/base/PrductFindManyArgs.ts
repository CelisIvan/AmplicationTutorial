import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PrductWhereInput } from "./PrductWhereInput";
import { Type } from "class-transformer";
import { PrductOrderByInput } from "./PrductOrderByInput";

@ArgsType()
class PrductFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PrductWhereInput,
  })
  @Field(() => PrductWhereInput, { nullable: true })
  @Type(() => PrductWhereInput)
  where?: PrductWhereInput;

  @ApiProperty({
    required: false,
    type: PrductOrderByInput,
  })
  @Field(() => PrductOrderByInput, { nullable: true })
  @Type(() => PrductOrderByInput)
  orderBy?: PrductOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PrductFindManyArgs };
