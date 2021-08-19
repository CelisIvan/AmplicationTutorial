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
import { CreatePrductArgs } from "./CreatePrductArgs";
import { UpdatePrductArgs } from "./UpdatePrductArgs";
import { DeletePrductArgs } from "./DeletePrductArgs";
import { PrductFindManyArgs } from "./PrductFindManyArgs";
import { PrductFindUniqueArgs } from "./PrductFindUniqueArgs";
import { Prduct } from "./Prduct";
import { Brand } from "../../brand/base/Brand";
import { PrductService } from "../prduct.service";

@graphql.Resolver(() => Prduct)
@common.UseGuards(
  gqlDefaultAuthGuard.GqlDefaultAuthGuard,
  gqlACGuard.GqlACGuard
)
export class PrductResolverBase {
  constructor(
    protected readonly service: PrductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Prduct",
    action: "read",
    possession: "any",
  })
  async _productsMeta(
    @graphql.Args() args: PrductFindManyArgs
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

  @graphql.Query(() => [Prduct])
  @nestAccessControl.UseRoles({
    resource: "Prduct",
    action: "read",
    possession: "any",
  })
  async products(
    @graphql.Args() args: PrductFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Prduct[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Prduct",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Prduct, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Prduct",
    action: "read",
    possession: "own",
  })
  async prduct(
    @graphql.Args() args: PrductFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Prduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Prduct",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Prduct)
  @nestAccessControl.UseRoles({
    resource: "Prduct",
    action: "create",
    possession: "any",
  })
  async createPrduct(
    @graphql.Args() args: CreatePrductArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Prduct> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Prduct",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Prduct"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        brand: args.data.brand
          ? {
              connect: args.data.brand,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Prduct)
  @nestAccessControl.UseRoles({
    resource: "Prduct",
    action: "update",
    possession: "any",
  })
  async updatePrduct(
    @graphql.Args() args: UpdatePrductArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Prduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Prduct",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Prduct"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          brand: args.data.brand
            ? {
                connect: args.data.brand,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Prduct)
  @nestAccessControl.UseRoles({
    resource: "Prduct",
    action: "delete",
    possession: "any",
  })
  async deletePrduct(
    @graphql.Args() args: DeletePrductArgs
  ): Promise<Prduct | null> {
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

  @graphql.ResolveField(() => Brand, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Prduct",
    action: "read",
    possession: "any",
  })
  async brand(
    @graphql.Parent() parent: Prduct,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Brand | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Brand",
    });
    const result = await this.service.getBrand(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
