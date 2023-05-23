/*import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenPayloadDto } from '../dto/access-token-payload.dto';

@Injectable()
export class UserGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>();

        if (!request.headers["authorization"]) return false;
        const authorization = request.headers["authorization"].replace('Bearer ', '');
        if (!authorization) return false;
        try {
            const verified = await this.jwtService.verifyAsync(authorization, {
                secret: "IamSecretKey"
            })
            if (verified) {
                const decoded = await this.jwtService.decode(authorization) as AccessTokenPayloadDto;
                request.headers["id"] = decoded.id;
                const ids = decoded.diseases.map((obj) => {
                    return obj['_id'];
                })
                request.headers["ids"] = ids;

                return true;
            }
        }
        catch {
            return false;
        }
    }
}
*/