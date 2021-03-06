import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const CreateTimer = (props) => {
  return (
    <div>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();

          // // we include "false" here to ask SWR not to revalidate the cache with
          // // the feed returned from the server. we'll remove this after the next section
          // mutate(
          //   "/api/feed",
          //   [
          //     { text: input, author: { username: "Temp Temp" } },
          //     ...feed,
          //   ],
          //   false
          // );

          // setInput("");
        }}
      >
        <FormGroup>
          <h2>Welcome to Focus Feed</h2>
          <p>
            Focus Feed is a social{" "}
            <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
              pomodoro timer
            </a>{" "}
            created to encourage people to get things done.
          </p>
          {/* <Label for="exampleText">Text Area</Label> */}
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Duration</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1 minute</option>
            <option>2 minutes</option>
            <option>3 minutes</option>
            <option>4 minutes</option>
            <option>5 minutes</option>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default CreateTimer;
