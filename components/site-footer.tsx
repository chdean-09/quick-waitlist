'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SocialMedia } from '@/components/social-media';

export function SiteFooter() {
  return (
    <div className="w-full container pb-16">
      <div className="text-muted-foreground text-md text-center">
        we care about your data in our{' '}
        <Dialog>
          <DialogTrigger className="underline transition-all duration-200 hover:text-accent-foreground h-fit">
            privacy policy
          </DialogTrigger>
          <DialogContent className="flex flex-col items-center justify-center py-8">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-center">
                Privacy Policy
              </DialogTitle>
              <DialogDescription className="text-center">
                {process.env.NEXT_PUBLIC_PRIVACY ||
                  'Add Privacy Policy From ENV'}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex min-w-full">
              <DialogTrigger asChild className="flex min-w-full">
                <Button type="submit">Back</Button>
              </DialogTrigger>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <SocialMedia />
    </div>
  );
}
