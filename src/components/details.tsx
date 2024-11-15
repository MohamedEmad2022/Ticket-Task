
import { Badge, Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStateContext } from "../context/contextProvider";


const Details: React.FC = () => {
  const {fetchDetails, detailsdata} = useStateContext()
  const[loading, setLoading]= useState(false)
  const [form] = Form.useForm()
 
  type FieldType = {
    Categories?: string;
    support?: string;
    important?: string
    section?: string;
    channel?: string;
    status?: string
  };
  
  
  
  useEffect(()=>{
    fetchDetails()
    

  },[])

  useEffect(()=>{
    form.setFieldsValue({
      
      Categories: detailsdata?.Categories,
      support :detailsdata?.support,
      important: detailsdata?.important,
      section: detailsdata?.section,
      channel: detailsdata?.channel,
      status: detailsdata?.status,
  })

  },[detailsdata])

  
  console.log(detailsdata)
  const updateDetails = async ( details) => {
    setLoading(true)
    const { data } = await axios.put(`http://localhost:3001/details/1`, details);
    setLoading(false)
    
  };
  const onFinish = (values) => {
    updateDetails(values)
    
  };
  return (
    <Form
    form={form}
    layout="vertical"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    dir="rtl"
  >
    <Form.Item<FieldType>
       
      label="اختر تصنيف"
      tooltip="اختر تصنيف"
      name="Categories"
      rules={[{ required: true, message: 'من فضلك اختر تصنيفا' }]}
    >
 
         <Select
         
         className=""
          showSearch
          direction="rtl"
          placeholder="اختر تصنيف"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            { value: "1", label: "طلبات التدريب" },
            { value: "2", label: "طلبات الصيانة" },
            { value: "3", label: "طلبات الدعم" },
          ]}
        />
      
      
    </Form.Item>
    <Form.Item<FieldType>
       
      label="مسؤول الدعم"
      tooltip="اختر المكلف بالدعم والمتابعة"
      name="support"
      rules={[{ required: true, message: 'من فضلك اختر مستخدم' }]}
    >
       
         <Select
         
          showSearch
          direction="rtl"
          placeholder="اختر مستخدم"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            { value: "1", label: "محمد عماد" },
            { value: "2", label: "احمد رجب" },
            { value: "3", label: "محمود محمد" },
          ]}
        />
      

    </Form.Item>
    <Form.Item<FieldType>
       
      label="الاهمية"
      tooltip="اختر الاهمية"
      name="important"
    >
       
         <Select
         
          showSearch
          direction="rtl"
          placeholder="اختر"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          
        >
          <Select.Option value="1" label="مرتقعه"><Badge text="مرتفعة" status="success" /></Select.Option>
          <Select.Option value="2" label="مقبولة"><Badge text="مقبولة" status="default" /></Select.Option>
          <Select.Option value="3" label="منخفضة"><Badge text="منخفضة" status="error" /></Select.Option>
        </Select>
       
    </Form.Item>
    <Form.Item<FieldType>
       
      label="القسم"
      tooltip="اختر القسم"
      name="section"
    >

       
         <Input placeholder="اكتب القسم" />
       
    </Form.Item>
    <Form.Item<FieldType>
       
      label="القناة"
      tooltip="اختر القناة"
      name="channel"
    >
     

       
         <Input placeholder="اكتب القناة" />
      
    </Form.Item>
    <Form.Item<FieldType>
       
      label="الحالة"
      tooltip="اختر الحالة"
      name="status"
    >
       
         <Select
         
          showSearch
          direction="rtl"
          placeholder="اختر"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          
        >
          <Select.Option value="1" label="مفتوح"><Badge text="مفتوح" status="processing" /></Select.Option>
          <Select.Option value="2" label="ملغي"><Badge text="ملغي" status="error" /></Select.Option>
          <Select.Option value="3" label="محلول"><Badge text="محلول" status="success" /></Select.Option>
        </Select>
      
    </Form.Item>
    <Form.Item>
                        <Button loading={loading} block type="primary" htmlType="submit">
                            تعديل
                        </Button>
                    </Form.Item>
    </Form>
    
    
  
  );
};

export default Details;
