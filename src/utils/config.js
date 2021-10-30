const NODE_ENV = import.meta.env.DEV

const BASE_URL = NODE_ENV ? 'https://123456' : 'https://xyzui'

export { BASE_URL }
