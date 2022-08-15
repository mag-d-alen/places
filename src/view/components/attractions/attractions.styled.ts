import styled from "styled-components";

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
  width: 18rem;
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
export const AttractionTags = styled.div`
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
export const AttractionTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: slategray;
  margin: 0 0.2rem;
`;
