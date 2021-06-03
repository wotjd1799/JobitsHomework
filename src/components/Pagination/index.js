import * as S from "./styles"
import React, { useState, useEffect } from 'react';
import { request } from "./../../utils/axios/axios"

const Pagination = (props) => {
  const [Data, setData] = useState([]);
  const [PageNum, setPageNum] = useState(1);
  const [MaxPageNum, setMaxPageNum] = useState(1);
  const {id} = props.match.params;

  useEffect(() => {
    request("GET",`/page?page=${id}`)
    .then((res) => {
      setMaxPageNum(res.maxPage);
      setData(res.data);  
    });
  }, [PageNum]);
  

  useEffect(() => {
    sessionStorage.setItem('id',id);
    console.log(id)
  }, [props.match.params]);

  return (
    <>
      <S.Body>
        <S.Box>
          <S.Containers>
            <S.Subtitle>채용 의뢰</S.Subtitle>
            <S.Line></S.Line>
            <S.Header>
              <S.Header1>기업 명</S.Header1>
              <S.Header2>등록일</S.Header2>
            </S.Header>
            <S.ScrollBox>
              {Data.map((v,i) => {
                return(
                  <S.Container key={i}>
                    <S.Name>{v.name}</S.Name>
                    <S.Date>{v.createdAt}</S.Date>
                  </S.Container>
                )
              })}
            </S.ScrollBox>
          </S.Containers>
        </S.Box>
        <S.Pagination>
          <></>
        </S.Pagination>
      </S.Body>
    </>
  );
}

export default Pagination;