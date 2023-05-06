import "./style.css"

const Footer = ({ copyright, mail }) => (
    <footer className="footer">
        <p
            className="footer__paragraph"> {copyright}
            <a
                rel="noreferrer noopener"
                className="footer__link"
                href={mail}
            >
                {mail}
            </a>
        </p>
    </footer>
);

export default Footer;