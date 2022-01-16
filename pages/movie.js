
import inf from "../image/infinity.jpg";
import ragnarok from "../image/ragnarok.jpg";
import endgame from "../image/endgame.jpg";
import maze from "../image/maze.jpg";
import MovieCard from "../components/movieCard";

export default function Movie() {
  return (
    <div className=" bg-gradient-to-b from-slate-50 to-slate-700 h-screen">
      <div className="lg:grid grid-cols-2 gap-12 mx-auto max-w-screen-xl">
        <MovieCard source={inf.src} />
        <MovieCard source={maze.src} />
        <MovieCard source={ragnarok.src} />
        <MovieCard source={endgame.src} />
      </div>
    </div>
  );
}
