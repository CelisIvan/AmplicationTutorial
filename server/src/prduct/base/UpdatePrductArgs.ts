import { ArgsType, Field } from "@nestjs/graphql";
import { PrductWhereUniqueInput } from "./PrductWhereUniqueInput";
import { PrductUpdateInput } from "./PrductUpdateInput";

@ArgsType()
class UpdatePrductArgs {
  @Field(() => PrductWhereUniqueInput, { nullable: false })
  where!: PrductWhereUniqueInput;
  @Field(() => PrductUpdateInput, { nullable: false })
  data!: PrductUpdateInput;
}

export { UpdatePrductArgs };
