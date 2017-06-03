import { schema } from 'normalizr'

export const pages = new schema.Entity(
  'pages',
  {},
  {
    processStrategy: value => value.fields,
    idAttribute: value => value.fields.slug
  }
)
