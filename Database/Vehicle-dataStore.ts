import {PrismaClient, Vehicle} from "@prisma/client";

const prisma = new PrismaClient();

export async function addVehicle(v:Vehicle){
    if (!v.licensePlateNumber || !v.vehicleCategory || !v.fuelType || !v.status || !v.staffId) {
        throw new Error("you must provide all the fields");
    }
    try {
        if (v.staffId){
            const staffExists = await prisma.staff.findUnique({
                where:{id:v.staffId}
            });
            if (!staffExists){
                throw new Error(`Staff with ID ${v.staffId} does not exist`);
        }
    }
        const newVehicle = await prisma.vehicle.create({
            data:{
                licensePlateNumber:v.licensePlateNumber,
                vehicleCategory:v.vehicleCategory,
                fuelType:v.fuelType,
                status:v.status,
                staffId:v.staffId
            }
        })
        console.log("Vehicle added ",newVehicle);
        return newVehicle;
    }catch (err){
        console.log("Error adding vehicle ",err);
    }
}
export async function deleteVehicle(vehicle_code:number){
    if (!vehicle_code) {
        throw new Error("you must provide vehicle_code");
    }
    try {
        const deleteVehicle = await prisma.vehicle.delete({
            where:{
                vehicle_code:vehicle_code
            }
        })
        console.log("Vehicle deleted ",deleteVehicle);
        return deleteVehicle;
    }catch (err){
        console.log("Error deleting vehicle ",err);
    }
}
export async function updateVehicle(vehicle_code:number,v:Vehicle){
    if (!vehicle_code || !v) {
        throw new Error("you must provide vehicle_code and vehicle");
    }
    try {
        const updateVehicle = await prisma.vehicle.update({
            where:{
                vehicle_code:v.vehicle_code
            },
            data:{
                licensePlateNumber:v.licensePlateNumber,
                vehicleCategory:v.vehicleCategory,
                fuelType:v.fuelType,
                status:v.status,
                staffId:v.staffId
            }
        })
        console.log("Vehicle updated ",updateVehicle);
        return updateVehicle;
    }catch (err){
        console.log("Error updating vehicle ",err);
    }
}
export async function getAllVehicles(){
    try {
        return await prisma.vehicle.findMany();
    }catch (err){
        console.log("Error getting vehicles ",err);
    }
}
export async function getVehicleById(vehicle_code:number){
    if (!vehicle_code) {
        throw new Error("you must provide vehicle_code");
    }
    try {
        return await prisma.vehicle.findUnique({
            where:{
                vehicle_code:vehicle_code
            }
        })
    }catch (err){
        console.log("Error getting vehicle by ID ",err);
    }
}