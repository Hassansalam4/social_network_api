import { Request, Response } from 'express';
import {
   Users,
    // Thought 

  } from '../models/index.js';

/**
 * GET All Users /Api/users
 * @returns an array of users with populated thoughts
 * @returns an array of users with populated friends
 * 
*/
export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await Users.find().populate('thoughts').populate('friends');
    
    res.json({ users, count: users.length });
  } 
  catch(error: any){
      res.status(500).json({
          message: error.message
      });
  }
}

/**
 * GET User based on id /users/:id
 * @param string id
 * @returns a single Users object
*/
export const getUsersById = async (req: Request, res: Response) => {
    const { usersId } = req.params;
    try {
      const thought = await usersId.findById(userid);
      if(thought) {
        res.json(thought);
      } else {
        res.status(404).json({
          message: 'Volunteer not found'
        });
      }
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
  };

  /**
 * POST Course /courses
 * @param object username
 * @returns a single Course object
*/
//export const createCourse = async (req: Request, res: Response) => {
   // const { user } = req.body;
    //try {
     // const newUser = await user.create({
       // course
  //    });
  //    res.status(201).json(newCourse);
   // } catch (error: any) {
    //  res.status(400).json({
    //    message: error.message
   //   });
   // }
 // };

/**
 * PUT Course based on id /courses/:id
 * @param object id, username
 * @returns a single Course object
*/
//export const updateUser= async (req: Request, res: Response) => {
  //  try {
    //  const course = await Course.findOneAndUpdate(
     //   { _id: req.params.courseId },
    //    { $set: req.body },
     //   { runValidators: true, new: true }
   //   );

     // if (!course) {
   //    res.status(404).json({ message: 'No course with this id!' });
    //  }

      //res.json(course)
 //   } catch (error: any) {
     // res.status(400).json({
   //     message: error.message
  //    });
 //   }
//  };

  /**
 * DELETE User based on id /User/:id
 * @param string id
 * @returns string 
*/
//export const delete = async (req: Request, res: Response) => {
 //   try {
     // const course = await Course.findOneAndDelete({ _id: req.params.courseId});
      
    //  if(!course) {
     //   res.status(404).json({
      //    message: 'No course with that ID'
      //  });
  //    } else {
    //    await Student.deleteMany({ _id: { $in: course.students } });
    // }
      
    //} catch (error: any) {
      //res.status(500).json({
     //   message: error.message
      //});
  //  }
  //};
