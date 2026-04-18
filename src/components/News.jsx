import React, {Component} from "react";
import NewsList from "./NewsList";
import PropTypes from 'prop-types';
import Spinner from "./Spinner";

export default class News extends Component{
    

    /*articles = [
  {
    title: "India wins thrilling cricket match",
    description: "India defeated Australia in a last-over thriller...",
    urlToImage: "https://via.placeholder.com/300",
    author: "ESPN Sports",
    publishedAt: "2026-04-04"
  },
  {
    title: "New AI model changing the tech world",
    description: "A powerful AI model is transforming industries...",
    urlToImage: "https://via.placeholder.com/300",
    author: "TechCrunch",
    publishedAt: "2026-04-03"
  },
  {
    title: "Stock market reaches new high",
    description: "Sensex and Nifty hit record levels today...",
    urlToImage: "https://via.placeholder.com/300",
    author: "Economic Times",
    publishedAt: "2026-04-02"
  },
  {
    title: "Heavy rains hit Tamil Nadu",
    description: "Several districts face waterlogging due to rain...",
    urlToImage: "https://via.placeholder.com/300",
    author: "The Hindu",
    publishedAt: "2026-04-05"
  },
  {
    title: "New smartphone launched globally",
    description: "The latest flagship phone comes with AI features...",
    urlToImage: "https://via.placeholder.com/300",
    author: "Gadgets360",
    publishedAt: "2026-04-01"
  },
  {
    title: "Football finals scheduled this weekend",
    description: "Top teams are ready for the grand finale...",
    urlToImage: "https://via.placeholder.com/300",
    author: "Goal.com",
    publishedAt: "2026-04-03"
  },
  {
    title: "Electric vehicles on the rise",
    description: "EV adoption is increasing rapidly in India...",
    urlToImage: "https://via.placeholder.com/300",
    author: "AutoCar India",
    publishedAt: "2026-04-02"
  },
  {
    title: "Health experts warn about summer heat",
    description: "Doctors advise precautions during extreme heat...",
    urlToImage: "https://via.placeholder.com/300",
    author: "NDTV Health",
    publishedAt: "2026-04-05"
  }
]; */

  articles=[]


  static defaultProps={
    country:"us",
    pageSize:7,
    category:"general"

  }

  static propTypes={
    country:PropTypes.string.isRequired,
    pageSize:PropTypes.number.isRequired,
    category:PropTypes.string.isRequired,
  }



  constructor(prop){
      super()
      console.log("Working");
      this.state={
        articles:[],
        loading:false,
        page:1,
        totalResult:0,


      };
  }

  async componentDidMount(){
     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea&page=${this.state.page}&pageSize=${this.props.pageSize}`
     {
      this.setState({
        loading:true
      })
     }
     let data=await fetch(url)
     let parsedData=await data.json();

     this.setState({
      articles:parsedData.articles,
      totalResult:parsedData.totalResult,
      loading:false
     });
  }


  handleNext =async () => {
     {
      this.setState({
        loading:true
      })
     }
       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     let data=await fetch(url)
     let parsedData=await data.json();

     this.setState({
      articles:parsedData.articles,
      page:this.state.page+1,
      loading:false
     });
  }


  handlePev=async()=>{
     {
      this.setState({
        loading:true
      })
     }
     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     let data=await fetch(url)
     let parsedData=await data.json();

     this.setState({
      articles:parsedData.articles,
      page:this.state.page-1,
      loading:false
     });
  }
    
    
    render(){
      const maxPage = Math.ceil(this.state.totalResults / this.props.pageSize);
        return(
            <>
            {this.state.loading&& <Spinner/>}
            <div className="container mt-4">
                <div className="row">
                    {this.state.articles.map((element=>{
                    return(
                        <div className="col-md-4" key={element.url}>
                            <NewsList
                            
                            title={element.title}
                            description={element.description}
                            urlToImage={element.urlToImage}
                            author={element.author}
                            publishedAt={element.publishedAt}


                       
                            />
                        </div>
                    )
                }))}
                </div>

                <div className="d-flex justify-content-center gap-2 mt-3">
                  <button className="btn btn-warning" type="button" onClick={this.handlePev} disabled={this.state.page <= 1}>Pre</button>
                  <button className="btn btn-warning" type="button" onClick={this.handleNext} disabled={this.state.page >= maxPage}>Next</button>
                </div>
            </div>
            
            
            
            </>
        );
    }
}