import {asyncHandler}  from "../utils/asyncHandler.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
 
import School from "../models/school.model.js";
import Mentor from "../models/mentor.model.js";
import Student from "../models/student.model.js";
import Team from "../models/team.model.js";
 







const createTeam = asyncHandler(async()=>{
    const {team,school,mentor,s1,s2,s3} = req.body;
    if(s3){
        if(!team,!school|| !mentor || !s1 || !s2){
            throw new ApiError(400,"All field are required");
        }
        const create_school = await School.create(school);
        const created_school = await School.findById(create_school._id);
        if(!created_school) throw new ApiError(404,"Error while creating School");
        const create_mentor = await Mentor.create(mentor);
        const created_mentor = await Mentor.findById(create_mentor._id);
        if(!created_mentor) throw new ApiError(404,"Error while creating Mentor");
        const create_student1 = await Student.create(s1);
        const created_student1 = await Student.findById(create_student1._id);
        if(!created_student1) throw new ApiError(404,"Error while creating Student1");
        const create_student2 = await Student.create(s2);
        const created_student2 = await Student.findById(create_student2._id);
        if(!created_student2) throw new ApiError(404,"Error while creating Student2");
        const create_student3 = await Student.create(s3);
        const created_student3 = await Student.findById(create_student3._id);
        if(!created_student3) throw new ApiError(404,"Error while creating Student2");
        const create_team = await Team.create({...team,
            school: created_school._id,
            mentor: created_mentor._id,
            students:[created_student1._id,created_student2._id,created_student3._id]
        })
        const created_team = await Team.findById(create_team._id);
        if(!created_team) throw new ApiError(404,"Error while creating Team");
        return res.status(200).json(new ApiResponse(200,{created_team},"Team created successfully"))
    }
    else{
        if(!team ||!school|| !mentor ||!s1 ||!s2){
            throw new ApiError(400,"All field are required");
        }
        const create_school = await School.create(school);
        const created_school = await School.findById(create_school._id);
        if(!created_school) throw new ApiError(404,"Error while creating School");
        const create_mentor = await Mentor.create(mentor);
        const created_mentor = await Mentor.findById(create_mentor._id);
        if(!created_mentor) throw new ApiError(404,"Error while creating Mentor");
        const create_student1 = await Student.create(s1);
        const created_student1 = await Student.findById(create_student1._id);
        if(!created_student1) throw new ApiError(404,"Error while creating student1");
        const create_student2 = await Student.create(s2);
        const created_student2 = await Student.findById(create_student2._id);
        if(!created_student2) throw new ApiError(404,"Error while creating Student2");
        const create_team = await Team.create({...team,
            school: created_school._id,
            mentor: created_mentor._id,
            students:[created_student1._id,created_student2._id]
        })
        const created_team = await Team.findById(create_team._id);
        if(!created_team) throw new ApiError(404,"Error while creating Team");
        return res.status(200).json(new ApiResponse(200,{created_team},"Team created successfully"))
    }

})


 const getTeams = asyncHandler(async()=>{
    const teams = await Team.find({}).populate("school mentor students");
    if(!teams) throw new ApiError(404,"No Teams Found");
    return res.status(200).json(new ApiResponse(200,{teams},"Teams fetched successfully"))
})


export {createTeam,getTeams}