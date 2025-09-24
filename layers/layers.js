var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Auslastungsanlagen_1 = new ol.format.GeoJSON();
var features_Auslastungsanlagen_1 = format_Auslastungsanlagen_1.readFeatures(json_Auslastungsanlagen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Auslastungsanlagen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Auslastungsanlagen_1.addFeatures(features_Auslastungsanlagen_1);
var lyr_Auslastungsanlagen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Auslastungsanlagen_1, 
                style: style_Auslastungsanlagen_1,
                popuplayertitle: 'Auslastungsanlagen',
                interactive: true,
                title: '<img src="styles/legend/Auslastungsanlagen_1.png" /> Auslastungsanlagen'
            });
var format_Gemeinden_2 = new ol.format.GeoJSON();
var features_Gemeinden_2 = format_Gemeinden_2.readFeatures(json_Gemeinden_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemeinden_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemeinden_2.addFeatures(features_Gemeinden_2);
var lyr_Gemeinden_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gemeinden_2, 
                style: style_Gemeinden_2,
                popuplayertitle: 'Gemeinden',
                interactive: true,
                title: '<img src="styles/legend/Gemeinden_2.png" /> Gemeinden'
            });
var format_park_ridePoint_3 = new ol.format.GeoJSON();
var features_park_ridePoint_3 = format_park_ridePoint_3.readFeatures(json_park_ridePoint_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_ridePoint_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_ridePoint_3.addFeatures(features_park_ridePoint_3);
var lyr_park_ridePoint_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_park_ridePoint_3, 
                style: style_park_ridePoint_3,
                popuplayertitle: 'park_ridePoint',
                interactive: true,
    title: 'park_ridePoint<br />\
    <img src="styles/legend/park_ridePoint_3_0.png" /> Fahrradabstell<br />\
    <img src="styles/legend/park_ridePoint_3_1.png" /> Fahrradboxzugang<br />\
    <img src="styles/legend/park_ridePoint_3_2.png" /> Nextbikezugang<br />\
    <img src="styles/legend/park_ridePoint_3_3.png" /> E-Ladesäulen<br />\
    <img src="styles/legend/park_ridePoint_3_4.png" /> Carsharing-Zugang<br />\
    <img src="styles/legend/park_ridePoint_3_5.png" /> <br />' });
var format_park_ridePoint_Auslastung_4 = new ol.format.GeoJSON();
var features_park_ridePoint_Auslastung_4 = format_park_ridePoint_Auslastung_4.readFeatures(json_park_ridePoint_Auslastung_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_ridePoint_Auslastung_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_ridePoint_Auslastung_4.addFeatures(features_park_ridePoint_Auslastung_4);
var lyr_park_ridePoint_Auslastung_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_park_ridePoint_Auslastung_4, 
                style: style_park_ridePoint_Auslastung_4,
                popuplayertitle: 'park_ridePoint_Auslastung',
                interactive: true,
    title: 'park_ridePoint_Auslastung<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_4_0.png" /> 27,8 - 50<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_4_1.png" /> 50 - 75<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_4_2.png" /> 75 - 85<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_4_3.png" /> 85 - 93,2<br />' });
var format_park_ridePoint_5 = new ol.format.GeoJSON();
var features_park_ridePoint_5 = format_park_ridePoint_5.readFeatures(json_park_ridePoint_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_ridePoint_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_ridePoint_5.addFeatures(features_park_ridePoint_5);
var lyr_park_ridePoint_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_park_ridePoint_5, 
                style: style_park_ridePoint_5,
                popuplayertitle: 'park_ridePoint',
                interactive: true,
    title: 'park_ridePoint<br />\
    <img src="styles/legend/park_ridePoint_5_0.png" /> Fahrradabstell<br />\
    <img src="styles/legend/park_ridePoint_5_1.png" /> Fahrradboxzugang<br />\
    <img src="styles/legend/park_ridePoint_5_2.png" /> Nextbikezugang<br />\
    <img src="styles/legend/park_ridePoint_5_3.png" /> Keine Abstellmöglichkeit<br />' });
var format_park_ridePoint_6 = new ol.format.GeoJSON();
var features_park_ridePoint_6 = format_park_ridePoint_6.readFeatures(json_park_ridePoint_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_ridePoint_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_ridePoint_6.addFeatures(features_park_ridePoint_6);
var lyr_park_ridePoint_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_park_ridePoint_6, 
                style: style_park_ridePoint_6,
                popuplayertitle: 'park_ridePoint',
                interactive: true,
    title: 'park_ridePoint<br />\
    <img src="styles/legend/park_ridePoint_6_0.png" /> Ja<br />\
    <img src="styles/legend/park_ridePoint_6_1.png" /> Nein<br />\
    <img src="styles/legend/park_ridePoint_6_2.png" /> <br />' });
