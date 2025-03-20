import express from "express";
import {deleteField, getAllFields, getFieldById, saveField, UpdateField} from "../Database/Field-dataStore";
import {Field} from "@prisma/client";


 const router = express.Router();

router.get("/",async (req,res,next)=>{
    try {
        const field =await getAllFields();
        res.json(field)
    }catch (e){
        console.log(e)
    }
})
router.post("/add",async (req,res,next)=>{
    console.log(req.body)
    const field:Field = req.body

    try {
        const add  = await saveField(field)
        res.json(add)
    }catch (e){
        console.log("Error adding field ",e)
    }
})
router.delete("/delete/:fieldId",async (req,res,next)=>{
    const fieldId = parseInt(req.params.fieldId)
    try {
        const deleteFiled = await deleteField(fieldId)
        res.json(deleteFiled)
    }catch (e){
        console.log("error deleting field ",e)
    }
})
router.put("/update/:fieldId",async (req,res,next)=>{
    const fieldId = parseInt(req.params.fieldId)
    const field  = req.body

    try {
        const update = await UpdateField(fieldId,field);
        res.json(update)
    }catch (e){
        console.log("Error updating field ",e)
    }
})
router.get("/get/:fieldId",async (req,res,next)=>{
    const fieldId = parseInt(req.params.fieldId)
    try {
       const getOneField = await getFieldById(fieldId)
        res.json(getOneField)
    }catch (e){
        console.log("Error getting customer ",e)
    }
})
export default router;