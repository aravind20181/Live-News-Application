import { Component } from "react";

export default class NewsList extends Component{
    render(){
        let{title,description,urlToImage,author,publishedAt}=this.props
        return(
            <div className="container mt-4">
                <div className="card">
                    <img src={urlToImage} alt="not found" className="card-mg-top"/>

                    <div className="card-body">
                        <span className="badge rounded-pill bg-warning text-light" style={{
                            display:"flex",
                            justifyContent:"flex-end",
                            position:"absolute",
                            right:"0px",
                            top:"0px",
                        }}>{author}</span>

                         <h5 className="card-title">
              {title ? title.slice(0, 50) : "No Title"}...
            </h5>

            <p className="card-text">
              {description ? description.slice(0, 100) : "No Description"}...
            </p>

            <p className="card-text">
              <small className="text-muted">
                By {author || "Unknown"} on{" "}
                {publishedAt
                  ? new Date(publishedAt).toDateString()
                  : "Unknown date"}
              </small>
            </p>

            <a target="_blank" className="btn btn-warning"> Read More </a>
                </div>
                </div>


            </div>
        )
    }
}