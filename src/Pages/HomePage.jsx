import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => navigate("/store/"), []);

  return <></>;
};

export default HomePage;
