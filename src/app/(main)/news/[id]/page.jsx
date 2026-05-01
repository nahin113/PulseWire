import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiShare2, CiBookmark, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export const generateMetadata = async ({params})=> {
    const {id} = await params
    const news = await getNewsDetailsById(id)
    return {
        title: news.title,
        description : news.details
    }
}

const NewsDetailsPage = async ({params}) => {
    const {id} = await params
    const news = await getNewsDetailsById(id)
    return (
      <div className="max-w-4xl mx-auto my-8">
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
            <p>{news.details}</p>

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
              <Link href={`/category/${news.category_id}`}>
                <button className="btn bg-purple-500 text-white">
                  See Other News For This Category <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NewsDetailsPage;