import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
    {
        _id: "1",
        title: "Breaking News: Heavy Raining all around the City"
    },
    {
        _id: "2",
        title: "Breaking News: New Policy Announced by the PM Tarek Rahman" 
    },
    {
        _id: "3",
        title: "Breaking News: Paris Saint Germain Wins Champions League 2026" 
    }
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto'>
        <button className='btn bg-pink-500 text-white'>Latest News</button>
        <Marquee pauseOnHover={true}>
            {
                news.map(n=> <span className='mx-6' key={n._id}>{n.title}</span>)
            }
        </Marquee>
        </div>
    );
};

export default BreakingNews;