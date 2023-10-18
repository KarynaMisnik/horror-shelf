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
      {item} {index < menuItems.length - 2 ? <span>&#8594;</span> : null}
      {index === menuItems.length - 2 ? <span>h</span> : null}
      {index === menuItems.length - 1 ? <span>q</span> : null}
    </li>
  ))}
</ul>
            </div>
        </div>
    )
}

export default Nexus; 