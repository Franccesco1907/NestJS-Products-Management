import { ROLES_KEY } from '@common/constants';
import { UserRole } from '@modules/users/domain/entities';
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);

