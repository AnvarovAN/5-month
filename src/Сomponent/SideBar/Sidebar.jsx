import "./sidebar.scss"
{/* <HomeOutlined /> */}
const Sidebar = ({icon, name, id}) => {
  return (
    
    <div className='sidebar'>
<div className="main__hero">
          <div className="main__hero__btns">
            {/* <span key={id}>{icon}</span>
            <span key={id}>{name}</span> */}
            <span key={id} className="main__hero__barIcon">
            {icon} 
            </span>
            <span key={id} className="main__hero__barName">
              {name}
            </span>
          </div>
    </div>
    </div>
  )
}

export default Sidebar