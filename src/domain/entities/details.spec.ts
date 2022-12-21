import { Details } from './details';

describe('Details Tests', () => {
  it('should be created details', () => {
    const data = {
      title: 'data_test_title',
      description: 'data_test_description',
      details: 'data_test_details',
      tags: ['back-end'],
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
    }).toThrowError('Tags not found.');
  });

  it('should return an error when setting an empty tag', () => {
    const data = {
      title: 'data_test_title',
      description: 'data_test_description',
      details: 'data_test_details',
      tags: [''],
    };

    const details = new Details(data);

    expect(() => (details.tags = [])).toThrowError('Tags not found');
  });

  it('should be verify link is null', () => {
    const data = {
      title: 'data_test_title',
      description: 'data_test_description',
      details: 'data_test_details',
      tags: [''],
    };

    const details = new Details(data);

    expect(details.link).toBeNull();
  });

  it('should be verify link is not null', () => {
    const data = {
      title: 'data_test_title',
      description: 'data_test_description',
      details: 'data_test_details',
      tags: [''],
      link: 'data_test_link',
    };

    const details = new Details(data);

    expect(details.link).not.toBeNull();
  });
});
