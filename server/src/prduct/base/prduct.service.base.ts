import { PrismaService } from "nestjs-prisma";
import { Prisma, Prduct, Brand } from "@prisma/client";

export class PrductServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PrductFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrductFindManyArgs>
  ): Promise<number> {
    return this.prisma.prduct.count(args);
  }

  async findMany<T extends Prisma.PrductFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrductFindManyArgs>
  ): Promise<Prduct[]> {
    return this.prisma.prduct.findMany(args);
  }
  async findOne<T extends Prisma.PrductFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrductFindUniqueArgs>
  ): Promise<Prduct | null> {
    return this.prisma.prduct.findUnique(args);
  }
  async create<T extends Prisma.PrductCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrductCreateArgs>
  ): Promise<Prduct> {
    return this.prisma.prduct.create<T>(args);
  }
  async update<T extends Prisma.PrductUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrductUpdateArgs>
  ): Promise<Prduct> {
    return this.prisma.prduct.update<T>(args);
  }
  async delete<T extends Prisma.PrductDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrductDeleteArgs>
  ): Promise<Prduct> {
    return this.prisma.prduct.delete(args);
  }

  async getBrand(parentId: string): Promise<Brand | null> {
    return this.prisma.prduct
      .findUnique({
        where: { id: parentId },
      })
      .brand();
  }
}
