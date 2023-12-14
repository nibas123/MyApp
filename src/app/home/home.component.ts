import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  districts = [
    {
      id: 1,
      name: "Alappuzha",
      image: "https://s1.1zoom.me/big0/524/India_Rivers_Riverboat_Alappuzha_Kerala_Palms_527898_1280x850.jpg",
      desc:"he Backwaters of Alappuzha are one of the most popular tourist attractions in India which attracts millions of domestic and international tourists. Alleppey is a city and a municipality in Kerala "
    },
    {
      id: 1,
      name: "Kollam",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg",
      desc:"Kollam , also known by its former name Quilon pronunciation ( historical name Desinganadu ), is an ancient seaport and city on the Malabar Coast of India bordering the Laccadive Sea, which is a part of the Arabian Sea. It is 71 km (44 mi) north of the state capital Thiruvananthapuram. "
    },
    {
      id: 1,
      name: "Kottayam",
      image: "https://www.railwayrecruitment.co.in/wp-content/uploads/2016/07/Kottayam.jpg",
      desc:"Kottayam is a city in the Indian state of Kerala, flanked by the Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west. It is the district headquarters of Kottayam district, located in south-west Kerala."
    }
  ]
}
