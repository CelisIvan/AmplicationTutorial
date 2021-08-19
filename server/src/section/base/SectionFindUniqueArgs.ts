import { ArgsType, Field } from "@nestjs/graphql";
import { SectionWhereUniqueInput } from "./SectionWhereUniqueInput";

@ArgsType()
class SectionFindUniqueArgs {
  @Field(() => SectionWhereUniqueInput, { nullable: false })
  where!: SectionWhereUniqueInput;
}

export { SectionFindUniqueArgs };
