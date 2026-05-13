function PortfolioTable({ rows }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <h2>Portfolio</h2>
      </div>
      <div className="table-wrap">
        <table className="holdings-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Amount</th>
              <th>Price</th>
              <th>P/L 24h</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.asset}>
                <td>{row.asset}</td>
                <td>{row.amount}</td>
                <td>{row.price}</td>
                <td className={row.pnl.startsWith('-') ? 'negative' : 'positive'}>{row.pnl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PortfolioTable
