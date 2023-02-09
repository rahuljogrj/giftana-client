import React from 'react';
import "../assets/css/Collage.css";
import { useNavigate } from "react-router-dom";



const Collage = () => {
    const navigate = useNavigate();
    const categories = () => {navigate("/categories")}

    return (
        <div style={{width:'95%', margin: 'auto' }} className="wg - con widget- frames - 332">
            <div className="popular">
                <div className="hdr-ttl"></div>

                <div className="flex-row" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>

                    <div className="flex-column mg-48 frame-6" style={{ marginTop: '0px' }}>
                        <div className="divider-line">
                            <a href="/birthday-gifts" className="popular-subheader">Birthday Gifts</a>
                            <a href="/birthday-gifts" className="view-all">View All</a>
                        </div>
                        <div className="flex-row" style={{ justifyContent: 'space-between', marginTop: '18px', marginLeft: '-20px' }}>

                            <div className="flex-column">
                                <a className="block-2 widget-impression-item frame-border" style={{ marginLeft: '25px', marginRight: '10px' }}
                                    href="#">
                                    <img onClick={categories} className="img-responsive no-background"
                                        src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Birthday_Flowers_d_frames_20220309.jpg" />
                                    <div className="tile-container">
                                        <span className="tile-name">Flowers</span>
                                    </div>
                                </a>


                                <a className="block-1 widget-impression-item frame-border" style={{ marginTop: '16px', marginLeft: '25px' }}
                                    href="#">
                                    <img onClick={categories} className="img-responsive no-background"
                                        src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Birthday_For_Him_d_frames_20220309.jpg" />
                                    <div className="tile-container">
                                        <span className="tile-name">For Him</span>
                                    </div>
                                </a>


                                <a href="#" className="block-1 widget-impression-item frame-border"
                                    style={{ marginTop: '16px', marginLeft: '25px' }}>
                                    <img onClick={categories} className="img-responsive no-background"
                                        src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Birthday_Plants_d_frames_20220309.jpg" />
                                    <div className="tile-container">
                                        <span className="tile-name">Plants</span>
                                    </div>
                                </a>

                            </div>



                            <div className="gap1"></div>

                            <div className="flex-column">
                                <a href="#" className="block-1 widget-impression-item frame-border">
                                    <img onClick={categories} className="img-responsive no-background"
                                        src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Birthday_For_Her_d_frames_20220309.jpg" />
                                    <div className="tile-container">
                                        <span className="tile-name">For Her</span>
                                    </div>
                                </a>

                                <a href="#" className="block-2 widget-impression-item frame-border" style={{ marginTop: '16px' }}>
                                    <img onClick={categories} className="img-responsive no-background"
                                        src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Birthday_Cakes_d_frames_20220309.jpg" />
                                    <div className="tile-container">
                                        <span className="tile-name">Cakes</span>
                                    </div>
                                </a>

                                <a href="#" className="block-1 widget-impression-item frame-border" style={{ marginTop: '16px' }}>
                                    <img onClick={categories} className="img-responsive no-background"
                                        src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Birthday_Personalized_d_frames_20220309.jpg" />
                                    <div className="tile-container">
                                        <span className="tile-name">Personalized</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="gap"></div>

                    <div className="flex-column mg-48 frame-6" style={{ marginTop: '0px' }}>
                        <div className="divider-line">
                            <a href="#" className="popular-subheader">Anniversary Gifts</a>
                            <a href="#" className="view-all">View All</a>
                        </div>
                        <div className="flex-row" style={{ justifyContent: 'space-between', marginTop: '18px', marginRight: '0px' }}>

                            <div className="flex-column">
                                <a href="#" className="block-2 widget-impression-item frame-border">
                                    <img onClick={categories} className="img-responsive no-background"
                                        src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Anniversary_Wife_d_frames_20220309.jpg" />
                                    <div className="tile-container">
                                        <span className="tile-name">Wife</span>
                                    </div>
                                </a>

                                <a href="#" className="block-1 widget-impression-item frame-border" style={{ marginTop: '16px' }}>
                                    <img onClick={categories} className="img-responsive no-background"
                                        src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Anniversary_Couples_d_frames_20220309.png" />
                                    <div className="tile-container">
                                        <span className="tile-name">Couples</span>
                                    </div>
                                </a>

                                <a href="#" className="block-1 widget-impression-item frame-border" style={{ marginTop: '16px' }}>
                                    <img onClick={categories} className="img-responsive no-background"
                                        src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Anniversary_Cakes_d_frames_20220309.jpg" />
                                    <div className="tile-container">
                                        <span className="tile-name">Cakes</span>
                                    </div>
                                </a>
                            </div>

                            <div className="flex-column" style={{ marginLeft: '-30px' }}>
                                <a href="#" className="block-1 widget-impression-item frame-border">
                                    <img onClick={categories} className="img-responsive no-background"
                                        src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Anniversary_Flowers_d_frames_20220309.png" />
                                    <div className="tile-container">
                                        <span className="tile-name">Flowers</span>
                                    </div>
                                </a>

                                <a href="#" className="block-2 widget-impression-item frame-border" style={{ marginTop: '16px' }}>
                                    <img onClick={categories} className="img-responsive no-background"
                                        src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Anniversary_Husband_d_frames_20220309.jpg" />
                                    <div className="tile-container">
                                        <span className="tile-name">Husband</span>
                                    </div>
                                </a>

                                <a href="#" className="block-1 widget-impression-item frame-border" style={{ marginTop: '16px' }}>
                                    <img onClick={categories} className="img-responsive no-background"
                                        src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Anniversary_Personalized_d_frames_20220309.jpg" />
                                    <div className="tile-container">
                                        <span className="tile-name">PERSONALIZED</span>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Collage