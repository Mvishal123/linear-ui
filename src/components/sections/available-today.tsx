import React from "react";
import Container from "../container";
import Button from "../button";

const AvailableToday = () => {
  return (
    <Container className="flex flex-col items-center gap-[3.6rem]">
      <img
        src="/linear-logo.png"
        alt="linear logo"
        className="max-w-[12.8rem]"
      />
      <h2 className="text-5xl md:text-8xl text-center">
        Built for the future. <br /> Available today.
      </h2>
      <div className="mt-16 flex gap-4">
        <Button variant={"primary"} size="large">
          Sign up for free
        </Button>
        <Button variant={"secondary"} size="large">
          Sign up for free
        </Button>
      </div>
    </Container>
  );
};

export default AvailableToday;
