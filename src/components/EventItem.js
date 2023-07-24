import { Link, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {

  const submit = useSubmit();

  function startDelete() {

    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, {method: "delete" })
      console.log("Event deleted!");
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDelete}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
