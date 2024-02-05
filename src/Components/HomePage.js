import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequest } from "../redux/actions/appActions";
import defaultImage from "../Assets/unsplash_img.png";
import right from "../Assets/right_arrow.png";
import { useNavigate } from "react-router-dom";

const HomePage = ({setSelectedItem}) => {
  const { loading, data, error } = useSelector((state) => state);
  console.log(loading, data, error);

const navigate = useNavigate()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  return (
    <div>
      <div>
        <h1>Social Media For Travellers</h1>
        <input
          type="text"
          placeholder="Search here..."
          className="input-search"
        />
        <br />
      </div>
      <div className="container">
        {data.length > 0 &&
          data.map((post) => (
            <div className="main-div" key={post.id}>
              {/* <h5>{post.title}</h5>
                             <p>{post.body}</p>
                             <hr/> */}
              <div className="card">
                <img className="card-img" src={defaultImage} alt="img" />
                <h5>{post.title}</h5>
                <div className="bottom">
                  <p className="description">{post.body}</p>
                  <img onClick= { () => {
                    setSelectedItem(post)
                    navigate("/detailpage")
                  }
                    } className="arrow-button" src={right} alt="icon" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
