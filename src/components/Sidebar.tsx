import { Tabs, TabsProps } from 'antd';
import React from 'react';
import Details from './details';





const Sidebar: React.FC = () => {

  
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'النشاط',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'التفاصيل',
      children: <Details />,
    },
   
  ];
  
   
  
  
  return (
    
    <div className="p-2">
      <Tabs centered={true} defaultActiveKey="2" items={items}  />
    </div>
  );
};

export default Sidebar;

