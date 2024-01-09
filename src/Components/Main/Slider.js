import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Slider.module.css';

import AG from '../img/clientes/AG.png'
import Agd from '../img/clientes/Agd.png'
import Arcor from '../img/clientes/Arcor.png'
import Bagley from '../img/clientes/Bagley.png'
import BASF from '../img/clientes/BASF.png'
import Campagnola from '../img/clientes/Campagnola.jpg'
import Capacitacion from '../img/clientes/Capacitacion.jpg'
import CBR from '../img/clientes/CBR.png'
import celulosa from '../img/clientes/celulosa.jpg'
import cet from '../img/clientes/cet.jpg'
import ClariPhy from '../img/clientes/ClariPhy.jpg'
import Cnh from '../img/clientes/Cnh.png'
import compa from '../img/clientes/compa.jpg'
import cordiez from '../img/clientes/cordiez.jpg'
import corebi from '../img/clientes/corebi.jpg'
import CS from '../img/clientes/CS.png'
import Disco from '../img/clientes/Disco.png'
import ecogas from '../img/clientes/ecogas.png'
import FAdeA from '../img/clientes/FAdeA.png'
import Fiat from '../img/clientes/Fiat.png'
import flexxus from '../img/clientes/flexxus.png'
import ga from '../img/clientes/ga.png'
import GC from '../img/clientes/GC.png'
import gp from '../img/clientes/gp.png'
import guma from '../img/clientes/guma.jpg'
import Hariague from '../img/clientes/Hariague.png'
import Honewell from '../img/clientes/Honeywell.png'
import HP from '../img/clientes/HP.png'
import Iscot from '../img/clientes/Iscot.jpg'
import Iveco from '../img/clientes/Iveco.png'
import kolektor from '../img/clientes/kolektor.png'
import lempert from '../img/clientes/lempert.jpg'
import manisur from '../img/clientes/manisur.jpg'
import Mgi from '../img/clientes/Mgi.jpg'
import Motorola from '../img/clientes/Motorola.png'
import Mrc from '../img/clientes/Mrc.png'
import naranja from '../img/clientes/naranja.png'
import Neyra from '../img/clientes/Neyra.png'
import nuevocentro from '../img/clientes/nuevocentro.png'
import Olam from '../img/clientes/Olam.jpg'
import olega from '../img/clientes/olega.jpg'
import PORTA from '../img/clientes/PORTA.png'
import prominente from '../img/clientes/prominente.jpg'
import Renault from '../img/clientes/Renault.jpg'
import stoller from '../img/clientes/stoller.png'
import vates from '../img/clientes/vates.png'
import Volkswagen from '../img/clientes/Volkswagen.jpg'
import vulcamet from '../img/clientes/vulcamet.png'

export default class Slide extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            cssEase: "linear"
        };
        return (
            <div class={styles.contentLogos}>
                <Slider {...settings}>
                    <div class={styles.logosUno}>
                        <div class={styles.logosSlide}>
                            <img src={AG} alt="" />
                            <img src={Agd} alt="" />
                            <img src={Arcor} alt="" />
                            <img src={Bagley} alt="" />
                            <img src={BASF} alt="" />
                            <img src={Campagnola} alt="" />
                            <img src={Capacitacion} alt="" />
                            <img src={CBR} alt="" />
                            <img src={celulosa} alt="" />
                            <img src={cet} alt="" />
                            <img src={ClariPhy} alt="" />
                            <img src={Cnh} alt="" />
                            <img src={compa} alt="" />
                            <img src={cordiez} alt="" />
                            <img src={corebi} alt="" />
                            <img src={CS} alt="" />
                            <img src={Disco} alt="" />
                            <img src={ecogas} alt="" />
                            <img src={FAdeA} alt="" />
                            <img src={Fiat} alt="" />
                            <img src={flexxus} alt="" />
                            <img src={ga} alt="" />
                            <img src={GC} alt="" />
                            <img src={gp} alt="" />
                            <img src={guma} alt="" />
                            <img src={Hariague} alt="" />
                            <img src={Honewell} alt="" />
                            <img src={HP} alt="" />
                            <img src={Iscot} alt="" />
                            <img src={Iveco} alt="" />
                            <img src={kolektor} alt="" />
                            <img src={lempert} alt="" />
                            <img src={manisur} alt="" />
                            <img src={Mgi} alt="" />
                            <img src={Motorola} alt="" />
                            <img src={Mrc} alt="" />
                            <img src={naranja} alt="" />
                            <img src={Neyra} alt="" />
                            <img src={nuevocentro} alt="" />
                            <img src={Olam} alt="" />
                            <img src={olega} alt="" />
                            <img src={PORTA} alt="" />
                            <img src={prominente} alt="" />
                            <img src={Renault} alt="" />
                            <img src={stoller} alt="" />
                            <img src={vates} alt="" />
                            <img src={Volkswagen} alt="" />
                            <img src={vulcamet} alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
