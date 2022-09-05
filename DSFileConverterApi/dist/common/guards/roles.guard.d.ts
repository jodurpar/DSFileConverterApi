import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class RolesGuard implements CanActivate {
    private readonly reflect;
    reflector: Reflector;
    constructor(reflect: Reflector);
    canActivate(context: ExecutionContext): boolean;
}
