import { Link, json, redirect, useRouteLoaderData, } from "react-router-dom";
import EventItem from "../components/EventItem.js";

const EventDetailPage = () => {

  const data = useRouteLoaderData("event-detail");

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

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, { method: request.method, })

  if (!response.ok) {
    throw json({ message: "Could not delete event!" }, { status: 500 });
  } else {
    return redirect("/events");
  }

}
