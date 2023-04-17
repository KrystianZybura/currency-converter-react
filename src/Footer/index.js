import "./style.css"

const Footer = () => (
    <footer className="footer">
        <p
            className="footer__paragraph"> Copyright © 2022-
            <a
                rel="noreferrer noopener"
                className="footer__link"
                href="mailto:example-mail@gmail.com"
            >
                Example_email@gmail.com
            </a>
        </p>
    </footer>
);

export default Footer;