import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Name",
      title: "Email",
      img:
        "../assets/img1.png",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Thiago Vitor De Castilho",
      title: "tdecasti@my.centennialcollege.ca",
      img:
        "../assets/thiago.png",
      icon: "assets/youtube.png",
      desc:
       `As his Professor, I noticed that he is a mature and ethical individual, and definitely among the best students in his program. He picked up the required concepts quickly, and was fully motivated about the subject matter. Osman is a very flexible person and can adapt very easily to special challenges or situations. His interpersonal communication skills. He would definitely be a good asset to any organization.` ,
      featured: true,
    },
    {
      id: 3,
      name: "Name",
      title: "Email",
      img:
        "../assets/img1.png",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
