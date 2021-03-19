import React from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

const Leaderboard = (props) => {
  return (
    <div>
      <h1>Leaderboard</h1>
      <ListGroup>
        <ListGroupItem className="justify-content-between">
          John Appleseed <Badge pill>14</Badge>
        </ListGroupItem>
        <ListGroupItem className="justify-content-between">
          Jane Doe <Badge pill>2</Badge>
        </ListGroupItem>
        <ListGroupItem className="justify-content-between">
          Bob Johnson <Badge pill>1</Badge>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Leaderboard;
