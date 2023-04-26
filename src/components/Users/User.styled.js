import styled from "styled-components";
import  bgrCart from "components/img/bgrCart.png"
import logo from "components/img/Logo.png"

export const Logo = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 76px;
    height: 22px;
    background-image: url(${logo});
`;

export const Container = styled.div`
    width: 308px;
    height: 168px;
    margin: 28px auto 18px;
    background-image: url(${bgrCart});
`
export const Line = styled.p`
width: 380px;
height: 8px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`;

export const ContaineAvatar = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
left: 150px;
top: 178px;
width: 80px;
height: 80px;
background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
border-radius: 50%;

`
export const Avatar = styled.img`
width: 62px;
height: 62px;
border-radius: 85.9232px;
`
export const TextBox = styled.div`
margin: 62px auto 26px;
text-align: center;
`

export const P = styled.p`
margin-top: 16px;
font-weight: 500;
font-size: 20px;
line-height: 1.2;
text-transform: uppercase;
color: #EBD8FF;
`
export const Btn = styled.button`
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding: 14px 28px;
width: 196px;
height: 50px;
overflow: hidden;
background: ${props => props.isSelected ? "#5CD3A8" :  "#EBD8FF" };
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
margin: 0 auto;
font-weight: 600;
font-size: 18px;
line-height: 1.2;
text-transform: uppercase;
color: #373737;
border: none;
    
    &:hover {
        background: #ebd8ffc2;
    }
    &:active {
        box-shadow: inset 0 0 10px #4b2a99;
        color: #EBD8FF;
    }
`