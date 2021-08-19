import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PrductServiceBase } from "./base/prduct.service.base";

@Injectable()
export class PrductService extends PrductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
