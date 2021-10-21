import React from 'react'

const Open= ()=>{return <div className="card-columns">
                        <div className="card bg-success">
                            <div className="card-body text-center">
                            <p className="card-text">Mall Is  (<b>Open</b>)  Now</p>
                            </div>
                        </div>
                        </div>
 }
 const Closed =()=>{return <div className="card-columns">
                            <div className="card bg-warning">
                                <div className="card-body text-center">
                                <p className="card-text">Mall Is (<b>Closed</b>)</p>
                                </div>
                            </div>
                            </div>
 }

const Gate = (props) => {

    const isOpen = props.isOpen;
  
    return (
        <div>
              <div className="container mt-3 mx-auto">
               { isOpen ? <Open /> : <Closed /> }
               </div>
        </div>
    )
}

export default Gate;




  
 
    
  