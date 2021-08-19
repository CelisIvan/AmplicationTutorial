import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BooleanFilter } from "../../util/BooleanFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { BrandWhereUniqueInput } from "../../brand/base/BrandWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
@InputType()
class PrductWhereInput {
  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  available?: BooleanFilter;

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
  brand?: BrandWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  description?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  type?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  unitPrice?: FloatFilter;
}
export { PrductWhereInput };
