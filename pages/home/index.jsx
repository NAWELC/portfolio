import Navbar from '@src/components/layout/navbar'
import Footer from '@src/components/layout/footer'
import Presentation from "@src/components/layout/presentation"
import TextPresentation from '@src/components/layout/textPresentation';
import Contact from "@src/components/layout/contact";


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Presentation />
            <TextPresentation />
            <Contact/>
            <Footer />
        </div>
    );
};

export default HomePage;
