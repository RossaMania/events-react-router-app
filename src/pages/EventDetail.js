import { Link, json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {

  const data = useLoaderData();

  return (
    <div>
      <EventItem event={data.event}/>
      <p><Link to=".." relative="path">Back</Link></p>
    </div>
  );
};

export default EventDetailPage;

export async function loader({request, params}) {
  const id = params.eventId;

// return fetch("http://localhost:8080/events/" + id);

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {

    throw json({ message: "Could not find event details!"}, {status: 500})
  } else {
    return response;
  }

}
