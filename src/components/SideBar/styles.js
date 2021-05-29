import styled from "styled-components"

export const SideBar = styled.div`
  position: fixed;
  background-color: #2F2F2F;
  width: 300px;
  height: 100%;
`;

export const PaginationButton = styled.button`
  margin-top: 100px;
  width: 100%;
  height: 50px;
  outline: none;
  background-color: ${(props) => (props.color ? "#009D00" : "#2F2F2F")};
  border: none;
  color: white;
  font-size: 15px;
`;

export const InfinityScrollButton = styled.button`
  width: 100%;
  height: 50px;
  outline: none;
  background-color: ${(props) => (props.color ? "#009D00" : "#2F2F2F")};
  border: none;
  color: white;
  font-size: 15px;
`;