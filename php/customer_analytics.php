<?php
// Halaman Customer Analytics - saat ini memakai data statis
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?display=swap&family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;900" />
  <link rel="stylesheet" href="produk.css" />
  <title>Stitch Design - Customer Analytics</title>
</head>
<body>
  <div class="main-container">
    <div class="sidebar">
      <div class="sidebar-top">
        <h1>Admin Panel</h1>
        <div class="menu-items">
          <a class="menu-item" href="produk.php">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z"></path></svg>
            <p>Product Management</p>
          </a>
          <a class="menu-item active" href="customer_analytics.php">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
            <p>Customer Analytics</p>
          </a>
        </div>
      </div>
    </div>

    <div class="content analytics-content">
      <div class="analytics-panel">
        <div class="analytics-range range-large">
          <button class="range-pill active" data-range="7">Last 7 days</button>
          <button class="range-pill" data-range="30">Last 30 days</button>
        </div>

        <div class="analytics-header">
          <div>
            <p class="eyebrow-label">Overview</p>
          </div>
        </div>

        <div class="analytics-metrics-grid">
          <div class="analytics-card highlight" id="wa-metric-card">
            <p class="card-label">Total WA Clicks</p>
            <h2 id="wa-total">1,234</h2>
            <p class="trend positive" id="wa-trend">+12%</p>
          </div>
          <div class="analytics-card highlight" id="shopee-metric-card">
            <p class="card-label">Total Shopee Clicks</p>
            <h2 id="shopee-total">567</h2>
            <p class="trend negative" id="shopee-trend">-5%</p>
          </div>
        </div>

        <div class="analytics-chart-grid">
          <div class="chart-card">
            <div class="chart-card-header">
              <div>
                <p class="card-label">WA Clicks Trend</p>
                <h3 id="wa-chart-total">1,234</h3>
                <p class="trend positive" id="wa-chart-trend">Last 7 Days +12%</p>
              </div>
            </div>
            <canvas id="waChart" width="320" height="140"></canvas>
            <div class="chart-x-axis" id="wa-axis"></div>
          </div>

          <div class="chart-card">
            <div class="chart-card-header">
              <div>
                <p class="card-label">Shopee Clicks Trend</p>
                <h3 id="shopee-chart-total">567</h3>
                <p class="trend negative" id="shopee-chart-trend">Last 7 Days -5%</p>
              </div>
            </div>
            <canvas id="shopeeChart" width="320" height="140"></canvas>
            <div class="chart-x-axis" id="shopee-axis"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    const axisLabels = {
      '7': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      '30': ['W1', 'W2', 'W3', 'W4']
    };

    const chartData = {
      '7': {
        wa: [12, 18, 14, 20, 16, 22, 15],
        shopee: [10, 9, 12, 11, 15, 13, 12]
      },
      '30': {
        wa: [42, 38, 45, 48],
        shopee: [28, 30, 33, 36]
      }
    };

    const metricsData = {
      '7': {
        waTotal: '1,234',
        waTrend: '+12%',
        waTrendType: 'positive',
        shopeeTotal: '567',
        shopeeTrend: '-5%',
        shopeeTrendType: 'negative'
      },
      '30': {
        waTotal: '4,321',
        waTrend: '+18%',
        waTrendType: 'positive',
        shopeeTotal: '2,210',
        shopeeTrend: '+8%',
        shopeeTrendType: 'positive'
      }
    };

    const buildChart = (ctxId, dataPoints, color, labels) => {
      const ctx = document.getElementById(ctxId);
      if (!ctx) return null;
      const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 180);
      gradient.addColorStop(0, color + '33');
      gradient.addColorStop(1, color + '00');

      return new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels || axisLabels['7'],
          datasets: [
            {
              data: dataPoints,
              borderColor: color,
              backgroundColor: gradient,
              fill: true,
              borderWidth: 3,
              pointRadius: 0,
              tension: 0.45
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { enabled: true } },
          scales: {
            x: { display: false },
            y: { display: false }
          }
        }
      });
    };

    const waChart = buildChart('waChart', chartData['7'].wa, '#955065', axisLabels['7']);
    const shopeeChart = buildChart('shopeeChart', chartData['7'].shopee, '#c04d5e', axisLabels['7']);

    const renderAxis = (containerId, labels) => {
      const container = document.getElementById(containerId);
      if (!container || !labels) return;
      container.innerHTML = labels.map((label) => `<span>${label}</span>`).join('');
    };

    const applyRange = (rangeKey) => {
      const metric = metricsData[rangeKey];
      if (!metric) return;

      const waTotalEl = document.getElementById('wa-total');
      const waTrendEl = document.getElementById('wa-trend');
      const shopeeTotalEl = document.getElementById('shopee-total');
      const shopeeTrendEl = document.getElementById('shopee-trend');

      const waChartTotalEl = document.getElementById('wa-chart-total');
      const waChartTrendEl = document.getElementById('wa-chart-trend');
      const shopeeChartTotalEl = document.getElementById('shopee-chart-total');
      const shopeeChartTrendEl = document.getElementById('shopee-chart-trend');

      if (waTotalEl) waTotalEl.textContent = metric.waTotal;
      if (shopeeTotalEl) shopeeTotalEl.textContent = metric.shopeeTotal;

      if (waTrendEl) {
        waTrendEl.textContent = metric.waTrend;
        waTrendEl.classList.toggle('positive', metric.waTrendType === 'positive');
        waTrendEl.classList.toggle('negative', metric.waTrendType === 'negative');
      }

      if (shopeeTrendEl) {
        shopeeTrendEl.textContent = metric.shopeeTrend;
        shopeeTrendEl.classList.toggle('positive', metric.shopeeTrendType === 'positive');
        shopeeTrendEl.classList.toggle('negative', metric.shopeeTrendType === 'negative');
      }

      const rangeLabel = rangeKey === '7' ? 'Last 7 Days' : 'Last 30 Days';

      if (waChartTotalEl) waChartTotalEl.textContent = metric.waTotal;
      if (waChartTrendEl) waChartTrendEl.textContent = `${rangeLabel} ${metric.waTrend}`;

      if (shopeeChartTotalEl) shopeeChartTotalEl.textContent = metric.shopeeTotal;
      if (shopeeChartTrendEl) shopeeChartTrendEl.textContent = `${rangeLabel} ${metric.shopeeTrend}`;

      const labels = axisLabels[rangeKey] || axisLabels['7'];

      if (waChart && chartData[rangeKey]) {
        waChart.data.datasets[0].data = chartData[rangeKey].wa;
        waChart.data.labels = labels;
        waChart.update();
      }

      if (shopeeChart && chartData[rangeKey]) {
        shopeeChart.data.datasets[0].data = chartData[rangeKey].shopee;
        shopeeChart.data.labels = labels;
        shopeeChart.update();
      }

      renderAxis('wa-axis', labels);
      renderAxis('shopee-axis', labels);

      const rangeButtons = document.querySelectorAll('.range-pill');
      rangeButtons.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.range === rangeKey);
      });
    };

    const rangeButtons = document.querySelectorAll('.range-pill');
    rangeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.range || '7';
        applyRange(key);
      });
    });

    applyRange('7');
  </script>
</body>
</html>
