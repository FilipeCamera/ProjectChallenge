import { Replace } from '@helpers/replace';

interface DetailsProps {
  title: string;
  description: string;
  details: string;
  tags: Array<string>;
  link: string | null;
}

enum Tags {
  back = 'Back-end',
  front = 'Front-end',
  ux = 'UX/UI Desing',
}

export class Details {
  private data: DetailsProps;

  constructor(data: Replace<DetailsProps, { link?: string }>) {
    if (!this.verifyTitleContentLength(data.title))
      throw new Error('Title content length error.');

    if (!this.verifyDescriptionContentLength(data.description))
      throw new Error('Description content length error.');

    if (!this.verifyDetailsContentLength(data.details))
      throw new Error('Details content length error.');

    if (!this.verifyTagsContainValues(data.tags))
      throw new Error('Tags do not have the expected values');

    this.data = {
      ...data,
      link: data.link ?? null,
    };
  }

  private verifyTitleContentLength(value: string): boolean {
    return value.length > 12 && value.length <= 255;
  }

  private verifyDescriptionContentLength(value: string): boolean {
    return value.length > 8 && value.length <= 650;
  }

  private verifyDetailsContentLength(value: string): boolean {
    return value.length > 8 && value.length <= 1024;
  }
  private verifyTagsContainValues(value: Array<string>): boolean {
    return (
      value.includes(Tags.back) ||
      value.includes(Tags.front) ||
      value.includes(Tags.ux)
    );
  }

  public set title(title: string) {
    const verified = this.verifyTitleContentLength(title);

    if (!verified) throw new Error('Title content length error.');

    this.data.title = title;
  }

  public get title() {
    return this.data.title;
  }

  public set description(description: string) {
    const verified = this.verifyDescriptionContentLength(description);

    if (!verified) throw new Error('Description content length error.');

    this.data.description = description;
  }

  public get description() {
    return this.data.description;
  }

  public set details(details: string) {
    const verified = this.verifyDetailsContentLength(details);

    if (!verified) throw new Error('Details content length error.');

    this.data.details = details;
  }

  public get details() {
    return this.data.details;
  }

  public set tags(tags: Array<string>) {
    if (!this.verifyTagsContainValues(tags))
      throw new Error('Tags do not have the expected values');

    this.data.tags = tags;
  }

  public get tags() {
    return this.data.tags;
  }

  public set link(links: string) {
    this.data.link = links;
  }

  public get link() {
    return this.data.link;
  }
}
