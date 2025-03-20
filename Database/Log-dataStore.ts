import {PrismaClient,Log} from "@prisma/client";

const prisma = new PrismaClient();
export async function addLog(log: Log) {
    if (!log.log_date || !log.observed_image || !log.log_details) {
        throw new Error("you must provide all the fields");
    }
    try {
        const newLog = await prisma.log.create({
            data:{
                log_date:log.log_date,
                observed_image:log.observed_image,
                log_details:log.log_details,
            }
        })
        console.log("Log added ",newLog);
        return newLog;
    }catch (err){
        console.log("Error adding log ",err);
    }
}

export async function deleteLog(id:number){
    if (!id) {
        throw new Error("you must provide id");
    }
    try {
        const deleteLog = await prisma.log.delete({
            where:{
                id:id
            }
        })
        console.log("Log deleted ",deleteLog)
        return deleteLog;
    }catch (e){
        console.log("Error deleting log ",e)
    }
}

export async function updateLog(id:number,log:Log){
    if (!id || !log) {
        throw new Error("you must provide id and log");
    }
    try {
        const updateLog = await prisma.log.update({
            where:{
                id:id
            },
            data:{
                log_date:log.log_date,
                log_details:log.log_details,
                observed_image:log.observed_image
            }
        })
        console.log("Log updated ",updateLog)
        return updateLog;
    }catch (e){
        console.log("Error updating log ",e)
    }
}

export async function getAllLogs(){
    try {
        return await prisma.log.findMany()
    }catch (e){
        console.log("Error getting all logs ",e)
    }
}

export async function getLogById(id:number){
    if (!id) {
        throw new Error("you must provide id");
    }
    try {
        return await prisma.log.findUnique({
            where:{
                id:id
            }
        })
    }catch (e){
        console.log("Error getting log by id ",e)
    }
}