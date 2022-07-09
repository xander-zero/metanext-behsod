import styled from "styled-components";

export const ListSort = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const SortItem = styled.li`
  margin: 0 1rem;
  font-size: 13px;
  background-color: ${({ active }) => (active ? "#FF6700" : "")};
  color: ${({ active }) => (active ? "#fff" : "")};
  padding: 0.5rem;
  border-radius: 10px !important;
`;
