import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage() {

   const error = useRouteError;
   console.error(error);

   let title = "An error occurred!";
   let message = "Something went wrong!";

   if (error.status === 500) {
    message = error.data.message;
   }

   if (error.status === 404) {
    title = "Uh oh! Not found!"
    message = "Could not find the page!"
   }

  return (
    <div>
      <MainNavigation />
      <main>
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </main>
    </div>
  );
}
