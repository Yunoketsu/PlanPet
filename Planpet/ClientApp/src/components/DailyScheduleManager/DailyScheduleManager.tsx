import React, { useState, useEffect } from 'react';
import { Clock, Plus, Check, X, Calendar, Home, Settings, User, Bell, Menu } from 'lucide-react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Task, Schedule, ScheduleItem } from './types';

const DailyScheduleManager: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [apiMessage, setApiMessage] = useState<string>('');
  const [plannedTasks, setPlannedTasks] = useState<Task[]>([
    { id: 1, title: '朝のミーティング', completed: false },
    { id: 2, title: 'プロジェクト資料作成', completed: false },
    { id: 3, title: 'メール返信', completed: true },
    { id: 4, title: '午後の打ち合わせ準備', completed: false }
  ]);
  const [urgentTasks, setUrgentTasks] = useState<Task[]>([
    { id: 1, title: 'システム障害対応', completed: false },
    { id: 2, title: '顧客からの緊急連絡対応', completed: true }
  ]);
  const [newTaskText, setNewTaskText] = useState<string>('');
  const [newUrgentTaskText, setNewUrgentTaskText] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [schedule, setSchedule] = useState<Schedule>({
    '09:00': { task: '朝のミーティング', duration: 60, id: 1 },
    '10:30': { task: 'プロジェクト資料作成', duration: 120, id: 2 },
    '13:00': { task: 'ランチ', duration: 60, id: 3 },
    '14:00': { task: '午後の打ち合わせ', duration: 90, id: 4 },
    '16:00': { task: 'メール返信・事務作業', duration: 90, id: 5 },
    '17:30': { task: '明日の準備', duration: 30, id: 6 }
  });
  const [showScheduleModal, setShowScheduleModal] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [scheduleTaskTitle, setScheduleTaskTitle] = useState<string>('');
  const [scheduleTaskDuration, setScheduleTaskDuration] = useState<number>(60);

  // APIからメッセージ取得
  useEffect(() => {
    fetch('https://localhost:5001/api/hello')
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(() => setApiMessage('API呼び出し失敗'));
  }, []);

  // ...既存のロジック（generateAllTimeSlots, getVisibleTimeSlots, addPlannedTask, ...）は省略...

  return (
    <>
      <Header apiMessage={apiMessage} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* ここに元の画面のJSXを分割して配置 */}
    </>
  );
};

export default DailyScheduleManager;
