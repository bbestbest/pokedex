import React, { useMemo } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import UserStatus from "../components/UserStatus";

function PokedexesList(props) {
  useMemo(() => {
    console.log(props);
  });
  return (
    <>
      <UserStatus>PokedexesList</UserStatus>
    </>
  );
}

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(PokedexesList);
