const express =require('express')
const router=express.Router();
const {requireSignIn ,isAdmin} =require( '../middlewares/authmiddleware')
const {createCategoryController, updateCategoryController ,categoryController,singleCategoryController ,deleteCategoryController} =require( '../controllers/categoryController.js')





router.post("/create-category",requireSignIn,isAdmin ,createCategoryController)

router.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController)

router.get("/get-category",categoryController)
router.get("/single-category/:slug",singleCategoryController)
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController)
module.exports=router