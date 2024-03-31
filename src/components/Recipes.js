import React from 'react'
import RecipesProducts from './RecipesProducts';
import api from './ListData'



function Recipes() {
  

    return (
        <div className='row'>
            <h1 className='h1-main'>Recipes</h1>
            {api.map((item) => {

                return (
                    <div className='col-md-4  col-sm-6 col-xs-6 main-products' key={item.id}>
                  
                        <RecipesProducts {...item} />
                
                    </div>


                );
            })}

        </div>
    );
}

export default Recipes
