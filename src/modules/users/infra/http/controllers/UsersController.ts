import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const userService = container.resolve(CreateUserService);
    const user = await userService.execute({ email, name, password });

    return response.json(classToClass(user));
  }
}
