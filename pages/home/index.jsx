import Navbar from '@src/components/layout/navbar'
import Footer from '@src/components/layout/footer'
import Presentation from "@src/components/layout/presentation"
import TextPresentation from '@src/components/layout/textPresentation';
import Contact from "@src/components/layout/contact";
import Travail from "@src/components/layout/travail";
import footer from  "@src/components/layout/footer";
import Parcours from "@src/components/layout/parcours";

const HomePage = () => {
    return (
        <div class= "">
            <Navbar />
            <Presentation />
            <TextPresentation />
            <Travail/>
            <Parcours/>
            <Contact/>
            <Footer />
            
        </div>
    );
};

export default HomePage;
