import { useState, ChangeEvent } from "react";

export const signinUsecase = () => {
  const [email, setEmail] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");

  const signin = () => {
    console.log("hogehoge");
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return { email, password, handleChangeEmail, handleChangePassword, signin };
};
