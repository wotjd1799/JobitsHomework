import * as S from "./styles"

const SideBar = () => {


  return (
    <>
      <S.SideBar>
          <S.Button to="/pagination/1" activeStyle={S.ActiveStyle}>
            페이지 네이션
          </S.Button>
          <S.Button to="/infinity-scroll" activeStyle={S.ActiveStyle}>
            무한 스크롤
          </S.Button>
      </S.SideBar>
    </>
  );
};

export default SideBar;