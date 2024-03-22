"use client";

import { useForm } from "react-hook-form";
import { Button } from "@turbocharger/ui";

export default function LoginForm({}) {
  const form = useForm({
    defaultValues: {},
  });
  return (
    <div className="grid gap-4">
      <Button>Login</Button>
    </div>
  );
}
