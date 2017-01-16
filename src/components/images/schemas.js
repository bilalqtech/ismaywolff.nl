import { schema } from 'normalizr'

export const images = new schema.Entity('images', {}, {
  processStrategy: value => ({
    title: value.fields.title,
    url: value.fields.file.url
  }),
  idAttribute: value => value.sys.id
})
