"use client"
import { useState } from "react"

export default function CalculatorUi() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [result, setResult] = useState<number | string | null>(null)

  const calculate = (op: string) => {
    const a = Number(num1)
    const b = Number(num2)

    if (op === "/" && b === 0) {
      setResult("Error")
      return
    }

    const operations: Record<string, number> = {
      "+": a + b,
      "-": a - b,
      "*": a * b,
      "/": a / b
    }

    setResult(operations[op])
  }

  const clear = () => {
    setNum1("")
    setNum2("")
    setResult(null)
  }

  return (
    <>
      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

      .root{
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        background:linear-gradient(135deg,#141e30,#243b55);
        font-family:Poppins;
      }

      .calc{
        width:340px;
        background:#0f0f0f;
        border-radius:30px;
        padding:30px;
        box-shadow:0 20px 50px rgba(0,0,0,0.6);
      }

      .display{
        color:white;
        font-size:48px;
        text-align:right;
        margin-bottom:25px;
        min-height:60px;
        word-break:break-all;
      }

      .inputs{
        display:flex;
        gap:10px;
        margin-bottom:20px;
      }

      .inputs input{
        flex:1;
        padding:10px;
        border:none;
        border-radius:10px;
        background:#1f1f1f;
        color:white;
        width: 100px;
        font-size:16px;
      }

      .grid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:12px;
      }

      .btn{
        height:60px;
        border:none;
        border-radius:50%;
        font-size:20px;
        cursor:pointer;
        transition:0.2s;
      }

      .btn:hover{
        transform:scale(1.08);
      }

      .num{
        background:#333;
        color:white;
      }

      .op{
        background:#ff9500;
        color:white;
        font-weight:600;
      }

      .clear{
        grid-column:span 4;
        border-radius:14px;
        height:50px;
        background:#e74c3c;
        color:white;
        font-weight:600;
      }

      `}</style>

      <div className="root">
        <div className="calc">

          <div className="display">
            {result === null ? "0" : result}
          </div>

          <div className="inputs">
            <input
              type="number"
              placeholder="First number"
              value={num1}
              onChange={(e)=>setNum1(e.target.value)}
            />

            <input
              type="number"
              placeholder="Second number"
              value={num2}
              onChange={(e)=>setNum2(e.target.value)}
            />
          </div>

          <div className="grid">

            <button className="btn op" onClick={()=>calculate("+")}>+</button>
            <button className="btn op" onClick={()=>calculate("-")}>−</button>
            <button className="btn op" onClick={()=>calculate("*")}>×</button>
            <button className="btn op" onClick={()=>calculate("/")}>÷</button>

            <button className="btn clear" onClick={clear}>Clear</button>

          </div>

        </div>
      </div>
    </>
  )
}