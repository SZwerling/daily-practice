const Footer = () => {
    let today = new Date()
    return(
        <footer className="container bg-primary text-white">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
        TEAM MEMBER ALLOCATION APP -- {today.getFullYear()}
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;