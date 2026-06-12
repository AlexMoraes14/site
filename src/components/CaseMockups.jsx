export function CaseMockup({ mockups, type }) {
  if (type === "sara") {
    return (
      <div className="mockup sara-mockup" aria-label={mockups.saraLabel}>
        <div className="mockup-toolbar">
          <span />
          <span />
          <span />
          <strong>{mockups.saraTitle}</strong>
        </div>
        <div className="sara-layout">
          <div className="file-panel">
            <small>{mockups.saraInput}</small>
            {mockups.saraFiles.map((file) => (
              <div className="file-row" key={file.name}>
                <span className="file-icon">XML</span>
                <div>
                  <strong>{file.name}</strong>
                  <em>{file.status}</em>
                </div>
              </div>
            ))}
          </div>
          <div className="log-panel">
            <small>{mockups.saraExecution}</small>
            {mockups.saraLogs.map((log) => (
              <span key={log}>{log}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "dominio") {
    return (
      <div className="mockup flow-mockup" aria-label={mockups.dominioLabel}>
        <div className="flow-track">
          <div>
            <small>{mockups.report}</small>
            <strong>{mockups.source}</strong>
          </div>
          <span className="flow-arrow">→</span>
          <div>
            <small>{mockups.treatment}</small>
            <strong>{mockups.automation}</strong>
          </div>
          <span className="flow-arrow">→</span>
          <div>
            <small>{mockups.spreadsheet}</small>
            <strong>{mockups.destination}</strong>
          </div>
        </div>

        <div className="sheet-preview">
          {mockups.spreadsheetRows.map((row) => (
            <div className="sheet-row" key={row.join("-")}>
              {row.map((cell) => (
                <span key={cell}>{cell}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mockup control-mockup" aria-label={mockups.controlLabel}>
      <div className="control-top">
        <div>
          <small>{mockups.controlSmall}</small>
          <strong>{mockups.controlTitle}</strong>
        </div>
        <span>{mockups.mockup}</span>
      </div>

      <div className="control-grid">
        <div className="control-kpi">
          <small>{mockups.assets}</small>
          <strong>128</strong>
        </div>
        <div className="control-kpi">
          <small>{mockups.movements}</small>
          <strong>37</strong>
        </div>
        <div className="bar-chart" aria-hidden="true">
          <span style={{ height: "48%" }} />
          <span style={{ height: "78%" }} />
          <span style={{ height: "58%" }} />
          <span style={{ height: "88%" }} />
        </div>
      </div>

      <div className="inventory-list">
        {mockups.inventoryItems.map(([item, status, total]) => (
          <div key={item}>
            <strong>{item}</strong>
            <span>{status}</span>
            <em>{total}</em>
          </div>
        ))}
      </div>
    </div>
  );
}
