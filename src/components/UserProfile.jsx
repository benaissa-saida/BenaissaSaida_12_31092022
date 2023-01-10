import { Link } from "react-router-dom";
import { useBackendApi } from "../services/api/useBackendApi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

function UserProfile({ endpoint, image }) {
  const { data, isLoading } = useBackendApi(endpoint, "userInfos");
  return (
    <Link to={endpoint} title="userProfile" className="Ss-profile-link">
      {!isLoading && data && (
        <div className="Ss-profile-container">
          <h1 className="Ss-host-name">
            {data.firstName} {data.lastName}
          </h1>

          <LazyLoadImage
            className="Ss-profile-picture"
            src={image}
            alt="profile"
            width={144}
            height={144}
            effect="opacity"
          />
        </div>
      )}
    </Link>
  );
}

UserProfile.protoTypes = {
  endpoint: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default UserProfile;
