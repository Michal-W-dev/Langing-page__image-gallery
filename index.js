$(function() {
	$(document).scroll(function() {
		$('#mainNavbar').toggleClass('scrolled', $(this).scrollTop() > $('#mainNavbar').height());
	});
});

const imgsArr = [
	{
		sm: 'assets/imgs/1.png',
		lg: 'assets/imgs/1lg.png',
		vlg: 'assets/imgs/1.jpg'
	},
	{
		sm: 'assets/imgs/2.png',
		lg: 'assets/imgs/2lg.png',
		vlg: 'assets/imgs/2.jpg'
	},
	{
		sm: 'assets/imgs/3.png',
		lg: 'assets/imgs/3lg.png',
		vlg: 'assets/imgs/3.jpg'
	},
	{
		sm: 'assets/imgs/4.png',
		lg: 'assets/imgs/4lg.png',
		vlg: 'assets/imgs/4.jpg'
	},
	{
		sm: 'assets/imgs/5.png',
		lg: 'assets/imgs/5lg.png',
		vlg: 'assets/imgs/5.jpg'
	},
	{
		sm: 'assets/imgs/6.png',
		lg: 'assets/imgs/6lg.png',
		vlg: 'assets/imgs/6.jpg'
	},
	{
		sm: 'assets/imgs/7.png',
		lg: 'assets/imgs/7lg.png',
		vlg: 'assets/imgs/7.jpg'
	},
	{
		sm: 'assets/imgs/8.png',
		lg: 'assets/imgs/8lg.png',
		vlg: 'assets/imgs/8.jpg'
	},
	{
		sm: 'assets/imgs/9.png',
		lg: 'assets/imgs/9lg.png',
		vlg: 'assets/imgs/9.jpg'
	}
];

for (let image of imgsArr) {
	const { sm, lg } = image;

	$('div.row').append(
		`<div class="col-lg-4 col-md-6 my-2 ">
			<div class="card">	
				 <img class="card-img-top" src=${sm}>
				 <img class="enlarge-image hidden" src=${lg}>
				 <i class="far fa-times-circle fa-3x hidden"></i>
				 <i class="fa fa-camera"></i>
		 		<div class="card-body py-3">
				 	<span>First thing</span>
		 			<span class="float-right">
		  				<a class="btn btn-outline-success btn-sm" href="">Download</a>
		 		 		<a class="btn btn-outline-danger btn-sm" href=""><i class="far fa-heart"></i></a>
					</span>
				</div>
			</div>
		</div>`
	);
}
$('.card:first').css('border', '4px solid slateblue');
// document.querySelectorAll('.card')[0].style.border = '4px solid slateblue';

$('.card-img-top, .fa-camera').on('click', clickImage);

$('.enlarge-image, .fa-times-circle').on('click', function() {
	$('.enlarge-image, .fa-times-circle').addClass('hidden');
	// this.classList.add('hidden');
});

function clickImage() {
	const source = $(this).parent().children('.card-img-top').attr('src').slice(0, -3) + 'jpg';
	$(this).parent().children('.enlarge-image').removeClass('hidden');
	setTimeout(() => {
		$(this).parent().children('.fa-times-circle').removeClass('hidden');
	}, 400);
	$('.jumbotron').css({
		background: 'url(' + source + ') 50% 85%',
		backgroundSize: 'cover'
	});
	$('.card').css('border', '1px solid crimson');
	$(this).parent().css('border', '4px solid slateblue');
}
