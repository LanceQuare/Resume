export interface TimelineEvent {
  title: string;
  date: string;
  type: string;
  detail: ProjectEvent | PersonalEvent;
}

export interface ProjectEvent {
  name: string;
  role: string;
  tech: Array<string>;
  content: Array<string>;
}

export interface PersonalEvent {
  name: string;
  url: string;
  position: string;
  reportTo: string;
}
