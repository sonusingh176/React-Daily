// import React from 'react'

const Aboutslider = () => {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="row content">

          <div className="col-lg-6">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://5.imimg.com/data5/BO/HT/WO/SELLER-4202653/factory-sheds.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                    
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://brandstory.co/ajitbakery/wp-content/uploads/2021/05/IMG_1386.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                    
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://brandstory.co/ajitbakery/wp-content/uploads/2021/05/IMG_1207.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                    
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0">
            <h2 style={{fontSize:'37px'}}>
                WE ARE <span style={{color:"red"}}>Machinery Point</span> BAKERY MACHINES AND KITCHEN EQUIPMENT MANUFACTURERS
            </h2>
         
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default Aboutslider