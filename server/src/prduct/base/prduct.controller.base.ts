import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { PrductService } from "../prduct.service";
import { PrductCreateInput } from "./PrductCreateInput";
import { PrductWhereInput } from "./PrductWhereInput";
import { PrductWhereUniqueInput } from "./PrductWhereUniqueInput";
import { PrductFindManyArgs } from "./PrductFindManyArgs";
import { PrductUpdateInput } from "./PrductUpdateInput";
import { Prduct } from "./Prduct";

export class PrductControllerBase {
  constructor(
    protected readonly service: PrductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Prduct",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Prduct })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: PrductCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Prduct> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Prduct",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Prduct"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        brand: data.brand
          ? {
              connect: data.brand,
            }
          : undefined,
      },
      select: {
        available: true,

        brand: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,
        type: true,
        unitPrice: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Prduct",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Prduct] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => PrductFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Prduct[]> {
    const args = plainToClass(PrductFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Prduct",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        available: true,

        brand: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,
        type: true,
        unitPrice: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Prduct",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Prduct })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PrductWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Prduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Prduct",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        available: true,

        brand: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,
        type: true,
        unitPrice: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Prduct",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Prduct })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PrductWhereUniqueInput,
    @common.Body()
    data: PrductUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Prduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Prduct",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Prduct"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          brand: data.brand
            ? {
                connect: data.brand,
              }
            : undefined,
        },
        select: {
          available: true,

          brand: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          name: true,
          type: true,
          unitPrice: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Prduct",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Prduct })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PrductWhereUniqueInput
  ): Promise<Prduct | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          available: true,

          brand: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          name: true,
          type: true,
          unitPrice: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
