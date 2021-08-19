import { ArgsType, Field } from "@nestjs/graphql";
import { PrductWhereUniqueInput } from "./PrductWhereUniqueInput";

@ArgsType()
class DeletePrductArgs {
  @Field(() => PrductWhereUniqueInput, { nullable: false })
  where!: PrductWhereUniqueInput;
}

export { DeletePrductArgs };
