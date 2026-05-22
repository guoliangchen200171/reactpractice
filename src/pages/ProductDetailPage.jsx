import { useNavigate, useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { getProductById } from '../data/products'

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="page">
        <PageHeader title="产品不存在" description={`未找到 ID 为 ${id} 的产品。`} />
        <div className="empty-state">
          <button type="button" onClick={() => navigate('/products')}>
            返回产品列表
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <PageHeader title={product.name} description={product.description}>
        <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>
          返回上一页
        </button>
      </PageHeader>

      <section className="detail-panel">
        <dl className="detail-list">
          <div>
            <dt>产品 ID</dt>
            <dd>
              <code>{product.id}</code>
            </dd>
          </div>
          <div>
            <dt>分类</dt>
            <dd>{product.category}</dd>
          </div>
          <div>
            <dt>价格</dt>
            <dd className="price">¥{product.price}</dd>
          </div>
          <div>
            <dt>当前路径</dt>
            <dd>
              <code>/products/{id}</code>
            </dd>
          </div>
        </dl>

        <div className="detail-actions">
          <Link to="/products" className="text-link">
            ← 产品列表
          </Link>
          <button type="button" onClick={() => navigate('/contact')}>
            咨询此产品
          </button>
        </div>
      </section>
    </div>
  )
}

export default ProductDetailPage
