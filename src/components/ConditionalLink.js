import React from "react";
import { Link } from "react-router-dom";

const ConditionalLink = ({ isLink, queryPath, innerComponent }) =>
  isLink ? <Link to={queryPath}>{innerComponent}</Link> : <>{innerComponent}</>;
export default ConditionalLink;
