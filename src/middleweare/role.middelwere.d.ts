import type { Request, Response, NextFunction } from "express";
interface AuthRequest extends Request {
    user?: any;
}
export declare const checkRole: (roles: string[]) => (req: AuthRequest, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=role.middelwere.d.ts.map