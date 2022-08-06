// import { React, useState } from "react";
import React, { useEffect, useState } from "react";
// import data from "./ListData.json";

function List(props) {
  const axios = require("axios").default;
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      //   .get("../pages/api/hello")
      .get("/api/hello")
      .then(function (response) {
        // handle success
        setProductList(response.data.products);
        console.log("asd", productList);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  //create a new array by filtering the original array

  const filteredData = productList.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el.title;
    }
    //return the item which contains the user input
    else {
      //   return el.text.toLowerCase().includes(props.input);

      console.log(el);
      if (el.title.toLowerCase().indexOf(props.input) == 0) {
        return el.title.toLowerCase();
      }
    }
  });
  return (
    // <ul>
    //   {filteredData.map((item) => (
    //     <li key={item.id}>{item.text}</li>
    //   ))}
    // </ul>

    <ul>
      {!!filteredData &&
        filteredData.map((item) => (
          <li key={item.id}>{item.title}</li>
          //   console.log(item.title + "hi")
          //   asdasd
        ))}
    </ul>
  );
}

export default List;
