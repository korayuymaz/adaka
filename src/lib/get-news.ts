import Parser from "rss-parser";

type CustomFeed = { title: string; link: string };
type CustomItem = { title: string; link: string };

const parser = new Parser<CustomFeed, CustomItem>();

const getNews = async () => {
	const feed = await parser.parseURL("https://www.ntv.com.tr/gundem.rss");
	console.log(feed.title);

	feed.items.forEach((item) => {
		console.log(item.title + ":" + item.link);
	});
};

export default getNews;
