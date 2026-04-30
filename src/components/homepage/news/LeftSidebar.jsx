import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({catagories, activeId}) => {
    return (
      <div>
        <h2 className="font-bold text-xl">All catagories</h2>
        <ul className="flex flex-col gap-3 mt-6">
          {catagories.news_category.map((catagory) => (
            <li
              className={`${activeId === catagory.category_id && "bg-purple-500 text-white"}
              rounded-md font-bold text-md text-center`}
              key={catagory.category_id}
            >
              <Link
                className="block p-2"
                href={`/category/${catagory.category_id}`}
              >
                {catagory.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default LeftSidebar;