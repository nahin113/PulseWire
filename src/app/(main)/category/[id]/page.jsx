import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCatagories, getNewsByCategoryId } from "@/lib/data";


const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const catagories = await getCatagories();
  const news = await getNewsByCategoryId(id);
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">
      <div className="col-span-3">
        <LeftSidebar activeId={id} catagories={catagories}></LeftSidebar>
      </div>
      <div className="font-bold bg-green-100 col-span-6">
        <h2 className="font-bold text-xl">News By Category</h2>
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => {
              return (
                <div key={n._id} className="p-6 rounded-md border">
                  {n.title}
                </div>
              );
            })
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
