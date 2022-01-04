import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getHeadlines } from "../../Apis/getHedlines";
import { getBusinessNews } from "../../Apis/getBusinessNews";
import { getTechnologyNews } from "../../Apis/getTechnologyNews"
import { setBusinessNews } from "../../actions/setBusinessNews";
import { setHeadlines } from "../../actions/setHeadlines";
import { setTechnologyNews } from "../../actions/setTechnologyNews";


export default function AppLoader() {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  let history = useHistory()


  useEffect(() => {

    const getData = async () => {

      const news1 = await getHeadlines()
      console.log(news1);
      setHeadlines(dispatch, news1)

      const news2 = await getTechnologyNews()
      console.log(news2);
      setTechnologyNews(dispatch, news2)

      const news3 = await getBusinessNews()
      console.log(news3);
      setBusinessNews(dispatch, news3)

      setLoading(true)
    }
    getData()

  }, [dispatch])

  const button = loading ? <button onClick={() => history.push({ pathname: '/dashboard' })}>Click here to Continue! </button>
    : <button> Please Wait...</button>

  return (
    <div>
      <h1>Please Wait... </h1>
      <h3>Your Application is Loading... </h3>
      {button}
    </div>
  )
}