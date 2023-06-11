import { useState,useEffect,useRef } from "react";
import { motion } from "framer-motion";
import { Link} from 'react-router-dom';
import image1 from './assets/scrollimages/1a.jpg';
import image2 from './assets/scrollimages/2a.jpg';
import image3 from './assets/scrollimages/3a.jpg';
import image4 from './assets/scrollimages/4.jpg';
import image5 from './assets/scrollimages/5.jpg';
import image6 from './assets/scrollimages/6.jpg';
import './scrollcard.css';

const FrameScroll = () => {

    const images = [image1,image2,image3,image4,image5,image6];

    const [width, setwidth] = useState(0);
    const carousal = useRef(null);

    useEffect(() =>{
        setwidth(carousal.current.scrollWidth - carousal.current.offsetWidth);
    }, []);

    return (
        <div>
            <div className="text-area">
                <h1 className="head-gallery">ARCHIVES</h1>
            </div>
            <motion.div ref={carousal} className="carousal" whileTap={{cursor:'grabbing'}} initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>
                <motion.div drag='x' dragConstraints={{right:0, left:-width}} className="inner">
                    {images.map((each) => {
                        return(
                        <motion.div className="item">
                            <img src={each} alt="each of images" className="image" key={each}/>
                        </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
            <Link to="/gallery">
                <button className="button-64">
                    <span className="button-64-span" >View More</span>
                </button>
            </Link>
        </div>
    )
}

export default FrameScroll