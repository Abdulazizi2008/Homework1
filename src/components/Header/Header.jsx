import "./header.scss";

const Header = () => {
  return (
    <div className="general">
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <img src="./images/mi (1).png" alt="" />
          </a>
          <div className="nav-items">
            <a className="nav-item">Phone</a>
            <a className="nav-item">Smart Home </a>
            <a className="nav-item">Life Style </a>
            <div className="part">
              <a className="nav-item">Discover</a>
              <a className="nav-item">Support </a>
              <a className="nav-item">
                <img src="./images/search.png" alt="" />
              </a>
              <a className="nav-item">
                <img src="./images/user.png" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
