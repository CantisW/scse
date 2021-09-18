import styled from "styled-components";

const Button = styled.button<{width?: string | undefined, height?: string | undefined, hoverColor?: string | undefined, margin?: string | undefined}>`
    color:#fff;
    margin: ${props => (props.margin !== undefined ? props.margin : '0px')};
    width: ${props => (props.width !== undefined ? props.width : '30%')};
    height: ${props => (props.height !== undefined ? props.height : '30%')};
    border-style:solid;
    background-color: rgba(0,0,0,0);
    cursor:pointer;
    transition: background-color 100ms;
    :hover {
        background-color: ${props => (props.hoverColor !== undefined ? props.hoverColor : '')};
    }
`

export default Button;