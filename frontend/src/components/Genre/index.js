import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneCategory } from "../../store/categories";

function Genre() {
  const { genreId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneCategory(genreId));
  }, [dispatch]);

  const genre = useSelector((state) => {
    return state?.genres.genre;
  });
  return (
    <div>
      {genre && (
        <>
          <h1 className="genreHeader">{genre.genre}</h1>
          <div></div>
        </>
      )}
    </div>
  );
}

export default Genre;