var format_park_ridePoint_7 = new ol.format.GeoJSON();
var features_park_ridePoint_7 = format_park_ridePoint_7.readFeatures(json_park_ridePoint_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_ridePoint_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_ridePoint_7.addFeatures(features_park_ridePoint_7);
var lyr_park_ridePoint_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_park_ridePoint_7, 
                style: style_park_ridePoint_7,
                popuplayertitle: 'park_ridePoint',
                interactive: true,
    title: 'park_ridePoint<br />\
    <img src="styles/legend/park_ridePoint_7_0.png" /> -1 - 0<br />\
    <img src="styles/legend/park_ridePoint_7_1.png" /> 0 - 25<br />\
    <img src="styles/legend/park_ridePoint_7_2.png" /> 25 - 50<br />\
    <img src="styles/legend/park_ridePoint_7_3.png" /> 50 - 100<br />\
    <img src="styles/legend/park_ridePoint_7_4.png" /> 100 - 150<br />\
    <img src="styles/legend/park_ridePoint_7_5.png" /> 150 - 570<br />' });
var format_park_ridePoint_Auslastung_8 = new ol.format.GeoJSON();
var features_park_ridePoint_Auslastung_8 = format_park_ridePoint_Auslastung_8.readFeatures(json_park_ridePoint_Auslastung_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_ridePoint_Auslastung_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_ridePoint_Auslastung_8.addFeatures(features_park_ridePoint_Auslastung_8);
var lyr_park_ridePoint_Auslastung_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_park_ridePoint_Auslastung_8, 
                style: style_park_ridePoint_Auslastung_8,
                popuplayertitle: 'park_ridePoint_Auslastung',
                interactive: true,
    title: 'park_ridePoint_Auslastung<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_8_0.png" /> 4,2 - 15,0<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_8_1.png" /> 15,0 - 30,0<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_8_2.png" /> 30,0 - 45,0<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_8_3.png" /> 45 - 50<br />' });
var format_park_ridePoint_Auslastung_9 = new ol.format.GeoJSON();
var features_park_ridePoint_Auslastung_9 = format_park_ridePoint_Auslastung_9.readFeatures(json_park_ridePoint_Auslastung_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_ridePoint_Auslastung_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_ridePoint_Auslastung_9.addFeatures(features_park_ridePoint_Auslastung_9);
var lyr_park_ridePoint_Auslastung_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_park_ridePoint_Auslastung_9, 
                style: style_park_ridePoint_Auslastung_9,
                popuplayertitle: 'park_ridePoint_Auslastung',
                interactive: true,
    title: 'park_ridePoint_Auslastung<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_9_0.png" /> 4,2 - 15<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_9_1.png" /> 15 - 30<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_9_2.png" /> 30 - 45<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_9_3.png" /> 45 - 50<br />' });
var format_park_ridePoint_10 = new ol.format.GeoJSON();
var features_park_ridePoint_10 = format_park_ridePoint_10.readFeatures(json_park_ridePoint_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_ridePoint_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_ridePoint_10.addFeatures(features_park_ridePoint_10);
var lyr_park_ridePoint_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_park_ridePoint_10, 
                style: style_park_ridePoint_10,
                popuplayertitle: 'park_ridePoint',
                interactive: true,
    title: 'park_ridePoint<br />\
    <img src="styles/legend/park_ridePoint_10_0.png" /> 2 - 4<br />\
    <img src="styles/legend/park_ridePoint_10_1.png" /> 4 - 9<br />\
    <img src="styles/legend/park_ridePoint_10_2.png" /> 9 - 16<br />\
    <img src="styles/legend/park_ridePoint_10_3.png" /> 16 - 29<br />\
    <img src="styles/legend/park_ridePoint_10_4.png" /> 29 - 50<br />' });
var format_park_ridePoint_Auslastung_11 = new ol.format.GeoJSON();
var features_park_ridePoint_Auslastung_11 = format_park_ridePoint_Auslastung_11.readFeatures(json_park_ridePoint_Auslastung_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_ridePoint_Auslastung_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_ridePoint_Auslastung_11.addFeatures(features_park_ridePoint_Auslastung_11);
var lyr_park_ridePoint_Auslastung_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_park_ridePoint_Auslastung_11, 
                style: style_park_ridePoint_Auslastung_11,
                popuplayertitle: 'park_ridePoint_Auslastung',
                interactive: true,
    title: 'park_ridePoint_Auslastung<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_11_0.png" /> 11,5 - 30<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_11_1.png" /> 30 - 45<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_11_2.png" /> 45 - 60<br />\
    <img src="styles/legend/park_ridePoint_Auslastung_11_3.png" /> 60 - 61,8<br />' });
