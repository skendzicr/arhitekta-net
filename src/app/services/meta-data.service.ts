import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {
  SITE_NAME,
  DEFAULT_META_DESCRIPTION,
  DEFAULT_META_IMAGE,
  DEFAULT_META_TITLE,
  DEFAULT_META_URL
} from '../shared/constants';

@Injectable()
export class MetaDataService {
  constructor(private meta: Meta, private titleService: Title) {}

  createMetaData(
    description = DEFAULT_META_DESCRIPTION,
    title = DEFAULT_META_TITLE,
    url = DEFAULT_META_URL,
    image = DEFAULT_META_IMAGE
  ) {
    title = `${title} ${SITE_NAME}`;
    this.titleService.setTitle(title);
    this.meta.updateTag(
      { property: 'description', content: description },
      'property=\'description\''
    );
    this.meta.updateTag(
      { property: 'og:description', content: description },
      'property=\'og:description\''
    );
    this.meta.updateTag(
      { property: 'og:title', content: title },
      'property=\'og:title\''
    );
    this.meta.updateTag(
      { property: 'og:url', content: url },
      'property=\'og:url\''
    );
    this.meta.updateTag(
      { property: 'og:image', content: image },
      'property=\'og:image\''
    );
    this.meta.updateTag(
      { property: 'og:type', content: 'website' },
      'property=\'og:type\''
    );
    this.meta.updateTag(
      { name: 'twitter:card', content: 'summary' },
      'name=\'twitter:card\''
    );
  }
}
