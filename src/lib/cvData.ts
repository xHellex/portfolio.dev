import rawEs from "@/data/cv.json";
import rawEn from "@/data/cv-en.json";
import { cvSchema } from "@/cvSchema";

export const cv = cvSchema.parse(rawEs);
export const cvEn = cvSchema.parse(rawEn);
