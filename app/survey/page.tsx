'use client';

import {
  PageHero,
  PageHeroHeading,
  PageHeroDescription,
  PageActions,
} from '@/components/page-hero';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function SurveyPage() {
  function handleOnclick() {
    window.open(process.env.NEXT_PUBLIC_SURVEY_URL, '_blank');
  }

  return (
    <PageHero>
      <PageHeroHeading>Finding Boarding Houses Can Be a Pain.</PageHeroHeading>
      <PageHeroDescription>
        Take our 5-minute survey on the challenges you face in finding a place
        to stay.
      </PageHeroDescription>

      <PageActions className="py-32">
        <Button
          variant={'default'}
          className="h-16 text-xl"
          onClick={() => handleOnclick()}
        >
          {'Take the survey'}
          <ArrowRight size={24} className="ml-2" />
        </Button>
      </PageActions>
    </PageHero>
  );
}
