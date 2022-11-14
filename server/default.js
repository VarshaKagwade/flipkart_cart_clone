import { products } from "./constants/data.js";
import Product from "./model/product-shema.js";
const DefaultData = async () => {
  try {
    const exist = await Product.findOne({ id: products.id });
    if (exist) {
      return res.status(401).json({
        message: "Username already exist",
      });
    }
    await Product.insertMany(products);
    console.log("Data imported successfylly");
  } catch (error) {
    console.log("error while inserting", error.message);
  }
};

export default DefaultData;
