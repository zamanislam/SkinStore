import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        
        const response = await fetch(
          "https://dermstore-beec4-default-rtdb.asia-southeast1.firebasedatabase.app/Dermstore_Product/Dermstore_Product.json"
        );
        const data = await response.json();
        console.log("Product Data Fetched:", data);

        
        const productDetails = Object.values(data).find(
          (item) => item.id === id
        );
        console.log("Product Details:", productDetails);
        setProduct(productDetails);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>; 
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image1} alt={product.title} />
      <p>Price: ${product.price}</p>
      
    </div>
  );
};

export default ProductDetails;