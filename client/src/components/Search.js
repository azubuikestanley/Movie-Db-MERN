import React, {useState}  from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchWrapper = styled.div`
margin-top: -30px;

    .container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

const Search = () => {
    const [value, setValue] = useState({
        search: '',
        results: ''
    });

    const handleChange = e => {
        setValue({ 
            ...value, 
            [e.target.name]: e.target.value 
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let url = `http://api.tvmaze.com/singlesearch/shows?q=${value.search}`;
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setValue({...value, results: response});
            })
            .catch(err => console.log(err));

            console.log(value.results)
    }

    if (value.results !== '') {
        return <Redirect to={{
            pathname: `/movieinfo/${value.search}`,
            state: value.results
        }} />
    } 

    return (
        <SearchWrapper>
            <form onSubmit={onSubmit}>
                <InputGroup className="container">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="material-icons">search</i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                        placeholder="Search movies" 
                        name="search"
                        value={value.search}
                        onChange={handleChange}
                    />
                </InputGroup>
            </form>
           
        </SearchWrapper>
    )
}

export default Search;
