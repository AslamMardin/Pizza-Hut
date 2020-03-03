let content_card = document.querySelector('.content-costumers');
let db = [
{
	"number": 3,
	"pesanan" : [
		{
			"nama" : "Toffee Coffee", 
			"quy" : 3,
			"gambar" : "toffee-coffee.jpg"
		},
		{
			"nama": "Super Supreme", 
			"quy" : 1,
			"gambar" : "supreme.jpg"
		},
	],
	"orang": 4,
	"pesan" : 2,
	"jam" : "09:12",
	"noti" : 0,
	"total":30500

},
{
	"number": 1,
	"pesanan" : [
		{
			"nama" : "Meat Lover", 
			"quy" : 1,
			"gambar" : "meat-lover.jpg"
		},
		{
			"nama": "Super Supreme", 
			"quy" : 1,
			"gambar" : "supreme.jpg"
		},
		{
			"nama": "Oriental Chicken", 
			"quy" : 1,
			"gambar" : "american-favourite.jpg"
		},
		{
			"nama" : "Beef Spaghetti", 
			"quy" : 1,
			"gambar" : "oriental-chicken.jpg"
		},
		{
			"nama" : "Meatballs Beef Mushroom", 
			"quy" : 1,
			"gambar" : "meatballs-beef-mushroom.jpg"
		},
	],
	"orang": 2,
	"pesan" : 5,
	"jam" : "12:12",
	"noti" : 0,
	"total":130000
},
{
	"number": 7,
	"pesanan" : [
		{
			"nama" : "Chocolate Milkshake", 
			"quy" : 3,
			"gambar" : "chocolate-milkshake.jpg"
		},
		{
			"nama": "Super Supreme", 
			"quy" : 1,
			"gambar" : "supreme.jpg"
		},
		{
			"nama": "American Favourite", 
			"quy" : 2,
			"gambar" : "american-favourite.jpg"
		},
		
	],
	"orang": 6,
	"pesan" : 3,
	"jam" : "14:12",
	"noti" : 1,
	"total":45500
},
{
	"number": 2,
	"pesanan" : [
		{
			"nama" : "Meat Lover", 
			"quy" : 1,
			"gambar" : "meat-lover.jpg"
		},
		{
			"nama": "Strawberry Milkshake", 
			"quy" : 1,
			"gambar" : "strawberry-milkshake.jpg"
		},
	],
	"orang": 1,
	"pesan" : 2,
	"jam" : "15:12",
	"noti" : 0,
	"total":10000
}
];
let out = '';
db.forEach(data => {


	out += `<div class="card-costumers">
	<div class="top-bar">
	<span class="new">Baru</span>
	Pesanan</div>
	<div class="number">
	<span class="jam">${data.jam}</span>
	<h1>${data.number}</h1>
	</div>
	<div class="caption">
	<ul>
	<li>
	Orang
	<span class="item item-success">${data.orang}</span>
	</li>
	<li class="sub-pesan">Pesanan
	<span class="item item-danger">${data.pesan}</span>
	<div class="daftar-pesanan">`;
	
	data.pesanan.forEach(p =>{
		out += `
			<div class="img" alt="${p.nama}">
				<img src="img/menu/${p.gambar}"/>
				<span>${p.quy}</span>
			</div>
		`;
	})
	out += `
	</div></li>
	<li>Total Bayar
	<span class="item item-warning">Rp ${data.total.toLocaleString()}</span>
	</li>
	</ul>
	</div>
	<div class="box-icon">
	<div class="icon">
	<i class="fa fa-bell"></i>
	`;

	if (data.noti) {
		out += `<div class="angka"></div>`;
	}

	out += `
	</div>
	<div class="icon">

	<i class="fa fa-user"></i>
	</div>
	<div class="icon">

	<i class="fa fa-print"></i>
	</div>
	</div>
	</div>`;
})
content_card.innerHTML = out;

