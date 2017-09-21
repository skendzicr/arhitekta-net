import { NgxGalleryAnimation } from 'ngx-gallery';
export const GALLERY_OPTIONS = [
  {
      width: '100%',
      thumbnailsColumns: 4,
      imageSwipe: true,
      previewCloseOnEsc: true,
      previewFullscreen: true,
      previewKeyboardNavigation: true,
      imageAnimation: NgxGalleryAnimation.Slide
  },
  // max-width 800
  {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
  },
  // max-width 400
  {
      breakpoint: 400,
      width: '100%',
      height: '300px',
      preview: false
  }
];
