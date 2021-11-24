import { Router } from 'express';

const marketsRouter = Router()

marketsRouter.get('/', (req, res) => {
    query(SELECT * FROM post)
    res.json()
})

export default marketsRouter;