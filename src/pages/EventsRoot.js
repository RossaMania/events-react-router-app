import { Outlet } from "react-router-dom"
import EventsNavigation from "../components/EventsNavigation.js";

export const EventsRootLayout = () => {
return (
  <div>
    <EventsNavigation />
    <Outlet />
  </div>
)
}