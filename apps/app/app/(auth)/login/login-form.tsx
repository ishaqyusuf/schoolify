"use client";

import { Button } from "@repo/ui";
import { useForm } from "react-hook-form";

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
