import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import Idea from './Images/Idea.png';
import Graniti from './Images/Graniti.jpg';

function App() {
    return (
      <div className="containe" id='about'>
        <div className="container ">
        </div>
          <div> <img src="./src/download.jpg" alt="" /> </div>
        <main className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded contain2">
          <div className="col-md-6 px-0">
            <h1 className="display-5 fst-italic">Some little things about us</h1>
            <p className="lead my-3">Find the tool you need to research career information or training!</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">Idea Xhafa</h3>
                <div className="mb-1 text-muted">ix51808@ubt-uni.net</div><br />
                <p className="card-text mb-auto">I'm here to help you figure out who you are and what you want out your education, your career, and your  life.
                <br/>"Grow your skills to advance your career path"</p>
              </div>
              <div className="col-auto d-none d-lg-block h-25" width="300" height="210">
                <img src={Idea} alt="idea" height="200" width="150" className='mt-1'></img>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">Granit Deliu</h3>
                <div className="mb-1 text-muted">gd53776@ubt-uni.net</div><br />
                <p className="mb-auto">I'm here to help you identify the factors influencing your career development, and help you assess your interests, abilities, and values.
                <br/>"Improve yourself to prepare for a better future."</p>
              </div>
              <div class="col-auto d-none d-lg-block" width="200" height="150">
                <img src={Graniti} alt="graniti" height="200" width="200" className='mt-1'></img>
              </div>
            </div>
          </div>
          </div>
    </main>
    <div className="container">
    <footer className="py-3 my-4">
      
      <p className="text-center text-white">&copy; 2022 Copyrights Idea & Graniti</p>
    </footer>
  </div>
      </div>
    );
  }
  
  export default App;