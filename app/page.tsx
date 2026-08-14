"use client";

import { useState } from "react";

const floatingHearts = [
  { left: "5%", size: 22, delay: "-2s", duration: "12s" },
  { left: "14%", size: 34, delay: "-8s", duration: "15s" },
  { left: "24%", size: 18, delay: "-5s", duration: "11s" },
  { left: "36%", size: 27, delay: "-11s", duration: "16s" },
  { left: "48%", size: 16, delay: "-4s", duration: "10s" },
  { left: "59%", size: 38, delay: "-13s", duration: "18s" },
  { left: "69%", size: 21, delay: "-7s", duration: "13s" },
  { left: "79%", size: 30, delay: "-1s", duration: "14s" },
  { left: "89%", size: 18, delay: "-9s", duration: "12s" },
  { left: "96%", size: 25, delay: "-6s", duration: "17s" },
  { left: "31%", size: 14, delay: "-3s", duration: "14s" },
  { left: "74%", size: 15, delay: "-12s", duration: "15s" },
];

const escapePositions = [
  { left: "53%", top: "76px" },
  { left: "2%", top: "76px" },
];

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const dodge = () => {
    setAttempts((current) => Math.min(current + 1, 3));
  };

  const declineStyle = attempts > 0
    ? escapePositions[Math.min(attempts - 1, escapePositions.length - 1)]
    : undefined;

  return (
    <main className="love-page">
      <div className="ambient-glow glow-one" />
      <div className="ambient-glow glow-two" />

      <div className="heart-field" aria-hidden="true">
        {floatingHearts.map((heart, index) => (
          <span
            className="floating-heart"
            key={index}
            style={{
              left: heart.left,
              fontSize: heart.size,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      {!accepted ? (
        <section className="proposal-card" aria-labelledby="proposal-title">
          <div className="tiny-label">
            <span>♡</span> 給我最喜歡的你
          </div>

          <div className="hero-heart" aria-hidden="true">
            <span>♥</span>
          </div>

          <p className="eyebrow">I HAVE A QUESTION</p>
          <h1 id="proposal-title">請問你願意跟我交往嗎？</h1>
          <p className="intro">
            喜歡你不是一時興起，是每一次見到你之後，<br className="desktop-break" />
            都更確定想把往後的日子也分給你。
          </p>

          <div className="choice-zone">
            <button className="yes-button" type="button" onClick={() => setAccepted(true)}>
              <span>我願意</span>
              <span className="button-heart" aria-hidden="true">♥</span>
            </button>

            {attempts < 3 && (
              <button
                className="no-button"
                type="button"
                style={declineStyle}
                onPointerDown={(event) => {
                  event.preventDefault();
                  dodge();
                }}
                onClick={(event) => {
                  event.preventDefault();
                  if (event.detail === 0) dodge();
                }}
                aria-label="不願意（這個按鈕會躲開）"
              >
                不願意
              </button>
            )}
          </div>

          <p className="hint" aria-live="polite">
            {attempts === 0 && "給我一個機會，好嗎？"}
            {attempts === 1 && "再想一下嘛…"}
            {attempts === 2 && "真的不再考慮一下嗎？"}
            {attempts >= 3 && "看來命運也覺得你該選願意 ♡"}
          </p>
        </section>
      ) : (
        <section className="proposal-card success-card" aria-live="polite">
          <div className="celebration" aria-hidden="true">
            {Array.from({ length: 14 }).map((_, index) => (
              <span key={index} style={{ "--i": index } as React.CSSProperties}>♥</span>
            ))}
          </div>
          <p className="eyebrow">IT&apos;S OFFICIAL</p>
          <div className="accepted-heart" aria-hidden="true">♥</div>
          <h1>好，那從今天起，<br />我們就是正式交往了！</h1>
          <div className="love-note">
            <p>
              謝謝你願意走進我的生活。也許我不太會說漂亮的情話，
              但我會認真記住你的喜歡、在意你的情緒，陪你分享每一個平凡的小日子。
            </p>
            <p>
              以後的路，開心一起笑，難過我陪你熬。請多多指教，
              我的另一半。<span aria-hidden="true">♡</span>
            </p>
          </div>
          <p className="signature">— 你的專屬戀人</p>
        </section>
      )}

      <p className="footer-note">made with <span aria-hidden="true">♥</span> for you</p>
    </main>
  );
}
