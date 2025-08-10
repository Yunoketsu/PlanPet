import React from 'react';

const Sidebar: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <aside style={{ position: 'fixed', left: 0, top: 0, width: 200, height: '100%', background: '#eee', zIndex: 1000 }}>
      <button onClick={onClose} style={{ float: 'right' }}>×</button>
      <div style={{ padding: 16 }}>
        <h3>サイドバー</h3>
        {/* サイドバーの内容をここに追加 */}
      </div>
    </aside>
  );
};

export default Sidebar;
