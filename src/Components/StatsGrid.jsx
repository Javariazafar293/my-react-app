function StatsGrid({ items }) {
  return (
    <section className="stats-grid">
      {items.map((item) => (
        <article key={item.label} className="stat-card">
          <p className="stat-label">{item.label}</p>
          <p className="stat-value">{item.value}</p>
          <p className="stat-change">{item.change}</p>
        </article>
      ))}
    </section>
  )
}

export default StatsGrid
