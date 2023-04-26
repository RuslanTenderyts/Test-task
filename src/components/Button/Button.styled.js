import styled from "styled-components";

export const Btn = styled.button`
    display: inline-flex;
    padding: 8px 12px;
    border-radius: 4px;
    border: none;
    font: inherit;
    cursor: pointer;
    background-color: ${props => props.isSelected ? '#5736a3' : '#ebd8ff'};
    color: ${props => props.isSelected ? "#fff" : "inherit"};
  }

    &:hover {
    background-color: #5736a3;
    color: #fff;
  }
    &:active {
    background-color: #1565c0;
  }
`