import video from "../assets/video.mp4";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <div className="video">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}