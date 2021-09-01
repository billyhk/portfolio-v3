import "./styles/Home.scss";
import headshot from "../assets/images/ton headshot- face only lo res.png";
import { Imporivisation1 } from "../components/SVG/Imporivisation1";
import { WoodsyScene1 } from "../components/SVG/WoodsyScene1";
import { Improvisation } from "../components/SVG/Improvisation";
// import { Whalesback } from "../components/SVG/Whalesback";

const Home = () => {
  return (
    <>
      <div className="home-content">
        <div className="background-svg">
          <WoodsyScene1 />
        </div>
        <div className="home-content-text">
          HOME CONTENT test test
          {/* <Improvisation /> */}
        </div>
      </div>
    </>
  )
}

export default Home;