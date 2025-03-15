import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {

    const {data}= useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>{data.length} all category data loaded</h1>
        </div>
    );
};

export default CategoryNews;