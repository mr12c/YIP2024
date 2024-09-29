import Router from "express"
import { createTeam,getTeams } from "../controllers/team.controller.js";
 
const router = Router()

router.route('/register').post(createTeam);
router.route('/teams').get(getTeams);
 


export default router