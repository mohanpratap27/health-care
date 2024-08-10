

export default function Artical(){
    return(
        <>
         <div className="section">
            <div className="container pt-5 pb-5">
                <div className="row mt-5">
                    <div className="col-lg-4 pt-5">
                        <h3 className="pt-3">Read top articles from health experts</h3>
                        <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
                        <button className="btn home-page-blog-button mt-3">See all articals</button>
                    </div>
                    <div className="col-lg-8 d-flex justify-content-between">
                        
                        <div className="mx-2 blog-home-card">
                            <div className="">
                                <img src="../../../Images/homePage/blog-01.jpeg" className="home-page-blog-image"/>
                            </div>
                            <div>
                            <p className="blog-title">Coronavirus</p>
                            <p>12 Coronavirus Myths and Facts That You Should Be Aware Of</p>
                            <p>DR. john doe</p>
                            </div>
                        </div>

                        <div className="mx-2 blog-home-card">
                            <div className="">
                                <img src="../../../Images/homePage/blog-02.jpeg" className="home-page-blog-image"/>
                            </div>
                            <div>
                            <p className="blog-title">VITAMINS AND SUPPLEMENTS</p>
                            <p>Eating Right to Build Immunity Against Cold and Viral Infections</p>
                            <p>Dr. John Doe</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         </div>
        </>
    )
}