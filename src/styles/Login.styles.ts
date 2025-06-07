// src/styles/Login.styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f7fa;
`;

export const Card = styled.div`
  width: 90%;
  max-width: 1000px;
  height: 600px;
  display: flex;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  overflow: hidden;
  background-color: #ffffff;
`;

export const LeftSection = styled.div`
  flex: 1;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 32px;
    margin: 20px 0 10px;
    color: #333;
  }

  p {
    font-size: 16px;
    margin-bottom: 30px;
    color: #666;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  background-color: #edf3fb;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    max-width: 350px;
  }
`;
