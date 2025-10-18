import { HttpStatusCode } from '../../utils/status-codes.js';

// Structural type for app-wide errors
export interface GlobalError extends Error {
    statusCode: number;
}

// Base class that properly extends the built-in Error
export class BaseHttpError extends Error implements GlobalError {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.name = new.target.name;
        this.statusCode = statusCode;
        // Fix prototype chain in transpiled output
        Object.setPrototypeOf(this, new.target.prototype);
        // Optional: capture stack without this ctor
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export class InternalServerError extends BaseHttpError {
    constructor(message = 'Internal Server Error') {
        super(message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
}

export class BadRequestError extends BaseHttpError {
    constructor(message = 'Bad Request') {
        super(message, HttpStatusCode.BAD_REQUEST);
    }
}

export class NotFoundError extends BaseHttpError {
    constructor(message = 'Not Found') {
        super(message, HttpStatusCode.NOT_FOUND);
    }
}

export class UnauthorizedError extends BaseHttpError {
    constructor(message = 'Unauthorized') {
        super(message, HttpStatusCode.UNAUTHORIZED);
    }
}

export class ForbiddenError extends BaseHttpError {
    constructor(message = 'Forbidden') {
        super(message, HttpStatusCode.FORBIDDEN);
    }
}

export class ConflictError extends BaseHttpError {
    constructor(message = 'Conflict') {
        super(message, HttpStatusCode.CONFLICT);
    }
}
