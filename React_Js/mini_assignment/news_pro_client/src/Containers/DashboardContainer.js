import React from "react";
import AppMenu from "../Components/AppMenu";
import Headlines from "../Components/Headlines";

export default function DashboardContainer(){
  return(
    <React.Fragment>
      <AppMenu/>
      <Headlines/>
    </React.Fragment>
  )
}