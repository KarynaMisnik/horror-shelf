/* MAYBE ITS BETTER TO DIVIDE INTO SEVERAL COMPONENTS (LEFT-NAV, RIGHT-NAV,... ) AND PLACE THEM ON THE MAIN LAYOUT */
import React, { useState } from 'react';
import InfoWindow from './InfoWindow'; 
import Rightnav from './Rightnav';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./nexus.css";

const Nexus = () =>{
      const [activeItem, setActiveItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    "Info",
    "Navigate",
    "Document",
    "Find",
    "Edit",
    "Links",
    "Style",
    "Print...",
    "Page Layout...",
    "Windows",
    "Services",
    "Hide",
    "Quit"
  ];

  const openWindow = (item) => {
    setActiveItem(item);
    setIsModalOpen(true);
  };

  const closeWindow = () => {
    setActiveItem(null);
    setIsModalOpen(false);
  };

    return(
        
        <div className="page-wrapper">
            <div className="left-side-nav">
                <p>WorldWideWeb</p>
         <ul>
        {menuItems.map((item, index) => (
          <li key={index} onClick={() => openWindow(item)}>
            {item} {(index < menuItems.length - 2 && index < menuItems.length - 6) ? <span className='icon right-icon arrow-icon'><ArrowRightIcon/></span> : null}
            {index === menuItems.length - 3 ? <span className='icon right-icon arrow-icon'><ArrowRightIcon/></span> : null}
            {index === menuItems.length - 4 ? <span className='icon right-icon arrow-icon'><ArrowRightIcon/></span> : null}
            {index === menuItems.length - 5 ? <span className='icon right-icon letter-shortcut'></span> : null}
            {index === menuItems.length - 6 ? <span className='icon right-icon letter-shortcut'>p</span> : null}
            {index === menuItems.length - 2 ? <span className='icon right-icon letter-shortcut'>h</span> : null}
            {index === menuItems.length - 1 ? <span className='icon right-icon letter-shortcut'>q</span> : null}
            
          </li>
        ))}
      </ul>

      <div className="window-container">
        {activeItem === "Info" && isModalOpen && <InfoWindow onClose={closeWindow} />}
        {/* Add similar conditional rendering for other menu items */}
      </div>
    </div>
    <main></main>
    <div className='right-nav'>
    <Rightnav/>
    </div>
        </div>
    )
}

export default Nexus; 