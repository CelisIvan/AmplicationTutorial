import { Module } from "@nestjs/common";
import { PrductModuleBase } from "./base/prduct.module.base";
import { PrductService } from "./prduct.service";
import { PrductController } from "./prduct.controller";
import { PrductResolver } from "./prduct.resolver";

@Module({
  imports: [PrductModuleBase],
  controllers: [PrductController],
  providers: [PrductService, PrductResolver],
  exports: [PrductService],
})
export class PrductModule {}
