import axios from "axios"
import SideBar from "./../SideBar"
import * as S from "./styles"
import React, { useState, useEffect } from 'react';
import { request } from "./../../utils/axios/axios"

const Pagination = () => {

  const [Data, setData] = useState([]);
  const [PageNum, setPageNum] = useState(1);
  const [MaxPageNum, setMaxPageNum] = useState(1);

  useEffect(() => {
    request("GET",`/page?page=${PageNum}`)
    .then((res) => {
      setMaxPageNum(res.maxPage);
      setData(res.data);
    })
  },[PageNum]);
  useEffect(()=>{
    console.log(Data)
  },[Data])

  return (
    <>
      <SideBar paginationButtonColor={true}/>
      {Data.map((v,i) => {
          return(
            <S.Container key={i}>{v.name}</S.Container>
          )
      })}
    </>
  );
}

export default Pagination;