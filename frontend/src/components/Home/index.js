import { getCategories } from "../../store/categories";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const genres = useSelector((state) => {
    return state.genres;
  });
  const list = genres.list;
  console.log(list);
  return (
    <div>
      <div>Categories</div>
      <div>{list.map((genre)=><div>{genre.genre}</div>)}</div>
    </div>
  );
}

export default Home;
