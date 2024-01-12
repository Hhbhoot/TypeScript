import { Request,Response, response } from "express";
import  jwt from "jsonwebtoken";
import User from "../model/user.model";
import mongoose from "mongoose";
import { ThrowError } from "./errorHandler";

