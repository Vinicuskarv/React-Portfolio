import '../../components/master.css';
import './ProjectPage.css';
import jurosCompostos from '../../components/img/juros-compostos.png';
import hotelDiaria from '../../components/img/hotel-diaria.png';
import formulario from '../../components/img/formulario.png';
import demonSlayer from '../../components/img/demon-slayer.png';
import lerJson from '../../components/img/ler-json.png';
import snake from '../../components/img/snake.png';
import toDoList from '../../components/img/to-do-list.png';
import nimeHistory from '../../components/img/nime-history.png';
import estoqNode from '../../components/img/estoque-node.png';
import presetCode from '../../components/img/PresetCode.png';


import icongitgub from '../../components/gif/icons8-github.gif';
import iconsite from '../../components/gif/icons8-site.gif';

import iconHTML from '../../components/icons/icons8-html-50.png';
import iconCSS from '../../components/icons/icons8-css-50.png';
import iconJS from '../../components/icons/icons8-js-50.png';
import iconPHP from '../../components/icons/icons8-php-50.png';
import iconREACT from '../../components/icons/icons8-react-48.png';
import iconNode from '../../components/icons/icons8-nodejs-32.png';


function ProjectsContainer() {
  return (
    <div className="container" style={styles.containerInfo}>
        <div style={styles.Info}>
          <div className="d-flex CampoMyPortif" >
            <h1 style={styles.h1}>My<br/>portfolio</h1>
            <p className="PInfo" style={styles.p}>These are some of the jobs and<br/>projects I've done</p>
          </div>
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="navEdit active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Todos</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="navEdit " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">My Favorites</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="navEdit" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Active</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
              <div className="container text-center">
                <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <h5 className="card-title" style={styles.h5}>Nime History</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={nimeHistory} className="card-img" style={styles.imgCard} alt="jurosCompostos"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/Anime-Story"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                          <a className="elemento-container" href="https://64cfbc0edad64a5a742baa65--ephemeral-blancmange-166687.netlify.app/"><img className="IconSkill elemento" src={iconsite} alt="iconsite"/></a>
                        </div>
                        <div className="campoIconstool">
                        <img src={iconREACT} alt="React"/>
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconJS} alt="js"/>                                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                  <h5 className="card-title" style={styles.h5}>Estoque</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={estoqNode} className="card-img" style={styles.imgCard} alt="hotelDiaria"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/EstoqueNodeJS"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconNode} alt="node.js"/>    
                          <img src={iconJS} alt="js"/>                  
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                  <h5 className="card-title" style={styles.h5}>Preset Code</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={presetCode} className="card-img" style={styles.imgCard} alt="Preset Code"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/preset-code"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                          <a className="elemento-container" href="https://main--fancy-pie-d21965.netlify.app/"><img className="IconSkill elemento" src={iconsite} alt="iconsite"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconREACT} alt="reack"/>
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconJS} alt="js"/>                   
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <h5 className="card-title" style={styles.h5}>Juros Compostos</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={jurosCompostos} className="card-img" style={styles.imgCard} alt="jurosCompostos"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/calculadora-juros-compostos"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                          <a className="elemento-container" href="https://649802b8e163ac6a5ee8f4af--fascinating-dragon-8c0363.netlify.app/"><img className="IconSkill elemento" src={iconsite} alt="iconsite"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconJS} alt="js"/>                                          
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-12 col-md-6 col-lg-4">
                    <h5 className="card-title" style={styles.h5}>Fomulário</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={formulario} className="card-img" style={styles.imgCard} alt="hotelDiaria"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/form"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconPHP} alt="php"/>
                          <img src={iconJS} alt="js"/>                                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                  <h5 className="card-title" style={styles.h5}>To do list</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={toDoList} className="card-img" style={styles.imgCard} alt="hotelDiaria"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/My-to-do-list"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                          <a className="elemento-container" href="https://chic-lolly-ed391b.netlify.app/"><img className="IconSkill elemento" src={iconsite} alt="github"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconJS} alt="js"/>                                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                  <h5 className="card-title" style={styles.h5}>Ler json</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={lerJson} className="card-img" style={styles.imgCard} alt="hotelDiaria"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/Ler-json"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                          <a className="elemento-container" href="https://6497fecf7a500b67ec29bd3e--steady-trifle-decf83.netlify.app/#"><img className="IconSkill elemento" src={iconsite} alt="github"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconJS} alt="js"/>                                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <h5 className="card-title"style={styles.h5}>Snake Game</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={snake} className="card-img" style={styles.imgCard} alt="hotelDiaria"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/snake-game"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                          <a className="elemento-container" href="https://incredible-cobbler-31243e.netlify.app/"><img className="IconSkill elemento" src={iconsite} alt="github"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconJS} alt="js"/>                                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <h5 className="card-title" style={styles.h5}>Demon Slayer</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={demonSlayer} className="card-img" style={styles.imgCard} alt="hotelDiaria"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/demon-slayer"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                          <a className="elemento-container" href="https://64980b843a58646c2382c3f5--clinquant-lamington-edc8c1.netlify.app/"><img className="IconSkill elemento" src={iconsite} alt="github"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />                                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                  <h5 className="card-title" style={styles.h5}>Diaria Hotel</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={hotelDiaria} className="card-img" style={styles.imgCard} alt="hotelDiaria"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/Hotel-diaria"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconPHP} alt="php"/>
                          <img src={iconJS} alt="js"/>                                           
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                <div className="container text-center">
                  <div className="row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <h5 className="card-title" style={styles.h5}>Nime History</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={nimeHistory} className="card-img" style={styles.imgCard} alt="jurosCompostos"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/Anime-Story"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                          <a className="elemento-container" href="https://64cfbc0edad64a5a742baa65--ephemeral-blancmange-166687.netlify.app/"><img className="IconSkill elemento" src={iconsite} alt="iconsite"/></a>
                        </div>
                        <div className="campoIconstool">
                        <img src={iconREACT} alt="html"/>
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconJS} alt="js"/>                                          
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="col-12 col-md-6 col-lg-4">
                  <h5 className="card-title" style={styles.h5}>Estoque</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={estoqNode} className="card-img" style={styles.imgCard} alt="hotelDiaria"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/EstoqueNodeJS"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconNode} alt="node.js"/>    
                          <img src={iconJS} alt="js"/>                  
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                  <h5 className="card-title" style={styles.h5}>Preset Code</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={presetCode} className="card-img" style={styles.imgCard} alt="Preset Code"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/preset-code"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                          <a className="elemento-container" href="https://main--fancy-pie-d21965.netlify.app/"><img className="IconSkill elemento" src={iconsite} alt="iconsite"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconREACT} alt="reack"/>
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconJS} alt="js"/>                   
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                  <h5 className="card-title" style={styles.h5}>Snake Game</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={snake} className="card-img" style={styles.imgCard} alt="hotelDiaria"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/snake-game"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                          <a className="elemento-container" href="https://incredible-cobbler-31243e.netlify.app/"><img className="IconSkill elemento" src={iconsite} alt="github"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconJS} alt="js"/>                                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                  <h5 className="card-title"style={styles.h5}>To do list</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={toDoList} className="card-img" style={styles.imgCard} alt="hotelDiaria"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/My-to-do-list"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                          <a className="elemento-container" href="https://chic-lolly-ed391b.netlify.app/"><img className="IconSkill elemento" src={iconsite} alt="github"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconJS} alt="js"/>                                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                  <h5 className="card-title" style={styles.h5}>Juros Compostos</h5>
                    <div className="card" style={styles.CardPri}>
                      <img src={jurosCompostos} className="card-img" style={styles.imgCard} alt="jurosCompostos"/>
                      <div className="card-img-overlay">
                        <div className="campoIconsProfile">
                          <a className="elemento-container" href="https://github.com/Vinicuskarv/calculadora-juros-compostos"><img className="IconSkill elemento" src={icongitgub} alt="icongitgub"/></a>
                          <a className="elemento-container" href="https://649802b8e163ac6a5ee8f4af--fascinating-dragon-8c0363.netlify.app/"><img className="IconSkill elemento" src={iconsite} alt="iconsite"/></a>
                        </div>
                        <div className="campoIconstool">
                          <img src={iconHTML} alt="html"/>
                          <img src={iconCSS} alt="css" />
                          <img src={iconJS} alt="js"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                <div className="container text-center">
                    <div className="row">
                        <div>
                            <p>none</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
const styles = {
  containerInfo:{
    position: 'relative',
    top: '50px',
    border: '2px solid rgba(255, 255, 255, 0.575)',
    borderRadius: '10px',
    color: 'aliceblue',
    '--bs-gutter-x':'0',
  },
  Info:{
    backgroundColor:' rgba(181, 180, 180, 0.226)',
    padding: '30px',
    fontFamily: "'Lora', serif",
  },
  h1:{
    fontSize: '50px',
  },
  p:{
    marginTop:'auto',
    marginLeft:'30px',
  },
  h5:{
    marginTop:'10px',
  },
  CardPri:{
    marginBottom: '10px',
    height: '200px',
  },
  imgCard:{
    width: '100%',
    height: '100%',
    opacity: '80%',
    backgroundSize: 'cover',
  }
};

export default ProjectsContainer;