var format_Schienenstrecken_12 = new ol.format.GeoJSON();
var features_Schienenstrecken_12 = format_Schienenstrecken_12.readFeatures(json_Schienenstrecken_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schienenstrecken_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schienenstrecken_12.addFeatures(features_Schienenstrecken_12);
var lyr_Schienenstrecken_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schienenstrecken_12, 
                style: style_Schienenstrecken_12,
                popuplayertitle: 'Schienenstrecken',
                interactive: true,
    title: 'Schienenstrecken<br />\
    <img src="styles/legend/Schienenstrecken_12_0.png" /> light_rail<br />\
    <img src="styles/legend/Schienenstrecken_12_1.png" /> rail<br />\
    <img src="styles/legend/Schienenstrecken_12_2.png" /> tram<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Auslastungsanlagen_1.setVisible(true);lyr_Gemeinden_2.setVisible(true);lyr_park_ridePoint_3.setVisible(true);lyr_park_ridePoint_Auslastung_4.setVisible(true);lyr_park_ridePoint_5.setVisible(true);lyr_park_ridePoint_6.setVisible(true);lyr_park_ridePoint_7.setVisible(true);lyr_park_ridePoint_Auslastung_8.setVisible(true);lyr_park_ridePoint_Auslastung_9.setVisible(true);lyr_park_ridePoint_10.setVisible(true);lyr_park_ridePoint_Auslastung_11.setVisible(true);lyr_Schienenstrecken_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Auslastungsanlagen_1,lyr_Gemeinden_2,lyr_park_ridePoint_3,lyr_park_ridePoint_Auslastung_4,lyr_park_ridePoint_5,lyr_park_ridePoint_6,lyr_park_ridePoint_7,lyr_park_ridePoint_Auslastung_8,lyr_park_ridePoint_Auslastung_9,lyr_park_ridePoint_10,lyr_park_ridePoint_Auslastung_11,lyr_Schienenstrecken_12];
lyr_Auslastungsanlagen_1.set('fieldAliases', {'id': 'id', 'Objektiden': 'Objektiden', 'BeginnLebe': 'BeginnLebe', 'Admin_Eben': 'Admin_Eben', 'ADE': 'ADE', 'Geofaktor_': 'Geofaktor_', 'GF': 'GF', 'Besondere_': 'Besondere_', 'BSG': 'BSG', 'Regionalsc': 'Regionalsc', 'Gemeindesc': 'Gemeindesc', 'Verwaltung': 'Verwaltung', 'Geografisc': 'Geografisc', 'Bezeichnun': 'Bezeichnun', 'Identifika': 'Identifika', 'Bemerkung': 'Bemerkung', 'Namensbild': 'Namensbild', 'NBD': 'NBD', 'Land': 'Land', 'Regierungs': 'Regierungs', 'Kreis': 'Kreis', 'Verwaltu_1': 'Verwaltu_1', 'Verwaltu_2': 'Verwaltu_2', 'Gemeinde': 'Gemeinde', 'Funk_Schl?': 'Funk_Schl?', 'FK_S3': 'FK_S3', 'Europ_Stat': 'Europ_Stat', 'Regioschl?': 'Regioschl?', 'Gemeinde_1': 'Gemeinde_1', 'Wirksamkei': 'Wirksamkei', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', 'auxiliar_3': 'auxiliar_3', 'auxiliar_4': 'auxiliar_4', 'auxiliar_5': 'auxiliar_5', 'OBJECTID': 'OBJECTID', 'NUMMER': 'NUMMER', 'NAME': 'NAME', 'FLAECHE': 'FLAECHE', 'BEVD': 'BEVD', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'Funk_Schl�': 'Funk_Schl�', 'Regioschl�': 'Regioschl�', 'area_total': 'area_total', 'layer': 'layer', 'path': 'path', });
lyr_Gemeinden_2.set('fieldAliases', {'id': 'id', 'Objektiden': 'Objektiden', 'BeginnLebe': 'BeginnLebe', 'Admin_Eben': 'Admin_Eben', 'ADE': 'ADE', 'Geofaktor_': 'Geofaktor_', 'GF': 'GF', 'Besondere_': 'Besondere_', 'BSG': 'BSG', 'Regionalsc': 'Regionalsc', 'Gemeindesc': 'Gemeindesc', 'Verwaltung': 'Verwaltung', 'Geografisc': 'Geografisc', 'Bezeichnun': 'Bezeichnun', 'Identifika': 'Identifika', 'Bemerkung': 'Bemerkung', 'Namensbild': 'Namensbild', 'NBD': 'NBD', 'Land': 'Land', 'Regierungs': 'Regierungs', 'Kreis': 'Kreis', 'Verwaltu_1': 'Verwaltu_1', 'Verwaltu_2': 'Verwaltu_2', 'Gemeinde': 'Gemeinde', 'Funk_Schl�': 'Funk_Schl�', 'FK_S3': 'FK_S3', 'Europ_Stat': 'Europ_Stat', 'Regioschl�': 'Regioschl�', 'Gemeinde_1': 'Gemeinde_1', 'Wirksamkei': 'Wirksamkei', 'Beschriftu': 'Beschriftu', });
lyr_park_ridePoint_3.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_park_ridePoint_Auslastung_4.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'ÖPNV SPFV': 'ÖPNV SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Du.Au.We1': 'Du.Au.We1', 'Du.Au.We2': 'Du.Au.We2', 'Du.Au.Sa1': 'Du.Au.Sa1', 'Du.Au.Sa2': 'Du.Au.Sa2', 'DiffRadAu5': 'DiffRadAu5', 'DiffRadA10': 'DiffRadA10', 'DiffRadA15': 'DiffRadA15', 'Statis_Arb': 'Statis_Arb', 'Berufsp_Qu': 'Berufsp_Qu', 'Einwohner': 'Einwohner', 'mo_We_Quel': 'mo_We_Quel', 'mo_We_Ziel': 'mo_We_Ziel', 'mo_We_Q+Zi': 'mo_We_Q+Zi', 'mo_Sa_Quel': 'mo_Sa_Quel', 'mo_Sa_Ziel': 'mo_Sa_Ziel', 'mo_Sa_Q+Zi': 'mo_Sa_Q+Zi', 'Ver_mo_Q_Z': 'Ver_mo_Q_Z', 'Ver_mo_W_S': 'Ver_mo_W_S', 'For_Arbeit': 'For_Arbeit', 'Ver_Ei_Arb': 'Ver_Ei_Arb', 'Carsh_Fahr': 'Carsh_Fahr', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', });
lyr_park_ridePoint_5.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_park_ridePoint_6.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_park_ridePoint_7.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_park_ridePoint_Auslastung_8.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'ÖPNV SPFV': 'ÖPNV SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Du.Au.We1': 'Du.Au.We1', 'Du.Au.We2': 'Du.Au.We2', 'Du.Au.Sa1': 'Du.Au.Sa1', 'Du.Au.Sa2': 'Du.Au.Sa2', 'DiffRadAu5': 'DiffRadAu5', 'DiffRadA10': 'DiffRadA10', 'DiffRadA15': 'DiffRadA15', 'Statis_Arb': 'Statis_Arb', 'Berufsp_Qu': 'Berufsp_Qu', 'Einwohner': 'Einwohner', 'mo_We_Quel': 'mo_We_Quel', 'mo_We_Ziel': 'mo_We_Ziel', 'mo_We_Q+Zi': 'mo_We_Q+Zi', 'mo_Sa_Quel': 'mo_Sa_Quel', 'mo_Sa_Ziel': 'mo_Sa_Ziel', 'mo_Sa_Q+Zi': 'mo_Sa_Q+Zi', 'Ver_mo_Q_Z': 'Ver_mo_Q_Z', 'Ver_mo_W_S': 'Ver_mo_W_S', 'For_Arbeit': 'For_Arbeit', 'Ver_Ei_Arb': 'Ver_Ei_Arb', 'Carsh_Fahr': 'Carsh_Fahr', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', });
lyr_park_ridePoint_Auslastung_9.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'ÖPNV SPFV': 'ÖPNV SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Du.Au.We1': 'Du.Au.We1', 'Du.Au.We2': 'Du.Au.We2', 'Du.Au.Sa1': 'Du.Au.Sa1', 'Du.Au.Sa2': 'Du.Au.Sa2', 'DiffRadAu5': 'DiffRadAu5', 'DiffRadA10': 'DiffRadA10', 'DiffRadA15': 'DiffRadA15', 'Statis_Arb': 'Statis_Arb', 'Berufsp_Qu': 'Berufsp_Qu', 'Einwohner': 'Einwohner', 'mo_We_Quel': 'mo_We_Quel', 'mo_We_Ziel': 'mo_We_Ziel', 'mo_We_Q+Zi': 'mo_We_Q+Zi', 'mo_Sa_Quel': 'mo_Sa_Quel', 'mo_Sa_Ziel': 'mo_Sa_Ziel', 'mo_Sa_Q+Zi': 'mo_Sa_Q+Zi', 'Ver_mo_Q_Z': 'Ver_mo_Q_Z', 'Ver_mo_W_S': 'Ver_mo_W_S', 'For_Arbeit': 'For_Arbeit', 'Ver_Ei_Arb': 'Ver_Ei_Arb', 'Carsh_Fahr': 'Carsh_Fahr', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', });
lyr_park_ridePoint_10.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_park_ridePoint_Auslastung_11.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'ÖPNV SPFV': 'ÖPNV SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Du.Au.We1': 'Du.Au.We1', 'Du.Au.We2': 'Du.Au.We2', 'Du.Au.Sa1': 'Du.Au.Sa1', 'Du.Au.Sa2': 'Du.Au.Sa2', 'DiffRadAu5': 'DiffRadAu5', 'DiffRadA10': 'DiffRadA10', 'DiffRadA15': 'DiffRadA15', 'Statis_Arb': 'Statis_Arb', 'Berufsp_Qu': 'Berufsp_Qu', 'Einwohner': 'Einwohner', 'mo_We_Quel': 'mo_We_Quel', 'mo_We_Ziel': 'mo_We_Ziel', 'mo_We_Q+Zi': 'mo_We_Q+Zi', 'mo_Sa_Quel': 'mo_Sa_Quel', 'mo_Sa_Ziel': 'mo_Sa_Ziel', 'mo_Sa_Q+Zi': 'mo_Sa_Q+Zi', 'Ver_mo_Q_Z': 'Ver_mo_Q_Z', 'Ver_mo_W_S': 'Ver_mo_W_S', 'For_Arbeit': 'For_Arbeit', 'Ver_Ei_Arb': 'Ver_Ei_Arb', 'Carsh_Fahr': 'Carsh_Fahr', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', });
lyr_Schienenstrecken_12.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'path': 'path', });
lyr_Auslastungsanlagen_1.set('fieldImages', {'id': 'TextEdit', 'Objektiden': 'TextEdit', 'BeginnLebe': 'TextEdit', 'Admin_Eben': 'TextEdit', 'ADE': 'TextEdit', 'Geofaktor_': 'TextEdit', 'GF': 'TextEdit', 'Besondere_': 'TextEdit', 'BSG': 'TextEdit', 'Regionalsc': 'TextEdit', 'Gemeindesc': 'TextEdit', 'Verwaltung': 'TextEdit', 'Geografisc': 'TextEdit', 'Bezeichnun': 'TextEdit', 'Identifika': 'TextEdit', 'Bemerkung': 'TextEdit', 'Namensbild': 'TextEdit', 'NBD': 'TextEdit', 'Land': 'TextEdit', 'Regierungs': 'TextEdit', 'Kreis': 'TextEdit', 'Verwaltu_1': 'TextEdit', 'Verwaltu_2': 'TextEdit', 'Gemeinde': 'TextEdit', 'Funk_Schl?': 'TextEdit', 'FK_S3': 'TextEdit', 'Europ_Stat': 'TextEdit', 'Regioschl?': 'TextEdit', 'Gemeinde_1': 'TextEdit', 'Wirksamkei': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', 'auxiliar_2': 'TextEdit', 'auxiliar_3': 'TextEdit', 'auxiliar_4': 'TextEdit', 'auxiliar_5': 'TextEdit', 'OBJECTID': 'TextEdit', 'NUMMER': 'TextEdit', 'NAME': 'TextEdit', 'FLAECHE': 'TextEdit', 'BEVD': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'Funk_Schl�': 'TextEdit', 'Regioschl�': 'TextEdit', 'area_total': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Gemeinden_2.set('fieldImages', {'id': 'TextEdit', 'Objektiden': 'TextEdit', 'BeginnLebe': 'TextEdit', 'Admin_Eben': 'TextEdit', 'ADE': 'TextEdit', 'Geofaktor_': 'TextEdit', 'GF': 'TextEdit', 'Besondere_': 'TextEdit', 'BSG': 'TextEdit', 'Regionalsc': 'TextEdit', 'Gemeindesc': 'TextEdit', 'Verwaltung': 'TextEdit', 'Geografisc': 'TextEdit', 'Bezeichnun': 'TextEdit', 'Identifika': 'TextEdit', 'Bemerkung': 'TextEdit', 'Namensbild': 'TextEdit', 'NBD': 'TextEdit', 'Land': 'TextEdit', 'Regierungs': 'TextEdit', 'Kreis': 'TextEdit', 'Verwaltu_1': 'TextEdit', 'Verwaltu_2': 'TextEdit', 'Gemeinde': 'TextEdit', 'Funk_Schl�': 'TextEdit', 'FK_S3': 'TextEdit', 'Europ_Stat': 'TextEdit', 'Regioschl�': 'TextEdit', 'Gemeinde_1': 'TextEdit', 'Wirksamkei': 'TextEdit', 'Beschriftu': 'TextEdit', });
lyr_park_ridePoint_3.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': '', 'Bestand': '', });
lyr_park_ridePoint_Auslastung_4.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': '', 'ÖPNVS-Bah': '', 'ÖPNV Bus': '', 'ÖPNV SPFV': '', 'ÖPNV Tram': '', 'ÖPNV StaK': '', 'ÖPNVRufta': '', 'ÖPNVOn-De': '', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': '', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Du.Au.We1': 'TextEdit', 'Du.Au.We2': 'TextEdit', 'Du.Au.Sa1': 'TextEdit', 'Du.Au.Sa2': 'TextEdit', 'DiffRadAu5': 'TextEdit', 'DiffRadA10': 'TextEdit', 'DiffRadA15': 'TextEdit', 'Statis_Arb': 'TextEdit', 'Berufsp_Qu': 'TextEdit', 'Einwohner': 'TextEdit', 'mo_We_Quel': 'TextEdit', 'mo_We_Ziel': 'TextEdit', 'mo_We_Q+Zi': 'TextEdit', 'mo_Sa_Quel': 'TextEdit', 'mo_Sa_Ziel': 'TextEdit', 'mo_Sa_Q+Zi': 'TextEdit', 'Ver_mo_Q_Z': 'TextEdit', 'Ver_mo_W_S': 'TextEdit', 'For_Arbeit': 'TextEdit', 'Ver_Ei_Arb': 'TextEdit', 'Carsh_Fahr': 'TextEdit', 'Anz_Fahrra': '', 'Art_Fahrra': '', });
lyr_park_ridePoint_5.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': '', 'Bestand': '', });
lyr_park_ridePoint_6.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_park_ridePoint_7.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': '', 'Anz_Fahrra': '', 'Art_Fahrra': '', 'Bundesland': '', 'Bestand': '', });
lyr_park_ridePoint_Auslastung_8.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': '', 'ÖPNVS-Bah': '', 'ÖPNV Bus': '', 'ÖPNV SPFV': '', 'ÖPNV Tram': '', 'ÖPNV StaK': '', 'ÖPNVRufta': '', 'ÖPNVOn-De': '', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': '', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Du.Au.We1': 'TextEdit', 'Du.Au.We2': 'TextEdit', 'Du.Au.Sa1': 'TextEdit', 'Du.Au.Sa2': 'TextEdit', 'DiffRadAu5': 'TextEdit', 'DiffRadA10': 'TextEdit', 'DiffRadA15': 'TextEdit', 'Statis_Arb': 'TextEdit', 'Berufsp_Qu': 'TextEdit', 'Einwohner': 'TextEdit', 'mo_We_Quel': 'TextEdit', 'mo_We_Ziel': 'TextEdit', 'mo_We_Q+Zi': 'TextEdit', 'mo_Sa_Quel': 'TextEdit', 'mo_Sa_Ziel': 'TextEdit', 'mo_Sa_Q+Zi': 'TextEdit', 'Ver_mo_Q_Z': 'TextEdit', 'Ver_mo_W_S': 'TextEdit', 'For_Arbeit': 'TextEdit', 'Ver_Ei_Arb': 'TextEdit', 'Carsh_Fahr': 'TextEdit', 'Anz_Fahrra': '', 'Art_Fahrra': '', });
lyr_park_ridePoint_Auslastung_9.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': '', 'ÖPNVS-Bah': '', 'ÖPNV Bus': '', 'ÖPNV SPFV': '', 'ÖPNV Tram': '', 'ÖPNV StaK': '', 'ÖPNVRufta': '', 'ÖPNVOn-De': '', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': '', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Du.Au.We1': 'TextEdit', 'Du.Au.We2': 'TextEdit', 'Du.Au.Sa1': 'TextEdit', 'Du.Au.Sa2': 'TextEdit', 'DiffRadAu5': 'TextEdit', 'DiffRadA10': 'TextEdit', 'DiffRadA15': 'TextEdit', 'Statis_Arb': 'TextEdit', 'Berufsp_Qu': 'TextEdit', 'Einwohner': 'TextEdit', 'mo_We_Quel': 'TextEdit', 'mo_We_Ziel': 'TextEdit', 'mo_We_Q+Zi': 'TextEdit', 'mo_Sa_Quel': 'TextEdit', 'mo_Sa_Ziel': 'TextEdit', 'mo_Sa_Q+Zi': 'TextEdit', 'Ver_mo_Q_Z': 'TextEdit', 'Ver_mo_W_S': 'TextEdit', 'For_Arbeit': 'TextEdit', 'Ver_Ei_Arb': 'TextEdit', 'Carsh_Fahr': 'TextEdit', 'Anz_Fahrra': '', 'Art_Fahrra': '', });
lyr_park_ridePoint_10.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': '', 'Anz_Fahrra': '', 'Art_Fahrra': '', 'Bundesland': '', 'Bestand': '', });
lyr_park_ridePoint_Auslastung_11.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': '', 'ÖPNVS-Bah': '', 'ÖPNV Bus': '', 'ÖPNV SPFV': '', 'ÖPNV Tram': '', 'ÖPNV StaK': '', 'ÖPNVRufta': '', 'ÖPNVOn-De': '', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': '', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Du.Au.We1': 'TextEdit', 'Du.Au.We2': 'TextEdit', 'Du.Au.Sa1': 'TextEdit', 'Du.Au.Sa2': 'TextEdit', 'DiffRadAu5': 'TextEdit', 'DiffRadA10': 'TextEdit', 'DiffRadA15': 'TextEdit', 'Statis_Arb': 'TextEdit', 'Berufsp_Qu': 'TextEdit', 'Einwohner': 'TextEdit', 'mo_We_Quel': 'TextEdit', 'mo_We_Ziel': 'TextEdit', 'mo_We_Q+Zi': 'TextEdit', 'mo_Sa_Quel': 'TextEdit', 'mo_Sa_Ziel': 'TextEdit', 'mo_Sa_Q+Zi': 'TextEdit', 'Ver_mo_Q_Z': 'TextEdit', 'Ver_mo_W_S': 'TextEdit', 'For_Arbeit': 'TextEdit', 'Ver_Ei_Arb': 'TextEdit', 'Carsh_Fahr': 'TextEdit', 'Anz_Fahrra': '', 'Art_Fahrra': '', });
lyr_Schienenstrecken_12.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'path': 'TextEdit', });
lyr_Auslastungsanlagen_1.set('fieldLabels', {'id': 'no label', 'Objektiden': 'no label', 'BeginnLebe': 'no label', 'Admin_Eben': 'no label', 'ADE': 'no label', 'Geofaktor_': 'no label', 'GF': 'no label', 'Besondere_': 'no label', 'BSG': 'no label', 'Regionalsc': 'no label', 'Gemeindesc': 'no label', 'Verwaltung': 'no label', 'Geografisc': 'no label', 'Bezeichnun': 'no label', 'Identifika': 'no label', 'Bemerkung': 'no label', 'Namensbild': 'no label', 'NBD': 'no label', 'Land': 'no label', 'Regierungs': 'no label', 'Kreis': 'no label', 'Verwaltu_1': 'no label', 'Verwaltu_2': 'no label', 'Gemeinde': 'no label', 'Funk_Schl?': 'no label', 'FK_S3': 'no label', 'Europ_Stat': 'no label', 'Regioschl?': 'no label', 'Gemeinde_1': 'no label', 'Wirksamkei': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'auxiliar_2': 'no label', 'auxiliar_3': 'no label', 'auxiliar_4': 'no label', 'auxiliar_5': 'no label', 'OBJECTID': 'no label', 'NUMMER': 'no label', 'NAME': 'no label', 'FLAECHE': 'no label', 'BEVD': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'Funk_Schl�': 'no label', 'Regioschl�': 'no label', 'area_total': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Gemeinden_2.set('fieldLabels', {'id': 'no label', 'Objektiden': 'no label', 'BeginnLebe': 'no label', 'Admin_Eben': 'no label', 'ADE': 'no label', 'Geofaktor_': 'no label', 'GF': 'no label', 'Besondere_': 'no label', 'BSG': 'no label', 'Regionalsc': 'no label', 'Gemeindesc': 'no label', 'Verwaltung': 'no label', 'Geografisc': 'no label', 'Bezeichnun': 'no label', 'Identifika': 'no label', 'Bemerkung': 'no label', 'Namensbild': 'no label', 'NBD': 'no label', 'Land': 'no label', 'Regierungs': 'no label', 'Kreis': 'no label', 'Verwaltu_1': 'no label', 'Verwaltu_2': 'no label', 'Gemeinde': 'no label', 'Funk_Schl�': 'no label', 'FK_S3': 'no label', 'Europ_Stat': 'no label', 'Regioschl�': 'no label', 'Gemeinde_1': 'no label', 'Wirksamkei': 'no label', 'Beschriftu': 'no label', });
lyr_park_ridePoint_3.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'bemerkung': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Fahrradb_n': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', 'Bundesland': 'no label', 'Bestand': 'no label', });
lyr_park_ridePoint_Auslastung_4.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'ÖPNV SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Du.Au.We1': 'no label', 'Du.Au.We2': 'no label', 'Du.Au.Sa1': 'no label', 'Du.Au.Sa2': 'no label', 'DiffRadAu5': 'no label', 'DiffRadA10': 'no label', 'DiffRadA15': 'no label', 'Statis_Arb': 'no label', 'Berufsp_Qu': 'no label', 'Einwohner': 'no label', 'mo_We_Quel': 'no label', 'mo_We_Ziel': 'no label', 'mo_We_Q+Zi': 'no label', 'mo_Sa_Quel': 'no label', 'mo_Sa_Ziel': 'no label', 'mo_Sa_Q+Zi': 'no label', 'Ver_mo_Q_Z': 'no label', 'Ver_mo_W_S': 'no label', 'For_Arbeit': 'no label', 'Ver_Ei_Arb': 'no label', 'Carsh_Fahr': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', });
lyr_park_ridePoint_5.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'bemerkung': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Fahrradb_n': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', 'Bundesland': 'no label', 'Bestand': 'no label', });
lyr_park_ridePoint_6.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'bemerkung': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Fahrradb_n': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', 'Bundesland': 'no label', 'Bestand': 'no label', });
lyr_park_ridePoint_7.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'bemerkung': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Fahrradb_n': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', 'Bundesland': 'no label', 'Bestand': 'no label', });
lyr_park_ridePoint_Auslastung_8.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'ÖPNV SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Du.Au.We1': 'no label', 'Du.Au.We2': 'no label', 'Du.Au.Sa1': 'no label', 'Du.Au.Sa2': 'no label', 'DiffRadAu5': 'no label', 'DiffRadA10': 'no label', 'DiffRadA15': 'no label', 'Statis_Arb': 'no label', 'Berufsp_Qu': 'no label', 'Einwohner': 'no label', 'mo_We_Quel': 'no label', 'mo_We_Ziel': 'no label', 'mo_We_Q+Zi': 'no label', 'mo_Sa_Quel': 'no label', 'mo_Sa_Ziel': 'no label', 'mo_Sa_Q+Zi': 'no label', 'Ver_mo_Q_Z': 'no label', 'Ver_mo_W_S': 'no label', 'For_Arbeit': 'no label', 'Ver_Ei_Arb': 'no label', 'Carsh_Fahr': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', });
lyr_park_ridePoint_Auslastung_9.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'ÖPNV SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Du.Au.We1': 'no label', 'Du.Au.We2': 'no label', 'Du.Au.Sa1': 'no label', 'Du.Au.Sa2': 'no label', 'DiffRadAu5': 'no label', 'DiffRadA10': 'no label', 'DiffRadA15': 'no label', 'Statis_Arb': 'no label', 'Berufsp_Qu': 'no label', 'Einwohner': 'no label', 'mo_We_Quel': 'no label', 'mo_We_Ziel': 'no label', 'mo_We_Q+Zi': 'no label', 'mo_Sa_Quel': 'no label', 'mo_Sa_Ziel': 'no label', 'mo_Sa_Q+Zi': 'no label', 'Ver_mo_Q_Z': 'no label', 'Ver_mo_W_S': 'no label', 'For_Arbeit': 'no label', 'Ver_Ei_Arb': 'no label', 'Carsh_Fahr': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', });
lyr_park_ridePoint_10.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'bemerkung': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Fahrradb_n': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', 'Bundesland': 'no label', 'Bestand': 'no label', });
lyr_park_ridePoint_Auslastung_11.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'ÖPNV SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Du.Au.We1': 'no label', 'Du.Au.We2': 'no label', 'Du.Au.Sa1': 'no label', 'Du.Au.Sa2': 'no label', 'DiffRadAu5': 'no label', 'DiffRadA10': 'no label', 'DiffRadA15': 'no label', 'Statis_Arb': 'no label', 'Berufsp_Qu': 'no label', 'Einwohner': 'no label', 'mo_We_Quel': 'no label', 'mo_We_Ziel': 'no label', 'mo_We_Q+Zi': 'no label', 'mo_Sa_Quel': 'no label', 'mo_Sa_Ziel': 'no label', 'mo_Sa_Q+Zi': 'no label', 'Ver_mo_Q_Z': 'no label', 'Ver_mo_W_S': 'no label', 'For_Arbeit': 'no label', 'Ver_Ei_Arb': 'no label', 'Carsh_Fahr': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', });
lyr_Schienenstrecken_12.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - always visible', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'path': 'no label', });
lyr_Schienenstrecken_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});