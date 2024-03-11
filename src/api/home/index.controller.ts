import type { Request, Response } from 'express'
import { sendServerResponse } from '../../utils'

class HomeController {
    index(_: Request, res: Response) {
        return sendServerResponse(res, 200, {
            message: 'express-ts server running',
        })
    }
}

export default HomeController
