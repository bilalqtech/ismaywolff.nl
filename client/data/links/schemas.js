import { schema } from 'normalizr'

export const links = new schema.Entity('links', {}, {
  idAttribute: value => value.sys.id
})
