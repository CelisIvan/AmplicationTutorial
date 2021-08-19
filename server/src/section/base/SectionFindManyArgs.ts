import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SectionWhereInput } from "./SectionWhereInput";
import { Type } from "class-transformer";
import { SectionOrderByInput } from "./SectionOrderByInput";

@ArgsType()
class SectionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SectionWhereInput,
  })
  @Field(() => SectionWhereInput, { nullable: true })
  @Type(() => SectionWhereInput)
  where?: SectionWhereInput;

  @ApiProperty({
    required: false,
    type: SectionOrderByInput,
  })
  @Field(() => SectionOrderByInput, { nullable: true })
  @Type(() => SectionOrderByInput)
  orderBy?: SectionOrderByInput;

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

export { SectionFindManyArgs };
