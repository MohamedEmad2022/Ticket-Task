
import { useMessages } from '../hooks/useMessages';
import { Badge, Dropdown } from 'antd';
import { FullscreenOutlined, MoreOutlined } from '@ant-design/icons';
import { useStateContext } from '../context/contextProvider';


const MessageList: React.FC = () => {
  const {detailsdata} = useStateContext()
  const { data: messages, isLoading, error } = useMessages();



  const items = [
    {
      key: '1',
      label: "اضافة"
     
    },
    {
      key: '2',
      label: "تعديل"
      
    },
    {
      key: '3',
      label: "حذف"
    },
    
  ];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading messages</p>;

  return (
    <>
    <div className='flex justify-between'>
      <div>
        <h2 className='text-xl'>صيانة معدات صناعية ثقيلة</h2>
      </div>
      <div className='flex'>
      <Badge className='bg-blue-50 p-2 rounded-lg m-1' text={detailsdata?.status ==="1" ? "مفتوح": detailsdata?.status==="2"? "ملغي": "محلول"} status={detailsdata?.status ==="1" ? "processing": detailsdata?.status==="2"? "error": "success"} />
      <FullscreenOutlined className='text-2xl bg-gray-100 p-2' />
      <Dropdown menu={{ items }}>
    <MoreOutlined className='text-2xl p-2'/>
  </Dropdown>
      </div>
    </div>
    <div className="flex flex-col overflow-y-auto bg-blue-50 p-4 rounded-lg">
      {messages?.map((message) => (
        <div className= {`flex ${message.sender === "محمد عماد" ? "justify-end" : "justify-start"}`} key={message.id} >
          
          <div key={message.id} className={`flex flex-col p-4 my-2 rounded-lg ${message.sender === "محمد عماد" ? "bg-green-600" : "bg-slate-900 text-white"}`}>
          <div className='flex'>
          <img className='w-5 h-5 rounded-full ml-2 ' src={message.image} />
          <p className="text-sm  font-semibold">
            {message.sender} <span className="text-xs text-gray-700"> {message.time}</span>
          </p>
          </div>
          <p className="mt-1 text-right">{message.text}</p>
        </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default MessageList;
