import React from "react";
import AppMenu from "../Components/AppMenu";
import BusinessNews from "../Components/BusinessNews";

export default function BusinessContainer(){
  return(
    <React.Fragment>
      <AppMenu/>
      <BusinessNews/>
    </React.Fragment>
  )
}