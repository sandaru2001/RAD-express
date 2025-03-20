import {PrismaClient,Field} from "@prisma/client";

const prisma = new PrismaClient();

export async function saveField(field:Field){
    if (!field.fieldName || !field.location || !field.extend || !field.fieldImg1 || !field.fieldImg2) {
        throw new Error("you must provide all the fields");
    }
    try {
        const newField =await prisma.field.create({
            data: {
                fieldName: field.fieldName,
                location: field.location,
                extend: field.extend,
                fieldImg1: field.fieldImg1,
                fieldImg2: field.fieldImg2
            }
        })
        console.log("Field saved ",newField);
        return newField;
    }catch (e){
        console.log(e)
    }
}

export async function deleteField(fieldId: number) {
    if (!fieldId) {
        throw new Error("You must provide a fieldId");
    }

    console.log("Field ID is", fieldId);

    try {
        // Delete associated crops first
        await prisma.crop.deleteMany({
            where: {
                fieldId: fieldId
            }
        });

        // Now delete the field
        const deletedField = await prisma.field.delete({
            where: {
                fieldId: fieldId
            }
        });

        console.log("Field Deleted", deletedField);
        return deletedField;
    } catch (e) {
        console.error("Error deleting field:", e);
        throw new Error("Failed to delete field. Make sure it has no dependent records.");
    }
}

export  async function UpdateField(fieldId:number,field:Field){
    if (!fieldId || !field) {
        throw new Error("you must provide fieldId and field");
    }
    try {
        const updateField = await prisma.field.update({
            where:{fieldId:fieldId},
            data:{
                fieldName: field.fieldName,
                location: field.location,
                extend: field.extend,
                fieldImg1: field.fieldImg1,
                fieldImg2: field.fieldImg2
            }
        })
        console.log("Field updated ",updateField)
        return updateField
    }catch (e){
        console.log(e)
    }
}

export async function getAllFields(){
    try {
       return await prisma.field.findMany()
    }catch (e){
        console.log(e)
    }
}

export async function getFieldById(fieldId:number){
    if (!fieldId) {
        throw new Error("you must provide fieldId");
    }
    try {
        const getField = await prisma.field.findUnique({
            where:{fieldId:fieldId}
        })
        console.log(getField);
        return getField
    }catch (e){
        console.log(e)
    }
}