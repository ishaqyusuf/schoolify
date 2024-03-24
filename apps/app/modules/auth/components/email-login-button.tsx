"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button, MailIcon } from "@repo/ui";
import { cn } from "@repo/utils";
import { signIn } from "next-auth/react";

interface EmailLoginButtonProps {
  className?: string;
}

export function EmailLoginButton(props: EmailLoginButtonProps) {
  const [loading, setLoading] = useState(false);

  // Get error message added by next/auth in URL.
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  useEffect(() => {
    // const errorMessage = Array.isArray(error) ? error.pop() : error
    // errorMessage && toast.error(errorMessage)
  }, [error]);

  return (
    <Button
      icon={MailIcon}
      loading={loading}
      fullWidth
      onClick={() => {
        setLoading(true);
        signIn("email");
      }}
      variant="outlined"
      color="neutral"
      className={cn("", props.className)}
    >
      Sign in with Email
    </Button>
  );
}
