import multer, { FileFilterCallback } from 'multer'
import path from 'path'
import { Request } from 'express'

import aws from 'aws-sdk'
import multerS3 from 'multer-s3'

const storageTypes = {
    local: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, callBack) => {
            const fileName = `${Date.now()}-${file.originalname}`

            callBack(null, fileName)
        },
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'upload',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, callBack) => {
            const fileName = `${Date.now()}-${file.originalname}`

            callBack(null, fileName)
        }
    })
}


export default {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: storageTypes[process.env.STORAGE_TYPE],
    limits: {
        fileSize: 2 * 1024 * 1024
    },
}

export function filterOptions() {
    fileFilter: ({ req, file, callBack }: FileFilterProps) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ]

        if (allowedMimes.includes(file.mimetype)) {
            callBack(null, true)
        } else {
            callBack(new Error('Invalid file type'))
        }
    }
}



interface FileFilterProps {
    req: Request
    file: Express.Multer.File
    callBack: FileFilterCallback
}
