import Product from "../model/product-shema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: message });
  }
};
export const getProductDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const product1 = await Product.findOne({ id: id });
    res.status(200).json(product1);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
