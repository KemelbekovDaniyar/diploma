import video from "../assets/video.mp4";
import Stocks from "../components/Stocks/Stocks";

export default function Home() {
  return (
    <div className="Home">
        <div className="video">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
      </div>
      <Stocks />
    </div>
  );
}