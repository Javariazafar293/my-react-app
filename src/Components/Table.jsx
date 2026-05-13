import { useState } from "react";

const nftData = [
  { id: 1, nft: "M1-24 20K", nftId: 1, date: "01/01/2024", amount: "$20,000", value: "$30,000", status: "Active", tx: "0x0....03ba22" },
  { id: 2, nft: "M3-24 20K", nftId: 1, date: "02/03/2024", amount: "$20,000", value: "$30,000", status: "Inactive", tx: "0x0....03ba22" },
  { id: 3, nft: "M3-24 20K", nftId: 1, date: "02/03/2024", amount: "$20,000", value: "$30,000", status: "Active", tx: "0x0....03ba22" },
  { id: 4, nft: "M3-24 20K", nftId: 1, date: "02/03/2024", amount: "$20,000", value: "$30,000", status: "Active", tx: "0x0....03ba22" },
];

const headers = ["#", "NFT", "NFT ID", "Purchase Date", "Amount", "NFT Value", "Status", "Transaction #"];

export default function NFTHistoryTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("list");
  const totalPages = 4;
  const pages = [1, 2, "...", 4];

  return (
    <section className="section-card table-section">
      <div className="section-header-row1">
        <h2 className="section-title">Web3Fund NFT History</h2>
        <div className="table-tools">
        <button type="button" className="table-tool-btn">
        <img src="/Images/Drawer/sort.svg" alt="filter icon" style={{ width: '20px', height: '20px' }} />

  Filter
</button>

<button type="button" className="table-tool-btn">
<img src="/Images/Drawer/calendar-2.svg" alt="filter icon" style={{ width: '20px', height: '20px' }} />

This Week
<img src="/Images/Drawer/arrow-down11.svg" alt="filter icon" style={{ width: '12px', height: '12px' }} />

</button>

          <div className="table-view-switch">
            <button
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "active" : ""}
              type="button"
            >
              <img src="/Images/Drawer/row-vertical.svg" alt="filter icon" style={{ width: '20px', height: '20px' }} />

            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "active" : ""}
              type="button"
            >
<img src="/Images/Drawer/element-3.svg" alt="filter icon" style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>
      </div>

      <div className="table-wrap">
        <table className="history-table">
          <thead>
            <tr>
              {headers.map((label) => (
                <th key={label}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {nftData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td><a href="#">{row.nft}</a></td>
                <td>{row.nftId}</td>
                <td>{row.date}</td>
                <td>{row.amount}</td>
                <td>{row.value}</td>
                <td>
                  <span className={`status-chip ${row.status === "Active" ? "on" : "off"}`}>
                    {row.status}
                  </span>
                </td>
                <td>{row.tx}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <span>Showing 4 items per page</span>
        <div className="pager">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="pager-btn"
            type="button"
          >
            ‹
          </button>
          {pages.map((page, i) =>
            page === "..." ? (
              <span key={i} className="pager-btn">...</span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`pager-btn ${currentPage === page ? "active" : ""}`}
                type="button"
              >
                {page}
              </button>
            )
          )}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="pager-btn"
            type="button"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}