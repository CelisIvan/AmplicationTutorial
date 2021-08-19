import { Module } from "@nestjs/common";
import { SectionModuleBase } from "./base/section.module.base";
import { SectionService } from "./section.service";
import { SectionController } from "./section.controller";
import { SectionResolver } from "./section.resolver";

@Module({
  imports: [SectionModuleBase],
  controllers: [SectionController],
  providers: [SectionService, SectionResolver],
  exports: [SectionService],
})
export class SectionModule {}
