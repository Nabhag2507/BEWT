"use client"
import { useState } from "react"

export default function CounterUi() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <h1>This is next js counter</h1>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        body {
          margin: 0;
        }

        .root {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .card {
          backdrop-filter: blur(14px);
          background: rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 40px;
          width: 320px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .title {
          font-size: 20px;
          font-weight: 600;
          color: white;
          margin-bottom: 25px;
        }

        .display {
          font-size: 72px;
          font-weight: 600;
          color: white;
          margin-bottom: 30px;
        }

        .buttons {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-bottom: 18px;
        }

        .btn {
          border: none;
          border-radius: 12px;
          padding: 14px 0;
          font-size: 20px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s;
          color: white;
          background: rgba(255,255,255,0.2);
        }

        .btn:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,0.35);
        }

        .reset {
          width: 100%;
          border: none;
          border-radius: 12px;
          padding: 10px;
          font-weight: 600;
          cursor: pointer;
          background: white;
          color: #333;
          transition: 0.2s;
        }

        .reset:hover {
          background: #f1f1f1;
        }
      `}</style>

      <div className="root">
        <div className="card">
          <div className="title">Counter</div>

          <div className="display">{count}</div>

          <div className="buttons">
            <button className="btn" onClick={() => setCount(c => c - 1)}>−</button>
            <button className="btn" onClick={() => setCount(c => c + 10)}>+10</button>
            <button className="btn" onClick={() => setCount(c => c + 1)}>+</button>
          </div>

          <button className="reset" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </>
  )
}