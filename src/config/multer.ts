import multer from 'multer'
import { resolve } from 'path'

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      const fileName = `${Date.now()}-${file.originalname}`

      callback(null, fileName)
    }
  })
}
