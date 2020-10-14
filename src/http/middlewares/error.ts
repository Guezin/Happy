import { Request, Response, NextFunction } from 'express'
import { QueryFailedError } from 'typeorm'
import { ValidationError } from 'yup'

import AppError from '../../errors/AppError'

interface ValidationErrors {
  [key: string]: string[]
}

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

  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {}

    error.inner.forEach(err => {
      errors[err.path] = err.errors
    })

    return response
      .status(400)
      .json({ messageOfError: 'Validation fails', errors })
  }

  console.log(error)

  return response.status(500).json('Server Internal Error')
}
