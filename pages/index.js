import React, { useState } from "react";
import { Heading, Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

// const Index = () => (
//   <Page>
//     <Heading>Shopify app with Node and React 🎉</Heading>
//   </Page>
// );
function Index() {
  const [state, setState] = useState({ open: false });
  // const [selectedProduct, setSelectedProduct] = useState({
  //   productID: "",
  //   productName: "",
  // });
  const [selectedProduct, setSelectedProduct] = useState();

  function handlSelection(resouces) {
    setSelectedProduct(resouces);
  }

  return (
    <>
      <Page
        title="Product selector"
        primaryAction={{
          content: "Select Products",
          onAction: () => setState({ open: true }),
        }}
      >
        <ResourcePicker
          resourceType="Product"
          open={state.open}
          onCancel={() => setState({ open: false })}
          onSelection={(resouces) => handlSelection(resouces)}
        />

        {selectedProduct
          ? selectedProduct.selection.map((product) => {
              return (
                <>
                  productID: {product.id}; <br />
                  productName: {product.handle}; <br />
                  <br />
                </>
              );
            })
          : ""}
      </Page>
    </>
  );
}

export default Index;
