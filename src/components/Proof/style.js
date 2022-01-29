import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #ffffff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    margin-top: 2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  
`;

export const Content = styled.div`
  margin-top: 20px;
  padding: 2.5rem 1rem;
  border: 1px solid var(--text-title);
  background-color: #ffffff;
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 10px;
    font-size: 2rem;
  }
  ul {
    text-align: center;
    li {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--text-title);
      line-height: 2rem;
      padding: 0 1rem;
    }

    textarea {
      outline: none;
      margin-top: 10px;
      margin-bottom: 10px;
      width: 100%;
      padding: 1rem 0 0 1rem;
    }
  }
`;
