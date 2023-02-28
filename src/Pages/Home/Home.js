import "./Home.css";
import { Hero, Popular, Library } from "../../sections/index";

const Home = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Library />
        </div>
    );
};

export default Home;
