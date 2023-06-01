import styled from "styled-components";
import { Link as LinkBack } from "react-router-dom";

export const Link = styled(LinkBack)`
    display: inline-flex;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 4px;
    border: none;
    font: inherit;
    cursor: pointer;
    background-color: #ebd8ff;
    color: black;
  }

    &:hover {
    background-color: #5736a3;
    color: #fff;
  }
    &:active {
    background-color: #1565c0;
  }
`