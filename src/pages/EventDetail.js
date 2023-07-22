import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {

  const params = useParams();

  return (
    <div>
      <h1>Event Details</h1>
      <p>Event ID is {params.eventId}</p>
      <p><Link to=".." relative="path">Back</Link></p>
    </div>
  );
};

export default EventDetailPage;
