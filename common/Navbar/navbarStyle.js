import styled from "styled-components";

export const NavStyles = styled.div`
  background-color: #ecf4ff;
  padding: 1rem 0;
  /* width: 100vw !important; */

  .container {
    nav {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperTet = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: 0 0.5rem;
`;

export const WrapperLanguage = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.3rem;
  cursor: pointer;
`;

export const Select = styled.select`
  border: none;
  padding: 0.3rem;
  outline: none;
  background-color: transparent;
`;

export const Option = styled.option``;
