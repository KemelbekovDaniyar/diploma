import guitar from '../assets/ElectricGuitar.png';
import drum from '../assets/q1w.png';
import piano from '../assets/Piano.png';

export default function Home() {
  return (
    <div className="Home">
      <div className="guitar">
        <div className="guitar__title">
          <p>Fender American</p>
          <span>Only: </span>
          <span>999$</span>
          <button>Buy</button>
        </div>
        <img src={guitar} alt="guitar" />
      </div>
      <div className="drum">
        <img src={drum} alt="drum" />
        <div className="drum__title">
          <p>Yamaha</p>
          <span>Only: </span>
          <span>999$</span>
          <button>Buy</button>
        </div>
      </div>
      <div className="piano">
        <div className="piano__title">
          <p>Yamaha</p>
          <span>Only: </span>
          <span>999$</span>
          <button>Buy</button>
        </div>
        <img src={piano} alt="piano" />
      </div>
    </div>
  );
}