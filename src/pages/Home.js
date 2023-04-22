import guitar from '../assets/ElectricGuitar.png';
import drum from '../assets/q1w.png';
import piano from '../assets/Piano.png';

export default function Home() {
  return (
    <div className="Home">
      <div className="stocks">
        <div className="guitar">
          <div className="guitar__box">
            <div className="guitar__title">
              <p>Fender American</p>
              <span>Only: </span>
              <span>999$</span>
              <button>Buy</button>
            </div>
            <img src={guitar} alt="guitar" />
          </div>
        </div>
        <div className="drum">
          <div className="drum__box">
            <img src={drum} alt="drum" />
            <div className="drum__title">
              <p>Yamaha</p>
              <span>Only: </span>
              <span>999$</span>
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div className="piano">
          <div className="piano__box">
            <div className="piano__title">
              <p>Yamaha</p>
              <span>Only: </span>
              <span>999$</span>
              <button>Buy</button>
            </div>
            <img src={piano} alt="piano" />
          </div>
        </div>
      </div>
    </div>
  );
}