import React from 'react'

import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    display: flex;
    /* height: 10vh; */
    margin-top: 1vh;
    padding: 1vh;
    overflow-x: hidden;
    .searchBox{
        align-self: center;
        display: flex;
        height: 8vh;
        /* flex-basis: 92%; */
        width: 100%;
        background-color: #252830;
        border-radius: 4px;
        padding: 20px;
        img{
            height: 1.2em;
            width: 1.2em;
            align-self: center;
            margin-right: .4em;
        }
       form{
           align-self: center;
            flex-basis:95%;
            input{
                width: 100%;
                margin: 10px;
                background-color: #252830;
                border: none;
                font-size: 20px;
                caret-color: white;
                &::placeholder{
                    font-size: 20px;
                    color:white ;
                    opacity: 0.6;
                    font-weight: 500;
                }
                &:focus{
                    outline: none;
                }

                            }
        }
    }

    .avatar{
        margin-left: 15px;
        margin-right: 15px;
        border-radius: 4px;
        height: 8vh;
    }

    .search_bar_block{
        flex-basis: 92%;
        ul{
            display: flex;
            list-style: none;
            background-color: #252830;
            padding: 10px;
            width: max-content;
            font-size: 15px;
            .ul-image{
                height: 20px;
                width: 20px;
                margin-right: 5px;
            }

            li{
                margin-left: 10px;
                background-color: #1e1f26;
                padding: 10px;
                display: flex;
                transition: ease-in;
                cursor: pointer;
                border: 4px;
                &:hover{
                    background-color: rgba(255,255,255,0.2);
                    color: white;
                }
            }
        }
    }

`;

const SearchBar = () => {

    const [styleSetting, setStyleSettting] = React.useState({
        opacity: 0
    })

    return (
        <Container>
            <div className='search_bar_block'>
                <div className='searchBox'>
                    <img src='./images/search.svg' alt='search icon' />
                    <form>
                        <input type='text' placeholder='Search CodePen...' onFocus={()=> setStyleSettting({...styleSetting, opacity:1}) }/>
                    </form>
                </div>
                <ul style={{opacity:styleSetting.opacity}}>
                    <li><img src='./images/profile.svg' alt='profile-icon' className='ul-image'/><span>Your Work</span></li>
                    <li><img src='./images/pen.svg' alt='profile-icon' className='ul-image'/><span>Pens</span></li>
                    <li><img src='./images/projects.svg' alt='profile-icon' className='ul-image'/><span>Projects</span></li>
                    <li><img src='./images/collections.svg' alt='profile-icon' className='ul-image'/><span>Collections</span></li>
                </ul>
            </div>
            <img src='https://gravatar.com/avatar/d4a24ba930a0a2fddae39322253cb10d?d=https%3A%2F%2Fassets.codepen.io%2Finternal%2Favatars%2Fusers%2Fdefault.png&fit=crop&format=auto&height=80&version=0&width=80' alt='profile icon' className='avatar'/>
        </Container>
    )
}

export default SearchBar
