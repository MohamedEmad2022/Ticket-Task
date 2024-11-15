import React, { useState } from 'react';
import { Button } from 'antd';
import { SendOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor: React.FC = () => {
  
  const [open, setOpen] = useState(false);
const [value, setValue] = useState('');



  return (
    <>

     <div>
       {
        open ? (
            <>
            
            <h3 className="block text-right text-lg font-semibold mb-2">رد الي:الشركة المتحدة للطاقة الشمسية</h3>
          <ReactQuill
            value={value}
            placeholder='اضافة نص'
            onChange={setValue}
            className="bg-white border text-right  border-green-500 rounded-md"
            modules={{
              toolbar: [
                [{ header: '1' }, { header: '2' }, { font: [] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ color: [] }, { background: [] }],
                ['link', 'image'],
                ['clean']
              ],
            }}
            theme="snow"
          />
       <div style={{ paddingTop: '10px' }}>
         <Button className='mr-2' type="primary" icon={<SendOutlined />} >
           إرسال
         </Button>
         <Button icon={<CloseOutlined />} onClick={()=>{setOpen(false)}} >
           الغاء
         </Button>
       </div>
            </>
            
        )
        :(
            <>
            <Button icon={<PlusOutlined />} onClick={()=>{setOpen(true)}} >
           
         </Button>
            </>
        )
       }
     </div>
    </>
  );
};

export default TextEditor;
