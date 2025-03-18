import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNews from './SingleNews';

const CategoryNews = () => {

    const {data: news }= useLoaderData();
    // console.log(news);
    return (
        <div>
            <h1 className='font-semibold'>Dragon News Home</h1>

            <div className='space-y-3 mt-3'>
                {
                    news.map(singleNews=> <SingleNews key={singleNews.id} news={singleNews} />)
                }
            </div>

        </div>
    );
};

export default CategoryNews;