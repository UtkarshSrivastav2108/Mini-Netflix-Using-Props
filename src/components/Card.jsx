import React from 'react'

function Card(props) {
    return (
        <>

            <div className="container-fluid mt-5 py-5 px-5" >
                <div className="row">
                    <div className="col-lg-4">

                        <div class="card" style={{ width: '22rem' }}>
                            <img style={{ height: '490px' }} class="card-img-top" src={props.imageUrl} alt="Cardimage cap" />
                            <div class="card-body">
                                <h5 class="card-title">{props.title}</h5>
                                <p class="card-text">{props.description}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"> Ratings : {props.rating}</li>

                            </ul>

                        </div>


                    </div>
                </div>
            </div>






        </>
    )
}

export default Card
