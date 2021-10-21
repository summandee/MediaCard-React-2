import React from 'react'
import img  from './images/img_avatar4.png'
const Body = () => {
    return (
        <>
            <div className="container mt-3">

                        <div class="container mb-4">                      
                          <div class="card">
                            <div class="card-body"> <h2>Greeting Friends</h2>
                               <p>Greet Diffrent Friends </p>
                            </div>                                       
                           </div>
                         </div>
                               
                    
                    <div className="media bg-info mb-4">
                        <img src={img} className="align-self-start mr-3" style={{width:'60px'}}/>
                        <div className="media-body">
                            <h4>Miss Faiza</h4>
                            <p> 
                                I hope you enjoyed your weekend
                                I hope you're doing well
                                I hope you're having a great week
                                I hope you're having a wonderful day                            
                                
                            </p>                          
                         </div>
                    </div>                   
             </div>
        </>
    )
}

export default Body;
