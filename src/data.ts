import type {
  GateStagePoint,
  MetricCard,
  ReviewQueueItem,
  RiskDomainPoint,
  RiskTrendPoint,
  SpotlightCard
} from './types';

export const metrics: MetricCard[] = [
  { label: 'Models under review', value: '18', delta: '5 in high-criticality lanes', tone: 'watch' },
  { label: 'Open policy exceptions', value: '9', delta: '3 past target close date', tone: 'critical' },
  { label: 'Critical findings', value: '6', delta: '2 need release hold', tone: 'critical' },
  { label: 'Release readiness', value: '86%', delta: '+7 pts over prior cycle', tone: 'healthy' }
];

export const riskTrend: RiskTrendPoint[] = [
  { period: 'Jan', evaluationsPassing: 74, openExceptions: 14, criticalFindings: 8 },
  { period: 'Feb', evaluationsPassing: 77, openExceptions: 12, criticalFindings: 7 },
  { period: 'Mar', evaluationsPassing: 80, openExceptions: 11, criticalFindings: 7 },
  { period: 'Apr', evaluationsPassing: 83, openExceptions: 10, criticalFindings: 6 },
  { period: 'May', evaluationsPassing: 86, openExceptions: 9, criticalFindings: 6 }
];

export const gateStages: GateStagePoint[] = [
  { stage: 'Policy review', count: 6 },
  { stage: 'Evaluation signoff', count: 8 },
  { stage: 'Release hold', count: 3 },
  { stage: 'Monitoring follow-up', count: 5 }
];

export const reviewQueue: ReviewQueueItem[] = [
  {
    model: 'Contract risk classifier v4',
    owner: 'Model Governance',
    status: 'Awaiting exception decision',
    due: 'Today',
    risk: 'High',
    nextAction: 'Route to legal and risk'
  },
  {
    model: 'Revenue narrative assistant',
    owner: 'AI Operations',
    status: 'Evaluation drift detected',
    due: 'May 8',
    risk: 'Critical',
    nextAction: 'Freeze release candidate'
  },
  {
    model: 'Support summarization model',
    owner: 'Product Risk',
    status: 'Monitoring follow-up',
    due: 'May 9',
    risk: 'Medium',
    nextAction: 'Re-run escalation suite'
  },
  {
    model: 'Fraud triage scorer',
    owner: 'Risk Engineering',
    status: 'Human review backlog',
    due: 'May 10',
    risk: 'High',
    nextAction: 'Assign reviewer coverage'
  }
];

export const spotlights: SpotlightCard[] = [
  {
    title: 'Release pressure is concentrated in revenue and contract workflows',
    body: 'High-criticality models tied to finance and legal operations are carrying the most oversight load this cycle.',
    tag: 'Board-ready'
  },
  {
    title: 'Exception aging is now the main governance drag',
    body: 'Policy exceptions are declining in count, but the remaining cases are aging in the most sensitive release lanes.',
    tag: 'Needs action'
  },
  {
    title: 'Best intervention lever',
    body: 'More reviewer coverage in evaluation signoff would reduce both release delay and model-risk backlog.',
    tag: 'Operational gain'
  }
];

export const riskDomains: RiskDomainPoint[] = [
  { domain: 'Revenue operations', criticality: 91, findings: 4 },
  { domain: 'Legal and contracts', criticality: 88, findings: 5 },
  { domain: 'Customer support', criticality: 62, findings: 2 },
  { domain: 'Security triage', criticality: 79, findings: 3 },
  { domain: 'Internal analytics', criticality: 57, findings: 1 }
];
