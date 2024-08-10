
export default function Banner({title, tag}){
    return(
        <>
            <div className="banner-image">
                <div className="banner-title">
                    <h3>{title}</h3>
                    {tag}
                </div>
                <div className="banner-button"> 
                    <button className="btn book-now-button">
                        Book Now
                    </button>
                </div>
            </div>
        </>
    )
} 