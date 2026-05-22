export const products = [
  {
    id: 'p-001',
    name: 'React 入门套件',
    price: 199,
    category: '课程',
    description: '从零搭建组件、状态与路由的实战路径。',
  },
  {
    id: 'p-002',
    name: 'TypeScript 进阶',
    price: 299,
    category: '课程',
    description: '类型系统、泛型与工程化最佳实践。',
  },
  {
    id: 'p-003',
    name: '前端性能优化',
    price: 249,
    category: '专题',
    description: '加载、渲染与打包体积的系统化优化方法。',
  },
  {
    id: 'p-004',
    name: '设计系统实践',
    price: 179,
    category: '专题',
    description: '可复用组件库与设计 Token 的落地指南。',
  },
]

export function getProductById(id) {
  return products.find((item) => item.id === id)
}
