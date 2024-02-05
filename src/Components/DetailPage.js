import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequest } from "../redux/actions/appActions";
import defaultImage from "../Assets/unsplash_img.png";
import right from "../Assets/right_arrow.png";
import backIcon from "../Assets/back-arrow.png";
import heartIcon from "../Assets/heart_icon.png";
import shareIcon from "../Assets/share_icon.png";
import { useNavigate } from "react-router-dom";

const DetailPage = ({ selectedItem, setSelectedItem }) => {
  const { loading, data, error } = useSelector((state) => state);
  console.log(loading, data, error);

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const [isDetailClicked, setIsDetailClicked] = useState(false)
  const [isUserInfoClicked, setIsUserInfoClicked] = useState(false)
  
  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  function handleDetailButton() {
    
     setIsDetailClicked(true)
     setIsUserInfoClicked(false)
    
  }

  function handleUserInfoButton () {
    setIsUserInfoClicked(true)
    setIsDetailClicked(false)
  }

  function previousPage () {
    navigate("/")
  }

  return (
    <div>
      <div className="top-container">
        <div>
          <div className="top">
            <img  onClick={previousPage} src={backIcon} alt="icon" />
            <h1>Post Number {selectedItem.id}</h1>
          </div>
          <div className="bottom-div">
            <div className="left">
              <p>{selectedItem.title}</p>
              <div className="icons">
                <img src={shareIcon} alt="icon" />
                <img src={heartIcon} alt="icon" />
              </div>
            </div>
            <div className="right">
            {/* <p>{selectedItem.body}</p> */}
              <button  className={!isUserInfoClicked?"active":""} onClick={handleDetailButton}> Detail </button>
              
              {
                isDetailClicked && <p className="para">{selectedItem.body}</p>
              }
              
              <button className={!isDetailClicked?"active":""}  onClick={handleUserInfoButton}> User Info </button>
         

              {
                isUserInfoClicked && <p className="para">This Post was Posted by User {selectedItem.userId}</p>
              }
            </div>
          </div>
        </div>

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
                  <img
                    onClick={() => {
                      setSelectedItem(post);
                      navigate("/detailpage");
                    }}
                    className="arrow-button"
                    src={right}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DetailPage;
