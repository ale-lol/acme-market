import { Request, Response } from "express";
import Trip_Application from "../models/trip_application";

//create application
export const addTripApplication = async(req: Request, res: Response) => {
    if(!req.body.moment || !req.body.status){
        return res.status(400).json({msg: "Please, insert a valid application"})
    }

    const newTripApplication = new Trip_Application(req.body)
    await newTripApplication.save()
    return res.status(201).json(newTripApplication)
}

//get all applications
export const getAllApplications = async (req: Request, res: Response) => {
    const applications = await Trip_Application.find();
    return res.send(applications);  
}
//get application by id
export const getApplicationById = async (req: Request, res: Response) => {
    const {id} = req.params
    const applicationFound = await Trip_Application.findById(id)
    return res.send(applicationFound)
}

//update application
export const updateApplication = async (req: Request, res: Response) => {
    const {id} = req.params
    const { create_date, status, comments, denied, reason } = req.body
    const newApplication = await Trip_Application.updateOne({_id: id}, { create_date, status, comments, denied, reason})
    return res.send(newApplication)
}
//remove application by id
export const deleteApplication = async (req: Request, res: Response) => {
    const {id} = req.params
    const result = await Trip_Application.findByIdAndDelete(id)
    if(!result){
        return res.status(404).json({msg: "Application not found"})
    }
    return res.status(200).json(result)
    
}