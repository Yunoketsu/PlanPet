// DailyScheduleManagerで使う型定義

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type ScheduleItem = {
  task: string;
  duration: number;
  id: number;
};

export type Schedule = {
  [time: string]: ScheduleItem;
};
