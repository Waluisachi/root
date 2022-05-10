import  { iot, web3, software} from '../components/data';
import Card from '../components/card';
import Contact from '../components/Contact';


import image3 from "../images/svg-6.svg";
import image2 from "../images/svg-3.svg";
import image1 from  "../images/svg-5.svg";

software.image = image3;
web3.image = image2;
iot.image = image1;

const Home = () => {
  return (
    <div>
      <Card {...software} />
      <Card {...web3} />
      <Card {...iot} />
      <Contact />
    </div>
  );
}

export default Home;
