import './styles.css'
import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as Linkedin } from './linkedin.svg'
import { ReactComponent as Instagram } from './instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div>
            <a href="https://www.linkedin.com/in/ramon-silva-0358721a3/" target="_new">
                <Linkedin />
            </a>
            <a href="https://www.instagram.com/ramonsilva186/" target='_new'>
                <Instagram />
            </a>

        </div>
        </footer>
    )
}

export default Footer;