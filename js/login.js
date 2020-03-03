let tombol = document.querySelector('.tombol');
tombol.addEventListener('mouseenter', function(e)
{
	let i = document.querySelector('.tombol i');
	i.setAttribute('class', 'fa fa-unlock');
	i.style.color = '#fff';
	// e.target.getAttribute('class');
})

tombol.addEventListener('mouseleave', function(e)
{
	let i = document.querySelector('.tombol i');
	i.setAttribute('class', 'fa fa-lock');
	i.style.color = 'yellow';
	// e.target.getAttribute('class');
})


tombol.addEventListener('click', function(e)
{
	let udb = e.target.dataset.u;
	let pdb = e.target.dataset.p;
let u = document.querySelector('.username');
let p = document.querySelector('.password');
	let err = '';
	let type = '';
	e.preventDefault();
	if (u.value == "") {
		err = "username masih kosong";
		type = "alert-danger"
	}else {
		if (u.value.toLowerCase() == udb){
		if(p.value.toLowerCase() == pdb)
		{
			err = "Username dan passwod Benar";
			type = "alert-success";
			setTimeout(function(){
				document.location.href = "admin.html";
			}, 500)
		}
		else {
			err = "passwod Salah"; 
			type = "alert-danger";
		}
	} else {
		err = 'Username salah';
		type = "alert-danger";
	}
	}

	let pa = document.querySelector('.pesan');
	pa.classList.add('alert');
	pa.classList.add(type);
	pa.textContent = err;
	
})

document.addEventListener('keyup', function(e)
	{
		// console.log(e.keyCode)
		if (e.ctrlKey) {
			if(e.keyCode == 77)
			{
				window.open("login.html");
			}
		}
	})