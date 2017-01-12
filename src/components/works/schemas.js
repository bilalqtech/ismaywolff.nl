import { schema } from 'normalizr'

export const work = new schema.Entity('works', {}, {
  processStrategy: value => value.fields,
  idAttribute: value => value.fields.slug
})
