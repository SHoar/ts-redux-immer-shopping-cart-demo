import React, { useState } from "react";
import { RootState } from "../../../redux/index";
import { login } from "../../../redux/modules/users";
import { connect } from "react-redux";
import { Button, Container, TextField } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state: RootState) => ({
  username: state.user.username
});

const mapDispatchToProps = { login };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UnconnectedLogin: React.FC<Props> = ({ login, username }) => {
  const [inputName, setInputName] = useState("");

  const attemptLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    login(inputName);
  };

  if (username !== null) {
    return <Redirect to="/shop" />;
  }

  return (
    <Container>
      <h2>Login</h2>
      {/* <Form> */}
      <TextField
        placeholder={"Username"}
        value={inputName}
        onChange={e => setInputName(e.target.value)}
      >
        Username
      </TextField>

      <Button onClick={attemptLogin}>Login</Button>
      {/* </Form> */}
    </Container>
  );
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedLogin);
