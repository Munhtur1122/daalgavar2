import React from "react"
import Cardlist from "./card/Cardlist"
import "./home.css"
import Zurag1 from "../asents/irgenii bolovsrol 3.jpg"
import Zurag2 from "../asents/irgenii bolovsrol 2.jpg"
import Zurag3 from "../asents/Daram and Derem learn authority, teacher's manual.png"
import Zurag4 from "../asents/Bears learn justice, teacher's manual.png"
import Zurag5 from "../asents/Justice.png"
import Zurag6 from "../asents/Privacy.png"
import Zurag7 from "../asents/Responsibility.png"
import Zurag8 from "../asents/Authority.png"
import Zurag9 from "../asents/Altaakhai learns privacy, teacher's manual.png"
import Zurag10 from "../asents/Иргэний боловсрол 4.jpg"
import Zurag11 from "../asents/Иргэний боловсрол V.jpg"
import Zurag12 from "../asents/Daram and Derem learn authority, teacher's manual.png"
import Zurag13 from "../asents/Иргэний боловсрол I.jpg"
import Zurag14 from "../asents/Алтаахай эрх чөлөө, нөхөрлөлд суралцсан нь.png"
import Zurag15 from "../asents/Бамбаруушнууд шударга ёсонд суралцсан нь.png"
import Zurag16 from "../asents/Төгөлдөр үүрэг хариуцлагад суралцсан нь.png"
import Zurag17 from "../asents/Төгөлдөр үүрэг хариуцлагад суралцсан нь, багшийн гарын авлага.png"
import Zurag18 from "../asents/ЕБС-ын иргэний боловсролын сургалтын хөтөлбөр.png"
const Home = () =>{
    return(
        <div className="Card">
            <Cardlist title="Иргэний боловсрол III " img={Zurag1}/>
            <Cardlist title="Иргэний боловсрол II  " img={Zurag2}/>
            <Cardlist title="Дарам Дэрэм хоёр эрх мэдэлд суралцсан нь " img={Zurag3}/>
            <Cardlist title="Bears learn justice, teacher's manual" img={Zurag4}/>
            <Cardlist title="Justice" img={Zurag5}/>
            <Cardlist title="Privacy" img={Zurag6}/>
            <Cardlist title="Responsibility" img={Zurag7}/>
            <Cardlist title="Authority" img={Zurag8}/>
            <Cardlist title="Altaakhai learns privacy, teacher's manual" img={Zurag9}/>
            <Cardlist title="Иргэний боловсрол 4 " img={Zurag10}/>
            <Cardlist title="Иргэний боловсрол V" img={Zurag11}/>
            <Cardlist title="Daram and Derem learn authority, teacher's manual" img={Zurag12}/>
            <Cardlist title="Иргэний боловсрол I" img={Zurag13}/>
            <Cardlist title="Алтаахай эрх чөлөө, нөхөрлөлд суралцсан нь" img={Zurag14}/>
            <Cardlist title="Бамбаруушнууд шударга ёсонд суралцсан нь" img={Zurag15}/>
            <Cardlist title="Төгөлдөр үүрэг хариуцлагад суралцсан нь" img={Zurag16}/>
            <Cardlist title="Төгөлдөр үүрэг хариуцлагад суралцсан нь, багшийн гарын авлага" img={Zurag17}/>
            <Cardlist title="ЕБС-ын иргэний боловсролын сургалтын хөтөлбөр" img={Zurag18}/>
        </div>
    )
}
export default Home