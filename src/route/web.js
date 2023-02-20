import express from "express";
import homecontrollre from "../controllers/homecontrollre";

let router = express.Router();

let initWebRouter = (app) =>{
    router.get('/', homecontrollre.getHomePage);
    router.get('/', homecontrollre.getAboutPage);
    router.get('/crud', homecontrollre.getCRUD);
    router.post('/post-crud', homecontrollre.postCRUD);
    router.get('/hieudanit',(req,res) =>{
        return res.send('hello to nodejs class')
    });
    return app.use("/",router);
}



module.exports = initWebRouter;