import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    reflector: Reflector;
    constructor(private readonly reflect: Reflector) {
        if (this.reflector == undefined) {
            this.reflector = new Reflector();
        } else {
            this.reflector = reflect;
        }
    }

    canActivate(context: ExecutionContext): boolean {
        
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () =>
      user.roles.some(role => !!roles.find(item => item === role));

    return user && user.roles && hasRole();
  }
}
