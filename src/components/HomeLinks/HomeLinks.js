import React from 'react';

import { useNavigate } from 'react-router-dom';

function HomeLinks() {
  const navigate = useNavigate();

  const data = [
    {
      img: "/images/png1/53.png",
      name: "Recharge",
      link: '/login'
    },
    {
      img: "/images/png1/withdrawl.png",
      name: "Withdrawl",
      link: '/register'
    },
    {
      img: "/images/png1/teams.png",
      name: "Teams",
      link: '/bonus'
    },
    {
      img: "/images/png1/invitationlink.png",
      name: "Invitation Link",
      link: '/myteam'
    },
    {
      img: "/images/png1/bonus.png",
      name: "Reedem Bonus",
      link: '/bindBankCard'
    },
    {
      img: "/images/png1/usercenter.png",
      name: "User Center",
      link: '/invitation'
    },
    {
      img: "/images/png1/myproject.png",
      name: "My Projects",
      link: ''
    },
    {
      img: "/images/png1/games.png",
      name: "Games",
      link: ''
    },
  ];

  return (
    <div className="grid grid-cols-4">
      {
        data.map((item, idx) => {
          return (
            <div 
              key={idx} 
              onClick={() => navigate(item.link)} 
              className="flex cursor-pointer flex-col m-3 mt-10 justify-center items-center"
            >
              <img 
                className="rounded-full bg-white border-2  h-10" 
                src={item.img} 
                style={{ boxShadow: "0px 0px 3px 3px rgb(237, 234, 234)" }}
              />
              <p className="text-sm text-white font-semibold text-center mt-1">{item.name}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default HomeLinks;