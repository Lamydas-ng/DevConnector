import PropTypes from "prop-types";
import React, {useEffect} from "react";
import { connect } from "react-redux";
import DashboardAction from "./DashboardAction";
import { getCurrentProfile } from "../../redux/actions/profileAction";
import profileReducer from "../../redux/reducers/profileReducer";
import { Link } from "react-router-dom";
export const Dashboard = ({
  getCurrentProfile,
  profileReducer: { profile },
  auth: { user },
}) => {
 
    useEffect(() => {
      getCurrentProfile()
    }, [getCurrentProfile]);

    const successPart = (<>  {""} 
    <DashboardAction></DashboardAction>Exp Edu</>);
    
    const failurePart = (<>{" "} <p>
      You have not yet setup a profile
      </p>
      <Link to='/create-profile' className="btn btn-primary my-1">Create Profile</Link></>
    );
    return (
      <div>
      <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome {user && user.name}
        </p>
        { profile!==null?successPart:failurePart}
       
      </section>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profileReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  profileReducer:state.profileReducer
});

const mapDispatchToProps = {getCurrentProfile};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
