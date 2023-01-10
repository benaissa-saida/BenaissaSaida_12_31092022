import Layout from "../components/Layout";
import UserProfile from "../components/UserProfile";
import karl from "../assets/profileIcon/charlie-green-3JmfENcL24M-unsplash.jpg";
import Cecilia from "../assets/profileIcon/joshua-rondeau-ZnHRNtwXg6Q-unsplash.jpg";
import "../styles/home.css";

function Home() {
  return (
    <Layout>
      <div className="Ss-profiles-container">
        <div className="Ss-profile">
          <UserProfile endpoint={"user/12"} image={karl} />
        </div>
        <div className="Ss-profile">
          <UserProfile endpoint={"user/18"} image={Cecilia} />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
