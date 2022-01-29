import { Container, Content, Form } from "./style";

import LogoImg from '../../assets/logo.png'
export function Header(props) {
  return (
    <Container>
      <Content>
        <div>
          <img src={LogoImg} alt="jetickes" />
          <span>JE tickets Shop</span>
        </div>
       <Form >
        <input type="text" onChange={props.onChange} value={props.busca} placeholder="Pesquisar"/>
            {/* <button type="button" >
                Buscar
            </button> */}
       </Form>
      </Content>
    </Container>
  );
}
