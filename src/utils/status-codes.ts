import { StatusCodes } from 'http-status-codes';

export enum HttpStatusCode {
    OK = StatusCodes.OK,
    CREATED = StatusCodes.CREATED,
    BAD_REQUEST = StatusCodes.BAD_REQUEST,
    UNAUTHORIZED = StatusCodes.UNAUTHORIZED,
    FORBIDDEN = StatusCodes.FORBIDDEN,
    NOT_FOUND = StatusCodes.NOT_FOUND,
    INTERNAL_SERVER_ERROR = StatusCodes.INTERNAL_SERVER_ERROR,
    CONFLICT = StatusCodes.CONFLICT,
}
