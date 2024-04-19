// import React from 'react'

const Textdesign = (props) => {
   // Destructuring props
   const { txt , text , imageSrc} = props;
  return (
    <section id="skills" className="skills" style={{paddingTop:'5px', paddingBottom:'5px'}}>
        <div className="container">

          <div className="section-title" style={{paddingBottom:'0px'}}>
            
            <p style={{textAlign:'center', fontSize:'30px'}}>{txt && (txt)} <span style={{color:'black'}}>{text}</span> </p>
          </div>

        { imageSrc && (
              <div className="row mt-0">
              <div className="col" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={imageSrc} alt="" style={{ height: '35vh', width: 'auto' }} />
              </div>
              </div>
            )
        }


        </div>
      </section>
  )
}

export default Textdesign