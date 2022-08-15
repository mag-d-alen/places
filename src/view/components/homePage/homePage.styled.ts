import styled from "styled-components";
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 900;
  background-color: #dce6e5;
  opacity: 0.4;
  /* background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #dce6e5 15px
    ),
    repeating-linear-gradient(#9d9da655, #9d9da6); */
`;
export const HeaderFirstLine = styled.p`
  font-size: 2.5rem;
  margin-bottom: 0;
`;
export const SelectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const SearchContainer = styled.div`
  display: flex;
  justify-self: center;
  padding: 1rem;
`;
export const LocationInput = styled.input`
  padding: 1rem;
  flex: 1;
`;
export const SelectDropdown = styled.select`
  flex: 1;
  padding: 1rem;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div<{ disabled?: boolean }>`
  background: ${({ disabled }) => (disabled ? "gray" : "black")};
  margin: 0.3rem;
  display: flex;
  color: white;
  padding: 0.5rem;
  border-radius: 0.3rem;
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: 500;
  :hover {
    background: ${({ disabled }) => (disabled ? "gray" : "darkslategrey")};
  }
`;
