import {data} from './content'

const CoreValus = () => {
  return (
    <section className="pricing" id="pricing">
        <div className="container">

            <div className="row">
                {
                    data.map((item)=>{
                        return(
                            <div key={item.id} className="col-lg-3 col-md-6">
                            <div className="box">
                                <div className="icon-box iconbox-blue">
                                    <div className="icon">   
                                        <img src={item.image} className="img-fluid" alt=""/>
                                    </div>
                                    <h4 style={{fontSize:"20px"}}><a href="">{item.heading}</a></h4>
                                    <p> {item.message}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }      
            </div>
        </div>
    </section>
  
  )
}

export default CoreValus