const NODE_ENV = import.meta.env.DEV //应用是否运行在开发环境

const BASE_URL = NODE_ENV ? 'https://123456' : 'https://xyzui'

export { BASE_URL }
