import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Main from "../components/Main";

function Dashboard() {
  const { id } = useParams();
  const user = `user/${id}`;

  return (
    <Layout>
      <Main user={user} />
    </Layout>
  );
}

export default Dashboard;
