<?php

$dir = getcwd();
$files = scandir($dir);
sort($files);
$exclude = ['.', '..', 'index.php'];
$files = array_diff($files, $exclude);

?>

<!DOCTYPE html>
<html>
<head>
	<title>List directory</title>
	<link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700|IM+Fell+Double+Pica:400italic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="/css/dir.css">
</head>
<body>
	<section class="directories">
		<ul>
		<?php foreach($files as $file): ?>
			<li><a href="<?= $file ?>"><?= $file ?></a></li>
		<?php endforeach; ?>
		</ul>
	</section>
</body>
</html>