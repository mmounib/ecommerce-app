import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <div className="h-screen w-screen flex items-center justify-center m-auto text-4xl text-black">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-6xl">
        <i>{error.status}</i>
      </p>
    </div>
  );
};


export default ErrorPage;
