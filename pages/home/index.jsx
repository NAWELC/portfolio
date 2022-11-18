import Navbar from '@src/components/layout/navbar'
import Footer from '@src/components/layout/footer'
import Presentation from "@src/components/layout/presentation"
import TextPresentation from '@src/components/layout/textPresentation';
import Contact from "@src/components/layout/contact";
import Travail from "@src/components/layout/travail";

const HomePage = () => {
    return (
        <div class= "bg-fuchsia-600">
            <Navbar />
            <Presentation />
            <TextPresentation />
            <Travail/>
            <Contact/>
            <Footer />
        </div>
    );
};

export default HomePage;
