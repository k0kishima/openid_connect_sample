import React from "react";
import { Button } from '@material-ui/core';

type Props = {
  handleAuthRedirection: () => void;
};

export const AuthPage: React.VFC<Props> = ({ handleAuthRedirection }) => {
  return (
    <Button variant="contained" onClick={handleAuthRedirection}>Get Auth Token</Button>
  )
}
