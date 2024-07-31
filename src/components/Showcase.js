const Showcase = () => {
    return (
        <section className="showcase">
            {/* background section */}
            <div className="bg-img">
                
            </div>

            <div className="container">
                {/* Header section */}
                <header className="header">
                    <div className="logo">
                        Future <span className="btn">Homes</span>
                    </div>

                    <nav className="nav">
                        <ul className="nav-major">
                            <li><a href="#" className="btn">Home</a></li>
                            <li><a href="#" className="btn">Contact us</a></li>
                            <li><a href="#" className="btn">Browse properties</a></li>
                            <li><a href="#" className="btn">Sale homes</a></li>
                        </ul>

                        <ul className="nav-minor">
                            <li><a href="#" className="btn">Sign in</a></li>
                            <li><a href="#" className="btn">Sign up</a></li>
                        </ul>
                    </nav>

                    <div className="toggle">
                        <div className="toggle-bars"></div>
                    </div>
                </header>
                {/* Article section */}
                <article className="showcase-article">
                    <h1>Trusted Real Estate Property For You</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
                        molestias, dolorum porro, eaque voluptas facere ab a unde accusamus
                        libero dolores, placeat nulla ea iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, totam.
                    </p>
                    <span><a href="" className="btn">Contact with us</a></span>
                </article>
            </div>
        </section>
    );
};

export default Showcase;
