import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SectionService } from "./section.service";
import { SectionControllerBase } from "./base/section.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("sections")
@common.Controller("sections")
export class SectionController extends SectionControllerBase {
  constructor(
    protected readonly service: SectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
