<?php

function get_domain($url) {
  $pieces = parse_url($url);
  $domain = isset($pieces['host']) ? $pieces['host'] : '';
  if (preg_match('/(?P<domain>[a-z0-9][a-z0-9\-]{1,63}\.[a-z\.]{2,6})$/i', $domain, $regs)) {
    return $regs['domain'];
  }
  return false;
}

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
	<link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700|IM+Fell+Double+Pica:400italic' rel='stylesheet' type='text/css'>
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
</body>
</html>