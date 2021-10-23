import React, { Fragment } from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import PrimarySearchAppBar from "../components/primaryNavbar";
import FilterBar from "../components/filterBar";

const index = () => {
  return (
    <Fragment>
      <PrimarySearchAppBar />
      <FilterBar />
      <Container></Container>
    </Fragment>
  );
};

export default index;
