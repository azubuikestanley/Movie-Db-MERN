import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const InfoWrapper = styled.div `
    display: flex;
    justify-content: flex-start;
    background-image: url(http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg);
    background-repeat: no-repeat;
    background-size: 450px 1200px;
    background-position: center;
    position: relative;
    margin-top: 10px;
      
        .linear {
                position: absolute;
                opacity: 0.2;
                width: 100vw;
                height: 100vh;
                background: linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%);
                background: -moz-linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%);
                background: -webkit-linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%);
                background: -o-linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%);
                background: -ms-linear-gradient(234.35deg, #5C006B 0%, rgba(44, 181, 190, 0.6) 100%); 
            }

        .card {
            margin-top: 130px;
            width: 50%;
            background: green;
            padding: 10px;
            opacity: 0.6;
            
            button{
                color: white;
                background: purple;
                padding: 10px;
                border: none;

            }

            h3{
                color: white;
                span{
                    color: white;
                }
            }
            h5{
                color: white;
                span{
                    color: white;
                }
            }
            h6{
                color: white;
                span, span p b {
                    color: white;
                }
            }
        }

`;

const Movieinfo = () => {
    return (
        <InfoWrapper>
            <div className="linear"></div>
            <div className="container">
                <div className="d-flex justify-content-end">
                    <div className="card">
                        <h3>Movie Name: <span> Under The Dome</span></h3> 
                        <h5>Genre: <span> Drama</span>,<span> Science Fiction</span></h5> 
                        <h5>Premiere: <span> 2013-06-24</span></h5> 
                        <h5>Rating: <span> 6.5</span></h5> 
                        <h6>Summary: <span><p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p></span></h6>
                        <button>Add to Watchlist</button>
                    </div>
                </div>
            </div>
        </InfoWrapper>
    )
}


export default  Movieinfo;
