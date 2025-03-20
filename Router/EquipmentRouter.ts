import express from "express";
import {
    addEquipment,
    deleteEquipment,
    getAllEquipment,
    getEquipmentById,
    updateEquipment
} from "../Database/Equipment-dataStore";

const router = express.Router();

router.post('/add',async (req, res, next) => {
    console.log(req.body)
    const equipment =req.body
    try {
        const add = await addEquipment(equipment)
        res.json(add)
    } catch (err) {
        console.log("Error adding equipment ", err)
        res.status(400).send("Error adding equipment");
    }
});

router.put('/update/:eqId',async (req, res, next) => {
    console.log(req.body)
    const equipment =req.body
    const eqId:number = parseInt(req.params.eqId)
    try {
        const update = await updateEquipment(eqId,equipment)
        res.json(update)
    } catch (err) {
        console.log("Error updating equipment ", err)
        res.status(400).send("Error updating equipment");
    }
});

router.delete('/delete/:eqId',async (req, res, next) => {
    const eqId: number = parseInt(req.params.eqId)
    try {
        const deleteEq = await deleteEquipment(eqId)
        res.json(deleteEq);
    } catch (err) {
        console.log("Error deleting equipment ", err);
    }
})

router.get('/',async (req, res, next) => {
    try {
        const equipment = await getAllEquipment();
        res.json(equipment)
    } catch (err) {
        console.log("error getting equipment ", err)
    }
})
router.get('/get/:eqId',async (req, res, next) => {
    const eqId: number = parseInt(req.params.eqId)
    try {
        const equipment = await getEquipmentById(eqId);
        res.json(equipment)
    } catch (err) {
        console.log("Error getting equipment ", err)
    }
})
export default router
