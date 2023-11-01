import CurrentTime from './CurrentTime';
import './rightnav.css';

const Rightnav = () =>{
    return(
      <div className="container">
  <div className="square">
    <div className='img-container'> 
<img className='icon' src="./src/assets/img/nexusIcons/home.png" />
</div>
  </div>
  
  <div className="square"><div className='img-container'><CurrentTime/></div></div>
  <div className="square dots"><div className='img-container'><img className='icon' src="./src/assets/img/nexusIcons/edit.png" /></div>. . .</div>
  <div className="square dots"><div className='img-container'><img className='icon' src="./src/assets/img/nexusIcons/www.png" /></div>. . .</div>
  <div className="square"><div className='img-container'><img className='icon' src="./src/assets/img/nexusIcons/delete.png" /></div></div>
  <div className="square dots"><div className='img-container'><img className='icon' src="./src/assets/img/nexusIcons/login.png" /></div>. . .</div>
  <div className="square dots"><div className='img-container'><img className='icon' src="./src/assets/img/nexusIcons/wall.png" /></div>. . .</div>
  <div className="square dots"><div className='img-container'><img className='icon' src="./src/assets/img/nexusIcons/build.png" /></div>. . .</div>
  <div className="square dots"><div className='img-container'><img className='icon' src="./src/assets/img/nexusIcons/bash.png" /></div>. . .</div>
  <div className="square dots"><div className='img-container'><img className='icon' src="./src/assets/img/nexusIcons/search.png" /></div>. . .</div>
  <div className="square dots"><div className='img-container'><img className='icon' src="./src/assets/img/nexusIcons/search.png" /></div>. . .</div>
  <div className="square dots"><div className='img-container'><img className='icon' src="./src/assets/img/nexusIcons/exit.png" /></div>. . .</div>
  
</div>
    )
}

export default Rightnav;