import React from 'react'

import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    display: flex;
    height: 10vh;

    div{
        display: flex;
        height: 10vh;
        flex-basis: 92%;
        width: 100%;
        img{
            height: 1em;
            width: 1em;
            align-self: center;
            margin-right: 1em;
        }
       form{
           align-self: center;
            flex-basis:95%;
            input{
                width: 100%;
                /* border: none; */
            }
        }
    }
`;

const SearchBar = () => {
    return (
        <Container>
            <div>
                <img src='./images/search.svg' alt='search icon' />
                <form>
                    <input type='text' placeholder='Search CodePen...' />
                </form>
            </div>
            <img src='./images/profile.svg' alt='profile icon' />
        </Container>
    )
}

export default SearchBar
