import * as React from "react";
import { Link } from "react-router-dom";
import { Affair } from "../models/Events";

export function Header() {
  return (
    <div className="Header">
      <h1>Events</h1>
      <h3>Find Your Next Event!</h3>
      <Link className="Home" to="/eventlist">Home</Link>
      <Link className="BucketList" to="/bucketlist">Bucket List</Link>
    </div>
  );
}
