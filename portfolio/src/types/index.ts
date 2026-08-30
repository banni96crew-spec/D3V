// Типы данных для портфолио

export interface Project {
  id: string;
  title: string;
  description: string;
  whatWasDone: string;
  result: string;
  link?: string;
  metrics?: Metric[];
}

export interface Metric {
  label: string;
  value: string;
  change?: string;
  context?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  clientValue: string;
}

export interface Capability {
  title: string;
  description: string;
}

export interface WhyMeItem {
  title: string;
  description: string;
}
