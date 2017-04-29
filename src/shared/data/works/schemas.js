import { schema } from 'normalizr'
import { schemas as links } from '../links'

export const works = new schema.Entity(
  'works',
  {
    images: [links.links],
    thumbnail: links.links
  },
  {
    processStrategy: value => value.fields,
    idAttribute: value => value.fields.slug
  }
)
