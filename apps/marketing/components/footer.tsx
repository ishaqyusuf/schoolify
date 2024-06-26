import React from "react";
import {
  Button,
  Separator,
  CodepenIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "@repo/ui";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config";

const links = siteConfig.footer.socialLinks;
const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  mail: MailIcon,
  instagram: InstagramIcon,
  codepen: CodepenIcon,
};

type IconKey = "github" | "linkedin" | "twitter" | "mail" | "instagram" | "codepen";

export const Footer = async () => {
  return (
    <div className="container pb-8">
      <Separator className="mb-4" />
      <div>
        <p>Copyright © 2023 turbocharger Inc. All rights reserved.</p>
        <div className="mt-4 flex justify-end ">
          <div className="flex h-5 items-center space-x-2">
            <div className="flex space-x-1">
              {Object.keys(links).map((key) => {
                const link = links[key as IconKey];
                if (link) {
                  const Icon = icons[key as IconKey];
                  return (
                    <React.Fragment key={key}>
                      <a href={link} target="_blank">
                        <Button size="icon" variant="text">
                          <Icon />
                        </Button>
                      </a>
                      <Separator orientation="vertical" />
                    </React.Fragment>
                  );
                }
              })}
            </div>
            <Separator orientation="vertical" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
