import React from 'react'

export default function RecipesProducts(item) {
    console.log(item)

    //  I was trying to use fetch API but  it didn't work so i lopping api as file 
  return (
    
      <div className='card-main'>
        
          <div className="cards" >
              <img src={item.strMealThumb} classname="card-img-top" alt="{item.title}" />
              <div className="card-body">
                  <h5 classname="card-title">
                      {item.strMeal}
                  </h5>
                  <p classname="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
              </div>
          </div>

    </div>


      

  )
}
