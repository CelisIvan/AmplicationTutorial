import { PrismaService } from "nestjs-prisma";
import { Prisma, Section } from "@prisma/client";

export class SectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SectionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SectionFindManyArgs>
  ): Promise<number> {
    return this.prisma.section.count(args);
  }

  async findMany<T extends Prisma.SectionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SectionFindManyArgs>
  ): Promise<Section[]> {
    return this.prisma.section.findMany(args);
  }
  async findOne<T extends Prisma.SectionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SectionFindUniqueArgs>
  ): Promise<Section | null> {
    return this.prisma.section.findUnique(args);
  }
  async create<T extends Prisma.SectionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SectionCreateArgs>
  ): Promise<Section> {
    return this.prisma.section.create<T>(args);
  }
  async update<T extends Prisma.SectionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SectionUpdateArgs>
  ): Promise<Section> {
    return this.prisma.section.update<T>(args);
  }
  async delete<T extends Prisma.SectionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SectionDeleteArgs>
  ): Promise<Section> {
    return this.prisma.section.delete(args);
  }
}
