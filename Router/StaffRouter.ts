import express from "express";
import {addStaff, deleteStaff, getStaff, getStaffById, UpdateStaff} from "../Database/Staff-dataStore";

const router = express.Router();

router.post("/add", async (req, res,next) => {
    const staff = req.body;
    try {
        const post = await addStaff(staff);
        res.json(post);
    }catch (e){
        console.log("Error in addStaff: ", e);
    }
});

router.delete("/delete/:staffId", async (req, res, next) => {
    const staffId = parseInt(req.params.staffId);
    try {
        const deleteS = await deleteStaff(staffId);
        res.json(deleteS);
    }catch (e){
        console.log("Error in deleteStaff: ", e);
    }
});

router.put("/update/:staffId", async (req, res, next) => {
    const staffId = parseInt(req.params.staffId);
    const staff = req.body;
    try {
        const updateS = await UpdateStaff(staffId,staff);
        res.json(updateS);
    }catch (e){
        console.log("Error in updateStaff: ", e);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const staff = await getStaff();
        res.json(staff);
    }catch (e){
        console.log("Error in getAllStaff: ", e);
    }
});
router.get("/get/:staffId", async (req, res, next) => {
    const staffId = parseInt(req.params.staffId);
    try {
        const getOneStaff = await getStaffById(staffId);
        res.json(getOneStaff);
    }catch (e){
        console.log("Error in getOneStaff: ", e);
    }
});
export default router