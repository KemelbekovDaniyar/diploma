import "./Music.css"
import img from "../../assets/whayguitars.jpg"
import img1 from "../../assets/string.jpg"
import img2 from "../../assets/children.jpg"


export default function Music() {
  return (
    <div className="Music container">
      <h1>Music</h1>
      <div className="Music-container">
        <div className="info">
          <ul class="hover-effect-scale">
            <li>
              <img src={img} alt="" />
                <div>
                  <h3>Заголовок</h3>
                  <p>Текст</p>
                  <a href="">Подробнее</a>
                </div>
            </li>
          </ul>
        </div>
        <div className="play">
        <ul class="hover-effect-scale">
            <li>
              <img src={img1} alt="" />
                <div>
                  <h3>Заголовок</h3>
                  <p>Текст</p>
                  <a href="">Подробнее</a>
                </div>
            </li>
          </ul>
        </div>
        <div className="who">
        <ul class="hover-effect-scale">
            <li>
              <img src={img2} alt="" />
                <div>
                  <h3>Заголовок</h3>
                  <p>Текст</p>
                  <a href="">Подробнее</a>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}