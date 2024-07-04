import { Linkedin } from '@/public/icons/linkedin';
import { X } from '@/public/icons/x';
import Link from 'next/link';

export function SocialMedia() {
  const LinkedinLink =
    process.env.NEXT_PUBLIC_LINKEDIN || 'https://www.linkedin.com/';
  const TwitterLink = process.env.NEXT_PUBLIC_TWITTER || 'https://www.x.com/';

  return (
    <div className="flex justify-center items-center gap-8 mt-6 ">
      <Link
        href={LinkedinLink}
        className="relative w-[22px] h-[22px] text-secondary-foreground"
      >
        <Linkedin className="fill-muted-foreground h-6 w-auto" />
      </Link>
      <Link
        href={TwitterLink}
        className="relative w-[22px] h-[22px] fill-secondary-foreground"
      >
        <X className="fill-muted-foreground h-6 w-auto" />
      </Link>
    </div>
  );
}
