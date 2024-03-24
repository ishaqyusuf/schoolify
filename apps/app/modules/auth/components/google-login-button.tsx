"use client";

import React from "react";
import { Button, GoogleIcon } from "@repo/ui";
import { cn } from "@repo/utils";
import { signIn } from "next-auth/react";

interface GithubLoginButtonProps {
  className?: string;
}
export const GoogleLoginButton = (props: GithubLoginButtonProps) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <Button
      icon={GoogleIcon}
      loading={loading}
      fullWidth
      onClick={() => {
        setLoading(true);
        signIn("google");
      }}
      className={cn("bg-black", props.className)}
    >
      Sign in with Google
    </Button>
  );
};
