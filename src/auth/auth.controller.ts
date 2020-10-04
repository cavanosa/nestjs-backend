import { LoginUsuarioDto } from './dto/login.dto';
import { NuevoUsuarioDto } from './dto/nuevo-usuario.dto';
import { AuthService } from './auth.service';
import { Controller, Get, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getAll() {
        return this.authService.getall();
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post('nuevo')
    create(@Body() dto: NuevoUsuarioDto) {
        return this.authService.create(dto);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post('login')
    login(@Body() dto: LoginUsuarioDto) {
        return this.authService.login(dto);
    }
}
