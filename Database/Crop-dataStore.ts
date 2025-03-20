import {Crop, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function addCrop(crop: Crop) {
    if (!crop.commonName || !crop.scientificName || !crop.category || !crop.season || !crop.cropImg || !crop.fieldId) {
        throw new Error("you must provide all the fields");
    }
    try {
        if (crop.fieldId) {
            const fieldExists = await prisma.field.findUnique({
                where: { fieldId: crop.fieldId }
            });

            if (!fieldExists) {
                throw new Error(`Field with ID ${crop.fieldId} does not exist.`);
            }
        }

        const newCrop = await prisma.crop.create({
            data: {
                commonName: crop.commonName,
                scientificName: crop.scientificName,
                cropImg: crop.cropImg,
                category: crop.category,
                season: crop.season,
                field: crop.fieldId ? { connect: { fieldId: crop.fieldId } } : undefined,
            }
        });

        console.log("Crop added ", newCrop);
        return newCrop;
    } catch (e) {
        console.log("Error adding crop ", e);
    }
}

export async function deleteCrop(cropId:number){
    if (!cropId) {
        throw new Error("you must provide cropId");
    }
    try {
        const deleteCrop = await prisma.crop.delete ({
            where:{
                cropId:cropId
            }
        })
        console.log("Crop deleted ",deleteCrop)
        return deleteCrop;
    }catch (e){
        console.log("Error deleting crop ",e)
    }
}
export async function updateCrop(cropId:number,crop:Crop){
    if (!cropId || !crop) {
        throw new Error("you must provide cropId and crop");
    }
    try {
        const updateCrop = await prisma.crop.update({
            where:{
                cropId:cropId
            },
            data:{
                commonName:crop.commonName,
                scientificName:crop.scientificName,
                cropImg:crop.cropImg,
                category:crop.category,
                season:crop.season,
                field: crop.fieldId ? { connect: { fieldId: crop.fieldId } } : undefined
            }
        })
        console.log("Crop updated ",updateCrop)
        return updateCrop
    }catch (e){
        console.log("Error updating crop ",e)
    }
}
export async function getAllCrops(){
    try {
        return await prisma.crop.findMany()
    }catch (e){
        console.log("Error getting all crops ",e)
    }
}
export async function getCropById(cropId:number){
    if (!cropId) {
        throw new Error("you must provide cropId");
    }
    try {
        const getCrop = await prisma.crop.findUnique({
            where:{
                cropId:cropId
            }
        })
        console.log("Crop found ",getCrop)
        return getCrop
    }catch (e){
        console.log("Error getting crop by id ",e)
    }
}