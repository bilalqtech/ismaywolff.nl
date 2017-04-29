import path from 'path'

const isProd = process.env.NODE_ENV === 'production'

// set port based on environment
export const PORT = isProd ? 80 : process.env.DEV_PORT

// set public path based on env, since production has a different folder structure
export const PUBLIC_PATH = isProd
  ? path.join(__dirname, 'public')
  : path.join(__dirname, '../../dist/public')
