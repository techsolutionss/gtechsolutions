import "../static/services.css"
import ServiceBox from "../components/service-box";
import { useEffect, useState } from "react";
import { publicRequest } from "../utility/apicalls";
const Services = ()=>{
    const[services,setservices] = useState([])

    useEffect(()=>{
        const fetchServices = async()=>{
            try {
                const response = await publicRequest.get("/api/services/")
                if(response.status === 200){
                    setservices(response.data)
                }
                    
            } catch (error) {
                console.log(error.response)
            };
            
        }
        fetchServices()
    },[])
    return(
        <>
            <div className="service-container">
                <div className="service-min-container-1">
                    <h2 className="service-min-container-1-header">
                        At <span className="tech-name">Gtechsolution</span> our passion is your success
                    </h2>
                    <p>
                        We are a reliable and technically inclined digital agency an talents network, changing creativity,
                         colors and code to help our client with a better branding. With our
                        top-notch services we are able to promote your brand and attract prospective client 
                        that are needed to grow your business. Our services are affordable, reliable and secure,
                        and our client satisfaction is our priority as we continue
                        to make modifications until you are <span className="percent">100%</span>  satisfied. 
                    </p>
                    <button type="button">Try us today</button>
                </div>
                <div className="service-min-container-2-1">
                    <h2 className="service-min-container-2-1-header">Our offered services</h2>
                    <div className="service-min-container-2">
                    {services.length ?
                        services.map((service)=>
                            <ServiceBox key={service.id} service ={service}/> 
                        ): <div className="empty-service-container"><h2>No services are available at the moment</h2></div>
                    }
                    </div>
                </div>
                {/* <div className="service-min-container-3">
                    <h2>Reach out to us through our social media handles</h2>
                </div> */}
            </div>
        </>
    );
}

export default Services