import { getCategories } from "../../store/categories";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import image from "./images/Tabletop.jpg";
import { Navlink } from "react";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const genres = useSelector((state) => {
    return state?.genres;
  });

  const list = genres?.list;
  if (!genres.list) return null;
  else return (
    <div>
      <div className="categoriesTitle">Categories</div>
      <div className="gameCardContainer">
        {list.map((genre) => (
            <div
              className="gameCard"
              style={{
                backgroundImage: `url("${genre.url}.jpg")`,
              }}
            >
              {genre.genre}
            </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
