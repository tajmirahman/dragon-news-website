import React, { useEffect, useState } from 'react';

const LeftLayout = () => {
    const [categorires, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category
            ))
    }, [])

    return (
        <div>
            <h1 className='font-semibold mb-2'>All Category {categorires.length}</h1>

            <div className='flex flex-col gap-3'>
                {
                    categorires.map(category => <button className='btn' key={category.category_id}>{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftLayout;