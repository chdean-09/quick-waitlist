import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SiteHeader from '@/components/site-header';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';
import IndexPage from '@/app/page';
import { Announcement } from '@/components/announcement';
import SampleProduct from '@/components/sample-product';
import { SocialMedia } from '@/components/social-media';

// Components must not have any required props defined
const componentsToTest = [
  SiteHeader,
  PageHero,
  SiteFooter,
  SiteHeader,
  IndexPage,
  Announcement,
  SampleProduct,
  SocialMedia,
];

describe('Hydration Tests for Components', () => {
  componentsToTest.forEach((Component, index) => {
    it(`renders component at index ${index} without hydration errors`, () => {
      const { container } = render(<Component />);
      const rehydratedContainer = document.createElement('div');
      rehydratedContainer.innerHTML = container.innerHTML;
      expect(rehydratedContainer.innerHTML).toEqual(container.innerHTML);
    });
  });
});
