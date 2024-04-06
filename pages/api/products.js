import Product from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

// Define the handleRequest function with req and res as parameters
const handleRequest = async (req, res) => {
  // Destructure the method property from the req object
  const { method } = req;

  // Connect to the MongoDB database using mongoose.connect() and the URL provided by clientPromise.url
  // This is done asynchronously using the async/await syntax to ensure that the database connection is established before handling the request
  try {
    await mongooseConnect();

    // If the request method is POST, send a JSON response with the string "post"
    if (method === "POST") {
      const { title, description, price } = req.body;
      const productDoc = await Product.create({
        title,
        description,
        price,
      });
      res.json(productDoc);
    } else {
      res.status(405).jason({ message: "Method not allowed" });
    }
  } catch (error) {
    // If there's an error connecting to MongoDB, log the error to the console
    console.error("Error connecting to MongoDB:", error);
    // Send a JSON response with a status code of 500 and an error message
    res.status(500).json({ message: "Error connecting to MongoDB" });
  }
};
export default handleRequest;
