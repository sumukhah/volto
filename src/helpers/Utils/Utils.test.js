import { difference } from './Utils';

describe('Utils tests', () => {
  describe('difference', () => {
    it('basic test empty', () => {
      expect(difference({}, {})).toEqual({});
    });
    it('basic test one flat key', () => {
      expect(difference({ a: 'title' }, { a: 'title' })).toEqual({});
    });
    it('basic test one flat key different', () => {
      expect(difference({ a: 'changed title' }, { a: 'title' })).toEqual({
        a: 'changed title',
      });
    });
    it('basic test two flat keys, one different', () => {
      expect(
        difference(
          { a: 'changed title', b: 'description' },
          { a: 'title', b: 'description' },
        ),
      ).toEqual({
        a: 'changed title',
      });
    });
    it('basic test two flat keys, two different', () => {
      expect(
        difference(
          { a: 'changed title', b: 'changed description' },
          { a: 'title', b: 'description' },
        ),
      ).toEqual({
        a: 'changed title',
        b: 'changed description',
      });
    });
    it('basic test two flat keys different and one not present', () => {
      expect(
        difference({ a: 'changed title', b: 'description' }, { a: 'title' }),
      ).toEqual({
        a: 'changed title',
        b: 'description',
      });
    });
    it('Complex deep keys, blocks - basic', () => {
      expect(
        difference(
          {
            blocks: {
              '111-222-333-444-555': { '@type': 'text' },
              '666-777-888-999-000': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'cnh5c',
                      text: 'The block text content',
                      type: 'unstyled',
                    },
                  ],
                },
              },
            },
          },
          {},
        ),
      ).toEqual({
        blocks: {
          '111-222-333-444-555': { '@type': 'text' },
          '666-777-888-999-000': {
            '@type': 'text',
            text: {
              blocks: [
                {
                  data: {},
                  depth: 0,
                  entityRanges: [],
                  inlineStyleRanges: [],
                  key: 'cnh5c',
                  text: 'The block text content',
                  type: 'unstyled',
                },
              ],
            },
          },
        },
      });
    });
    it('Complex deep keys, blocks - No difference', () => {
      expect(
        difference(
          {
            blocks: {
              '111-222-333-444-555': { '@type': 'text' },
              '666-777-888-999-000': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'cnh5c',
                      text: 'The block text content',
                      type: 'unstyled',
                    },
                  ],
                },
              },
            },
          },
          {
            blocks: {
              '111-222-333-444-555': { '@type': 'text' },
              '666-777-888-999-000': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'cnh5c',
                      text: 'The block text content',
                      type: 'unstyled',
                    },
                  ],
                },
              },
            },
          },
        ),
      ).toEqual({});
    });
    it('Complex deep keys, blocks - different text', () => {
      expect(
        difference(
          {
            blocks: {
              '111-222-333-444-555': { '@type': 'text' },
              '666-777-888-999-000': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'cnh5c',
                      text: 'Changed! The block text content',
                      type: 'unstyled',
                    },
                  ],
                },
              },
            },
          },
          {
            blocks: {
              '111-222-333-444-555': { '@type': 'text' },
              '666-777-888-999-000': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'cnh5c',
                      text: 'The block text content',
                      type: 'unstyled',
                    },
                  ],
                },
              },
            },
          },
        ),
      ).toEqual({
        blocks: {
          '666-777-888-999-000': {
            text: {
              blocks: [
                {
                  text: 'Changed! The block text content',
                },
              ],
            },
          },
        },
      });
    });
  });
});
