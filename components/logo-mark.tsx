import Image from "next/image";

type LogoMarkProps = {
  className?: string;
  priority?: boolean;
};

// Renders the reusable transparent monogram logo generated from the hand-drawn source images.
export function LogoMark({ className, priority = false }: LogoMarkProps) {
  return (
    <Image
      className={className}
      src="/images/zoi-pantou-logo.png"
      alt=""
      width={512}
      height={503}
      priority={priority}
      unoptimized
    />
  );
}
