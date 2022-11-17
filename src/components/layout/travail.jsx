import Image from "next/image"
import IMAGE from "@src/assets/img/Html-css-js.png";
import IMAGE2 from "@src/assets/img/logogit.png";

const Travail= () => {
return (
    
       <div class="mb-4 mt-12 ml-16 flex flex-row gap-x-20">
    <Image classname="rounded" src={IMAGE}  alt="" width="70"/>
    <Image classname="rounded-full " src={IMAGE2} alt="" width="70" height="10"/>
    


    </div>
    
    
        
        
    
)
};

    


    


export default Travail;