import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { gateStages, metrics, reviewQueue, riskDomains, riskTrend, spotlights } from './data';

const stageColors = ['#38bdf8', '#f59e0b', '#ef4444', '#34d399'];

export default function App() {
  return (
    <div className="shell">
      <header className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Model Risk Oversight Hub</p>
          <h1>Release gates, evaluation drift, policy exceptions, and model-criticality pressure in one AI risk command surface.</h1>
          <p className="lede">
            A recruiter-ready frontend built to feel like a real enterprise oversight workspace for model inventory, policy-sensitive approvals,
            release gating, exception aging, and executive risk visibility.
          </p>
        </div>
        <aside className="heroPanel">
          <span className="heroLabel">Oversight posture</span>
          <strong>Stable overall, but release lanes are tightening</strong>
          <p>Critical models are healthier than last cycle, but aging exceptions and evaluation drift are keeping the most sensitive releases under pressure.</p>
        </aside>
      </header>

      <section className="metricGrid">
        {metrics.map((metric) => (
          <article key={metric.label} className={`metricCard tone-${metric.tone}`}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.delta}</p>
          </article>
        ))}
      </section>

      <section className="panelGrid">
        <article className="panel panel-large">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Oversight trend</p>
              <h2>Passing evaluations, open exceptions, and critical findings</h2>
            </div>
            <span className="tag">Monthly trend</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={riskTrend}>
              <defs>
                <linearGradient id="passing" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="exceptions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#2b3142" vertical={false} />
              <XAxis dataKey="period" stroke="#9eabc0" />
              <YAxis stroke="#9eabc0" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="evaluationsPassing" stroke="#38bdf8" fill="url(#passing)" />
              <Area type="monotone" dataKey="openExceptions" stroke="#f59e0b" fill="url(#exceptions)" />
              <Area type="monotone" dataKey="criticalFindings" stroke="#ef4444" fill="none" />
            </AreaChart>
          </ResponsiveContainer>
        </article>

        <article className="panel">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Executive spotlight</p>
              <h2>Where model-risk pressure is clustering</h2>
            </div>
          </div>
          <div className="spotlightStack">
            {spotlights.map((spotlight) => (
              <div key={spotlight.title} className="spotlightCard">
                <span>{spotlight.tag}</span>
                <strong>{spotlight.title}</strong>
                <p>{spotlight.body}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="panelGrid">
        <article className="panel panel-large">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Review queue</p>
              <h2>Priority model-risk workflows</h2>
            </div>
            <span className="tag">Release aware</span>
          </div>
          <div className="tableWrap">
            <table>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>Due</th>
                  <th>Risk</th>
                  <th>Next action</th>
                </tr>
              </thead>
              <tbody>
                {reviewQueue.map((item) => (
                  <tr key={item.model}>
                    <td>{item.model}</td>
                    <td>{item.owner}</td>
                    <td>{item.status}</td>
                    <td>{item.due}</td>
                    <td>{item.risk}</td>
                    <td>{item.nextAction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="panel">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Gate pressure</p>
              <h2>Release and review backlog</h2>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie data={gateStages} dataKey="count" nameKey="stage" innerRadius={62} outerRadius={105}>
                {gateStages.map((stage, index) => (
                  <Cell key={stage.stage} fill={stageColors[index % stageColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <ul className="legendList">
            {gateStages.map((stage) => (
              <li key={stage.stage}>
                <span>{stage.stage}</span>
                <strong>{stage.count}</strong>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <div>
            <p className="panelLabel">Domain criticality</p>
            <h2>Where model findings and business sensitivity overlap</h2>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={riskDomains}>
            <CartesianGrid stroke="#2b3142" vertical={false} />
            <XAxis dataKey="domain" stroke="#9eabc0" />
            <YAxis stroke="#9eabc0" />
            <Tooltip />
            <Legend />
            <Bar dataKey="criticality" fill="#8b5cf6" radius={[10, 10, 0, 0]} />
            <Bar dataKey="findings" fill="#ef4444" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
