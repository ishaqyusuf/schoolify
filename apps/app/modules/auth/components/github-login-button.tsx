"use client";

import { useState } from "react";
import { Button, GithubIcon } from "@repo/ui";
import { cn } from "@repo/utils";
import { signIn } from "next-auth/react";

interface GithubLoginButtonProps {
  className?: string;
}

export function GithubLoginButton(props: GithubLoginButtonProps) {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      icon={GithubIcon}
      loading={loading}
      fullWidth
      onClick={() => {
        setLoading(true);
        signIn("github");
      }}
      className={cn("bg-black", props.className)}
    >
      Sign in with Github
    </Button>
  );
}
