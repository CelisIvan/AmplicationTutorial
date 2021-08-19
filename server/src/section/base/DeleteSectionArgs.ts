import { ArgsType, Field } from "@nestjs/graphql";
import { SectionWhereUniqueInput } from "./SectionWhereUniqueInput";

@ArgsType()
class DeleteSectionArgs {
  @Field(() => SectionWhereUniqueInput, { nullable: false })
  where!: SectionWhereUniqueInput;
}

export { DeleteSectionArgs };
