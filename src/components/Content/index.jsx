import { Container } from "./style";

export function Content({tickets, comp}) {

  return (
    <Container>
      <h2>Bilhetes</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <span className="category">
              {ticket.category}
            </span>
            <div>
              <p>
                {new Intl.DateTimeFormat().format(new Date(ticket.date))}
              </p>
              <p>
                {ticket.time}
              </p>
            </div>
            <span>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(ticket.amount)}
            </span>
            <button type="submit" onClick={() => comp(ticket)}>Comprar</button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
