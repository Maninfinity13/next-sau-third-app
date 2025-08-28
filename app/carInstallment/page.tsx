'use client';

import Image from "next/image";
import carIcon from "../images/carinstallment.png";
import Link from "next/link";

export default function CarInstallmentPage() {
// คำนวนงวดรถต่อเดือน
// ยอดจัด = ค่ารถ - เงินดาวน์
// ดอกเบี้ยทั้งหมด = (ยอดจัด * อัตรดอกเบี้ย / 100) * (จำนวนเดือน / 12)
// ยอดผ่อนต่อเดือน = (ยอดจัด + ดอกเบี้ยทั้งหมด) / จำนวนเดือน


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-gray-100 px-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center border border-white/20">
        {/* Back to Home */}
        <div className="text-left mb-4">
          <Link href="/" className="text-purple-300 hover:text-purple-100 font-semibold">
            &larr; Home
          </Link>
        </div>
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-2 text-purple-300 drop-shadow-md">
          Car Installment Calculator
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          คำนวณค่าใช้จ่ายผ่อนรถรายเดือน
        </p>

        {/* Image */}
        <div className="mb-8">
          <Image
            src={carIcon}
            alt="Car Icon"
            width={150}
            height={150}
            className="mx-auto rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Inputs */}
        <div className="space-y-4 text-left mb-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-purple-200">
              ชื่อผู้คำนวณ
            </label>
            <input
              type="text"
              id="name"
              placeholder="กรอกชื่อของคุณ"
              className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Car Price */}
          <div>
            <label htmlFor="carPrice" className="block text-sm font-medium mb-2 text-purple-200">
              ราคารถ (บาท)
            </label>
            <input
              type="number"
              id="carPrice"
              placeholder="กรอกราคารถ"
              className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <label htmlFor="interestRate" className="block text-sm font-medium mb-2 text-purple-200">
              ดอกเบี้ยต่อปี (%)
            </label>
            <input
              type="number"
              id="interestRate"
              placeholder="กรอกดอกเบี้ยต่อปี"
              className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Down Payment Radio Buttons */}
        <div className="mb-6">
          <p className="text-purple-200 font-medium mb-2">เงินดาวน์ (%)</p>
          <div className="flex gap-4 justify-center flex-wrap">
            {[15, 20, 25, 30, 35].map((percent) => (
              <label key={percent} className="flex items-center gap-2 text-purple-200">
                <input
                  type="radio"
                  name="downPayment"
                  value={percent}
                  className="text-purple-400 focus:ring-purple-500"
                />
                {percent}%
              </label>
            ))}
          </div>
        </div>

        {/* Payment Term Dropdown */}
        <div className="mb-6">
          <label htmlFor="months" className="block text-sm font-medium mb-2 text-purple-200">
            เลือกจำนวนเดือนที่ผ่อน
          </label>
          <select
            id="months"
            className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">เลือกจำนวนเดือน</option>
            {Array.from({ length: 60 }, (_, i) => i + 12).map((month) => (
              <option key={month} value={month}>{month} เดือน</option>
            ))}
          </select>
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
          <p id="result" className="text-3xl font-extrabold text-white">
            0 บาท/เดือน
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
