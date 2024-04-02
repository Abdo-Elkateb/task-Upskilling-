import React from 'react'
import RecipesProducts from './RecipesProducts';
import { useState, useEffect } from 'react';



function Recipes() {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => {
                setData(d.meals)
            }
            )
    }


    useEffect(() => {
        fetchInfo();
    }, []);



    return (
        <div className='row'>
            <h1 className='h1-main'>Recipes</h1>
            {data.map((item, index) => {
                if (index < 3) {
                    return (
                        <div className='col-md-4  col-sm-6 col-xs-6 main-products' key={item.id}>

                            <RecipesProducts {...item} />

                        </div>


                    );
                }

            })}

        </div>
    );
}

export default Recipes
