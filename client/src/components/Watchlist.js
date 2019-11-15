import React from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const WatchWrapper = styled.div `
margin-top: 20px;
width: 100%;
    h3{
        color: purple;
    }

    .table {
        width: 100%;
        height: auto;
        margin: 0;
        border-collapse:separate; 
        border-spacing: 0 7px;
        font-size: 13px
        border-radius: 5px;

        thead{
            background: blue;
        }
        tbody{
            background: red;
        }
    }

`;

const Watchlist = () => {
    return (
        <WatchWrapper>
            <div className="container">
                <h3 className="d-flex justify-content-center">My Watchlist</h3>
                <Table borderless className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Movie Name</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>x</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>x</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>x</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="d-flex jsutify-content-center">
                    <span>1</span> <span> 2</span> <span>3</span>
                </div>
            </div>
        </WatchWrapper>
    )
}

export default Watchlist;
