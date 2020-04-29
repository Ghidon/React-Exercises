import React from "react";
import "./App.css";
import Locations from "./components/Locations";
import Box1 from "./components/MyBoxes";
import NavBar from "./components/NavBar";
import Body from "./components/Body";

function App(props) {
  return (
    <div>
      <NavBar></NavBar>
      <Body></Body>
      {/* <Box1></Box1> */}
      {/* <Locations
        imageUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlMZIzLTyI4TQNInjWOVAT-GIXTi8FlXFNPYrvexa88GN1Bsie&usqp=CAU"
        }
        name={"Rome"}
        maps={
          "https://www.google.com/maps/place/Rome,+Metropolitan+City+of+Rome,+Italy/@41.909986,12.3959155,11z/data=!3m1!4b1!4m5!3m4!1s0x132f6196f9928ebb:0xb90f770693656e38!8m2!3d41.9027835!4d12.4963655"
        }
      ></Locations>
      <Locations
        imageUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSD3oFhK3sez0dKduFEr6u5q7EvIt2c1125mkFtzlvBiceFurSr&usqp=CAU"
        }
        name={"Paris"}
        maps={
          "https://www.google.com/maps/place/Paris,+France/@48.8588377,2.2770206,12z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219"
        }
      ></Locations>
      <Locations
        imageUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSosgspur6PGyRZJAH1j-7t31VlIuHMYFTePnux4pJfdmuXsLli&usqp=CAU"
        }
        name={"London"}
        maps={
          "https://www.google.com/maps/place/London,+UK/@51.5285582,-0.2416799,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583"
        }
      ></Locations>
      <Locations
        imageUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNKObhYk6-iv9yzOSk45gpYRTTBRrZowy6DAFD3oMqh3O9xmvR&usqp=CAU"
        }
        name={"Berlin"}
        maps={
          "https://www.google.com/maps/place/Berlin,+Germany/@52.5067614,13.2846506,11z/data=!3m1!4b1!4m5!3m4!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954"
        }
      ></Locations> */}
    </div>
  );
}

export default App;
