
export enum WasteSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  UNCLEAR = 'unclear'
}

export enum ReportStatus {
  PENDING = 'pending',
  VALIDATED = 'validated',
  CLEANED = 'cleaned',
  REJECTED = 'rejected'
}

export interface Location {
  lat: number;
  lng: number;
  address?: string;
}

export interface WasteReport {
  id: string;
  timestamp: number;
  imageUrl: string;
  location: Location;
  severity: WasteSeverity;
  status: ReportStatus;
  aiFeedback: string;
  confidence: number;
}

export interface AIAnalysisResult {
  isWasteBin: boolean;
  severity: WasteSeverity;
  description: string;
  confidence: number;
}
