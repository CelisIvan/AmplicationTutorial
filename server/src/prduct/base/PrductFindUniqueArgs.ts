import { ArgsType, Field } from "@nestjs/graphql";
import { PrductWhereUniqueInput } from "./PrductWhereUniqueInput";

@ArgsType()
class PrductFindUniqueArgs {
  @Field(() => PrductWhereUniqueInput, { nullable: false })
  where!: PrductWhereUniqueInput;
}

export { PrductFindUniqueArgs };
