import React, { useState, useEffect } from 'react';
import BlogList from '../blog/blogList';
import BlogUnit from '../cardUI/blogUnit';
import Tab  from '../tab';

function blog() {
    useEffect(() => {
        $('.post-wrapper').slick({
            centerMode: true,
            centerPadding: '60px',
            dots:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            settings : {
            arrows: true,
            }
          });
    })
    const eventKey1 = "following";
    const eventKey2 = "foryou";
    const likeCate1 = "Following";
    const likeCate2 = "For you";
        return (
            <div className="container-fluid">
               <div className="row">
                    <div className="col-12">
                        <div className="section">
                            <div className="my-following-section">
                            <div className="post-slider">
                            <div className="post-wrapper">
                                    <div className="post"><BlogUnit /></div>
                                    <div className="post"><BlogUnit /></div>
                                    <div className="post"><BlogUnit /></div>
                                    <div className="post"><BlogUnit /></div>
                                    <div className="post"><BlogUnit /></div>
                            </div>
                            <div id="pager">
                                <div className="prev">
                                </div>
                                <div className="next">
                                </div>
                            </div>
                            </div>
                            </div>
                            <div className="following-post">
                            <Tab 
                                eventKey1={eventKey1}
                                eventKey2={eventKey2}
                                tapTitle1={likeCate1}
                                tapTitle2={likeCate2}
                                contents1={<BlogList />}
                                contents2={<BlogList />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
                            
export default blog;