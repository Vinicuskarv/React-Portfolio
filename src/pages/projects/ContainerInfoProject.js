import '../../components/master.css';
import jurosCompostos from '../../components/img/juros-compostos.png';

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
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
              <div className="container text-center">
                <div className="row">  
                      <div className="col-12 col-md-6 col-lg-4">
                        <div class="card">
                          <img src={jurosCompostos} class="card-img-top" alt="..."/>
                          <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                <div className="container text-center">
                  <div className="row">
                    <div>
                      <p>Favorites</p>
                    </div>
                  </div>                    
                </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
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
  }

};

export default ProjectsContainer;