import React from "react";

const MediaCard =(props) => {

    return (< >


    <div className="jumbotron jumbotron-fluid bg-success">
      <div className="container">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead"> {props.para}</p>
      </div>
    </div>



<div className="container">
  <div className="row">

    <div className="col">
      <div className="card mx-auto bg-warning text-info" style={{width:260}} >
        <img className="card-img-top" src="/images/img_avatar5.png"   alt="Card image"/>
        <div className="card-body">
          <h4 className="card-title">{props.fname}</h4>
          <p className="card-text">{props.ftext}</p>
          <a href="/" className="btn btn-primary">{props.fbtn}</a>
        </div>
      </div> 
    </div>


      <div className="col">
        <div className="card mx-auto bg-success text-white"style={{width:260}}>
            <img className="card-img-top" src="/images/img_avatar1.png" alt="Card image"/>
            <div className="card-body">
              <h4 className="card-title">{props.Aname}</h4>
              <p className="card-text">{props.Atext}</p>
              <a href="/" className="btn btn-primary">{props.fbtn}</a>
            </div>
          </div>
        </div>
  </div>
</div>



            
    </>)
};
export default MediaCard;