import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  aligm-items: flext-start;
`;

export const WrapperStatusCounter = styled.div`
  display: flex;
  justify-content: space-between;
  
  div {
      text-align: center;
      margin-right: 16px;
  }
`;

export const WrapperUser = styled.div`
  display: flex;
  aligm-items: flext-start;
  margin-top: 10px;

  a {
    color: blue;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const WrapperUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  aligm-items: flext-start;
  justify-content: space-between;
  height: 200px;
  margin-left: 8px;
  
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 10px;
`;
