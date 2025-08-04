import React, { useState } from "react";

export default function SchoolCommunity() {
  const [nickname, setNickname] = useState("");
  const [photo, setPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!nickname || !photo) return alert("닉네임과 사진을 모두 입력하세요");
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>우리학교 - 소소한 공간</h1>
      <div style={{ marginBottom: "20px" }}>
        {submitted ? (
          <p>입장 요청이 접수되었습니다. 관리자의 승인을 기다려주세요.</p>
        ) : (
          <div>
            <input placeholder="닉네임" onChange={(e) => setNickname(e.target.value)} /><br />
            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} /><br />
            <button onClick={handleSubmit}>입장 요청하기</button>
          </div>
        )}
      </div>
      <div style={{ display: "grid", gap: "10px" }}>
        {["선생님 특징표", "우리학교 담소방", "학교 밈 투표장", "인기순위", "질팁 백과", "신고 센터"].map((title) => (
          <div key={title} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <strong>{title}</strong><br />
            <small>이곳은 {title} 섹션입니다.</small>
          </div>
        ))}
      </div>
    </div>
  );
}