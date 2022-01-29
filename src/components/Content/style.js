import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  h2 {
    font-size: 2.5rem;
    text-align: center;
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      list-style: none;
      display: grid;
      gap: 0.5rem;
      grid-template-rows: 1fr 1fr 0.5fr 1fr 0.5fr 0.5fr;
      grid-auto-rows: 3rem;
      text-align: center;
      background-color: #ffffff;
      padding: 1rem;
      border: 0;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      margin-left: 1rem;
      width: 200px;
      height: 430px;

      h3 {
        color: var(--text-title);
        font-weight: 600;
        font-size: 1.5rem;
        max-width: 100%;
      }

      p {
        font-weight: 400;
        font-size: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      span {
        color: var(--blue-light);
        font-weight: 500;
        font-size: 1.5rem;

        &.category{
            font-weight: 400;
            color: var(--text);
            font-size: 1.3rem
        }
      }

      button {
        font-size: 1rem;
        color: #ffffff;
        background-color: var(--green);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2.5rem;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
