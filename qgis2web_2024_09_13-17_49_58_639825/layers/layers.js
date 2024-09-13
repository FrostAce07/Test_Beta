var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_wilayah_1 = new ol.format.GeoJSON();
var features_wilayah_1 = format_wilayah_1.readFeatures(json_wilayah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wilayah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wilayah_1.addFeatures(features_wilayah_1);
var lyr_wilayah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wilayah_1, 
                style: style_wilayah_1,
                popuplayertitle: "wilayah",
                interactive: true,
                title: '<img src="styles/legend/wilayah_1.png" /> wilayah'
            });
var format_Waypoints5Waypoints_2 = new ol.format.GeoJSON();
var features_Waypoints5Waypoints_2 = format_Waypoints5Waypoints_2.readFeatures(json_Waypoints5Waypoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waypoints5Waypoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints5Waypoints_2.addFeatures(features_Waypoints5Waypoints_2);
var lyr_Waypoints5Waypoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints5Waypoints_2, 
                style: style_Waypoints5Waypoints_2,
                popuplayertitle: "Waypoints (5) — Waypoints",
                interactive: true,
                title: '<img src="styles/legend/Waypoints5Waypoints_2.png" /> Waypoints (5) — Waypoints'
            });
var format_buffffffer_3 = new ol.format.GeoJSON();
var features_buffffffer_3 = format_buffffffer_3.readFeatures(json_buffffffer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffffffer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffffffer_3.addFeatures(features_buffffffer_3);
var lyr_buffffffer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffffffer_3, 
                style: style_buffffffer_3,
                popuplayertitle: "buffffffer",
                interactive: true,
                title: '<img src="styles/legend/buffffffer_3.png" /> buffffffer'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_wilayah_1.setVisible(true);lyr_Waypoints5Waypoints_2.setVisible(true);lyr_buffffffer_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_wilayah_1,lyr_Waypoints5Waypoints_2,lyr_buffffffer_3];
lyr_wilayah_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Waypoints5Waypoints_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_buffffffer_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_wilayah_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Waypoints5Waypoints_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_buffffffer_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_wilayah_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Waypoints5Waypoints_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_buffffffer_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_buffffffer_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});