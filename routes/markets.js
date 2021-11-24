import { Router } from 'express';
import pool from '../db/pg.js';

const marketsRouter = Router()

marketsRouter.get('/', async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM "public"."christmas_markets2" LIMIT 100')
    res.json(rows);
})

marketsRouter.get('/:id', async (req,res) => {

})

marketsRouter.post('/', async (req,res) => {
    body
 pool.quert('insert into')
})

export default marketsRouter;

<Link to={`/markets/${id}`} className="marketListItem" key={id}></Link>