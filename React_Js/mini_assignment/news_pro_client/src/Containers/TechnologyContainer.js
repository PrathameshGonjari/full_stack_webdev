import React from "react";
import AppMenu from "../Components/AppMenu";
import TechnologyNews from "../Components/TechnologyNews";

export default function TechnologyContainer(){
  return(
    <React.Fragment>
      <AppMenu/>
      <TechnologyNews/>
    </React.Fragment>
  )
}