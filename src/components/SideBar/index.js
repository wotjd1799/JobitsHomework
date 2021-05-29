import * as S from "./styles"
import { Link } from "react-router-dom"

const SideBar = ({ paginationButtonColor, infinityButtonColor }) => {

  return (
    <>
      <S.SideBar>
        <Link to="/">
          <S.PaginationButton color={paginationButtonColor}>
            페이지 네이션
          </S.PaginationButton>
        </Link>
        <Link to="/infinity-scroll">
          <S.InfinityScrollButton color={infinityButtonColor}>
            무한 스크롤
          </S.InfinityScrollButton>
        </Link>
      </S.SideBar>
    </>
  );
};

export default SideBar;