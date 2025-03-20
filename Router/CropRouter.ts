import express from "express";
import {addCrop, deleteCrop, getAllCrops, getCropById, updateCrop} from "../Database/Crop-dataStore";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const crop = await getAllCrops();
        res.json(crop);
    } catch (e) {
        console.log("Error getting all crops ", e);
    }
});

router.post("/add", async (req, res, next) => {
    const crop = req.body;
    try {
        const saveCrop = await addCrop(crop);
        res.json(saveCrop);
    } catch (e) {
        console.log("Error adding crop ", e);
    }
});

router.delete("/delete/:cropId", async (req, res, next) => {
    const cropId = parseInt(req.params.cropId);
    try {
        const crop = await deleteCrop(cropId);
        res.json(crop);
    } catch (e) {
        console.log("Error deleting crop ", e);
    }
});

router.get("/get/:cropId", async (req, res, next) => {
    const cropId = parseInt(req.params.cropId);
    try {
        const crop = await getCropById(cropId);
        res.json(crop);
    } catch (e) {
        console.log("Error getting crop ", e);
    }
});

router.put("/update/:cropId", async (req, res, next) => {
    const cropId = parseInt(req.params.cropId);
    const crop = req.body;
    try {
        const cropUpdate = await updateCrop(cropId,crop);
        res.json(cropUpdate);
    } catch (e) {
        console.log("Error updating crop ", e);
    }
});
export default router;