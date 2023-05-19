import "./Music.css"
import img from "../../assets/whayguitars.jpg"
import img1 from "../../assets/string.jpg"


export default function Music() {
  return (
    <div className="Music container">
      <div className="Music-container">
        <div className="info">
          <div className="hover-text-one">
            <figure className="effect-text-one">
              <img src={img} alt="" />
              <figcaption>
                <h3>Your first  <span>guitar</span></h3>
                <p>1. Acoustic or Electric
                  2. Budget
                  3. Playability
                  4. Quality
                  5. Size and Body Style</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="play">
          <div className="hover-text-one">
            <figure className="effect-text-one">
              <img src={img1} alt="" />
              <figcaption>
                <h3>How to play the <span>guitar</span></h3>
                <p>
                  1. Get a guitar
                  2. Learn guitar anatomy
                  3. Tune your guitar
                  4. Learn basic chords
                  5. Practice strumming and picking
                  6. Master chord progressions
                  7. Explore fingerpicking techniques
                  8. Study music theory
                  9. Expand your chord vocabulary
                  10. Practice regularly</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}