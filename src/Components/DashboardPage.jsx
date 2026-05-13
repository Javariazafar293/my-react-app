import Sidebar from './Sidebar'
import OverviewSection from './OverviewSection'
import AnalyticsSection from './AnalyticsSection'
import Table from './Table'
import './dashboard.css'
import { useState } from 'react'

function DashboardPage() {
  const [desktopCollapsed, setDesktopCollapsed] = useState(false)

  return (
    <div className="dashboard-page">
      <Sidebar
        desktopCollapsed={desktopCollapsed}
        onDesktopToggle={() => setDesktopCollapsed((prev) => !prev)}
      />
      <main className={`dashboard-content-shell ${desktopCollapsed ? 'collapsed' : ''}`}>
        <div className="dashboard-content-inner">
          <OverviewSection />
          <AnalyticsSection />
          <Table />
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
