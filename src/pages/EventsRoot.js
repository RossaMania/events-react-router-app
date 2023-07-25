import { Outlet } from "react-router-dom"
import EventsNavigation from "../components/EventsNavigation.js";

const EventsRootLayout = () => {
return (
  <div>
    <EventsNavigation />
    <Outlet />
  </div>
)
}

export default EventsRootLayout;