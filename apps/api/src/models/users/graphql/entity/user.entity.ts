import { ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, User as UserType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.AuthProviderTypes, {
  name: 'AuthProviderTypes',
})

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  uid: string
  createdAt: Date
  updatedAt: Date
  name: string
  image: string
}
