import { Request, Response } from "express";
import Actor, { interActor } from "../models/actor";

//create actor
export const addActor = async (req: Request, res: Response) => {
  if (
    !req.body.name ||
    !req.body.surname ||
    !req.body.email ||
    !req.body.role ||
    !req.body.password
  ) {
    return res.status(400).json({ msg: "Please send a valid actor" });
  }
  const newActor = new Actor(req.body);
  try {
    const actor = await newActor.save();
    res.json(actor);
  } catch (err: any) {
    if (err.name === "ValidationError") {
      res.status(422).send(err);
    } else {
      res.status(500).send(err);
    }
  }
};

//get all actors
export const getAllActors = async (req: Request, res: Response) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (err) {
    res.status(500).send(err);
  }
};

//get actor by id
export const getActor = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actorFound = await Actor.findById(id).exec();
    if (actorFound) {
      res.status(200).json(actorFound);
    } else {
      res.status(404).send({ msg: "Actor not found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

//update actor
export const updateActor = async (req: Request, res: Response) => {
  const id = req.params.id;
  try{
    const { role, name, surname, email, phone_number, address } = req.body;
    const actor = await Actor.findOneAndUpdate(
      { _id: id },
      { $set: { role, name, surname, email, phone_number, address } },
      { new: true }
    );
    if(actor){
      res.status(200).json(actor)
    }else{
      res.status(404).send("Actor not found")
    }
  }catch(err: any){
    if(err.name == "ValidationError"){
      res.status(422).send(err)
    }
    res.status(500).send(err)
  }
};

//remove actor
export const deleteActor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Actor.findByIdAndDelete(id);
  return res.send(result);
};
