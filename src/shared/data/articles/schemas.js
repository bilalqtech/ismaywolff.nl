import { schema } from 'normalizr'

export const articles = new schema.Entity(
  'articles',
  {},
  {
    processStrategy: value => Object.assign({}, value.fields, { published: value.sys.createdAt }),
    idAttribute: value => value.fields.slug
  }
)
