import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entity/user.entity'
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args'
import { CreateUserInput } from './dtos/create-user.input'
import { UpdateUserInput } from './dtos/update-user.input'

import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') args: CreateUserInput) {
    return this.usersService.create(args)
  }

  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindManyUserArgs) {
    return this.usersService.findAll(args)
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args() args: FindUniqueUserArgs) {
    return this.usersService.findOne(args)
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') args: UpdateUserInput) {
    await this.prisma.user.findUnique({
      where: { uid: args.uid },
    })

    return this.usersService.update(args)
  }

  @Mutation(() => User)
  async removeUser(@Args() args: FindUniqueUserArgs) {
    await this.prisma.user.findUnique(args)

    return this.usersService.remove(args)
  }
}
