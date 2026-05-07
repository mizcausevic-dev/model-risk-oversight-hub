export type Tone = 'healthy' | 'watch' | 'critical';

export interface MetricCard {
  label: string;
  value: string;
  delta: string;
  tone: Tone;
}

export interface RiskTrendPoint {
  period: string;
  evaluationsPassing: number;
  openExceptions: number;
  criticalFindings: number;
}

export interface ReviewQueueItem {
  model: string;
  owner: string;
  status: string;
  due: string;
  risk: string;
  nextAction: string;
}

export interface RiskDomainPoint {
  domain: string;
  criticality: number;
  findings: number;
}

export interface SpotlightCard {
  title: string;
  body: string;
  tag: string;
}

export interface GateStagePoint {
  stage: string;
  count: number;
}
