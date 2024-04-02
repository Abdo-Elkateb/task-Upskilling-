import React from 'react'

export default function RecipesProducts(item) {
    // console.log(item)

  return (
    
      <div className='card-main'>
        
          <div className="cards" >
              <img className='' src={item.strMealThumb} alt="pic" />
              <div className="card-body">
                  <h5 classname="card-title">
                      {item.strMeal}
                  </h5>
                  <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
              </div>
          </div>

    </div>


      

  )
}
