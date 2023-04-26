import Stocks from "../components/Stocks/Stocks";
import Video from "../components/Video/Video";

export default function Home() {
  return (
    <div className="Home">
      <Video />
      <Stocks />
    </div>
  );
}