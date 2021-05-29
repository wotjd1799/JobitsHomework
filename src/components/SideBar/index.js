import * as S from "./styles"
import { NavLink } from "react-router-dom"

export default function SideBar(){

  return(
    <>
      <S.SideBar >
        <NavLink to="/" activeClassName="color">
          <S.PaginationButton>페이지 네이션</S.PaginationButton>
        </NavLink>
        <NavLink to="/infinity-scroll" activeClassName="color">
          <S.InfinityScrollButton>무한 스크롤</S.InfinityScrollButton>
        </NavLink>
      </S.SideBar>
    </>
  )
}