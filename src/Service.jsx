import React from 'react';
import Card from './Card';
const Service=()=>
{
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Our services</h1>
        </div>
        <div className="Container-fluid mb-5 ">
                <div className="row">
                   <div className="col-10 mx-auto">
                 
                       <Card></Card>
                       <Card></Card>
                       <Card></Card>
                       <Card></Card>
                       <Card></Card>
                   </div>
            
                </div>
         </div>
        </>
    )
}
export default Service;