<?php
	$dbconn = pg_connect("host=localhost dbname=fp_sig_zevi user=postgres password=admin")
	or die('Could not connect: ' . pg_last_error());

	$x1=$_GET['x1'];
	$y1=$_GET['y1'];
	$resto=$_GET['resto'];

	$x2 = "SELECT x FROM resto where id = $resto";
	$y2 = "SELECT y FROM resto where id = $resto";

	$result = pg_query($x2) or die('Query failed: ' . pg_last_error());
	$x2 = pg_fetch_array($result, null, PGSQL_ASSOC);

	$result = pg_query($y2) or die('Query failed: ' . pg_last_error());
	$y2 = pg_fetch_array($result, null, PGSQL_ASSOC);

	$pos1 = $x2['x'];
	$pos2 = $y2['y'];
	
	$query = "SELECT ST_AsGeoJSON(ST_UNION(row.geom)) AS geojson FROM (SELECT * FROM pgr_normalroute('backup_ways',".$x1.",".$y1.",".$pos1.",".$pos2.")) AS row WHERE row.gid IS NOT NULL";
	$result = pg_query($query) or die('Query failed: ' . pg_last_error());
	$astarl = pg_fetch_array($result, null, PGSQL_ASSOC);	
	$astar=json_decode($astarl['geojson']);

	$final = array(		
		"astar" => $astar,
	);
	echo (json_encode($final));


