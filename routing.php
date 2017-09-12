<?php

$root = $_SERVER['DOCUMENT_ROOT'];
chdir($root);
$path = '/'.ltrim(parse_url($_SERVER['REQUEST_URI'])['path'],'/');

/*
set_include_path(get_include_path().':'.__DIR__);

if(file_exists($root.$path))
{
	if(is_dir($root.$path) && substr($path,strlen($path) - 1, 1) !== '/')
		$path = rtrim($path,'/').'/index.php';
	if(strpos($path,'.php') === false) return false;
	else {
		chdir(dirname($root.$path));
		require_once $root.$path;
	}
}else include_once 'index.php';
*/

/*
if (preg_match('/\.(?:css)/', $path, $matches)) {
	return false;
}
*/

// Do some URL rewriting
if (preg_match('/\/([_0-9a-zA-Z-]+\/)?(wp-.*)/', $path, $matches)) {
    $path = '/' . $matches[2];
    if (file_exists($root . $path) && is_file($root . $path) && !strpos($path, ".php")) {
        // The rewritten path is to a non-PHP file.  It's probably a static asset
        // or theme asset.  Load the file and return it.

        if(!strpos($path, ".css"))
        {
     	   header("Content-Type: " . mime_content_type($matches[2]));
    	}
    	else
    	{
    		header("Content-Type: text/css; charset=utf-8");
    	}
        return readfile($root . $path);
    }
}
if (preg_match('/\/([_0-9a-zA-Z-]+\/)?(.*\.php)\/+$/', $path, $matches)) {
    // The path is to some PHP file.  Remove the leading blog prefix.
    // Logic below will load this PHP file.
    $path = '/' . $matches[2];
}
set_include_path(get_include_path().':'.__DIR__);
if (file_exists($root.$path)) {
    if (is_dir($root.$path))
        $path = rtrim($path,'/').'/index.php';
        if (strpos($path,'.php') === false)
        return false;
    else {
        chdir(dirname($root.$path));
        require_once $root.$path;
    }
} else {
    include_once 'index.php';
}

?>