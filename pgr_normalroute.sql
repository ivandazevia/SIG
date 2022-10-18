create or replace function pgr_normalroute(IN tbl character varying,
variadic double precision[],
OUT seq integer,
OUT gid integer,
OUT name text,
OUT cost double precision,
OUT geom geometry,
OUT x double precision,
OUT y double precision)
RETURNS SETOF record AS
$body$
DECLARE
arrayLengthHalf integer;
a integer;
x1 double precision;
b integer;
y1 double precision;
sql_node text;
REC_ROUTE record;
source_var integer;
target_var integer;
node record;
sql_text text;
sql_dijkstra text;
rec_dijkstra record;

BEGIN
DROP TABLE if exists tmp;
CREATE TEMPORARY TABLE tmp(id integer, node_id integer, x double precision, y double precision);
arrayLengthHalf = (array_length($2,1))/2;
For i in 1..arrayLengthHalf Loop
a := i*2-1;
x1 := $2[a];
b := a+1;
y1 := $2[b];
RAISE NOTICE '%, %, %, %',a,x1,b,y1;
execute 'insert into tmp (id, node_id, x, y) select '||i||', id, st_x(the_geom)::double precision, st_y(the_geom)::double precision from ways_vertices_pgr ORDER BY the_geom <-> ST_GeometryFromText(''Point('||y1||' '||x1||')'',4326) limit 1;';
RAISE NOTICE 'masuk1';
End Loop;

sql_node := 'SELECT * FROM tmp';
seq := 0;
source_var := -1;
FOR REC_ROUTE IN EXECUTE sql_node
LOOP
RAISE NOTICE 'masuk';
If (source_var = -1) Then
execute 'select node_id from tmp where node_id='||REC_ROUTE.node_id||'' into node;
source_var := node.node_id;
Else
execute 'select node_id from tmp where node_id='||REC_ROUTE.node_id||'' into node;
target_var := node.node_id;
sql_text := 'SELECT b.gid, a.cost, b.the_geom, b.name, b.source, b.target, b.x1 AS x,b.y1 AS y FROM pgr_dijkstra(''SELECT gid::integer AS id, source::integer, target::integer , cost_clearroute AS cost, reverse_cost_s AS reverse_cost, x1, y1, x2, y2 FROM %I AS r JOIN configuration USING (tag_id), (SELECT ST_Expand(ST_Extent(the_geom),0.1) as box FROM backup_ways as l1 WHERE l1.source = '||source_var||' OR l1.target = ' || target_var ||')as box WHERE r.the_geom && box.box'','||source_var||','||target_var||', true, true) AS a LEFT JOIN %I AS b ON (a.id2=b.gid) ORDER BY a.seq';
RAISE NOTICE '%',source_var;
RAISE NOTICE '%',target_var;
select format(sql_text,tbl,tbl) into sql_dijkstra;
RAISE NOTICE '%',sql_dijkstra;
For rec_dijkstra in execute sql_dijkstra
Loop
seq := seq +1;
gid := rec_dijkstra.gid;
name :=rec_dijkstra.name;
cost := rec_dijkstra.cost;
geom := rec_dijkstra.the_geom;
x := rec_dijkstra.x;
y := rec_dijkstra.y;
RAISE NOTICE 'masuk3';
RETURN NEXT;
End Loop;
END IF;
END LOOP;
return;

end;
$body$
language plpgsql volatile STRICT;