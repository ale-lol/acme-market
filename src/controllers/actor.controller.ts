import { Request, Response } from "express";
import Actor, { interActor } from "../models/actor";

//create actor
export const addActor = async (req: Request, res: Response) => {
  if (
    !req.body.name ||
    !req.body.surname ||
    !req.body.email ||
    !req.body.actor_type
  ) {
    return res.status(400).json({ msg: "Please send a valid actor" });
  }

  const newActor = new Actor(req.body);
  await newActor.save();
  return res.status(201).json(newActor);
};

//get all actors
export const getAllActors = async (req: Request, res: Response) => {
  const actorsList = await Actor.find();
  return res.send(actorsList);
};

//get actor by id
export const getActor = async (req: Request, res: Response) => {
  const id = req.params.id;
  const actorFound = await Actor.findById(id).exec();
  return res.send(actorFound);
};

//update actor
export const updateActor = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { actor_type, name, surname, email, phone_number, address } = req.body;
  const newActor = await Actor.updateOne(
    { _id: id },
    { $set: { actor_type, name, surname, email, phone_number, address } }
  );
  return res.send(newActor);
};

//remove actor
export const deleteActor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Actor.findByIdAndDelete(id);
  return res.send(result);
};
