import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrductService } from "./prduct.service";
import { PrductControllerBase } from "./base/prduct.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("prducts")
@common.Controller("prducts")
export class PrductController extends PrductControllerBase {
  constructor(
    protected readonly service: PrductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
