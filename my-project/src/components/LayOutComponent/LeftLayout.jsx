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
            <h1 className='font-semibold'>All Category {categorires.length}</h1>

            <div>
                {
                    categorires.map(category=> <button key={category.category_id}>{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftLayout;