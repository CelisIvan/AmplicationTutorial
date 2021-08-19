import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlDefaultAuthGuard from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteSectionArgs } from "./DeleteSectionArgs";
import { SectionFindManyArgs } from "./SectionFindManyArgs";
import { SectionFindUniqueArgs } from "./SectionFindUniqueArgs";
import { Section } from "./Section";
import { SectionService } from "../section.service";

@graphql.Resolver(() => Section)
@common.UseGuards(
  gqlDefaultAuthGuard.GqlDefaultAuthGuard,
  gqlACGuard.GqlACGuard
)
export class SectionResolverBase {
  constructor(
    protected readonly service: SectionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "read",
    possession: "any",
  })
  async _sectionsMeta(
    @graphql.Args() args: SectionFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Section])
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "read",
    possession: "any",
  })
  async sections(
    @graphql.Args() args: SectionFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Section[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Section",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Section, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "read",
    possession: "own",
  })
  async section(
    @graphql.Args() args: SectionFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Section | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Section",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Section)
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "delete",
    possession: "any",
  })
  async deleteSection(
    @graphql.Args() args: DeleteSectionArgs
  ): Promise<Section | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
