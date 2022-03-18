import {Express, Request, Response} from "express"
import "../services/auth";
// importation
import {authenticate, initialize, session } from 'passport'


export default function(app: Express) {

 app.use(initialize())
 app.use(session())

  console.log("This is the routes")
  
  app.get("/fromDingi", (req: Request, res: Response) => {
    res.json({name: "Dingi"})
  })
  
 app.get("/", (req: Request, res: Response) => res.send('hello world'));

 app.get("/api/", (req: Request, res: Response) => res.send('API'));

 app.get('/auth/google', authenticate('google', {scope: ['email', 'profile']}))

 app.get('/google/callback', authenticate('google', {
  successRedirect: '/protected',
  failureRedirect: '/auth/failure'
 }))

 app.get('/auth/failure', (req: Request, res: Response) => {
  res.send('something went wrong')
 })

  app.get("/protected", (req: Request, res: Response) => {
    let user = req.user;
  res.send('Hello');
 })
}