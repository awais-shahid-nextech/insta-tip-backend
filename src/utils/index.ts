import type { Response } from 'express'

export function sendServerResponse<T>(
    responseInstance: Response,
    status: number,
    data: T,
    errors: Record<string, string> = {},
) {
    if (Object.values(errors).length) {
        const errorResponseData = {
            data: null,
            errors,
        }
        return responseInstance.status(status ?? 500).json(errorResponseData)
    }
    const successResponseData = {
        data,
        errors: null,
    }
    return responseInstance.status(status ?? 200).json(successResponseData)
}
