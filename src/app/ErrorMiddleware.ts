import { Request, Response, NextFunction } from "express";

export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack); // Log do erro no console para debug

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: err.name || "InternalServerError",
        message: err.message || "Erro interno no servidor",
    });
}