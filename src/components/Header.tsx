import * as React from "react";
import { Link } from "react-router-dom";
import { Affair } from "../models/Events";

export function Header() {
  return (
    <div className="Header">
      <h1>Events</h1>
      <Link to="/eventlist">Home</Link>
      <Link to="/bucketlist">Bucket List</Link>
    </div>
  );
}
