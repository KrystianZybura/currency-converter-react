import "./style.css"

const Footer = ({ copyright, exampleMail }) => (
    <footer className="footer">
        <p
            className="footer__paragraph"> {copyright}
            <a
                rel="noreferrer noopener"
                className="footer__link"
                href="mailto:example-mail@gmail.com"
            >
                {exampleMail}
            </a>
        </p>
    </footer>
);

export default Footer;