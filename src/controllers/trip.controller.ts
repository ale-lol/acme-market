import { Request, Response } from "express";
import Trip from "../models/trip";
import { interTrip } from '../models/trip';

//create trip
export const addTrip = async (req: Request, res: Response) => {
  if (!req.body.title || !req.body.description ) {
    return res.status(400).json({ msg: "Plase insert a valid Trip" });
  }
  const newTrip = new Trip(req.body);
  await newTrip.save();
  return res.status(201).json(newTrip);
};

//get all trips
export const getAllTrips = async (req: Request, res: Response) => {
  const trpList = await Trip.find();
  return res.send(trpList);
};

//get a trip by id
export const getTrip = async (req: Request, res: Response) => {
  const { id } = req.params;
  const tripFound = await Trip.findById(id);
  return res.send(tripFound);
};

//update actor
export const updateTrip = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    title,
    description,
    price,
    list_of_requirements,
    start_date,
    end_date,
    pictures,
    cancelled,
    reason
  } = req.body;
  const newTrip = await Trip.updateOne(
    { _id: id },
    {
      $set: {
        title,
        description,
        price,
        list_of_requirements,
        start_date,
        end_date,
        pictures,
        cancelled,
        reason
      },
    }
  );
  return res.send(newTrip);
};

//remove actor
export const deleteTrip = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Trip.findByIdAndDelete(id);
  if (!result) {
    return res.status(404).json({ msg: "Trip not found" });
  }
  return res.status(200).send(result);
};

