import dotenv from "dotenv";
dotenv.config();
export const MONGODB_URI=process.env.MONGODB_URI as string;
export const FRONTEND_URL = process.env.FRONTEND_URL as string;
