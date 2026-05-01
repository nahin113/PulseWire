import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";

// async function getCatagories() {
//   const res = await fetch(
//     "https://openapi.programming-hero.com/api/news/categories"
//   );
//   const data = await res.json();
//   return data.data;
// }

// async function getNewsByCategoryId(category_id) {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/category/${category_id}`
//   );
//   const data = await res.json();
//   return data.data;
// }



const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const catagories = await getCategories();
  const news = await getNewsByCategoryId(id);
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">
      <div className="col-span-3">
        <LeftSidebar activeId={id} catagories={catagories}></LeftSidebar>
      </div>
      <div className="font-bold col-span-6">
        <h2 className="font-bold text-xl">News By Category</h2>
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => <NewsCard key={n._id} news={n}></NewsCard>)
          ) : (
            <h2 className="font-bold text-4xl text-center my-7">
              No News Found
            </h2>
          )}
        </div>
      </div>
      <div className="font-bold text-3xl col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
