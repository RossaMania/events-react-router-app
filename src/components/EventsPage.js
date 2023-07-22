import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e1", title: "Learn React." },
  { id: "e2", title: "Watch 'Barbenheimer' double feature." },
  { id: "e3", title: "Eat oatmeal." },
  { id: "e4", title: "Walk the dogs." },
];

const EventsPage = () => {
  return (
  <div>
  <h1> The Events Page</h1>
  <ul>
  {EVENTS.map((event) => (
    <li key={event.id}>
    <Link to={event.id}>{event.title}</Link>
    </li>
  ))}
  </ul>
  </div>
  )
};

export default EventsPage;
