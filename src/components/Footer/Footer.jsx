// Render del footer.
import { Link } from 'react-router';

function Footer() {
    return(<>
    <div className="foot">
            <Link to="https://github.com/RomanForDev" target='_blank' className='link-git'><img src="../public/brand-github.svg" alt="" className="logo-git" /></Link>
            <p className="p-foot">Comisión 88080</p>
            <p className="p-foot">Todos los derechos reservados</p>
    </div>
    </>
    )
}

export default Footer;