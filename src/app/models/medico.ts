import { Hospital } from "./hospital";

export interface Medico{

   idMedico: number;
   nombre: string;
   apePat: string;
   apeMat: string;
   idHospital: Hospital;

}