import React, {useState}  from 'react';
import styled from 'styled-components';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const SearchWrapper = styled.div`
margin-top: -30px;

    .container {
        width: 40%;
        display: flex;
        justify-content: center;
    }
`;

const Search = () => {
    const [value, setValue] = useState({
        search: '',
    });

    const handleChange = e => {
        setValue({ 
            ...value, 

            [e.target.name]: e.target.value 
        });
    };


    return (
        <SearchWrapper>
            <InputGroup className="container">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className="material-icons">search</i>
                    </InputGroupText>
                </InputGroupAddon>
                <Input 
                    placeholder="Search movies" 
                    id="search"
                    value={value.search}
                    onChange={handleChange}
                />
            </InputGroup>
        </SearchWrapper>
    )
}

export default Search;
