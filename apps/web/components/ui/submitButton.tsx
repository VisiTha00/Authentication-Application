"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }: PropsWithChildren) => {
  const { pending } = useFormStatus();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Button type="submit" aria-disabled={pending} className="w-full mt-2">
      {isClient && pending ? "Submitting..." : children}
    </Button>
  );
};

export default SubmitButton;
