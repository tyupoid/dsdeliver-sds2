import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg'; 
import {ReactComponent as InstagranIcon} from './instagram.svg'; 
import {ReactComponent as LinkedinIcon} from './linkedin.svg'; 

function Footer(){
    return (
        <footer className="main-footer"> 
                App desenvolvido  durante a 2ed.  do evento  Semana DevSuperior.
                <div className="main-footer">
                    <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                        <YoutubeIcon/>
                    </a>
                    <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                        <InstagranIcon/>
                    </a>
                    <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                        <LinkedinIcon/>
                    </a>
                </div>
        </footer>

       
    )
}

export default Footer;