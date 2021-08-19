import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlDefaultAuthGuard from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PrductResolverBase } from "./base/prduct.resolver.base";
import { Prduct } from "./base/Prduct";
import { PrductService } from "./prduct.service";

@graphql.Resolver(() => Prduct)
@common.UseGuards(
  gqlDefaultAuthGuard.GqlDefaultAuthGuard,
  gqlACGuard.GqlACGuard
)
export class PrductResolver extends PrductResolverBase {
  constructor(
    protected readonly service: PrductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
