import axios from "axios";

const getNews = async () => {
	const news = await axios.get("https://localhost:4000/api/news");
	const newsData = news.data;
	return newsData;
};

export default getNews;
