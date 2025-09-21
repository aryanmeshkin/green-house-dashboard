import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // استایل اصلی
import "react-date-range/dist/theme/default.css"; // استایل تم پیش‌فرض
import { format } from "date-fns";
import { toast } from "react-toastify";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import { useAppContext } from "../../contexts/app-contexts";
import axios from "axios";

import useAxiosPrivate from "../identity/hooks/useAxiosPrivate";
// import { getReport } from "../../api/api";

function Reporter() {
  const [device, setDevice] = useState("");
  const [value, setValue] = useState([]);
  const { modeState } = useAppContext();
  const axiosPrivate = useAxiosPrivate();

  function handleGetReport() {
    if (!device) {
      return toast("لطفا دستگاه را انتخاب کنید");
    }
    if (value.length !== 2) {
      return toast("لطفا بازه زمانی را کامل کنید");
    }
    const startDay = value[0]
      .convert(gregorian, gregorian_en)
      .format("YYYY-MM-DD");
    const endDay = value[1]
      .convert(gregorian, gregorian_en)
      .format("YYYY-MM-DD");
    console.log(startDay);
    console.log(endDay);
    const data = { startDate: startDay, endDate: endDay };
    const reportData = axiosPrivate.get(`/reports?startDate=${data.startDate}&endDate=${data.endDate}`);
  }

  const handleRange = (values) => {
    if (values.length === 2) {
      setValue(values);
    }
  };

  return (
    <div className="p-4 sm:ml-64  dark:bg-gray-900 h-screen ">
      <div className="p-6 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="mb-3 font-bold text-xl dark:text-gray-400">
            Enter Your Range Date
          </h1>
          <div className="flex gap-8 relative items-center justify-center ">
            <div className="flex flex-col items-center gap-2">
              {/* input شروع */}
              <input
                type="text"
                placeholder="startDate"
                value={value[0] ? value[0].format("YYYY/MM/DD") : ""}
                readOnly
                className="bg-gray-50 border placeholder:text-gray-700 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-50 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <span className="text-gray-500 text-sm">to</span>

              {/* input پایان */}
              <input
                disabled
                type="text"
                placeholder="endDate"
                readOnly
                value={value[1] ? value[1].format("YYYY/MM/DD") : ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    outline-none focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {/* device chooser */}
              <label class="block text-sm font-medium text-gray-500 dark:text-white ">
                Select an option
              </label>
              <form class="mx-auto flex flex-col items-center w-60">
                <select
                  onChange={(e) => {
                    setDevice(e.target.value);
                  }}
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Choose your item</option>
                  <option value="1">Temperature</option>
                  <option value="2">Air Humidity</option>
                  <option value="3">Soil Moisture</option>
                </select>
              </form>
            </div>

            {/* تقویم popup */}

            <div className=" top-130 left-120 z-50">
              <Calendar
                className={modeState === true && "bg-dark "}
                value={value}
                onChange={handleRange}
                range
                calendar={persian}
                locale={persian_fa}
              />
            </div>
          </div>
        </div>
        <div></div>
        <button
          onClick={handleGetReport}
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded dark:text-gray-300"
        >
          Get Report
        </button>
      </div>
    </div>
  );
}

export default Reporter;
