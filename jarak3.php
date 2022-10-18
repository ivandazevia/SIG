<?php
	$dbconn = pg_connect("host=localhost dbname=fp_sig_zevi user=postgres password=admin")
	or die('Could not connect: ' . pg_last_error());

	$x1=$_GET['x1'];
	$y1=$_GET['y1'];

	$x2 = $_GET['x2'];
	$y2 = $_GET['y2'];

	$query = "SELECT ST_AsGeoJSON(ST_UNION(row.geom)) AS geojson FROM (SELECT * FROM pgr_normalroute('backup_ways',".$x1.",".$y1.",".$x2.",".$y2.")) AS row WHERE row.gid IS NOT NULL";

	$result = pg_query($query) or die('Query failed: ' . pg_last_error());
	$astarl = pg_fetch_array($result, null, PGSQL_ASSOC);
	
	$astar=json_decode($astarl['geojson']);
	$final = array(		
		"astar" => $astar,
	);

	$type_ = $final['astar'];
	$coor = $type_->coordinates;
	echo (count($coor));


