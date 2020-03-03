$(document).ready(function() {
	$('.btn-order').on('click', function(
		e)
	{
		e.preventDefault();
		$('.content-list-shadow').css({
			visibility:"visible",
		})
		$('.content-list').css({
			transform:"scale(1)"
		})
	})

	$('.close').on('click', function(e){
		$('.content-list-shadow').css({
			visibility:"hidden",
		})
		$('.content-list').css({
			transform:"scale(0)"
		})
	})

	function subPizza()
		{// option pizza
			let content = '';
			pizza.forEach((e,i)=>{
				content += `<div class="card-pizza">
				<div class="card-img">
				<img src="img/menu/${e.gambar}" alt="">
				</div>
				<div class="card-caption">
				<h3>${e.nama}</h3>
				<div class="card-footer">

				<small>${e.kategori}</small>
				<span>Stok 5</span>
				</div>
				<p>Rp. ${e.harga.toLocaleString()}</p>
				</div>
				<a href="#" class="tombol-buy">
				<i class="fa fa-shopping-cart"></i>
				Buy
				</a>
				</div>`;
			})
			$('.content-body').html(content);
		}
		subPizza();

		// kategori
		let link = $('ul.box-cat li a');
		link.on('click', function(e){
			e.preventDefault();
			link.removeClass('active');
			$(this).addClass('active');
			// console.log($(this).text().toLowerCase())
			if ($(this).text() == "All") {
				subPizza()
			}else {
				let content = '';
				pizza.forEach((e,i)=>{
					if($(this).text().toLowerCase() == e.kategori)
					{
						content += `<div class="card-pizza">
						<div class="card-img">
						<img src="img/menu/${e.gambar}" alt="">
						</div>
						<div class="card-caption">
						<h3>${e.nama}</h3>
						<div class="card-footer">

						<small>${e.kategori}</small>
						<span>Stok 5</span>
						</div>
						<p>Rp. ${e.harga.toLocaleString()}</p>
						</div>
						<a href="#" class="tombol-buy">
						<i class="fa fa-shopping-cart"></i>
						Buy
						</a>
						</div>`;
					}
				})
				$('.content-body').html(content);
			}
		})
		let no = 1;
		let harga = [];
		$(document).on('click', '.tombol-buy', function(e){
			e.preventDefault();
			
			let barang = $($(this)).parents('.card-pizza');
			let namaBarang = barang.find('h3').text();
			let hargaBarang = barang.find('p').text();
			let txt = `<tr>
							<td>${no}</td>
							<td class="nama-p">${namaBarang}</td>
							<td>${hargaBarang}</td>
							<td>1</td>
							<td>
							<button class="h-pesan">-</button>
							</td>
						</tr>`;
			no++;
			hargaBarang = hargaBarang.slice(-6);
			harga.push(Number.parseFloat(hargaBarang));
			$('.table-body').append(txt);
			alert("Pesanan Sudah terkirim");
			let hargaTotal = harga.reduce((total, a) => {
				return total + a;
			})
			hargaTotal *= 1000;
			$('.total').text(hargaTotal.toLocaleString());
		console.log(hargaTotal);
		})

		
	});