import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSessionsbyType } from "../../store/sessions";
import { getOneGame } from "../../store/games";

let info;
function Sessions() {
  const { id, type } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneGame(id));
    dispatch(getSessionsbyType("game", id));
  }, [dispatch]);

  const gameInfo = useSelector((state) => {
    return state?.games.game;
  });

  const sessionlist = useSelector((state) => {
    return state?.session?.list;
  });
  console.log(sessionlist);
  if (!gameInfo) return null;
  return (
    <div>
      <div className="headerDiv">
        <div className="titleDiv">{gameInfo.title}</div>
        <div
          className="pageImage"
          style={{ backgroundImage: `url("${gameInfo.url}.jpg")` }}
        ></div>
        <div className="descContainer">
          <div className="titleDesc">{gameInfo.description}</div>
          <div className="titleGenres">
            <div className="genreTitle">Genres:</div>
            <div className="genreButton">Genre 1</div>
            <div className="genreButton">Genre 1</div>
            <div className="genreButton">Genre 1</div>
          </div>
        </div>
      </div>

      {sessionlist &&
        <div>
          {sessionlist?.map((session) => (
            <div classname="sessionBox">
              <div>{session.title}</div>
              <div>{session.text}</div>
              <div>{session.date}</div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}
export default Sessions;
