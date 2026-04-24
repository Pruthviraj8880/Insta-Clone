import React from 'react';

const SUGGESTIONS = [
  { id: 1, user: "nasa", info: "Followed by tech_news", img: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t1080x1080.jpg" },
  { id: 2, user: "nike", info: "New to Instagram", img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAe1BMVEUAAAD////CwsJsbGy1tbX29vbx8fGOjo7z8/PNzc1kZGSCgoIRERHu7u7p6enX19c/Pz9ERESdnZ2srKwbGxsmJiZUVFSJiYnAwMAxMTE6OjrV1dWoqKgjIyO4uLgICAhbW1vi4uJxcXFPT098fHyWlpYXFxcsLCw1NTVySMJjAAADzElEQVR4nO3bZ4OiMBAGYEMREYGlnBUVWDn9/7/wLHgKUkINwff57mYym4RhjJMJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfKk/rAPIclwcWYeQQVuwjuDDfqn4G9ZBZLDnrCNIOlqRqq6GuKgmK5V1BO9+ToJO1j7rMLKJZMk6hKdLKAWEGNGZdSA5lmTHOoQ7V7QDmRCiiqwjybWdkQGcVn5kzq55IjPnh3Uo+Y4GCRiHYCnqbT1dBQN8Hr8xCVEYDu9qhzhPhAi/DAOhsCZEZlbFiJLxzBOR7b+swqBk385SJiMvPZO8mCGTIKoQb3FqvQ9r2Sp5J1m9h1CZdV/8l17H3K6EaSJRRtTr+DUt9Hus/Q24DdcBSRpwMZXw2AhOP4NtRCmdJzJ1ONh8d/Yj4FX3I7lz25TTiSKm5nY/dDvmcch+x+P4ijn9yNO1mBrMO2g5V4+D7rLLZ6UP8phuD7EzlUuIw5a7GmCvHTLzRMhu+MVUwol0mivRMbLzdC2mBvxynGkvd5er30RFntp8LN89axJIN7naRmpunq7F1ACaP5WJr/jl1rogGy37IH8O5HB1nv+nv82hlUbIJTwEBXm6dabaGIaB6H0WjWvR89zJP6AeS0rwW4iaiWNiIkKTP+X69qP3W8Cw+307b5WT/KfXftNYKjs9Jz8vvBVTScfUbGo9xi1NKM8TkaWBt4XLeKkJ6VWfhPuTRJGn6+ZT9p1MoEcfc5KqfFr0civyJC6LqZTV57ROlB+17JIH3ovD/ZK6yVoWFM3JTWFFnsRtMZXymzm74smdtXVZYfCGp85UsfTJHjvk7ZmzWFKRJ+n2IG+91ZN3MsveZ69kW1qRp5i0Jx8XsrdgPFMnXF72i8nR3Vh+aKtBpTwR+cB5MZWW8RRMTlg3DEOvcDo9BcqINt+DUD7rOsZQTH2gLCQrmXlb1tPqwp8au6uEqQ3yDmxzRUd7LUO/M9WAWD77CmR7pEvqLmwxUxzcmWrkVJ4COjIPd6aaaWldGcqg78C2o5Xzipc7Uw01fw5OvdFvvphb9G0nBY7uTDUXNMnUejSdKSpReUZyjKozRcWqmandd5znSfRd8zfSKF+OS1VfWDzemWpJTsM9zyg7U9QqtNBlj+NrG21YUH3BTm7FFOtQ2TvTNEd157uKqTxu2cNwJohf8HJMSfn8ycdrRQnht1Wdxc5edufddPwveuOjtQjTP+RTPX8Ut1u6sZ8rjnQ4SE4k/uCAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+AbdUKMeiDScsAAAAAElFTkSuQmCC" },
  { id: 3, user: "spacex", info: "Followed by dev_guy", img: "https://www.logo.wine/a/logo/SpaceX/SpaceX-Logo.wine.svg" },
];

const Suggestions = () => {
  return (
    <div className="suggestions-container">
      <div className="suggestions-header">
        <span>Suggestions for you</span>
        <button className="see-all-btn">See All</button>
      </div>
      {SUGGESTIONS.map((s) => (
        <div key={s.id} className="suggestion-item">
          <div className="suggestion-user">
            <img src={s.img} alt={s.user} />
            <div>
              <p className="s-username">{s.user}</p>
              <p className="s-info">{s.info}</p>
            </div>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;