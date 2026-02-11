import { Request, Response } from "express";
import { createGradeService } from "./grade.service";

//create grade
export const createGradeController = async(req:Request, res:Response)=>{
    const data = req.body;
    const {centerId} = req.params
    try {
        const response = await createGradeService(String(centerId),data )
        return res.status(201).json({message:"grade saved",response})
    } catch (error) {
        return res.status(500).json({message:"something went wrong"})
    }
}