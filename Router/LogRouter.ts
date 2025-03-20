import express from "express";
import {addLog, deleteLog, getAllLogs, getLogById, updateLog} from "../Database/Log-dataStore";

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const logs = await getAllLogs()
        res.json(logs)
    } catch (err) {
        console.log("error getting logs ", err)
    }
})
router.get('/get/:logId', async (req, res, next) => {
    const logId: number = parseInt(req.params.logId)
    try {
        const log = await getLogById(logId)
        res.json(log)
    } catch (err) {
        console.log("error getting log ", err)
    }
})
router.post('/add', async (req, res, next) => {
    console.log(req.body)
    const log =req.body
    try {
        const add = await addLog(log)
        res.json(add)
    } catch (err) {
        console.log("Error adding log ", err)
        res.status(400).send("Error adding log");
    }
})
router.delete('/delete/:logId', async (req, res, next) => {
    const logId: number = parseInt(req.params.logId)
    try {
        const deleteL = await deleteLog(logId)
        res.json(deleteL);
    } catch (err) {
        console.log("Error deleting log ", err);
    }
})
router.put('/update/:logId', async (req, res, next) => {
    console.log(req.body)
    const log =req.body
    const logId:number = parseInt(req.params.logId)
    try {
        const update = await updateLog(logId,log)
        res.json(update)
    } catch (err) {
        console.log("Error updating log ", err)
        res.status(400).send("Error updating log");
    }
})
export default router