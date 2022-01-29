import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: space-between;

    img {
      margin-right: 2rem;
      width: 4rem;
      height: 4rem;
    }

    span {
      color: var(--background);
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

`;
export const Form = styled.form`

  input {
    height: 3rem;
    border-radius: 0.25rem;
    padding: 0 2rem;
    border: 0;
    outline: none;
    font-size: 1rem;
    width: 100%;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #ffffff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
