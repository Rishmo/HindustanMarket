const express = require("express")
const  {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  productCountController,
  productFiltersController,
  productListController,
  updateProductController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,braintreePaymentController
} =require("../controllers/productController.js")
const {requireSignIn ,isAdmin} =require('../middlewares/authmiddleware.js')
const formidable =require ("express-formidable")

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//Search
router.get("/search/:keyword", searchProductController);

router.get('/related-product/:pid/:cid',relatedProductController)

router.get("/product-category/:slug", productCategoryController);

//payments token
router.get('/braintree/token',braintreeTokenController)

//payments
router.post('/braintree/payment',requireSignIn, braintreePaymentController)


module.exports= router;