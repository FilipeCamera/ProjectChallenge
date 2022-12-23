import { Details } from './details';

describe('Details Tests', () => {
  it('should be created details', () => {
    const data = {
      title: 'data_test_title',
      description: 'data_test_description',
      details: 'data_test_details',
      tags: ['Back-end'],
    };

    const details = new Details(data);

    expect(details).toBeTruthy();
  });

  it('should return an error when tags is empty', () => {
    const data = {
      title: 'data_test_title',
      description: 'data_test_description',
      details: 'data_test_details',
      tags: [],
    };

    expect(() => {
      new Details(data);
    }).toThrow('Tags do not have the expected values');
  });

  it('should return an error when setting an empty tag', () => {
    const data = {
      title: 'data_test_title',
      description: 'data_test_description',
      details: 'data_test_details',
      tags: ['Back-end'],
    };

    const details = new Details(data);

    expect(() => (details.tags = [])).toThrow(
      'Tags do not have the expected values'
    );
  });

  it('should be verify link is null', () => {
    const data = {
      title: 'data_test_title',
      description: 'data_test_description',
      details: 'data_test_details',
      tags: ['Back-end'],
    };

    const details = new Details(data);

    expect(details.link).toBeNull();
  });

  it('should be verify link is not null', () => {
    const data = {
      title: 'data_test_title',
      description: 'data_test_description',
      details: 'data_test_details',
      tags: ['Front-end'],
      link: 'data_test_link',
    };

    const details = new Details(data);

    expect(details.link).not.toBeNull();
  });
  it('should return an error when the title is longer than 255 characters', () => {
    expect(
      () =>
        new Details({
          title: 'a'.repeat(256),
          description: 'data_test_description',
          details: 'data_test_details',
          tags: ['Front-end'],
        })
    ).toThrow('Title content length error.');
  });
  it('should return an error when the description is longer than 650 characters', () => {
    expect(
      () =>
        new Details({
          title: 'data_test_title',
          description: 'a'.repeat(651),
          details: 'data_test_details',
          tags: ['Front-end'],
        })
    ).toThrow('Description content length error.');
  });
  it('should return an error when the description is longer than 650 characters', () => {
    expect(
      () =>
        new Details({
          title: 'data_test_title',
          description: 'data_test_description',
          details: 'a'.repeat(1025),
          tags: ['Front-end'],
        })
    ).toThrow('Details content length error.');
  });
});
