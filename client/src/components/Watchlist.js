import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchWatchList } from '../redux/actions/watchListActions';
import PropTypes from 'prop-types';



const WatchWrapper = styled.div `
margin-top: 20px;
width: 100%;
    h3{
        color: #EFCEFE;;
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
            background: #61008E;
            color: #EFCEFE;
        }
        tbody{
            background: #EFCEFE;
            color: #61008E;

        }
    }

`;

const Watchlist = ({fetchWatchList, movieLists}) => {

    useEffect(() => {
        fetchWatchList()
        return () => {
            
        };
    }, [])

    return (
        <WatchWrapper>
            <div className="container">
                <h3 className="d-flex justify-content-center">My Watchlist</h3>
                <Table borderless className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Movie Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {movieLists.map((movieList, i) => (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{movieList.name}</td>
                            <td>x</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

                <div className="d-flex jsutify-content-center">
                    
                </div>
            </div>
        </WatchWrapper>
    )
}


Watchlist.propTypes = {
    fetchWatchList: PropTypes.func.isRequired,
    movieLists: PropTypes.array.isRequired
}

const MapDispatchToProps = dispatch => {
    return {
        fetchWatchList: () => dispatch(fetchWatchList())
    }
}

const mapStateToProps = (state) => ({
    movieLists: state.movieLists.movieLists
});

export default connect(mapStateToProps, MapDispatchToProps )( Watchlist);
