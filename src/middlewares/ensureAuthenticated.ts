import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';
import { UserRepository } from '../modules/accounts/entities/repositories/implementations/UserRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token Missing from request', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(
      token,
      'f00a690212b11159d6c741822e49ac5c',
    ) as IPayload;

    const usersRepository = new UserRepository();

    const userAlreadyExists = await usersRepository.findById(userId);

    if (!userAlreadyExists) {
      throw new AppError('User not found', 401);
    }

    next();
  } catch (error) {
    throw new AppError('Invalid Token', 401);
  }
}
