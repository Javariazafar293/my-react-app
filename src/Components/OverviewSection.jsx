const nftCards = [
  { title: 'Web3 Fund', code: 'M3-24',  active: true },
  { title: 'Web3 Fund', code: 'M3-24 50K',  active: false },
  { title: 'Web3 Fund', code: 'S3-24 10K', active: false },
]

function OverviewSection() {
  return (
    <section className="overview-grid">

      <article className="section-card1 balance-card">
        <p className="section-label">Your Total Balance</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '13px', padding: '5px' }}>
  <p className="balance-value">$180,400.00</p>
  <p className="balance-change">+102%</p>
  </div>
    
        <p className="section-muted">Last updated on 4 minutes ago</p>

        <div className="balance-actions">
          <button type="button" className="btn btn-outline">
            List NFT
          </button>
          <button type="button" className="btn btn-primary">
            Buy NFT
          </button>
        </div>

        <div className="balance-note">
  <img src="/Images/Drawer/info-circle.svg" alt="icon" className="balance-icon" />
  <p className="balance-text">Total balance from your NFTs</p>
</div>

      </article>

      {/* <article className="section-card">
        <div className="section-header-row">
          <div>
            <h2 className="section-title">My Web3Fund NFTs</h2>
            <p className="section-muted1">Select an NFT to view performance and analytics</p>
          </div>
          <button type="button" className="btn btn-primary1">
            + Buy Web3Fund NFT
          </button>
        </div>

        <div className="nft-grid">
          {nftCards.map((card) => (
            <article key={card.code} className={`nft-tile ${card.active ? 'active' : ''}`}>
              <p className="nft-brand">{card.title}</p>
              <p className="nft-code">{card.code}</p>
            </article>
          ))}
        </div>
        <div className="supply"
        >
          <p>78861</p>
          <p>78861</p>
          <p>78861</p>

        </div>
      </article> */}

<article className="section-card">
  <div className="section-header-row">
    <div>
      <h2 className="section-title">My Web3Fund NFTs</h2>
      <p className="section-muted1">Select an NFT to view performance and analytics</p>
    </div>
    <button type="button" className="btn btn-primary1">
      + Buy Web3Fund NFT
    </button>
  </div>

  <div className="nft-grid">
    <div className="nft-item">
      <img src="/Images/Drawer/Web3Fund S1-20K.png" alt="NFT 1" className="nft-image" />
      <p className="supply-text">78861</p>
    </div>
    <div className="nft-item">
      <img src="/Images/Drawer/Cards-1.png" alt="NFT 2" className="nft-image" />
      <p className="supply-text">78861</p>
    </div>
    <div className="nft-item">
      <img src="/Images/Drawer/Cards.png" alt="NFT 3" className="nft-image" />
      <p className="supply-text">78861</p>
    </div>
  </div>
</article>
    </section>
  )
}

export default OverviewSection
