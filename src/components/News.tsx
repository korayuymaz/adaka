import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import getNews from "@/services/news";

const dummyNews = [
	{
		title: "News 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos",
		image: "/images/news-placeholder.jpg",
		link: "https://www.google.com",
	},
	{
		title: "News 2",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Quisquam, quos lorem ipsum dolor sit amet consectetur adipisicing elit.`,
		image: "/images/news-placeholder.jpg",
		link: "https://www.google.com",
	},
];

interface NewsItem {
	title: string;
	description: string;
	link: string;
}

const News = async () => {
	let news = await getNews();

	if (news.length === 0) {
		news = dummyNews;
	}

	return (
		<Carousel
			className="w-full h-full max-h-[500px]"
			opts={{
				align: "start",
				loop: true,
			}}
		>
			<CarouselContent>
				{news.map((news: NewsItem) => {
					return (
						<CarouselItem key={news.title}>
							<div className="p-8">
								<h3 className="text-2xl font-bold mb-6">{news.title}</h3>
								<p className="text-lg leading-relaxed mb-6 overflow-y-auto max-h-52">
									{news.description}
								</p>
								<div className="inline-block text-white underline hover:no-underline transition-all text-right cursor-pointer">
									{news.link}
								</div>
							</div>
						</CarouselItem>
					);
				})}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default News;
