import React from 'react'

const Footer = () => {
    return (
        <div className='footer-css w-100' style={{ backgroundColor: "#333" }}>

        <div className="container " >
            <footer className="text-center text-white" >
                    <section className="">
                        <div className="row text-center d-flex justify-content-around py-4">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className=" text-decoration-none text-white">About us</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-decoration-none text-white">Products</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-decoration-none text-white">Awards</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-decoration-none text-white">Help</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-decoration-none text-white">Contact</a>
                                </h6>
                            </div>
                        </div>
                    </section>



                <div
                    className="text-center p-3"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                            >
      © 2023 Copyright:
                <a className="text-decoration-none text-white" href="https://mdbootstrap.com/"
                >SMDB</a
                >
        </div>
  </footer >
</div >
</div>

    )
}

export default Footer