import { Request, Response } from "express";

import CreateCourseSerivce from "./createCourseSerivce";

export function createCourse(req: Request, res: Response) {
  CreateCourseSerivce.execute({
    name: "Node.js", 
    duration: 3, 
    educator: "Dani Leão"
  });

  return res.send('Hellow World!');
};