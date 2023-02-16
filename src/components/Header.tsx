import * as React from 'react';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
  return (
    <div className="Header">
      <h1>Events</h1>
      <p id="BucketList">BucketList</p>
    </div>
  );
}
