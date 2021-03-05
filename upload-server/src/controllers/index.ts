import { Request, Response } from 'express'

import Post from '../models/post'

// Methods to list, create and delete a call should be created
async function index (req: Request, res: Response) {
    const posts = await Post.find()

    return res.json(posts)
}

async function specificIndex(req: Request, res: Response) {
    const { id } = req.query

    const post = await Post.findById(id)

    return res.json(post)
}

async function create (req: Request, res: Response) {
console.log(req)
    const {
        originalname: name,
        size,
        filename: key,
        //@ts-ignore
        location: url = ''
    } = req.file

    const post = await Post.create({
        name,
        size,
        key,
        url
    })

    return res.json(post)
}

async function del (req: Request, res: Response) {
    const post = await Post.findById(req.params.id)

    await post?.remove()

    return res.send()
}

async function delAll(req: Request, res: Response){
    const posts = await Post.find()

    posts.map(async post => await post.remove())

    return res.send()
}

async function delList(req: Request, res: Response){
    const { listId: ids } = req.body
    
    ids.map(async id => {
    	const post = await Post.findOne({_id: id})
    	console.log(post)
    	
    	await post.remove()
    })

    //const posts = await Post.deleteMany({ _id: ids})

    return res.send({ message: ids })
}

export { index, specificIndex, create, del, delAll, delList }
