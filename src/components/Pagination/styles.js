import styled from "styled-components"

export const Body = styled.div`
  display: flex;
  margin-left: 300px;
  padding: 120px 150px;
`

export const Box = styled.div`
  width: 100%;
  border: none;
  box-shadow: 1px 1px 5px 1px #bababa;
`

export const Subtitle = styled.div`
  font-size: 20px;
  margin-top: 40px;
`

export const Line = styled.div`
  border: solid 1px black;
  margin-top: 40px;
`

export const Containers = styled.div`
  padding: 0 80px 50px;
  height: 600px;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: grid;
  padding:0 0px;
  grid-template-columns: 12fr 2fr;
  grid-template-rows: 1fr;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  color: #6a6a6a;  
`

export const Header1 = styled.div`
  justify-self: center;
`

export const Header2 = styled.div`
  justify-self: center;
`

export const ScrollBox = styled.div`
  overflow-y: scroll;
  width: 100%;
`

export const Container = styled.div`
  list-style: none;
  width: auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: solid 1px #dfdfdf;

  &:nth-child(2n+1) {
    background: #fafafa;
  }
`

export const Name = styled.li`
  margin-left: 60px;
  font-weight: bold;
`

export const Date = styled.li`
  margin-right: 25px;
`

export const Pagination = styled.div`
  
`