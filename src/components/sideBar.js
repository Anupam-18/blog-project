import React, { useEffect, useState } from "react";
import "./../styles/sideBar.css";
import Card from "./card";
import codingImag from "./../icons/codingImag.webp";
import blogData from "./../data.json";
import { NavLink } from "react-router-dom";

function SideBar(props) {
  const [post, setpost] = useState([]);
  useEffect(() => {
    const post = blogData.data;
    setpost(post);
  });
  return (
    <div className="sideBarContainer">
      <Card style={{ marginBottom: "20px" }}>
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="imagContainer">
          <img src={codingImag} alt="coding boy" className="codingImag" />
        </div>
        <div className="personalBio">
          Hi Everyone! I am Anupam Tripathi an aspiring software developer. I
          love to build new things and learn from them
        </div>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <div className="cardHeader">
          <span>Social Media</span>
        </div>
      </Card>
      <Card>
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>
        <div className="recentPosts">
          {post.map((post) => {
            return (
              <NavLink to={`/post/${post.id}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default SideBar;
