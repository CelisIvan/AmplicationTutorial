import { ArgsType, Field } from "@nestjs/graphql";
import { PrductCreateInput } from "./PrductCreateInput";

@ArgsType()
class CreatePrductArgs {
  @Field(() => PrductCreateInput, { nullable: false })
  data!: PrductCreateInput;
}

export { CreatePrductArgs };
