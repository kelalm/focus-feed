import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const CreateTimer = (props) => {
  return (
    <div>
      <Form>
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
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default CreateTimer;
