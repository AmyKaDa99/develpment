import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseFilters, Inject } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { ApiTags } from '@nestjs/swagger';
import { RefreshTokenDto } from './dto/refreshToken.dto';
import { HttpCode } from '@nestjs/common/decorators';

@ApiTags('Auth')
@Controller('Auth/user')
export class UserController {

  /* constructor(
     @Inject(CACHE_MANAGER) private cacheManager: Cache,
     private readonly authService: AuthService,
     private readonly userService: UserService) { }
 
   @Post('phone')
   async signUp(@Body() user: { phone: string }) {
     const oldUserDoc = await this.userService.findByPhone(user.phone);
     const code = (Math.floor(Math.random() * 900000) + 100000).toString();
     await this.cacheManager.del(user.phone);
     if (oldUserDoc) {
       await this.cacheManager.set(user.phone, { op: "login", code, phone: user.phone }, 20 * 60); //20 minute
       return { op: "login", code, phone: user.phone }
     }
     else {
       await this.cacheManager.set(user.phone, { op: "register", code, phone: user.phone }, 20 * 60); //20 minute
       return { op: "register", code, phone: user.phone }
     }
     // in login we return information 
     // in register we ask for details
 
   }
 
   @Post('code')
   @HttpCode(200)
   async checkCode(@Body() user: { phone: string, code: string }) {
     const userCache = (await this.cacheManager.get(user.phone)) as {
       op: string;
       code: string;
       phone: string;
     };
 
     if (!userCache)
       throw new HttpException("1", HttpStatus.BAD_REQUEST);
 
     if (!(user.code === userCache.code))
       throw new HttpException("2", HttpStatus.CONFLICT);
 
     if (userCache.op === "login") {
       //TO DO 
       // Update Refresh Token   
       const userDoc = await this.userService.findByPhone(userCache.phone);
       const accessToken = await this.authService.createAccessToken(userDoc.id);
       return { ...userDoc, accessToken, expireTime: 60 * 60 * 24 }
     }
 
     if (userCache.op === "register") {
 
     }
   }
 
   @Post('register')
   async register(@Body() createUserDto: CreateUserDto) {
     createUserDto.refreshToken = await this.authService.createRefreshToken(createUserDto.phone)
     const userDoc = await this.userService.create(createUserDto);
     const accessToken = await this.authService.createAccessToken(userDoc.id);
     return {
       ...userDoc,
       accessToken,
       expireTime: 60 * 60
     }
   }
 
   /* @Post('login')
    async login(@Body() loginDto: LoginDto) {
  
      const isMatch = await this.userService.logInUser(loginDto);
      if (!isMatch) throw new HttpException('wrong in your data', 402);
  
      const userDoc = await this.userService.findUser(loginDto.phone);
      const accessToken = await this.authService.createAccessToken(userDoc.id, userDoc.diseases);
      const refreshToken = await this.authService.createRefreshToken(userDoc.phone);
      userDoc.refreshToken = refreshToken;
      this.userService.updateRefreshToken(userDoc.id, refreshToken);
      await this.userService.updateFcm(userDoc.id, loginDto.fcm);
      return {
        userDoc,
        accessToken
      }
    }
  
    @Patch('refreshToken')
    async refreshToken(@Body() refreshToken: RefreshTokenDto) {
      const decoded = await this.authService.verifyingRefreshToken(refreshToken.refreshToken) as any;
      const userDoc = await this.userService.findPhone(decoded.phone);
      if (!userDoc) {
        throw new HttpException('User with this phone does not exist', HttpStatus.NOT_FOUND);
      }
      const accessToken = await this.authService.createAccessToken(userDoc.id, userDoc.diseases);
      return {
        accessToken: accessToken,
        expireTime: 60 * 2
      };
  
    }
  }
  
  @ApiTags('chef auth')
  @Controller('Auth/chef')
  export class ChefController {
  
    constructor(
      private readonly authService: AuthService,
      private readonly userService: UserService) { }
  
    @UseFilters(MongoExceptionFilter)
    @Post('register')
    async register(@Body() createChefDto: CreateChefDto) {
      createChefDto.refreshToken = await this.authService.createRefreshToken(createChefDto.phone)
      const userDoc = await this.userService.createChef(createChefDto);
      const accessToken = await this.authService.createAccessToken(userDoc.id, userDoc.diseases);
      return {
        userDoc,
        accessToken
      }
    }
  
  
    @Post('login')
    async login(@Body() loginDto: LoginDto) {
      const isMatch = await this.userService.logInChef(loginDto);
      if (!isMatch) throw new HttpException('wrong in your data', 402);
      const userDoc = await this.userService.findChef(loginDto.phone);
      const accessToken = await this.authService.createAccessToken(userDoc.id, userDoc.diseases)
      await this.userService.updateFcm(userDoc.id, loginDto.fcm);
      return {
        userDoc,
        accessToken
      }
    }
  
    @Patch('refreshToken')
    async refreshToken(@Body() refreshToken: RefreshTokenDto) {
      const decoded = await this.authService.verifyingRefreshToken(refreshToken.refreshToken) as any;
      const userDoc = await this.userService.findPhone(decoded.phone);
      if (!userDoc) {
        throw new HttpException('User with this phone does not exist', HttpStatus.NOT_FOUND);
      }
      const accessToken = await this.authService.createAccessToken(userDoc.id, userDoc.diseases);
      return {
        accessToken: accessToken,
        expireTime: 60 * 2
      };
  
    }*/
}
