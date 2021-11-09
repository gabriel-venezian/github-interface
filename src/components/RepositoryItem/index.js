import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName, description }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperLink 
        href={linkToRepo} 
        target="_blank" 
        rel="noreferrer">
        {fullName}
      </S.WrapperLink>
      <p>{description}</p>
    </S.Wrapper>
  );
};

export default RepositoryItem;
