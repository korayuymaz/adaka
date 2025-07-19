import axios from "axios";

const getNews = async () => {
	try {
		const news = await axios.get("https://localhost:4000/api/news");
		if (news.data.length === 0) {
			throw new Error("No news found");
		}
		return news.data;
	} catch (error) {
		console.error("Error fetching news:", error);
		return [];
	}
};
export default getNews;
