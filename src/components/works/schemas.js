import { Schema } from 'normalizr'

export const works = new Schema('works', {
  idAttribute: entity => entity.sys.id
})
