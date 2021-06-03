import styled from "styled-components"
import { NavLink } from 'react-router-dom'

export const SideBar = styled.div`
  display: inline-block;
  position: fixed;
  flex-direction: column;
  background-color: #2F2F2F;
  width: 300px;
  height: 100%;
  padding-top: 150px;
`;

export const Button = styled(NavLink)`
  width: 100%;
  color: white;
  font-size: 15px;
  text-decoration: none;
  padding: 18px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ActiveStyle = {
  background: "#009D00"
}