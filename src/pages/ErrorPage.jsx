import Layout from "../components/Layout";
import { useRouteError } from "react-router-dom";
// import "../styles/error.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ErrorPage() {
  const error = useRouteError();
  useEffect(() => {
    document.title = `SportSee | ${error.statusText}`;
  }, [error]);
  return (
    <Layout>
      <div id="ks-error-page">
        <h1 className="ks-status-error">{error.status}</h1>
        <h2 className="ks-message-error">Oups! {error.message}</h2>
        <div className="ks-return">
          <Link to="/" className="ks-return-link">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default ErrorPage;
