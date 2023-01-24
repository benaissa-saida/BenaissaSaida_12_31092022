import Layout from "../components/Layout";
import { useRouteError } from "react-router-dom";
import "../styles/error.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ErrorPage() {
  const error = useRouteError();
  useEffect(() => {
    document.title = `SportSee | Error has occurred`;
  }, [error]);
  return (
    <Layout>
      <div id="Ss-error-page">
        <h1 className="Ss-status-error">{error.status ? error.status : 400}</h1>
        <h2 className="Ss-message-error">Oups! Une erreur est survenue</h2>
        <div className="Ss-return">
          <Link to="/" className="Ss-return-link">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default ErrorPage;
