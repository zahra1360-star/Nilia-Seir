import React from 'react';
import homeImg from '../assets/images/home2.png';
import './HomePage.css';

import 'react-datepicker/dist/react-datepicker.css'
import DateReturn from '../components/DateReturn';
import RR from '../components/radioBox';
import DateOneway from '../components/DateOneway';





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
                    <div className="row justify-content-end bg-light opacity-75 border-bottom">
                        <div className="form-check-label m-3 col-md-3">
                            
                            < RR />
                        </div>

                    </div>


                    <div className="row justify-content-end bg-light opacity-75 p-3">

                        <div id="DateReturn"  className="col-4">
                            <DateReturn />
                      
                        
                        </div>
                        <div id="DateOneway" className="col-4">
                          
                            <DateOneway />

                        </div>
                        <div className="col-md-1 p-0">
                            <h6>تاریخ</h6>
                        </div>

                    



                        <div className="form-check col-md-3">
                            <select class="form-select form-select-sm" aria-label="Small select example">
                                <option selected>مقصد</option>
                                <option value="1">تهران</option>
                                <option value="2">مشهد</option>
                                <option value="3">تبریز</option>
                            </select>
                        </div>
                        <div className="col-md-1"><i class="bi bi-arrow-left-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                            </svg></i>
                        </div>
                        <div className="form-check col-md-3">
                            <select class="form-select form-select-sm" aria-label="Small select example">
                                <option selected>مبدا</option>
                                <option value="1">تهران</option>
                                <option value="2">مشهد</option>
                                <option value="3">تبریز</option>
                            </select>
                        </div>

                    </div>

                </div>
            </div>



        </div>






    );
   
};

export default HomePage;