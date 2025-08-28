import calculator from './images/calculator.png'
import moneyshare from './images/money.png'
import bmi from './images/bmi.png'
import bmr from './images/bmr.png'
import carinstallment from './images/carinstallment.png'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 p-4">
      <div className="container mx-auto max-w-4xl text-center py-12 px-4">

        <div className="mb-8">
          <Image src={calculator} alt="Calculator" width={100} height={100} className="mx-auto mb-4" />
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 bg-clip-text">
            Calculator Varity
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-300">
            เครื่องคำนวณ By DTI-SAU
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">

          <a href="/moneyShare" className="card block p-8 rounded-2xl shadow-xl 
            bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white 
            hover:ring-4 hover:ring-purple-300 hover:ring-opacity-75 
            focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75">
            <Image src={moneyshare} alt="Money Share" width={80} height={80} className="mx-auto mb-4 rounded-full shadow-lg" />
            <h2 className="text-3xl font-bold mb-4">คำนวณ Money Share</h2>
            <p className="text-lg opacity-90">แบ่งปันค่าใช้จ่ายกับเพื่อน ๆ ได้อย่างยุติธรรม</p>
          </a>

          <a href="/BMI" className="card block p-8 rounded-2xl shadow-xl 
            bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white 
            hover:ring-4 hover:ring-purple-300 hover:ring-opacity-75 
            focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75">
            <Image src={bmi} alt="BMI & BMR" width={80} height={80} className="mx-auto mb-4 rounded-full shadow-lg" />
            <h2 className="text-3xl font-bold mb-4">คำนวณ BMI</h2>
            <p className="text-lg opacity-90">ประเมินสุขภาพของคุณด้วยดัชนีมวลกาย</p>
          </a>

          <a href="/carInstallment" className="card block p-8 rounded-2xl shadow-xl 
            bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white 
            hover:ring-4 hover:ring-purple-300 hover:ring-opacity-75 
            focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75">
            <Image src={carinstallment} alt="Car Installment" width={80} height={80} className="mx-auto mb-4 rounded-full shadow-lg" />
            <h2 className="text-3xl font-bold mb-4">คำนวณผ่อนรถ</h2>
            <p className="text-lg opacity-90">วางแผนการผ่อนชำระรถยนต์ของคุณ</p>
          </a>

          <a href="/BMR" className="card block p-8 rounded-2xl shadow-xl 
            bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white 
            hover:ring-4 hover:ring-purple-300 hover:ring-opacity-75 
            focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75">
            <Image src={bmr} alt="Another Calculator" width={80} height={80} className="mx-auto mb-4 rounded-full shadow-lg" />
            <h2 className="text-3xl font-bold mb-4">คำนวณอื่น ๆ</h2>
            <p className="text-lg opacity-90">เครื่องคำนวณเพิ่มเติมสำหรับทุกความต้องการ</p>
          </a>

        </div>
      {/* Footer */}
      <footer className="text-center py-4 border-t border-gray-700 text-gray-400 text-sm">
        Created by <span className="font-semibold text-white">DTI-SAU</span>
        <br />
        Copyright &copy; 2025 DTI-SAU Southeast Asia University
      </footer>



      </div>
    </div>
  )
}
