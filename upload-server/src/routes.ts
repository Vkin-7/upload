import { index, specificIndex, create, del, delAll, delList } from './controllers/index'

import { Router } from 'express'
import multer from 'multer'

import multerConfig, { filterOptions } from './config/multer'

const multerOptions = {
    ...multerConfig,
    filterOptions
}

const routes = Router()

routes.get('/posts', index)
routes.get('/post', specificIndex)
routes.post('/posts',
    multer(multerOptions).single('file'),
    create
)
routes.delete('/posts/all', delAll)
routes.delete('/posts/list', delList)
routes.delete('/posts/:id', del)

export default routes