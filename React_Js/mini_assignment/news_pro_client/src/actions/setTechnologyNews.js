import { TECHNOLOGY_NEWS } from "./types"

export const setTechnologyNews = async(dispatch,data) => {

  dispatch({
    type : TECHNOLOGY_NEWS,
    payload : data
  })


}
