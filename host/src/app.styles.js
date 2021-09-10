import styled from 'styled-components';

export const App = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

export const Sidebar = styled.nav`
  margin: 0;
  padding: 0;
  color: white;
  background-color: rgb(5, 178, 117);
  width: 300px;
  height: 100vh;
  font-size: 1.5rem;
  
  h5 {
    margin: 1rem 1rem 3rem 1rem;
  }
  
  ul {
    list-style: none;
    
    li {
      margin: 1rem;
    }
  }
  a, a:visited {
    color: white;
    text-decoration: none;
  }
`;

export const Content = styled.div`
  height: 100%;
  flex: 1;
  overflow-y: auto;
`;
