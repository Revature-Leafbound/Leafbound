async function getProducts() {
    try {
      const raw_response = await fetch(
        `http://localhost:8080/api/products`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
  
      if (!raw_response.ok) {
        throw new Error(raw_response.status);
      }
  
      const json_data = await raw_response.json();
  
      //console.log(json_data);
  
      displayProducts(json_data);
  
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function updateCart(cart) {
    try {
      console.log("Updating Cart");
      const raw_response = await fetch(
        `http://localhost:8080/api/cart`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify(post)
        }
      );
  
      if (!raw_response.ok) {
        throw new Error(raw_response.status);
      }
  
      const json_data = await raw_response.json();
      return json_data;
  
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function displayProducts(products) {
    var parentSection = document.getElementById("products");
   
  
    for (let i = 0; i < products.length; i++) {
      var productDiv = document.createElement("div");
  
      postDiv.setAttribute('id', products[i].products_id);
      postDiv.setAttribute('class', "is-product");
  
      var postUser = document.createElement("h3");
      postUser.innerHTML = posts[i].user ? posts[i].user.username : `User is unknown`;
      postDiv.append(postUser);
  
      var productBody = document.createElement("p");
      productBody.innerHTML = posts[i].product_body;
      productDiv.append(productBody);
  
      // adds spacing between products 
      var br = document.createElement("br");
      br.setAttribute('id', "post-spacing");
  
      parentSection.prepend(postDiv);
      parentSection.prepend(br);
  
  
  
    }
  }

  async function deleteCartHelper(input){
    let song = {
      id: input
    }
    await deleteCart(cart);
    window.location.reload();
  }
  
  async function deleteCart(id){
    console.log(id);
    try{
      const raw_response = await fetch(
        `http://localhost:8080/api/cart`,
        {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(id)
        }
      )
      if (!raw_response.ok) {
        throw new Error(raw_response.status);
      }
      const json_data = await raw_response.json();
      console.log(json_data);
      return json_data;
    }catch(error){
      console.log(error);
      return null;
    }
  }

  getProducts();
  