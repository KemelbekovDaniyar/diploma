import "./Music.css"
import img from "../../assets/whayguitars.jpg"
import img1 from "../../assets/string.jpg"


export default function Music() {
  return (
    <div className="Music container">
      <h1>Music</h1>
      <div className="Music-container">
        <div className="info">
          <div class="hover-text-one">
            <figure class="effect-text-one">
              <img src={img} alt="" />
              <figcaption>
                <h3>Lorem <span>ipsum</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="play">
          <div class="hover-text-one">
            <figure class="effect-text-one">
              <img src={img1} alt="" />
              <figcaption>
                <h3>Lorem <span>ipsum</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}