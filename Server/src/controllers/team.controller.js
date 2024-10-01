import {asyncHandler}  from "../utils/asyncHandler.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
 
import School from "../models/school.model.js";
import Mentor from "../models/mentor.model.js";
import Student from "../models/student.model.js";
import Team from "../models/team.model.js";
 






 
const createTeam = asyncHandler(async(req, res) => {
    const { team, school, mentor, s1, s2, s3 } = req.body;

    
    if (!team || !school || !mentor || !s1 || !s2 || (s3 && !s3)) {
        throw new ApiError(400, "All fields are required");
    }

    
    const teamExists = await Team.findOne({ 'name': team.name });
    if (teamExists) {
        throw new ApiError(409, "Team name already exists! Please choose a different name");
    }

    
    const createAndVerify = async (Model, data, name) => {
        const created = await Model.create(data);
        const found = await Model.findById(created._id);
        if (!found) throw new ApiError(404, `Error while creating ${name}`);
        return found;
    };

     
    const created_school = await createAndVerify(School, school, "School");
    const created_mentor = await createAndVerify(Mentor, mentor, "Mentor");
    const created_student1 = await createAndVerify(Student, s1, "Student1");
    const created_student2 = await createAndVerify(Student, s2, "Student2");
    const created_student3 = s3 ? await createAndVerify(Student, s3, "Student3") : null;

    
    const teamData = {
        ...team,
        school: created_school._id,
        mentor: created_mentor._id,
        students: [created_student1._id, created_student2._id]
    };
    
    if (created_student3) {
        teamData.students.push(created_student3._id);
    }

    
    const created_team = await createAndVerify(Team, teamData, "Team");
    



    return res.status(200).json(new ApiResponse(200, { created_team }, "Team created successfully"));
});



 const getTeams = asyncHandler(async()=>{
    const teams = await Team.find({}).populate("school mentor students");
    if(!teams) throw new ApiError(404,"No Teams Found");
    return res.status(200).json(new ApiResponse(200,{teams},"Teams fetched successfully"))
})


export {createTeam,getTeams}
