function AnalyticsSection() {
  const nftBars = [
    { month: 'Jan', dark: 42, blue: 55 },
    { month: 'Feb', dark: 42, blue: 55 },
    { month: 'Mar', dark: 60, blue: 80 },
    { month: 'Apr', dark: 78, blue: 92, tip: '$8,495.00' },
    { month: 'May', dark: 78, blue: 102 },
    { month: 'Aug', dark: 78, blue: 118 },
  ]

  const growthQuarters = ['Q1 23', 'Q2 23', 'Q3 23', 'Q4 23', 'Q1 24', 'Q2 24']

  return (
    <section className="analytics-grid">
      <article className="section-card analytics-card">
        <div className="analytics-card-head">
          <h2 className="section-title">NFT Value Growth</h2>
          <div className="analytics-filters">
            <button type="button">NFT</button>
            <button type="button">Year</button>
          </div>
        </div>

        <div className="chart-shell">
          <div className="chart-y-axis">
            {['$120k', '$100k', '$80k', '$60k', '$40k', '$20k'].map((tick) => (
              <span key={tick}>{tick}</span>
            ))}
          </div>
          <div className="bar-chart">
            {nftBars.map((bar) => (
              <div key={bar.month} className="bar-col">
                {bar.tip ? <div className="bar-tip">{bar.tip}</div> : null}
                <div className="pair-bars">
                  <div className="bar-fill dark" style={{ height: `${bar.dark}px` }} />
                  <div className="bar-fill blue" style={{ height: `${bar.blue}px` }} />
                </div>
                <span className="bar-month">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-footer growth-footer">
    <div className="growth-stat">
      <div className="growth-icon">
        <img src="/Images/Drawer/money-recieve.svg" alt="" />
      </div>

      <div>
        <p>Total NFT Cost</p>
        <span>$40,000.00</span>
      </div>
    </div>


    <div className="growth-stat">
      <div className="growth-icon">
        <img src="/Images/Drawer/wallet-money.svg" alt="" />
      </div>

      <div>
        <p>Unrealised NFT Value</p>
        <span>$180,400.00</span>
      </div>
    </div>
  </div>

      </article>

      {/* <article className="section-card analytics-card">
        <h2 className="section-title">Web3 Fund Growth</h2>
        <div className="line-chart">
          <svg viewBox="0 0 320 120" preserveAspectRatio="none">
            <polyline
              points="0,92 25,70 50,64 75,84 100,94 125,77 150,58 175,81 200,96 225,74 250,80 275,90 320,45"
              fill="none"
              stroke="#0f68ff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="line-x-axis">
            {growthQuarters.map((q) => (
              <span key={q}>{q}</span>
            ))}
          </div>
        </div>
        <div className="analytics-footer">
          <p>
            2023 Growth
            <span>430%</span>
          </p>
          <p>
            2024 Projection
            <span>350%</span>
          </p>
        </div>
      </article> */}

<article className="section-card analytics-card growth-card">
  <h2 className="section-title">Web3 Fund Growth</h2>

  <div className="growth-chart-wrapper">
    
    {/* Y Axis */}
    <div className="growth-y-axis">
      <span>25%</span>
      <span>20%</span>
      <span>15%</span>
      <span>10%</span>
      <span>5%</span>
      <span>0%</span>
    </div>

    {/* Chart */}
    <div className="growth-chart-area">
      
      {/* Grid Lines */}
      <div className="grid-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* SVG Line */}
      <svg
        className="growth-svg"
        viewBox="0 0 600 260"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F68FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0F68FF" stopOpacity="0" />
          </linearGradient>

          <filter id="blueGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Area Fill */}
        <path
          d="
          M0,190
          C40,185 55,120 100,120
          C145,120 140,175 180,175
          C220,175 225,95 270,95
          C315,95 325,200 365,200
          C405,200 395,145 440,145
          C485,145 485,205 525,205
          C565,205 580,80 600,55
          L600,260
          L0,260
          Z"
          fill="url(#lineGlow)"
        />

        {/* Main Line */}
        <path
          d="
          M0,190
          C40,185 55,120 100,120
          C145,120 140,175 180,175
          C220,175 225,95 270,95
          C315,95 325,200 365,200
          C405,200 395,145 440,145
          C485,145 485,205 525,205
          C565,205 580,80 600,55"
          fill="none"
          stroke="#0F68FF"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#blueGlow)"
        />
      </svg>

      {/* X Axis */}
      <div className="line-x-axis">
        {growthQuarters.map((q) => (
          <span key={q}>{q}</span>
        ))}
      </div>
    </div>
  </div>

  {/* Footer */}
  <div className="analytics-footer growth-footer">
    <div className="growth-stat">
      <div className="growth-icon">
        <img src="/Images/Drawer/money-recieve.svg" alt="" />
      </div>

      <div>
        <p>2023 Growth</p>
        <span>430%</span>
      </div>
    </div>


    <div className="growth-stat">
      <div className="growth-icon">
        <img src="/Images/Drawer/wallet-money.svg" alt="" />
      </div>

      <div>
        <p>2024 Projection</p>
        <span>350%</span>
      </div>
    </div>
  </div>
</article>

    </section>
  )
}

export default AnalyticsSection
