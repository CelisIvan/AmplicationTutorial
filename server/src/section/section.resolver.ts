import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlDefaultAuthGuard from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SectionResolverBase } from "./base/section.resolver.base";
import { Section } from "./base/Section";
import { SectionService } from "./section.service";

@graphql.Resolver(() => Section)
@common.UseGuards(
  gqlDefaultAuthGuard.GqlDefaultAuthGuard,
  gqlACGuard.GqlACGuard
)
export class SectionResolver extends SectionResolverBase {
  constructor(
    protected readonly service: SectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
