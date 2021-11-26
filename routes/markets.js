import { Router } from 'express';
import pool from '../db/pg.js';

const marketsRouter = Router()

marketsRouter.get('/', async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM  "post" ;');
    console.log(rows);

    res.json(rows);
})

marketsRouter.get('/:id', async (req,res) => {
    const id = req.params.id;
    const {rows:[market]} = await pool.query(`SELECT * FROM post WHERE id='${id}';`);
    //const {rows} = await pool.query(`SELECT * FROM post WHERE id=$1;`, [id]);
    console.log(market);
    res.json(market);
})

marketsRouter.post('/', async (req,res) => {
    body
 pool.quert('insert into')
})

export default marketsRouter;

{/* <Link to={`/markets/${id}`} className="marketListItem" key={id}></Link> */}