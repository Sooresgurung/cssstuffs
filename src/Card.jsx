import React from 'react';
const Card=()=>
{
    return(
        <>
          <div className="row gy-5">
          <div className="col-md-4 col-10 mx-auto">
          <div class="card">
                  <img src=" https://picsum.photos/seed/picsum/400/400" class="card-img-top" alt="oko kk"/>
             <div class="card-body">
             <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
           </div>
           </div>
           </div>
        </>
    )
}
export default Card;