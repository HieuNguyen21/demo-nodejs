import db from '../models/index';
import CRUDsevice from '../servies/CRUDsevice';

let getHomePage = async (req, res) => {
    try {
    let data = await db.User.findAll();
    console.log('------------------------------')
    console.log(data)
    console.log('------------------------------')
    return res.render('homepage.ejs',{
        data : JSON.stringify(data)
    });
    } catch (e) {
        console.log(e);
            }
}
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let getCRUD = (req,res ) =>{
    return res.render('test/crud.ejs');
}
let postCRUD = async (req,res )=>{
    let message = await CRUDsevice.createNewUser(req.body);
    console.log(message)
    return res.send('post crud from server');
}
let displayCRUD = async(req,res)=>{
let data = await CRUDsevice.getAllUser();
console.log('----------------------------')
console.log(data)
console.log('----------------------------')
    return res.render('display-CRUD.ejs',{
        dataTable:date

    })
    
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    displayCRUD:displayCRUD
}