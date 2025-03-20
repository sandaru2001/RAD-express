import {PrismaClient,Staff} from "@prisma/client";

const prisma = new PrismaClient();

export async function addStaff(staff:Staff){
    if (!staff.firstName || !staff.designation || !staff.gender || !staff.joined_date || !staff.dob || !staff.address || !staff.contact_no || !staff.email || !staff.role) {
        throw new Error("you must provide all the fields");
    }
    try {
        const newStaff =await prisma.staff.create({
            data: {
                firstName: staff.firstName,
                designation: staff.designation,
                gender: staff.gender,
                joined_date: staff.joined_date,
                dob: staff.dob,
                address: staff.address,
                contact_no: staff.contact_no,
                email: staff.email,
                role: staff.role
            }
        })
        console.log("Staff added ",newStaff);
        return newStaff;
    }catch (e){
        console.log("Error in addStaff: ", e);
    }
}

export async function getStaff(){
    try {
        return await prisma.staff.findMany();
    }catch (e){
        console.log("Error in getStaff: ", e);
    }
}

export async function deleteStaff(id:number){
    if (!id) {
        throw new Error("you must provide id");
    }
    try {
        const deleteStaff = await prisma.staff.delete({
            where:{
                id:id
            }
        })
        console.log("Staff Deleted ",deleteStaff)
        return deleteStaff
    }catch (e){
        console.log("Error in deleteStaff: ", e);
    }
}

export  async function UpdateStaff(id:number,staff:Staff){
    if (!id || !staff) {
        throw new Error("you must provide id and staff");
    }
    console.log("Staff list: ",staff)
    try {
        const updateStaff = await prisma.staff.update({
            where:{id:id},
            data:{
                firstName: staff.firstName,
                designation: staff.designation,
                gender: staff.gender,
                joined_date: staff.joined_date,
                dob: staff.dob,
                address: staff.address,
                contact_no: staff.contact_no,
                email: staff.email,
                role: staff.role
            }
        })
        console.log("Staff updated ",updateStaff)
        return updateStaff
    }catch (e){
        console.log("Error in UpdateStaff: ", e);
    }
}
export async function getStaffById(id:number){
    if (!id) {
        throw new Error("you must provide id");
    }
    try {
        return await prisma.staff.findUnique({
            where:{
                id:id
            }
        })
    }catch (e){
        console.log("Error in getStaffById: ", e);
    }
}