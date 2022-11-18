import Image from "next/image"
import IMAGE from "@src/assets/img/css.image.png";
import IMAGE3 from "@src/assets/img/html5.png";
import IMAGE4 from "@src/assets/img/javascript.png";
import IMAGE5 from "@src/assets/img/react.png";
import IMAGE6 from "src/assets/img/nodejs.png";
import IMAGE7 from "src/assets/img/tailwind.png";



const Travail= () => {
return (
        
    <div class="mb-12 mt-16 ml-8 mr-4 flex flex-wrap  gap-x-12 gap-y-10 border-8 p-4 pb-10 bg-white ">
    <Image classname="rounded" src={IMAGE}  alt="" width="70" height="100"/>
    <Image classname="rounded-full " src={IMAGE3} alt="" width="70" height="100"/>
    <Image classname="rounded-full " src={IMAGE4} alt="" width="70" height="100"/>
    <Image classname="rounded-full " src={IMAGE5} alt="" width="70" height="100"/>
    <Image classname="rounded-full" src={IMAGE6} alt="" width="70" height="100"/>
    <Image classname="rounded-full" src={IMAGE7} alt="" width="70" height="100"/>
    
    

    </div>
    
    
    
        
        
    
)
};

    


    


export default Travail;