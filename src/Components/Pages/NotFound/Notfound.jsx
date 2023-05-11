import React from 'react'
import notfound from "../../assets/images/1-10.png"
function Notfound() {
    return (
        <React.Fragment>
          


            <div style={{ minHeight:"30rem"}}>
            {/* <h1 style={{margin:"10%"}}>Not found try another name </h1> */}
              <img src={notfound} alt='notfound '   style={{margin:"10% auto" , display:"block"}}/>
        </div>
           

        </React.Fragment >
    )
}

export default Notfound