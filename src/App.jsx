import { useEffect } from "react";
import { useStateContext } from "./context";
import axios from "axios";
import { ProductListing } from "./components/ProductListing";

function App() {
  const { dispatch } = useStateContext();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("products.json");
        dispatch({ type: "SET_PRODUCTS", payload: data.products });
      } catch (e) {}
    })();
  }, [dispatch]);

  return (
    <>
      <ProductListing />
    </>
  );
}

export default App;
