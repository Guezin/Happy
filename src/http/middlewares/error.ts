import { Request, Response, NextFunction } from 'express'
import { QueryFailedError } from 'typeorm'

import AppError from '../../errors/AppError'

export default async (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Promise<Response> => {
  if (error instanceof AppError) {
    return response
      .status(error.status_code)
      .json({ messageOfError: error.message })
  }

  if (error instanceof QueryFailedError) {
    return response.status(401).json({ messageOfError: error.message })
  }

  console.log(error)

  return response.status(500).json('Server Internal Error')
}
