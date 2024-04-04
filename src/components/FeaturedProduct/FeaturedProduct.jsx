import "./FeaturedProduct.scss";

const FeaturedProduct = () => {
  return (
    <div>
      <div className="container">
        <h1>Featured Product</h1>
        <div className="links">
          <div className="link">Stay on Trend</div>
          <div className="link">Latest Flagship</div>
          <div className="link">Enjoy the Outdoors</div>
          <div className="link">Gaming Essentials</div>
        </div>
        <section className="par7">
          <div className="par2">
            <div className="part1">
              <img src="./images/rrr.jpg" alt="" />
            </div>
            <div className="part5">
              <div className="all3">
                <h1>
                  Redmi <span>13</span> pro+{" "}
                </h1>
                <h3 className="p1">Xiaomi Fan Festival Special Edition</h3>
                <div className="p2">
                  Limited availability | Mystic Silver Learn more
                </div>
                <button>Learn more </button>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <img src="./images/file1.webp" alt="" />
              <h4>Redmi Note 13 5G</h4>
              <button>Learn more </button>
            </div>
            <div className="card">
              <img src="./images/file2.png" alt="" />
              <h4>Redmi Watch 4</h4>
              <button>Learn more </button>
            </div>
            <div className="card">
              <img src="./images/file3.png" alt="" />
              <h4>Redmi Buds 5 Pro</h4>
              <button>Learn more </button>
            </div>
            <div className="card">
              <img src="./images/file3.png" alt="" />
              <h4>Redmi Buds 5</h4>
              <button>Learn more </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedProduct;
