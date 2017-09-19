<?php

include $_SERVER['DOCUMENT_ROOT'] . '/inc/functions.php';

$dir = getcwd();
$files = scandir($dir);
sort($files);
$exclude = ['.', 'index.php'];
$files = array_diff($files, $exclude);

$url = (isset($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$host = (isset($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . get_domain($url);

$parent_url_arr = explode('/', $url);
unset($parent_url_arr[count($parent_url_arr)-2]);
$parent_url = implode('/', $parent_url_arr);

if (filter_var($parent_url, FILTER_VALIDATE_URL) === FALSE) $parent_url = $host;

?>

<!DOCTYPE html>
<html>
<head>
	<title>List directory</title>
	<link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700|IM+Fell+Double+Pica:400italic|Overpass+Mono:400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="<?= $host . '/css/reset.css' ?>">
	<link rel="stylesheet" type="text/css" href="<?= $host . '/css/dir.css' ?>">
</head>
<body>
	<section class="directories">
		<ul>
		<?php foreach($files as $file): ?>
			<?php if ($file == '..'): ?>
				<li><a href="<?= $parent_url ?>"><?= $file ?></a></li>
			<?php else: ?>
				<li><a href="<?= $file ?>"><?= $file ?></a></li>
			<?php endif; ?>
			
		<?php endforeach; ?>
		</ul>
	</section>

	<footer>
		<div class="tooltip tooltip--narvi" data-type="narvi">
			<div class="tooltip__trigger" role="tooltip" aria-describedby="info-narvi">
				<a href="mailto:hello@arnedecant.be" class="tooltip__trigger-text">Contact</a>
			</div>
			<div class="tooltip__base">
				<svg class="tooltip__shape" width="100%" height="100%" viewBox="0 0 400 300">
					<path class="path-narvi" d="M 307,150 199,212 92.5,274 92.7,150 92.5,26.2 200,88.4 Z"/>
				</svg>
				<div class="tooltip__content" id="info-narvi">Life isn't about finding yourself. Life is about creating yourself.</div>
			</div>
		</div>
	</footer>

	<script src="/js/modernizr.js"></script>
	<script src="/js/jquery-2.1.4.js"></script>
	<script src="/js/anime.min.js"></script>
	<script src="/js/charming.min.js"></script>
	<script src="/js/Tooltip.js"></script>
	<script src="/js/dir.js"></script>
</body>
</html>