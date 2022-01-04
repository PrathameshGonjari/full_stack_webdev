import axios from "axios";
let data = null;
export const getHeadlines = async () => {
  await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=b84ddaae395c482d80eb7e0a4da05af8')
    .then(res => {
      console.log(res);
      data = res.data.articles
    })
    .catch(err => {
      console.log(err)
    })
  return data;
}
