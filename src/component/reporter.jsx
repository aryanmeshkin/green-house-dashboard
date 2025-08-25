import React, { useState, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // استایل اصلی
import "react-date-range/dist/theme/default.css"; // استایل تم پیش‌فرض
import { format } from "date-fns";
import { toast } from "react-toastify";

function Reporter() {
  const [device, setDevice] = useState("");
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [showCalendar, setShowCalendar] = useState(false);

  // فرمت کردن تاریخ برای نمایش در input
  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US"); // می‌تونی "en-US" هم بذاری
  };

  function handleGetReport() {
    if (!device) {
      return toast("لطفا دستگاه را انتخاب کنید");
    }
    console.log(range[0].startDate.toLocaleDateString("en-US"));
    console.log(range[0].endDate.toLocaleDateString("en-US"));
    console.log(device);
  }

  return (
    <div className="p-4 sm:ml-64 flex flex-col justify-center items-center gap-3">
      <div>

        
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-3 font-bold text-xl">Enter Your Range Date</h1>
        <div className="flex gap-4 relative items-center justify-center ">
          {/* input شروع */}
          <input
            type="text"
            value={formatDate(range[0].startDate)}
            placeholder="startDate"
            readOnly
            onClick={() => setShowCalendar(!showCalendar)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full p-2.5"
          />

          <span className="text-gray-500">to</span>

          {/* input پایان */}
          <input
            type="text"
            value={formatDate(range[0].endDate)}
            placeholder="endDate"
            readOnly
            onClick={() => setShowCalendar(!showCalendar)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          {/* تقویم popup */}
          {showCalendar && (
            <div className="absolute top-14 left-0 z-50">
              <DateRange
                onChange={(item) => setRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={range}
                rangeColors={["#4fd1c5"]}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <form class="max-w-sm mx-auto flex flex-col items-center">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select an option
          </label>
          <select
            onChange={(e) => {
              setDevice(e.target.value);
            }}
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose your item</option>
            <option value="1">Temperature</option>
            <option value="2">Air Humidity</option>
            <option value="3">Soil Moisture</option>
          </select>
        </form>
      </div>
      <button
        onClick={handleGetReport}
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Get Report
      </button>
      <div>
        
      </div>
    </div>
  );
}

export default Reporter;
