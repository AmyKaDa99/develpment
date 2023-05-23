import { Injectable } from '@nestjs/common';
//import { JwtService, JwtSignOptions } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    /* constructor(private jwtService: JwtService) { }
 
     async createAccessToken(id: string): Promise<string> {
         return await this.jwtService.sign({ id }, {
             expiresIn: 5 * 60
         })
     }
 
     async createRefreshToken(phone: string): Promise<string> {
         return await this.jwtService.sign({ phone }, {
             secret: "IamSecretKey",
             expiresIn: "1y"
         })
     }
 
     async verifyingRefreshToken(refreshToken: string): Promise<Object> {
         return await
             this.jwtService.verifyAsync(refreshToken, this.getRefreshTokenOptions());
     }
 
     private getRefreshTokenOptions() {
         const options: JwtSignOptions = {
             secret: "IamSecretKey",
         };
         return options;
     }*/
}
