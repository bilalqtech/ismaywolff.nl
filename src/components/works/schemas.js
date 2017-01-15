import { schema } from 'normalizr'

export const works = new schema.Entity('works', {}, {
  processStrategy: value => value.fields,
  idAttribute: value => value.fields.slug
})
