import logo from '../images/logo.jpg';
const HeadPage = () => {
    return (<div className="header">
        <div className='wrapper'>
        < div className="logo">
            <img src={logo} />
            <ul className="menu">
                <li>About us</li>
                <li>Galery</li>
                <li>Contact us</li>
                </ul>
            </div>
       </div>
           </div>);
    
}
export default HeadPage;