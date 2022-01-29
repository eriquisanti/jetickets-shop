import { Container, Content } from "./style";

import QrImag from "../../assets/qr.png";

export function Proof({ticket, voltar}) {
    console.log(voltar);
  return (
    <Container>
        <button type="submit" onClick={() => voltar(false)}>Voltar</button>
      <Content>
        <ul>
          <h2>Comprovante</h2>
          <li>
            <span>Filme</span>
            <span>{ticket.title}</span>
          </li>
          <li>
            <span>Valor</span>
            <span>{new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(ticket.amount)}</span>
          </li>

          <li>
            <span>Data</span>
            <span>{new Intl.DateTimeFormat().format(new Date(ticket.date))}</span>
          </li>
          <li>
            <span>Horário</span>
            <span>{ticket.time}</span>
          </li>
          <textarea
            rows="10"
            value="Observações:"
            style={{ resize: "none" }}
          ></textarea>
          <img src={QrImag} alt="qrcode"/>
        </ul>
      </Content>
    </Container>
  );
}
