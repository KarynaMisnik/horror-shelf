/* MAYBE ITS BETTER TO DIVIDE INTO SEVERAL COMPONENTS (LEFT-NAV, RIGHT-NAV,... ) AND PLACE THEM ON THE MAIN LAYOUT */

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./nexus.css";

const Nexus = () =>{
  const menuItems = ["Info", "File", "Edit", "Desk", "View", "Tools", "Windows", "Services", "Hide", "Log out"];


    return(
        <div className="page-wrapper">
            <div className="right-side-nav">
                <h4>Workspace</h4>
         <ul>
  {menuItems.map((item, index) => (
    <li key={index}>
      {item} {index < menuItems.length - 2 ? <span className='icon right-icon arrow-icon' ><ArrowRightIcon sx={{}}/></span> : null}
      {index === menuItems.length - 2 ? <span className='icon right-icon'>h</span> : null}
      {index === menuItems.length - 1 ? <span className='icon right-icon'>q</span> : null}
    </li>
  ))}
</ul>
            </div>
        </div>
    )
}

export default Nexus; 