import ProductModel from "../Models/product.model.js";

// post product
const postProduct = async (request, response) => {
    try {
    
        const product = await ProductModel.create(request.body);
        response.status(200).json(product);
  
     
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};
// read all product
const readPost=async (req,res)=>{
    try {
        const products = await ProductModel.find({});
        res.status(200).json(products);
        
      } catch (error) {
        res.status(500).json({ message: error.message });
        
      }
}
// read single product by it
const readPostById=async (req,res)=>{
    try {
        const {id}=req.params;
        const products = await ProductModel.findById(id);
        if(!products){
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(products);
        
      } catch (error) {
        res.status(500).json({ message: error.message });
        
      }
}
// update single product by id
const updateProductById=async (req, res) => {
    try {
        const {id} = req.params;
        const updateProduct=await ProductModel.findByIdAndUpdate(id,req.body);
        if(!updateProduct){
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}
//delete product by it's id
const deletByid=async (req, res) => {
    try {
        const {id} = req.params;
        const deleteProduct=await ProductModel.findByIdAndDelete(id);
        if(!deleteProduct){
            return res.status(404).json({ message: "Product not found" });

        }
        res.status(200).json({message: "Product deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}
// exporting to be used in the routes 
export { postProduct,readPost,readPostById,updateProductById,deletByid };
