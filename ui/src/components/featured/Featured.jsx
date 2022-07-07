import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
          <img 
                src="https://cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o=" 
                alt = ""
                className="featuredImg"
                />
          <div className="featuredTitles">
              <h1>Dublin</h1>
              <h2>123 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/540x270/823860.webp?k=ad78ae3df378d8246dc7c5a486520020f40ea92ca3b08569514092bd1ec34750&o=" 
                alt = ""
                className="featuredImg"
          />
          <div className="featuredTitles">
              <h1>Austin</h1>
              <h2>123 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/540x270/823860.webp?k=ad78ae3df378d8246dc7c5a486520020f40ea92ca3b08569514092bd1ec34750&o=" 
                alt = ""
                className="featuredImg"
          />
          <div className="featuredTitles">
              <h1>Reno</h1>
              <h2>533 properties</h2>
          </div>
        </div>
    </div>
  );
};

export default Featured