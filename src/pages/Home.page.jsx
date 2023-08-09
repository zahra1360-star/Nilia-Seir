import React from 'react';
import homeImg from '../assets/images/home2.png';
import './HomePage.css';



const HomePage = () => {
    return (
        <div className="container" >


            <div className="row justify-content-center">
                <div className="col-md-12 pt-5">

                    <img src={homeImg} alt='' className="img-fluid d-rounded-30 mx-auto d-block" />
                </div>
            </div>
            <div className="row justify-content-center">

                <div className="col-md-8 text-right coTitle2">
                    <p className="title"> خرید آسان بلیط هواپیما با نیلیا سیر</p>
                </div>



                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
                    <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
                </div>

                <div className="col-md-8 text-right  mt-5 rounded border coTitle">

                    <div className="row border-bottom">
                        <ul className="nav nav-tabs " id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane" type="button" role="tab"
                                    aria-controls="home-tab-pane" aria-selected="true">پرواز داخلی</button>
                            </li>
                            <li className="nav-item " role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane" type="button" role="tab"
                                    aria-controls="profile-tab-pane" aria-selected="false">پرواز خارجی</button>
                            </li>

                        </ul>
                    </div>
                    <div className="row border-bottom">
                    <div class="form-check bg-light opacity-75">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                یکطرفه
                            </label>
                        </div>
                        <div className="form-check bg-light opacity-75">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label className="form-check-label" for="flexRadioDefault2">
                                رفت و برگشت
                            </label>
                        </div>
                    </div>
                    </div>
</div>


                </div>

        




    );
};

export default HomePage;