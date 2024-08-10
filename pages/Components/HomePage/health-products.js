import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function HealthProduct(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
        <div className='section health-product-banner'>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <h1>
                            Health <span style={{color:"rgba(225,104,178,1)"}} >Products</span>
                        </h1>
                        <p style={{color:"#3498db"}}>Your Wellness, Our Priority</p>
                    </div>
                </div>
            </div>
            <div className='container pb-5 pt-5'>
                <Carousel className='' infinite={true} swipeable={false} draggable={false} responsive={responsive} itemClass="carousel-item-padding-40-px">
                    
                    <div className="health-product">
                        <img src="../../../Images/homePage/01.webp" className="health-product-image" width={100}/>
                        <h6 className="mx-2 mt-3 text-center">PCOS, PCOD with Delayed Cycles</h6>
                        <p></p>
                    </div>


                    <div className="health-product">
                        <img src="../../../Images/homePage/04.webp" className="health-product-image" width={100}/>
                        <h6 className="mx-2 mt-3 text-center">Dia Free Juice - Diabetes Care</h6>
                        <p></p>
                    </div>

                    <div className="health-product">
                        <img src="../../../Images/homePage/02.webp" className="health-product-image" width={100}/>
                        <h6 className="mx-2 mt-3 text-center">Kapiva Himalayan Shilajit/Shilajeet Resin</h6>
                        <p></p>
                    </div>


                    <div className="health-product">
                        <img src="../../../Images/homePage/03.jpg" className="health-product-image" width={100}/>
                        <h6 className="mx-2 mt-3 text-center">Himalaya Ashvagandha General Wellness Tablets</h6>
                        <p></p>
                    </div>


                    <div className="health-product">
                        <img src="../../../Images/homePage/05.jpg" className="health-product-image" width={100}/>
                        <h6 className="mx-2 mt-3 text-center">Sugar Free Green Stevia Pouch</h6>
                        <p></p>
                    </div>


                    <div className="health-product">
                        <img src="../../../Images/homePage/06.jpg" className="health-product-image" width={100}/>
                        <h6 className="mx-2 mt-3 text-center">Organic India Moringa Powder</h6>
                        <p></p>
                    </div>
                </Carousel>
            </div>

        </div>
          
        </>
    ) 
}