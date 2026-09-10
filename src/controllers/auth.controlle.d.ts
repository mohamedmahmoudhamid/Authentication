import type { NextFunction, Request, Response } from "express";
interface AuthRequest extends Request {
    user?: any;
}
export declare const registerUser: (req: Request, res: Response) => Promise<any>;
export declare const loginUser: (req: Request, res: Response) => Promise<any>;
export declare const getUser: (req: AuthRequest, res: Response, next: NextFunction) => Promise<any>;
export {};
//# sourceMappingURL=auth.controlle.d.ts.map