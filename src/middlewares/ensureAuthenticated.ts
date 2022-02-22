import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

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
    throw new Error('Token Missing from request');
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
      throw new Error('User not found');
    }

    next();
  } catch (error) {
    throw new Error('Invalid Token');
  }
}
