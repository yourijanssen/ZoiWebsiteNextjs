import type { Language } from "@/lib/site-content";

type SiteShellProps = {
  language: Language;
  children: React.ReactNode;
};

export function SiteShell({ language, children }: SiteShellProps) {
  void language;

  return <>{children}</>;
}
