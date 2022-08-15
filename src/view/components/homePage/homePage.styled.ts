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
  width: 100%;
  padding: 1rem;
  background-color: aliceblue;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 500;
  text-align: center;
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
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;
export const AttractionCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;
  width: 100%;
`;
export const AttractionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 10rem;
  padding: 0.5rem;
  overflow: auto;
  background-color: white;
  border-radius: 0.3rem;
  filter: drop-shadow(0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2));
  :hover {
    filter: drop-shadow(0.3rem 0.3rem 0.2rem rgba(0, 0, 0, 0.5));
  }
`;
export const AttractionName = styled.h2`
  font-size: 1.2rem;
`;
export const AttractionCategoriesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const AttractionCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  padding: 0.3rem;
  background-color: darkgray;
  color: white;
  margin: 0.2rem;
  border-radius: 0.2rem;
  :hover {
    filter: drop-shadow(0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2));
  }
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
export const WeatherContainer = styled.div`
  width: 80%;
`;
export const WeatherRow = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.5rem;
`;
