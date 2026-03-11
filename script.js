const users = [
{
    name: "Aarav Sharma",
    pic: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    bio: "Frontend developer who enjoys building clean and interactive user interfaces."
},
{
    name: "Ananya Verma",
    pic: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    bio: "UI/UX enthusiast passionate about designing simple and beautiful web experiences."
},
{
    name: "Rahul Mehta",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    bio: "Full-stack learner exploring JavaScript, React, and backend technologies."
},
{
    name: "Ananya Nair",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    bio: "Creative designer who loves combining technology with artistic ideas."
},
{
    name: "Kabir Khan",
    pic: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    bio: "Problem solver interested in algorithms, coding challenges, and software development."
},
{
    name: "Meera Iyer",
    pic: "https://plus.unsplash.com/premium_photo-1677288649721-d589c4df7eca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    bio: "Aspiring web developer learning modern frontend frameworks and tools."
},
{
    name: "Arjun Patel",
    pic: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    bio: "Tech enthusiast passionate about building useful web applications."
},
{
    name: "Meera Reddy",
    pic: "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
    bio: "Computer science student exploring web development and UI design."
},
{
    name: "Vikram Singh",
    pic: "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    bio: "Backend developer interested in APIs, databases, and scalable systems."
},
{
    name: "Neha Gupta",
    pic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    bio: "Frontend learner focused on creating responsive and accessible websites."
},
{
    name: "Aditya Kulkarni",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    bio: "Software developer who enjoys learning new technologies and solving problems."
},
{
    name: " Neha Kulkarni",
    pic: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHx8MHx8fDA%3D",
    bio: "Creative thinker passionate about design systems and digital products."
},
{
    name: "Rahul Das",
    pic: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Tech explorer learning full-stack development and modern web tools."
},
{
    name: "Ishita Kapoor",
    pic: "https://images.unsplash.com/photo-1592621385612-4d7129426394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D",
    bio: "Aspiring developer building projects to improve coding and design skills."
},
{
    name: "Karan Malhotra",
    pic: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
    bio: "Programming enthusiast interested in JavaScript, web apps, and innovation."
}
];

function showUser(arr){
    let container = document.querySelector(".container");
    for(let user of arr){
    let card = document.createElement("div");
    card.classList.add("card");
    let imgbox = document.createElement("div");
    imgbox.classList.add("imgbox");
    let img = document.createElement("img");
    img.src=user.pic;
    let h2 = document.createElement("h2");
    h2.textContent=user.name;
    let p = document.createElement("p");
    p.textContent=user.bio;
    p.classList.add("info")
    imgbox.appendChild(img);
    card.appendChild(imgbox);
    card.appendChild(h2);
    card.appendChild(p);
    container.appendChild(card)
    }
}

showUser(users);

document.querySelector("input").addEventListener("input",()=>{
    let input = document.querySelector("input");
    let find = input.value
    let newUsers=users.filter((user)=>{
            if(user.name.startsWith(find)){
                return true;
            }
    })
    document.querySelector(".container").innerHTML="";
    showUser(newUsers);
})