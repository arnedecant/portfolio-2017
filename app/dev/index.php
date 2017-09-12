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