import React from 'react'
import styled from 'styled-components';

const Header = styled.header`
    width: 188px;
    height: 100vh;
    display: block;
    /* padding: 20px; */
    color: white;
    .logo{
        padding: 20px;
        margin: 2vh auto;
    }
    p{
        color: #aaaebc;
        padding: 3px 20px;
        &::after{
            display: block;
            content: '';
            background: linear-gradient(70deg,#0ebeff,#ffdd40,#ae63e4,#47cf73);
            height: 3px;
            width: 100%;
        }
    }

    ul{
        list-style:none;
        li{
            cursor: pointer;
            padding: 3px 20px;
            &:hover{
            background-color: black;
        }
        }
    }
    .list-1{
        li{
            display: flex;
            img{
                margin-right: 5px;
            }
        }
    }
    h5{
        letter-spacing: .1em;
        padding: 3px 20px;
    }

    .line-1{
        &::after{
            display: block;
            content: '';
            margin: 3px 20px;
            background: #83c2f1;
            height: 3px;
        }
    }
    .line-2{
        &::after{
            display: block;
            content: '';
            margin: 3px 20px;
            background: #47cf73;
            height: 3px;
        }
    }.line-3{
        &::after{
            display: block;
            content: '';
            margin: 3px 20px;
            background: #dbaa26;
            height: 3px;
        }
    }

`;


const Sidebar = () => {
    return (
        <Header>
            <img src='./images/logo.svg' alt='logo' className='logo'/>
            <p>Create</p>
            <ul className='create list-1'>
                <li><img src='./images/pen.svg' alt='profile-icon' className='ul-image'/><span>Pens</span></li>
                <li><img src='./images/projects.svg' alt='profile-icon' className='ul-image'/><span>Projects</span></li>
                <li><img src='./images/collections.svg' alt='profile-icon' className='ul-image'/><span>Collections</span></li>
            </ul>
            <span className='line-1'></span>
            <ul className='create list-2'>
                <li>Your Work</li>
                <li>Activity</li>
                <li>Assets</li>
                <li>Pinned Items</li>
            </ul>
            <span className='line-2'></span>
            <ul className='create list-3'>
                <li>Following</li>
                <li>Trending</li>
                <li>Challenges</li>
                <li>spark</li>
            </ul>
            <span className='line-3'></span>
            <h5>CodePen <img src='./images/PRO.svg' alt=' pro subscription'/></h5>
        </Header>
    )
}

export default Sidebar;
