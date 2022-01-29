import { useEffect, useState } from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Proof } from "./components/Proof";
import { api } from "./services/api";

import { GlobalStyle } from "./style/global";

function App() {
  const [tickets, setTickets] = useState([]);
  const [busca, setBusca] = useState("");
  const [comprar, setComprar] = useState(false);
  const [ticketComprado, setTicketComprado] = useState({});

  function comp(ticket) {
    setTicketComprado(ticket);
    setComprar(true);
  }

  useEffect(() => {
    api.get("/tickets").then((response) => setTickets(response.data.tickets));
  }, [comprar, busca]);

  const ticketsFiltrados = tickets.filter(
    (ticket) =>
      ticket.title.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      {!comprar && (
        <>
          <Header
            onChange={(event) => setBusca(event.target.value)}
            value={busca}
          />
          <Content tickets={ticketsFiltrados} comp={comp} />
        </>
      )}
      {comprar && <Proof ticket={ticketComprado} voltar={setComprar} />}
      <GlobalStyle />
    </>
  );
}

export default App;
