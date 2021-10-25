import { useEffect, useState } from 'react';
import laptopData from '../../Data/Laptop.json'
import desktopData from '../../Data/Desktop.json'
import LaptopCart from '../Laptop/LaptopCart'
import './Home.css'
import banner1 from '../../img/hp-11th-gen-banner .png'
import banner2 from '../../img/2.png'
import DesktopCard from '../Desktop/DesktopCard';
const Home = () => {
    const [laptop, setLaptop] = useState([]);
    useEffect(() => {
        setLaptop(laptopData);
        console.log(laptopData);
    }, []);

    const [desktop, setDesktop] = useState([]);
    useEffect(() => {
        setDesktop(desktopData);
        console.log(desktopData);
    }, [])


    return (
        <div>
            <div className="container">
                <div className="home-banners m-top-20 after-header">
                    <div className="container">
                        <div id="collage-1" className="collage row">
                            <div className="col-md-12 col-xl-8 banner-slider p-3">
                                <div className="item item banner-image mySlides">
                                    <a href="/laptop"><img src={banner1} alt="envy x360"
                                            className="img-responsive w-100" /></a>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-4 m-col-top-10 right-side-banner p-3">
                                <div className="row">
                                    <div className="col-6 col-xl-12">
                                        <div className="banner-first banner-image">
                                            <a href="/laptop"><img src={banner2} className="img-responsive w-100 p-1" alt=""/></a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-xl-12">
                                        <div className="banner-second banner-image">
                                            <a href="/laptop"><img src={banner2} className="img-responsive w-100 p-1" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-5">
                <h5 className="header-card">LATEST LAPTOPS</h5>
                <div id="header_cardArea">
                    {
                        laptop.map(laptop => <LaptopCart laptop={laptop} />)
                    }
                </div>
            </div>
            <div className="container pt-5">
                <h5 className="header-card">LATEST DESKTOP</h5>
                <div id="header_cardArea">
                    {
                        desktop.map(desktop => <DesktopCard desktop={desktop} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;