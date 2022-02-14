import Carousel from "../Components/Carousel";
import CatagoriesSection from "../Components/CatagoriesSection";

function Home() {
    return(
        <div className="row">
            <div className="col'">
                <Carousel />
                <CatagoriesSection />
            </div>
        </div>
    )
}

export default Home;