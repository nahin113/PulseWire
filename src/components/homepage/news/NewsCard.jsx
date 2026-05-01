import Image from "next/image";
import Link from "next/link";
import { CiShare2, CiBookmark, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between items-center bg-slate-200">
          <div className="flex gap-1 items-center">
            <Image
              className="rounded-full"
              src={news.author?.img}
              alt={news.author?.name || "Author profile picture"}
              height={40}
              width={40}
            ></Image>
            <h2 className="font-semibold">{news.author?.name}</h2>
            <p className="text-xs">{news.author?.published_date}</p>
          </div>
          <div className="flex justify-between items-center">
            <CiShare2 />
            <CiBookmark />
          </div>
        </div>
        <h2 className="card-title">{news.title}</h2>
        <figure>
          <Image
            className="w-full"
            src={news.image_url}
            alt={news?.title || "News article thumbnail"}
            width={300}
            height={300}
          ></Image>
        </figure>
        <p className="line-clamp-3">{news.details}</p>

        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <h2 className="flex items-center gap-2">
              <CiStar />
              {news.rating.number}
            </h2>
            <h2 className="flex items-center gap-2">
              <FaEye />
              {news.total_view}
            </h2>
          </div>
          <Link href={`/news/${news._id}`}>
            <button className="btn">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
