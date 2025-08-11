import React, { useEffect, useState } from 'react'
import io from "socket.io-client"
import { socket } from './api/socket';
import { getSensorSummary } from './api/api';


function SendMessage() {
   const [sensorData, setSensorData] = useState(null);
    useEffect(() => {
    // بارگذاری اولیه با API
    getSensorSummary()
      .then(res => setSensorData(res.data))
      .catch(console.error);

    // شنود داده‌های جدید از WebSocket
    socket.on("sensor-data", (data) => {
      setSensorData(data);
    });
    

    // پاکسازی هنگام خروج
    return () => {
      socket.off("sensor-data");
    };
  }, []);
  console.log(sensorData);
  return (
    <div className='flex justify-center items-center gap-4 h-screen'>
        <input placeholder='Message ... ' className='outline-amber-500 outline p-2 rounded-xl' />
        <button  className='bg-amber-400 p-2 rounded-2xl text-amber-50 cursor-pointer'>Send Message</button>
    </div>
  )
}

export default SendMessage