import People from "./People";
import Cart from "./Cart";
import Work from '../images/icon-work.svg'
import Play from '../images/icon-play.svg'
import Study from '../images/icon-study.svg'
import Exercise from '../images/icon-exercise.svg'
import Social from '../images/icon-social.svg'
import Salud from '../images/icon-self-care.svg'

const Main = () => {
  return (
    <div className="w-11/12 m-auto md:w-full flex flex-col justify-center gap-y-1">
      <div className="flex flex-col md:grid md:grid-cols-4 gap-3 ">
        <People/>
        <Cart imagen={Work} bg={"cart_work"}/>
        <Cart imagen={Play} bg={"cart_Play"}/>
        <Cart imagen={Study} bg={"cart_Study"}/>
        <Cart imagen={Exercise} bg={"cart_Exercise"}/>
        <Cart imagen={Social} bg={"cart_Social"} />
        <Cart imagen={Salud} bg={"cart_Salud"} />
      </div>
    </div>
  );
};

export default Main;
