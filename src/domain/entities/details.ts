import { Replace } from '@helpers/replace';

interface DetailsProps {
  title: string;
  description: string;
  details: string;
  tags: Array<string>;
  link: string | null;
}

export class Details {
  private data: DetailsProps;

  constructor(data: Replace<DetailsProps, { link?: string }>) {
    if (data.tags.length === 0) throw new Error('Tags not found.');

    this.data = {
      ...data,
      link: data.link ?? null,
    };
  }

  public set title(title: string) {
    this.data.title = title;
  }

  public get title() {
    return this.data.title;
  }

  public set description(description: string) {
    this.data.description = description;
  }

  public get description() {
    return this.data.description;
  }

  public set details(details: string) {
    this.data.details = details;
  }

  public get details() {
    return this.data.details;
  }

  public set tags(tags: Array<string>) {
    if (tags.length === 0) throw new Error('Tags not found.');

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