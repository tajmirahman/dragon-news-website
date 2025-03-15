import React, { useEffect, useState } from 'react';

const LeftLayout = () => {
    const [category,setCategory]=useState([]);

    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data=>setCategory(data.data.news_category
        ))
    },[])

    return (
        <div>
            <h1 className='font-semibold'>All Category {category.length}</h1>
        </div>
    );
};

export default LeftLayout;