# Credit Risk Executive Dashboard

> **Thesis:** A model is only as good as the interface that delivers it. A risk committee cannot make capital allocation decisions from a Jupyter Notebook. This project is the production-grade React frontend for the **Credit Risk & Loss Forecasting Engine**.

### 🚀 Live Demo
**[View the Live Dashboard](https://credit-risk-dashboard-ui.vercel.app)**

---

## The Business Question
> *"How much money will we lose next quarter, and what is our risk tolerance?"*

This dashboard serves as the **Executive Decision Interface**. It consumes the backend APIs to visualize the Expected Loss (PD × LGD) over a 6-month horizon, complete with 90% confidence intervals. It translates complex machine learning outputs into clear KPI cards and interactive charts for financial stakeholders.

## Architecture & Stack

This is a modern, high-performance frontend designed for rapid rendering of financial data.

- **Framework:** React 18
- **Build Tool:** Vite (for lightning-fast HMR and optimized production builds)
- **Charting:** Recharts (for responsive, SVG-based prediction interval charts)
- **Styling:** Custom CSS (Dark mode, executive aesthetic)
- **Deployment:** Vercel (CI/CD directly from GitHub)

### Features
- **KPI Cards:** Instant visibility into Expected Loss, Upper Bound (90%), and Safe Capital Reserve.
- **Interactive Forecasting:** A dynamic line chart displaying the expected loss curve alongside the upper confidence bound.
- **API Integration:** Built with `axios` to seamlessly fetch data from the Python/FastAPI backend.

---

## The Full-Stack Ecosystem

This dashboard is the final layer of a complete, production-grade data system. To see the backend architecture that powers this UI, view the companion repository:

👉 **[Credit Risk & Loss Forecasting Engine](https://github.com/Daniel38215571/credit-risk-forecasting-engine)**
*(Features Advanced SQL pipelines, Calibrated XGBoost, and a Rust Inference Engine).*

---

## How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/Daniel38215571/credit-risk-dashboard.git
cd credit-risk-dashboard

2. Install dependencies
   npm install

3. Run development server
   npm run dev

4. Open your browser to the local URL (usually `http://localhost:5173`).

---




 5. AUTHUR
>Anuoluwapo Daniel Ojo
>Senior Data Analyst | Data & AI Engineer

https://www.linkedin.com/in/daniel-ojo-879273197 | https://github.com/Daniel38215571
