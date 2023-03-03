import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import adinusa from "../assets/certs/adinusa.png"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certification</h1>
            <p className="font-light text-gray-400">Here is my Certification</p>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Webex Technologies LLC Certificate" img={adinusa} issued="Adinusa" date="Jul 2022" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
