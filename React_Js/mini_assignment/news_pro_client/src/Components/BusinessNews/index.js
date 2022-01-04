import React from "react";
import { useSelector } from "react-redux";

export default function BusinessNews() {

  const data = useSelector((state) => state.news.business_news)
  return (
    <React.Fragment>
      <section id="about">
        {data != null && data.length ?
          data.map((item, index) => (
            <div key={index}>
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-6 wow fadeInDown animated" data-wow-delay=".5s">
                    <h2>{item.title}</h2>
                    <p> {item.description} </p>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 wow fadeInRight animated" data-wow-delay=".5s">
                    <img src={item.urlToImage} alt='' width='700' height='500'/>
                  </div>
                </div>
              </div>
            </div>
          )) : <span> Loading... </span>}
      </section>
    </React.Fragment>
  )
}