const NODE_ENV = import.meta.env.DEV //应用是否运行在开发环境

const BASE_URL = NODE_ENV ? 'https://123456' : 'https://xyzui' //根据项目实际需求修改

export { BASE_URL, NODE_ENV }
