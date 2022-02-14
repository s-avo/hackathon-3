import "./Footer.css";

function Footer() {
    return(
            <footer className=" footer d-flex flex-wrap justify-content-between align-items-center p-3 border-top bg-dark mt-auto">
                <div className="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                </a>
                <span className="text-light">© 2022 SGT Bootcamp | made by Santa</span>
                </div>
        </footer>
    )
}

export default Footer;