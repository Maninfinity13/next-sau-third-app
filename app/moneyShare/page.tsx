'use client';

import Image from "next/image";
import moneyshare from "../images/money.png"
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [money, setMoney] = useState('');
  const [people, setPeople] = useState('');
  const [moneyShare, setMoneyShare] = useState('0.00');

  const handleCalClick = () => {
    // validate input
    if( money === '' || money <= '0'){
      alert('กรุณาใส่จำนวนเงินให้มากกว่า 0 บาท');
      return;
    }

    if( people === '' || people <= '0'){
      alert('กรุณาใส่จำนวนเงินให้มากกว่า 0 บาท');
      return;
    }

    const result = parseFloat(money) / parseInt(people);
    setMoneyShare(result.toFixed(2));
  }

  const handleClearClick = () => {
    setMoney('');   
    setPeople('');
    setMoneyShare('0.00');    
  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-gray-100 px-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center border border-white/20">
       {/* Back to Home */}
        <div className="text-left mb-4">
          <Link href="/" className="text-purple-300 hover:text-purple-100 font-semibold">
            &larr;  Home
          </Link>
        </div>
       {/* Title */}
        <h1 className="text-4xl font-extrabold mb-2 text-purple-300 drop-shadow-md">
          Money Share Calculator
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          คำนวณเงินที่ต้องหารกัน
        </p>

        {/* Image */}
        <div className="mb-8">
          <Image
            src={moneyshare}
            alt="Money Share Icon"
            width={150}
            height={150}
            className="mx-auto rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Inputs */}
        <div className="space-y-6 text-left mb-8">
          <div>
            <label
              htmlFor="totalBill"
              className="block text-sm font-medium mb-2 text-purple-200"
            >
              ป้อนจำนวนเงิน (บาท)
            </label>
            <input
              value={money}
          
              type="number"
              onChange={(e) => setMoney(e.target.value)}
              id="totalBill"
              placeholder="เช่น 1200"
              className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label
              htmlFor="numPeople"
              className="block text-sm font-medium mb-2 text-purple-200"
            >
              ป้อนจำนวนคน
            </label>
            <input
              value={people}
              type="number"
              onChange={(e) => setPeople(e.target.value)}
              id="numPeople"
              placeholder="เช่น 4"
              className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <button 
          onClick={handleCalClick}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition">
            คำนวณ
          </button>
          <button
          onClick={handleClearClick} 
          className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-600 transition">
            ล้างข้อมูล
          </button>
        </div>

        {/* Result */}
        <div className="mt-8 pt-6 border-t border-purple-400 border-opacity-50">
          <h2 className="text-2xl font-semibold mb-3 text-purple-300">
            หารกันคนละ:
          </h2>
          <p id="result" className="text-5xl font-extrabold text-white">
            {moneyShare}
             บาท
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
