import Image from "next/image";
import bmiIcon from "../images/bmi.png";

export default function BMICalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-gray-100 px-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center border border-white/20">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-2 text-purple-300 drop-shadow-md">
          BMI Calculator
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          คำนวณดัชนีมวลกายของคุณ
        </p>

        {/* Image */}
        <div className="mb-8">
          <Image
            src={bmiIcon}
            alt="BMI Icon"
            width={150}
            height={150}
            className="mx-auto rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Inputs */}
        <div className="space-y-4 text-left mb-6">
          {/* Weight */}
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium mb-2 text-purple-200"
            >
              น้ำหนัก (กก.)
            </label>
            <input
              type="number"
              id="weight"
              placeholder="เช่น 70"
              className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Height */}
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium mb-2 text-purple-200"
            >
              ส่วนสูง (ซม.)
            </label>
            <input
              type="number"
              id="height"
              placeholder="เช่น 170"
              className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition">
            คำนวณ
          </button>
          <button className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-600 transition">
            ล้างข้อมูล
          </button>
        </div>

        {/* Result */}
        <div className="mt-8 pt-6 border-t border-purple-400 border-opacity-50">
          <h2 className="text-2xl font-semibold mb-3 text-purple-300">
            ผลลัพธ์:
          </h2>
          <p id="result" className="text-5xl font-extrabold text-white">
            0.00
          </p>
        </div>
      </div>

      {/* Footer */}
      <p className="text-gray-400 text-sm mt-8 pb-4">
        Created by Phatcharapol
      </p>
    </div>
  );
}
