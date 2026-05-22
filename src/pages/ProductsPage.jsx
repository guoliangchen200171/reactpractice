import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { products } from '../data/products'

function ProductsPage() {
  return (
    <div className="page">
      <PageHeader
        title="产品中心"
        description="点击「查看详情」进入动态路由页面，学习 useParams 读取 URL 参数。"
      />

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>编号</th>
              <th>名称</th>
              <th>分类</th>
              <th>价格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <code>{product.id}</code>
                </td>
                <td>{product.name}</td>
                <td>
                  <span className="badge">{product.category}</span>
                </td>
                <td>¥{product.price}</td>
                <td>
                  <Link to={`/products/${product.id}`} className="text-link">
                    查看详情 →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductsPage
