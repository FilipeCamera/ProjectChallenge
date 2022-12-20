import { Replace } from '@helpers/replace';

interface DetailsProps {
  title: string;
  description: string;
  details: string;
  tags: Array<string>;
  links: string | null;
}

export class Details {
  private data: DetailsProps;

  constructor(data: Replace<DetailsProps, { links?: string }>) {
    if (data.tags.length === 0) throw new Error('Tags not found.');

    this.data = {
      ...data,
      links: data.links ?? null,
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
    if (tags.length === 0) throw new Error('tags not found.');

    this.data.tags = tags;
  }

  public get tags() {
    return this.data.tags;
  }

  public set links(links: string) {
    this.data.links = links ?? null;
  }

  public get links() {
    return this.data.links;
  }
}
