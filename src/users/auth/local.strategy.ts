/* eslint-disable prettier/prettier */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.services';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(id: number, password: string): Promise<any> {
    const user = await this.authService.validateUser(id, password);
    console.log(user, 'user');
    if (!user) {
      throw new UnauthorizedException('Not authorized');
    }

    return user;
  }
}