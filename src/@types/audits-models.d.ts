
interface GetAudits {
  auditItems: AuditItem[];
}

interface AuditItem {

  id: string;
  externalId: string;
  name: string;
  payload: string;
  result: string;
  createdOn: string;
  createdOnWording: string;
  createdBy: string;
  executionTime: ExecutionTime;
  sourceIP: string;
  deviceBrand: string;
  deviceModel: string;
  browser: string;
  operationSystem: string;
  correlationId: string;
}

interface ExecutionTime {

  ticks: number;
  days: number;
  hours: number;
  milliseconds: number;
  microseconds: number;
  nanoseconds: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  totalHours: number;
  totalMilliseconds: number;
  totalMicroseconds: number;
  totalNanoseconds: number;
  totalMinutes: number;
  totalSeconds: number;
}
