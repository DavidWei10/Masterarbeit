var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Untersuchungsgebiet_1 = new ol.format.GeoJSON();
var features_Untersuchungsgebiet_1 = format_Untersuchungsgebiet_1.readFeatures(json_Untersuchungsgebiet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Untersuchungsgebiet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Untersuchungsgebiet_1.addFeatures(features_Untersuchungsgebiet_1);
var lyr_Untersuchungsgebiet_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Untersuchungsgebiet_1, 
                style: style_Untersuchungsgebiet_1,
                popuplayertitle: 'Untersuchungsgebiet',
                interactive: false,
                title: '<img src="styles/legend/Untersuchungsgebiet_1.png" /> Untersuchungsgebiet'
            });
var format_GemeindenmitAuslastungserhebung_2 = new ol.format.GeoJSON();
var features_GemeindenmitAuslastungserhebung_2 = format_GemeindenmitAuslastungserhebung_2.readFeatures(json_GemeindenmitAuslastungserhebung_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GemeindenmitAuslastungserhebung_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GemeindenmitAuslastungserhebung_2.addFeatures(features_GemeindenmitAuslastungserhebung_2);
var lyr_GemeindenmitAuslastungserhebung_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GemeindenmitAuslastungserhebung_2, 
                style: style_GemeindenmitAuslastungserhebung_2,
                popuplayertitle: 'Gemeinden mit Auslastungserhebung',
                interactive: false,
                title: '<img src="styles/legend/GemeindenmitAuslastungserhebung_2.png" /> Gemeinden mit Auslastungserhebung'
            });
var format_Schienenverkehr_3 = new ol.format.GeoJSON();
var features_Schienenverkehr_3 = format_Schienenverkehr_3.readFeatures(json_Schienenverkehr_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schienenverkehr_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schienenverkehr_3.addFeatures(features_Schienenverkehr_3);
var lyr_Schienenverkehr_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schienenverkehr_3, 
                style: style_Schienenverkehr_3,
                popuplayertitle: 'Schienenverkehr',
                interactive: false,
    title: 'Schienenverkehr<br />\
    <img src="styles/legend/Schienenverkehr_3_0.png" /> Tram-Train<br />\
    <img src="styles/legend/Schienenverkehr_3_1.png" /> Straßenbahn<br />\
    <img src="styles/legend/Schienenverkehr_3_2.png" /> Eisenbahn<br />' });
var format_SamstagAuslastungAbend_4 = new ol.format.GeoJSON();
var features_SamstagAuslastungAbend_4 = format_SamstagAuslastungAbend_4.readFeatures(json_SamstagAuslastungAbend_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SamstagAuslastungAbend_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SamstagAuslastungAbend_4.addFeatures(features_SamstagAuslastungAbend_4);
var lyr_SamstagAuslastungAbend_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SamstagAuslastungAbend_4, 
                style: style_SamstagAuslastungAbend_4,
                popuplayertitle: 'Samstag Auslastung Abend',
                interactive: true,
    title: 'Samstag Auslastung Abend<br />\
    <img src="styles/legend/SamstagAuslastungAbend_4_0.png" /> 11,5 % - 30 %<br />\
    <img src="styles/legend/SamstagAuslastungAbend_4_1.png" /> 30 % - 45 %<br />\
    <img src="styles/legend/SamstagAuslastungAbend_4_2.png" /> 45 % - 60 %<br />\
    <img src="styles/legend/SamstagAuslastungAbend_4_3.png" /> 60 % - 61,8 %<br />' });
var format_SamstagAuslastungMorgen_5 = new ol.format.GeoJSON();
var features_SamstagAuslastungMorgen_5 = format_SamstagAuslastungMorgen_5.readFeatures(json_SamstagAuslastungMorgen_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SamstagAuslastungMorgen_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SamstagAuslastungMorgen_5.addFeatures(features_SamstagAuslastungMorgen_5);
var lyr_SamstagAuslastungMorgen_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SamstagAuslastungMorgen_5, 
                style: style_SamstagAuslastungMorgen_5,
                popuplayertitle: 'Samstag Auslastung Morgen',
                interactive: true,
    title: 'Samstag Auslastung Morgen<br />\
    <img src="styles/legend/SamstagAuslastungMorgen_5_0.png" /> 13,5 % - 25 %<br />\
    <img src="styles/legend/SamstagAuslastungMorgen_5_1.png" /> 25 % - 45 %<br />\
    <img src="styles/legend/SamstagAuslastungMorgen_5_2.png" /> 45 % - 65 %<br />\
    <img src="styles/legend/SamstagAuslastungMorgen_5_3.png" /> 65 % - 69,8 %<br />' });
var format_WerktagAuslastungAbend_6 = new ol.format.GeoJSON();
var features_WerktagAuslastungAbend_6 = format_WerktagAuslastungAbend_6.readFeatures(json_WerktagAuslastungAbend_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WerktagAuslastungAbend_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WerktagAuslastungAbend_6.addFeatures(features_WerktagAuslastungAbend_6);
var lyr_WerktagAuslastungAbend_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WerktagAuslastungAbend_6, 
                style: style_WerktagAuslastungAbend_6,
                popuplayertitle: 'Werktag Auslastung Abend',
                interactive: true,
    title: 'Werktag Auslastung Abend<br />\
    <img src="styles/legend/WerktagAuslastungAbend_6_0.png" /> 4,2 % - 15 %<br />\
    <img src="styles/legend/WerktagAuslastungAbend_6_1.png" /> 15 % - 30 %<br />\
    <img src="styles/legend/WerktagAuslastungAbend_6_2.png" /> 30 % - 45 %<br />\
    <img src="styles/legend/WerktagAuslastungAbend_6_3.png" /> 45 % - 50 %<br />' });
var format_WerktagAuslastungMorgen_7 = new ol.format.GeoJSON();
var features_WerktagAuslastungMorgen_7 = format_WerktagAuslastungMorgen_7.readFeatures(json_WerktagAuslastungMorgen_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WerktagAuslastungMorgen_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WerktagAuslastungMorgen_7.addFeatures(features_WerktagAuslastungMorgen_7);
var lyr_WerktagAuslastungMorgen_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WerktagAuslastungMorgen_7, 
                style: style_WerktagAuslastungMorgen_7,
                popuplayertitle: 'Werktag Auslastung Morgen',
                interactive: true,
    title: 'Werktag Auslastung Morgen<br />\
    <img src="styles/legend/WerktagAuslastungMorgen_7_0.png" /> 27,8 % - 50 %<br />\
    <img src="styles/legend/WerktagAuslastungMorgen_7_1.png" /> 50 % - 75 %<br />\
    <img src="styles/legend/WerktagAuslastungMorgen_7_2.png" /> 75 % - 85 %<br />\
    <img src="styles/legend/WerktagAuslastungMorgen_7_3.png" /> 85 % - 93,2 %<br />' });
var format_AnzahlSPNVVerbindungenWerktag_8 = new ol.format.GeoJSON();
var features_AnzahlSPNVVerbindungenWerktag_8 = format_AnzahlSPNVVerbindungenWerktag_8.readFeatures(json_AnzahlSPNVVerbindungenWerktag_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnzahlSPNVVerbindungenWerktag_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnzahlSPNVVerbindungenWerktag_8.addFeatures(features_AnzahlSPNVVerbindungenWerktag_8);
var lyr_AnzahlSPNVVerbindungenWerktag_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnzahlSPNVVerbindungenWerktag_8, 
                style: style_AnzahlSPNVVerbindungenWerktag_8,
                popuplayertitle: 'Anzahl SPNV-Verbindungen (Werktag)',
                interactive: true,
    title: 'Anzahl SPNV-Verbindungen (Werktag)<br />\
    <img src="styles/legend/AnzahlSPNVVerbindungenWerktag_8_0.png" /> 2 - 4<br />\
    <img src="styles/legend/AnzahlSPNVVerbindungenWerktag_8_1.png" /> 4 - 9<br />\
    <img src="styles/legend/AnzahlSPNVVerbindungenWerktag_8_2.png" /> 9 - 16<br />\
    <img src="styles/legend/AnzahlSPNVVerbindungenWerktag_8_3.png" /> 16 - 29<br />\
    <img src="styles/legend/AnzahlSPNVVerbindungenWerktag_8_4.png" /> 29 - 50<br />' });
var format_Multimodalittszugang_9 = new ol.format.GeoJSON();
var features_Multimodalittszugang_9 = format_Multimodalittszugang_9.readFeatures(json_Multimodalittszugang_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multimodalittszugang_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multimodalittszugang_9.addFeatures(features_Multimodalittszugang_9);
var lyr_Multimodalittszugang_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multimodalittszugang_9, 
                style: style_Multimodalittszugang_9,
                popuplayertitle: 'Multimodalitätszugang',
                interactive: true,
    title: 'Multimodalitätszugang<br />\
    <img src="styles/legend/Multimodalittszugang_9_0.png" /> Keine Einrichtungen<br />' });
var format_Multimodalittszugang_10 = new ol.format.GeoJSON();
var features_Multimodalittszugang_10 = format_Multimodalittszugang_10.readFeatures(json_Multimodalittszugang_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multimodalittszugang_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multimodalittszugang_10.addFeatures(features_Multimodalittszugang_10);
var lyr_Multimodalittszugang_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multimodalittszugang_10, 
                style: style_Multimodalittszugang_10,
                popuplayertitle: 'Multimodalitätszugang',
                interactive: true,
    title: 'Multimodalitätszugang<br />\
    <img src="styles/legend/Multimodalittszugang_10_0.png" /> E-Ladesäulen<br />' });
var format_Multimodalittszugang_11 = new ol.format.GeoJSON();
var features_Multimodalittszugang_11 = format_Multimodalittszugang_11.readFeatures(json_Multimodalittszugang_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multimodalittszugang_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multimodalittszugang_11.addFeatures(features_Multimodalittszugang_11);
var lyr_Multimodalittszugang_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multimodalittszugang_11, 
                style: style_Multimodalittszugang_11,
                popuplayertitle: 'Multimodalitätszugang',
                interactive: true,
    title: 'Multimodalitätszugang<br />\
    <img src="styles/legend/Multimodalittszugang_11_0.png" /> Carsharing-Zugang<br />' });
var format_Multimodalittszugang_12 = new ol.format.GeoJSON();
var features_Multimodalittszugang_12 = format_Multimodalittszugang_12.readFeatures(json_Multimodalittszugang_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multimodalittszugang_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multimodalittszugang_12.addFeatures(features_Multimodalittszugang_12);
var lyr_Multimodalittszugang_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multimodalittszugang_12, 
                style: style_Multimodalittszugang_12,
                popuplayertitle: 'Multimodalitätszugang',
                interactive: true,
    title: 'Multimodalitätszugang<br />\
    <img src="styles/legend/Multimodalittszugang_12_0.png" /> Fahrradverleihsystem<br />' });
var format_Multimodalittszugang_13 = new ol.format.GeoJSON();
var features_Multimodalittszugang_13 = format_Multimodalittszugang_13.readFeatures(json_Multimodalittszugang_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multimodalittszugang_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multimodalittszugang_13.addFeatures(features_Multimodalittszugang_13);
var lyr_Multimodalittszugang_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multimodalittszugang_13, 
                style: style_Multimodalittszugang_13,
                popuplayertitle: 'Multimodalitätszugang',
                interactive: true,
    title: 'Multimodalitätszugang<br />\
    <img src="styles/legend/Multimodalittszugang_13_0.png" /> Fahrradboxzugang<br />' });
var format_BikeundRideBR_14 = new ol.format.GeoJSON();
var features_BikeundRideBR_14 = format_BikeundRideBR_14.readFeatures(json_BikeundRideBR_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeundRideBR_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeundRideBR_14.addFeatures(features_BikeundRideBR_14);
var lyr_BikeundRideBR_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikeundRideBR_14, 
                style: style_BikeundRideBR_14,
                popuplayertitle: 'Bike und Ride (B + R)',
                interactive: true,
    title: 'Bike und Ride (B + R)<br />\
    <img src="styles/legend/BikeundRideBR_14_0.png" /> Keine Abstellmöglichkeit<br />' });
var format_BikeundRideBR_15 = new ol.format.GeoJSON();
var features_BikeundRideBR_15 = format_BikeundRideBR_15.readFeatures(json_BikeundRideBR_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeundRideBR_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeundRideBR_15.addFeatures(features_BikeundRideBR_15);
var lyr_BikeundRideBR_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikeundRideBR_15, 
                style: style_BikeundRideBR_15,
                popuplayertitle: 'Bike und Ride (B + R)',
                interactive: true,
    title: 'Bike und Ride (B + R)<br />\
    <img src="styles/legend/BikeundRideBR_15_0.png" /> Fahrradverleihsystem<br />' });
var format_BikeundRideBR_16 = new ol.format.GeoJSON();
var features_BikeundRideBR_16 = format_BikeundRideBR_16.readFeatures(json_BikeundRideBR_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeundRideBR_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeundRideBR_16.addFeatures(features_BikeundRideBR_16);
var lyr_BikeundRideBR_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikeundRideBR_16, 
                style: style_BikeundRideBR_16,
                popuplayertitle: 'Bike und Ride (B + R)',
                interactive: true,
    title: 'Bike und Ride (B + R)<br />\
    <img src="styles/legend/BikeundRideBR_16_0.png" /> Fahrradboxzugang<br />' });
var format_BikeundRideBR_17 = new ol.format.GeoJSON();
var features_BikeundRideBR_17 = format_BikeundRideBR_17.readFeatures(json_BikeundRideBR_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeundRideBR_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeundRideBR_17.addFeatures(features_BikeundRideBR_17);
var lyr_BikeundRideBR_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikeundRideBR_17, 
                style: style_BikeundRideBR_17,
                popuplayertitle: 'Bike und Ride (B + R)',
                interactive: true,
    title: 'Bike und Ride (B + R)<br />\
    <img src="styles/legend/BikeundRideBR_17_0.png" /> Fahrradabstellanlage<br />' });
var format_AnlagenimBestandsdatensatz_18 = new ol.format.GeoJSON();
var features_AnlagenimBestandsdatensatz_18 = format_AnlagenimBestandsdatensatz_18.readFeatures(json_AnlagenimBestandsdatensatz_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnlagenimBestandsdatensatz_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnlagenimBestandsdatensatz_18.addFeatures(features_AnlagenimBestandsdatensatz_18);
cluster_AnlagenimBestandsdatensatz_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_AnlagenimBestandsdatensatz_18
});
var lyr_AnlagenimBestandsdatensatz_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AnlagenimBestandsdatensatz_18, 
                style: style_AnlagenimBestandsdatensatz_18,
                popuplayertitle: 'Anlagen im Bestandsdatensatz',
                interactive: true,
    title: 'Anlagen im Bestandsdatensatz<br />\
    <img src="styles/legend/AnlagenimBestandsdatensatz_18_0.png" /> Vorhanden<br />\
    <img src="styles/legend/AnlagenimBestandsdatensatz_18_1.png" /> Nicht vorhanden<br />' });
var format_AnzahlStellpltze_19 = new ol.format.GeoJSON();
var features_AnzahlStellpltze_19 = format_AnzahlStellpltze_19.readFeatures(json_AnzahlStellpltze_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnzahlStellpltze_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnzahlStellpltze_19.addFeatures(features_AnzahlStellpltze_19);
cluster_AnzahlStellpltze_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_AnzahlStellpltze_19
});
var lyr_AnzahlStellpltze_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AnzahlStellpltze_19, 
                style: style_AnzahlStellpltze_19,
                popuplayertitle: 'Anzahl Stellplätze',
                interactive: true,
    title: 'Anzahl Stellplätze<br />\
    <img src="styles/legend/AnzahlStellpltze_19_0.png" /> Keine Daten<br />\
    <img src="styles/legend/AnzahlStellpltze_19_1.png" /> 0 - 25<br />\
    <img src="styles/legend/AnzahlStellpltze_19_2.png" /> 25 - 50<br />\
    <img src="styles/legend/AnzahlStellpltze_19_3.png" /> 50 - 100<br />\
    <img src="styles/legend/AnzahlStellpltze_19_4.png" /> 100 - 150<br />\
    <img src="styles/legend/AnzahlStellpltze_19_5.png" /> 150 - 570<br />' });
var group_BikeundRideBR = new ol.layer.Group({
                                layers: [lyr_BikeundRideBR_14,lyr_BikeundRideBR_15,lyr_BikeundRideBR_16,lyr_BikeundRideBR_17,],
                                fold: 'close',
                                title: 'Bike und Ride (B + R)'});
var group_Multimodalitt = new ol.layer.Group({
                                layers: [lyr_Multimodalittszugang_9,lyr_Multimodalittszugang_10,lyr_Multimodalittszugang_11,lyr_Multimodalittszugang_12,lyr_Multimodalittszugang_13,],
                                fold: 'close',
                                title: 'Multimodalität'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Untersuchungsgebiet_1.setVisible(true);lyr_GemeindenmitAuslastungserhebung_2.setVisible(true);lyr_Schienenverkehr_3.setVisible(true);lyr_SamstagAuslastungAbend_4.setVisible(false);lyr_SamstagAuslastungMorgen_5.setVisible(false);lyr_WerktagAuslastungAbend_6.setVisible(false);lyr_WerktagAuslastungMorgen_7.setVisible(false);lyr_AnzahlSPNVVerbindungenWerktag_8.setVisible(false);lyr_Multimodalittszugang_9.setVisible(false);lyr_Multimodalittszugang_10.setVisible(false);lyr_Multimodalittszugang_11.setVisible(false);lyr_Multimodalittszugang_12.setVisible(false);lyr_Multimodalittszugang_13.setVisible(false);lyr_BikeundRideBR_14.setVisible(false);lyr_BikeundRideBR_15.setVisible(false);lyr_BikeundRideBR_16.setVisible(false);lyr_BikeundRideBR_17.setVisible(false);lyr_AnlagenimBestandsdatensatz_18.setVisible(false);lyr_AnzahlStellpltze_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Untersuchungsgebiet_1,lyr_GemeindenmitAuslastungserhebung_2,lyr_Schienenverkehr_3,lyr_SamstagAuslastungAbend_4,lyr_SamstagAuslastungMorgen_5,lyr_WerktagAuslastungAbend_6,lyr_WerktagAuslastungMorgen_7,lyr_AnzahlSPNVVerbindungenWerktag_8,group_Multimodalitt,group_BikeundRideBR,lyr_AnlagenimBestandsdatensatz_18,lyr_AnzahlStellpltze_19];
lyr_Untersuchungsgebiet_1.set('fieldAliases', {'id': 'id', 'Geografisc': 'Geografisc', 'Bezeichnun': 'Bezeichnun', });
lyr_GemeindenmitAuslastungserhebung_2.set('fieldAliases', {'id': 'id', 'Geografisc': 'Geografisc', });
lyr_Schienenverkehr_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'path': 'path', });
lyr_SamstagAuslastungAbend_4.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'ÖPNV SPFV': 'ÖPNV SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Du.Au.We1': 'Du.Au.We1', 'Du.Au.We2': 'Du.Au.We2', 'Du.Au.Sa1': 'Du.Au.Sa1', 'Du.Au.Sa2': 'Du.Au.Sa2', 'DiffRadAu5': 'DiffRadAu5', 'DiffRadA10': 'DiffRadA10', 'DiffRadA15': 'DiffRadA15', 'Statis_Arb': 'Statis_Arb', 'Berufsp_Qu': 'Berufsp_Qu', 'Einwohner': 'Einwohner', 'mo_We_Quel': 'mo_We_Quel', 'mo_We_Ziel': 'mo_We_Ziel', 'mo_We_Q+Zi': 'mo_We_Q+Zi', 'mo_Sa_Quel': 'mo_Sa_Quel', 'mo_Sa_Ziel': 'mo_Sa_Ziel', 'mo_Sa_Q+Zi': 'mo_Sa_Q+Zi', 'Ver_mo_Q_Z': 'Ver_mo_Q_Z', 'Ver_mo_W_S': 'Ver_mo_W_S', 'For_Arbeit': 'For_Arbeit', 'Ver_Ei_Arb': 'Ver_Ei_Arb', 'Carsh_Fahr': 'Carsh_Fahr', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', });
lyr_SamstagAuslastungMorgen_5.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'ÖPNV SPFV': 'ÖPNV SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Du.Au.We1': 'Du.Au.We1', 'Du.Au.We2': 'Du.Au.We2', 'Du.Au.Sa1': 'Du.Au.Sa1', 'Du.Au.Sa2': 'Du.Au.Sa2', 'DiffRadAu5': 'DiffRadAu5', 'DiffRadA10': 'DiffRadA10', 'DiffRadA15': 'DiffRadA15', 'Statis_Arb': 'Statis_Arb', 'Berufsp_Qu': 'Berufsp_Qu', 'Einwohner': 'Einwohner', 'mo_We_Quel': 'mo_We_Quel', 'mo_We_Ziel': 'mo_We_Ziel', 'mo_We_Q+Zi': 'mo_We_Q+Zi', 'mo_Sa_Quel': 'mo_Sa_Quel', 'mo_Sa_Ziel': 'mo_Sa_Ziel', 'mo_Sa_Q+Zi': 'mo_Sa_Q+Zi', 'Ver_mo_Q_Z': 'Ver_mo_Q_Z', 'Ver_mo_W_S': 'Ver_mo_W_S', 'For_Arbeit': 'For_Arbeit', 'Ver_Ei_Arb': 'Ver_Ei_Arb', 'Carsh_Fahr': 'Carsh_Fahr', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', });
lyr_WerktagAuslastungAbend_6.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'ÖPNV SPFV': 'ÖPNV SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Du.Au.We1': 'Du.Au.We1', 'Du.Au.We2': 'Du.Au.We2', 'Du.Au.Sa1': 'Du.Au.Sa1', 'Du.Au.Sa2': 'Du.Au.Sa2', 'DiffRadAu5': 'DiffRadAu5', 'DiffRadA10': 'DiffRadA10', 'DiffRadA15': 'DiffRadA15', 'Statis_Arb': 'Statis_Arb', 'Berufsp_Qu': 'Berufsp_Qu', 'Einwohner': 'Einwohner', 'mo_We_Quel': 'mo_We_Quel', 'mo_We_Ziel': 'mo_We_Ziel', 'mo_We_Q+Zi': 'mo_We_Q+Zi', 'mo_Sa_Quel': 'mo_Sa_Quel', 'mo_Sa_Ziel': 'mo_Sa_Ziel', 'mo_Sa_Q+Zi': 'mo_Sa_Q+Zi', 'Ver_mo_Q_Z': 'Ver_mo_Q_Z', 'Ver_mo_W_S': 'Ver_mo_W_S', 'For_Arbeit': 'For_Arbeit', 'Ver_Ei_Arb': 'Ver_Ei_Arb', 'Carsh_Fahr': 'Carsh_Fahr', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', });
lyr_WerktagAuslastungMorgen_7.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'ÖPNV SPFV': 'ÖPNV SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Du.Au.We1': 'Du.Au.We1', 'Du.Au.We2': 'Du.Au.We2', 'Du.Au.Sa1': 'Du.Au.Sa1', 'Du.Au.Sa2': 'Du.Au.Sa2', 'DiffRadAu5': 'DiffRadAu5', 'DiffRadA10': 'DiffRadA10', 'DiffRadA15': 'DiffRadA15', 'Statis_Arb': 'Statis_Arb', 'Berufsp_Qu': 'Berufsp_Qu', 'Einwohner': 'Einwohner', 'mo_We_Quel': 'mo_We_Quel', 'mo_We_Ziel': 'mo_We_Ziel', 'mo_We_Q+Zi': 'mo_We_Q+Zi', 'mo_Sa_Quel': 'mo_Sa_Quel', 'mo_Sa_Ziel': 'mo_Sa_Ziel', 'mo_Sa_Q+Zi': 'mo_Sa_Q+Zi', 'Ver_mo_Q_Z': 'Ver_mo_Q_Z', 'Ver_mo_W_S': 'Ver_mo_W_S', 'For_Arbeit': 'For_Arbeit', 'Ver_Ei_Arb': 'Ver_Ei_Arb', 'Carsh_Fahr': 'Carsh_Fahr', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', });
lyr_AnzahlSPNVVerbindungenWerktag_8.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_Multimodalittszugang_9.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_Multimodalittszugang_10.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_Multimodalittszugang_11.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_Multimodalittszugang_12.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_Multimodalittszugang_13.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_BikeundRideBR_14.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_BikeundRideBR_15.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_BikeundRideBR_16.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_BikeundRideBR_17.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_AnlagenimBestandsdatensatz_18.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_AnzahlStellpltze_19.set('fieldAliases', {'id': 'id', 'gemeinde': 'gemeinde', 'stadtteil': 'stadtteil', 'haltestell': 'haltestell', 'stellplaet': 'stellplaet', 'bemerkung': 'bemerkung', 'echtzeit_b': 'echtzeit_b', 'ÖPNVRegio': 'ÖPNVRegio', 'ÖPNVS-Bah': 'ÖPNVS-Bah', 'ÖPNV Bus': 'ÖPNV Bus', 'SPFV': 'SPFV', 'ÖPNV Tram': 'ÖPNV Tram', 'ÖPNV StaK': 'ÖPNV StaK', 'ÖPNVRufta': 'ÖPNVRufta', 'ÖPNVOn-De': 'ÖPNVOn-De', 'Urs. Daten': 'Urs. Daten', 'Beschilder': 'Beschilder', 'Bewirtscha': 'Bewirtscha', 'Beschränk': 'Beschränk', 'Betreiber': 'Betreiber', 'Fahrradabs': 'Fahrradabs', 'Fahrradbox': 'Fahrradbox', 'Besonderhe': 'Besonderhe', 'Park_Ladem': 'Park_Ladem', 'Carsh_Park': 'Carsh_Park', 'Behin_Park': 'Behin_Park', 'Nextbike': 'Nextbike', 'Datenquell': 'Datenquell', 'Kursbuchst': 'Kursbuchst', 'Zentralör': 'Zentralör', 'Raumkatego': 'Raumkatego', 'SPNV/Stund': 'SPNV/Stund', 'Erhebungsa': 'Erhebungsa', 'Fahrradb_n': 'Fahrradb_n', 'Anz_Fahrra': 'Anz_Fahrra', 'Art_Fahrra': 'Art_Fahrra', 'Bundesland': 'Bundesland', 'Bestand': 'Bestand', });
lyr_Untersuchungsgebiet_1.set('fieldImages', {'id': 'TextEdit', 'Geografisc': 'TextEdit', 'Bezeichnun': 'TextEdit', });
lyr_GemeindenmitAuslastungserhebung_2.set('fieldImages', {'id': 'TextEdit', 'Geografisc': 'TextEdit', });
lyr_Schienenverkehr_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'path': 'TextEdit', });
lyr_SamstagAuslastungAbend_4.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'ÖPNV SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Du.Au.We1': 'TextEdit', 'Du.Au.We2': 'TextEdit', 'Du.Au.Sa1': 'TextEdit', 'Du.Au.Sa2': 'TextEdit', 'DiffRadAu5': 'TextEdit', 'DiffRadA10': 'TextEdit', 'DiffRadA15': 'TextEdit', 'Statis_Arb': 'TextEdit', 'Berufsp_Qu': 'TextEdit', 'Einwohner': 'TextEdit', 'mo_We_Quel': 'TextEdit', 'mo_We_Ziel': 'TextEdit', 'mo_We_Q+Zi': 'TextEdit', 'mo_Sa_Quel': 'TextEdit', 'mo_Sa_Ziel': 'TextEdit', 'mo_Sa_Q+Zi': 'TextEdit', 'Ver_mo_Q_Z': 'TextEdit', 'Ver_mo_W_S': 'TextEdit', 'For_Arbeit': 'TextEdit', 'Ver_Ei_Arb': 'TextEdit', 'Carsh_Fahr': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', });
lyr_SamstagAuslastungMorgen_5.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'ÖPNV SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Du.Au.We1': 'TextEdit', 'Du.Au.We2': 'TextEdit', 'Du.Au.Sa1': 'TextEdit', 'Du.Au.Sa2': 'TextEdit', 'DiffRadAu5': 'TextEdit', 'DiffRadA10': 'TextEdit', 'DiffRadA15': 'TextEdit', 'Statis_Arb': 'TextEdit', 'Berufsp_Qu': 'TextEdit', 'Einwohner': 'TextEdit', 'mo_We_Quel': 'TextEdit', 'mo_We_Ziel': 'TextEdit', 'mo_We_Q+Zi': 'TextEdit', 'mo_Sa_Quel': 'TextEdit', 'mo_Sa_Ziel': 'TextEdit', 'mo_Sa_Q+Zi': 'TextEdit', 'Ver_mo_Q_Z': 'TextEdit', 'Ver_mo_W_S': 'TextEdit', 'For_Arbeit': 'TextEdit', 'Ver_Ei_Arb': 'TextEdit', 'Carsh_Fahr': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', });
lyr_WerktagAuslastungAbend_6.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'ÖPNV SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Du.Au.We1': 'TextEdit', 'Du.Au.We2': 'TextEdit', 'Du.Au.Sa1': 'TextEdit', 'Du.Au.Sa2': 'TextEdit', 'DiffRadAu5': 'TextEdit', 'DiffRadA10': 'TextEdit', 'DiffRadA15': 'TextEdit', 'Statis_Arb': 'TextEdit', 'Berufsp_Qu': 'TextEdit', 'Einwohner': 'TextEdit', 'mo_We_Quel': 'TextEdit', 'mo_We_Ziel': 'TextEdit', 'mo_We_Q+Zi': 'TextEdit', 'mo_Sa_Quel': 'TextEdit', 'mo_Sa_Ziel': 'TextEdit', 'mo_Sa_Q+Zi': 'TextEdit', 'Ver_mo_Q_Z': 'TextEdit', 'Ver_mo_W_S': 'TextEdit', 'For_Arbeit': 'TextEdit', 'Ver_Ei_Arb': 'TextEdit', 'Carsh_Fahr': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', });
lyr_WerktagAuslastungMorgen_7.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'ÖPNV SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Du.Au.We1': 'TextEdit', 'Du.Au.We2': 'TextEdit', 'Du.Au.Sa1': 'TextEdit', 'Du.Au.Sa2': 'TextEdit', 'DiffRadAu5': 'TextEdit', 'DiffRadA10': 'TextEdit', 'DiffRadA15': 'TextEdit', 'Statis_Arb': 'TextEdit', 'Berufsp_Qu': 'TextEdit', 'Einwohner': 'TextEdit', 'mo_We_Quel': 'TextEdit', 'mo_We_Ziel': 'TextEdit', 'mo_We_Q+Zi': 'TextEdit', 'mo_Sa_Quel': 'TextEdit', 'mo_Sa_Ziel': 'TextEdit', 'mo_Sa_Q+Zi': 'TextEdit', 'Ver_mo_Q_Z': 'TextEdit', 'Ver_mo_W_S': 'TextEdit', 'For_Arbeit': 'TextEdit', 'Ver_Ei_Arb': 'TextEdit', 'Carsh_Fahr': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', });
lyr_AnzahlSPNVVerbindungenWerktag_8.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_Multimodalittszugang_9.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_Multimodalittszugang_10.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_Multimodalittszugang_11.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_Multimodalittszugang_12.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_Multimodalittszugang_13.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_BikeundRideBR_14.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_BikeundRideBR_15.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_BikeundRideBR_16.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_BikeundRideBR_17.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_AnlagenimBestandsdatensatz_18.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_AnzahlStellpltze_19.set('fieldImages', {'id': 'Range', 'gemeinde': 'TextEdit', 'stadtteil': 'TextEdit', 'haltestell': 'TextEdit', 'stellplaet': 'Range', 'bemerkung': 'TextEdit', 'echtzeit_b': 'TextEdit', 'ÖPNVRegio': 'TextEdit', 'ÖPNVS-Bah': 'TextEdit', 'ÖPNV Bus': 'TextEdit', 'SPFV': 'TextEdit', 'ÖPNV Tram': 'TextEdit', 'ÖPNV StaK': 'TextEdit', 'ÖPNVRufta': 'TextEdit', 'ÖPNVOn-De': 'TextEdit', 'Urs. Daten': 'TextEdit', 'Beschilder': 'TextEdit', 'Bewirtscha': 'TextEdit', 'Beschränk': 'TextEdit', 'Betreiber': 'TextEdit', 'Fahrradabs': 'TextEdit', 'Fahrradbox': 'TextEdit', 'Besonderhe': 'TextEdit', 'Park_Ladem': 'TextEdit', 'Carsh_Park': 'TextEdit', 'Behin_Park': 'TextEdit', 'Nextbike': 'TextEdit', 'Datenquell': 'TextEdit', 'Kursbuchst': 'TextEdit', 'Zentralör': 'TextEdit', 'Raumkatego': 'TextEdit', 'SPNV/Stund': 'TextEdit', 'Erhebungsa': 'TextEdit', 'Fahrradb_n': 'TextEdit', 'Anz_Fahrra': 'TextEdit', 'Art_Fahrra': 'TextEdit', 'Bundesland': 'TextEdit', 'Bestand': 'TextEdit', });
lyr_Untersuchungsgebiet_1.set('fieldLabels', {'id': 'hidden field', 'Geografisc': 'hidden field', 'Bezeichnun': 'hidden field', });
lyr_GemeindenmitAuslastungserhebung_2.set('fieldLabels', {'id': 'hidden field', 'Geografisc': 'header label - visible with data', });
lyr_Schienenverkehr_3.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'path': 'hidden field', });
lyr_SamstagAuslastungAbend_4.set('fieldLabels', {'id': 'hidden field', 'gemeinde': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'haltestell': 'inline label - visible with data', 'stellplaet': 'inline label - visible with data', 'echtzeit_b': 'hidden field', 'ÖPNVRegio': 'hidden field', 'ÖPNVS-Bah': 'hidden field', 'ÖPNV Bus': 'hidden field', 'ÖPNV SPFV': 'hidden field', 'ÖPNV Tram': 'hidden field', 'ÖPNV StaK': 'hidden field', 'ÖPNVRufta': 'hidden field', 'ÖPNVOn-De': 'hidden field', 'Urs. Daten': 'hidden field', 'Beschilder': 'hidden field', 'Bewirtscha': 'hidden field', 'Beschränk': 'hidden field', 'Betreiber': 'hidden field', 'Fahrradabs': 'hidden field', 'Fahrradbox': 'hidden field', 'Besonderhe': 'hidden field', 'Park_Ladem': 'hidden field', 'Carsh_Park': 'hidden field', 'Behin_Park': 'hidden field', 'Nextbike': 'hidden field', 'Datenquell': 'hidden field', 'Kursbuchst': 'hidden field', 'Zentralör': 'hidden field', 'Raumkatego': 'hidden field', 'SPNV/Stund': 'hidden field', 'Erhebungsa': 'hidden field', 'Du.Au.We1': 'hidden field', 'Du.Au.We2': 'hidden field', 'Du.Au.Sa1': 'hidden field', 'Du.Au.Sa2': 'inline label - visible with data', 'DiffRadAu5': 'hidden field', 'DiffRadA10': 'hidden field', 'DiffRadA15': 'hidden field', 'Statis_Arb': 'hidden field', 'Berufsp_Qu': 'hidden field', 'Einwohner': 'hidden field', 'mo_We_Quel': 'hidden field', 'mo_We_Ziel': 'hidden field', 'mo_We_Q+Zi': 'hidden field', 'mo_Sa_Quel': 'hidden field', 'mo_Sa_Ziel': 'hidden field', 'mo_Sa_Q+Zi': 'hidden field', 'Ver_mo_Q_Z': 'hidden field', 'Ver_mo_W_S': 'hidden field', 'For_Arbeit': 'hidden field', 'Ver_Ei_Arb': 'hidden field', 'Carsh_Fahr': 'hidden field', 'Anz_Fahrra': 'hidden field', 'Art_Fahrra': 'hidden field', });
lyr_SamstagAuslastungMorgen_5.set('fieldLabels', {'id': 'hidden field', 'gemeinde': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'haltestell': 'inline label - visible with data', 'stellplaet': 'inline label - visible with data', 'echtzeit_b': 'hidden field', 'ÖPNVRegio': 'hidden field', 'ÖPNVS-Bah': 'hidden field', 'ÖPNV Bus': 'hidden field', 'ÖPNV SPFV': 'hidden field', 'ÖPNV Tram': 'hidden field', 'ÖPNV StaK': 'hidden field', 'ÖPNVRufta': 'hidden field', 'ÖPNVOn-De': 'hidden field', 'Urs. Daten': 'hidden field', 'Beschilder': 'hidden field', 'Bewirtscha': 'hidden field', 'Beschränk': 'hidden field', 'Betreiber': 'hidden field', 'Fahrradabs': 'hidden field', 'Fahrradbox': 'hidden field', 'Besonderhe': 'hidden field', 'Park_Ladem': 'hidden field', 'Carsh_Park': 'hidden field', 'Behin_Park': 'hidden field', 'Nextbike': 'hidden field', 'Datenquell': 'hidden field', 'Kursbuchst': 'hidden field', 'Zentralör': 'hidden field', 'Raumkatego': 'hidden field', 'SPNV/Stund': 'hidden field', 'Erhebungsa': 'hidden field', 'Du.Au.We1': 'hidden field', 'Du.Au.We2': 'hidden field', 'Du.Au.Sa1': 'inline label - visible with data', 'Du.Au.Sa2': 'hidden field', 'DiffRadAu5': 'hidden field', 'DiffRadA10': 'hidden field', 'DiffRadA15': 'hidden field', 'Statis_Arb': 'hidden field', 'Berufsp_Qu': 'hidden field', 'Einwohner': 'hidden field', 'mo_We_Quel': 'hidden field', 'mo_We_Ziel': 'hidden field', 'mo_We_Q+Zi': 'hidden field', 'mo_Sa_Quel': 'hidden field', 'mo_Sa_Ziel': 'hidden field', 'mo_Sa_Q+Zi': 'hidden field', 'Ver_mo_Q_Z': 'hidden field', 'Ver_mo_W_S': 'hidden field', 'For_Arbeit': 'hidden field', 'Ver_Ei_Arb': 'hidden field', 'Carsh_Fahr': 'hidden field', 'Anz_Fahrra': 'hidden field', 'Art_Fahrra': 'hidden field', });
lyr_WerktagAuslastungAbend_6.set('fieldLabels', {'id': 'hidden field', 'gemeinde': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'haltestell': 'inline label - visible with data', 'stellplaet': 'inline label - visible with data', 'echtzeit_b': 'hidden field', 'ÖPNVRegio': 'hidden field', 'ÖPNVS-Bah': 'hidden field', 'ÖPNV Bus': 'hidden field', 'ÖPNV SPFV': 'hidden field', 'ÖPNV Tram': 'hidden field', 'ÖPNV StaK': 'hidden field', 'ÖPNVRufta': 'hidden field', 'ÖPNVOn-De': 'hidden field', 'Urs. Daten': 'hidden field', 'Beschilder': 'hidden field', 'Bewirtscha': 'hidden field', 'Beschränk': 'hidden field', 'Betreiber': 'hidden field', 'Fahrradabs': 'hidden field', 'Fahrradbox': 'hidden field', 'Besonderhe': 'hidden field', 'Park_Ladem': 'hidden field', 'Carsh_Park': 'hidden field', 'Behin_Park': 'hidden field', 'Nextbike': 'hidden field', 'Datenquell': 'hidden field', 'Kursbuchst': 'hidden field', 'Zentralör': 'hidden field', 'Raumkatego': 'hidden field', 'SPNV/Stund': 'hidden field', 'Erhebungsa': 'hidden field', 'Du.Au.We1': 'hidden field', 'Du.Au.We2': 'inline label - visible with data', 'Du.Au.Sa1': 'hidden field', 'Du.Au.Sa2': 'hidden field', 'DiffRadAu5': 'hidden field', 'DiffRadA10': 'hidden field', 'DiffRadA15': 'hidden field', 'Statis_Arb': 'hidden field', 'Berufsp_Qu': 'hidden field', 'Einwohner': 'hidden field', 'mo_We_Quel': 'hidden field', 'mo_We_Ziel': 'hidden field', 'mo_We_Q+Zi': 'hidden field', 'mo_Sa_Quel': 'hidden field', 'mo_Sa_Ziel': 'hidden field', 'mo_Sa_Q+Zi': 'hidden field', 'Ver_mo_Q_Z': 'hidden field', 'Ver_mo_W_S': 'hidden field', 'For_Arbeit': 'hidden field', 'Ver_Ei_Arb': 'hidden field', 'Carsh_Fahr': 'hidden field', 'Anz_Fahrra': 'hidden field', 'Art_Fahrra': 'hidden field', });
lyr_WerktagAuslastungMorgen_7.set('fieldLabels', {'id': 'hidden field', 'gemeinde': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'haltestell': 'inline label - visible with data', 'stellplaet': 'inline label - visible with data', 'echtzeit_b': 'hidden field', 'ÖPNVRegio': 'hidden field', 'ÖPNVS-Bah': 'hidden field', 'ÖPNV Bus': 'hidden field', 'ÖPNV SPFV': 'hidden field', 'ÖPNV Tram': 'hidden field', 'ÖPNV StaK': 'hidden field', 'ÖPNVRufta': 'hidden field', 'ÖPNVOn-De': 'hidden field', 'Urs. Daten': 'hidden field', 'Beschilder': 'hidden field', 'Bewirtscha': 'hidden field', 'Beschränk': 'hidden field', 'Betreiber': 'hidden field', 'Fahrradabs': 'hidden field', 'Fahrradbox': 'hidden field', 'Besonderhe': 'hidden field', 'Park_Ladem': 'hidden field', 'Carsh_Park': 'hidden field', 'Behin_Park': 'hidden field', 'Nextbike': 'hidden field', 'Datenquell': 'hidden field', 'Kursbuchst': 'hidden field', 'Zentralör': 'hidden field', 'Raumkatego': 'hidden field', 'SPNV/Stund': 'hidden field', 'Erhebungsa': 'hidden field', 'Du.Au.We1': 'inline label - visible with data', 'Du.Au.We2': 'hidden field', 'Du.Au.Sa1': 'hidden field', 'Du.Au.Sa2': 'hidden field', 'DiffRadAu5': 'hidden field', 'DiffRadA10': 'hidden field', 'DiffRadA15': 'hidden field', 'Statis_Arb': 'hidden field', 'Berufsp_Qu': 'hidden field', 'Einwohner': 'hidden field', 'mo_We_Quel': 'hidden field', 'mo_We_Ziel': 'hidden field', 'mo_We_Q+Zi': 'hidden field', 'mo_Sa_Quel': 'hidden field', 'mo_Sa_Ziel': 'hidden field', 'mo_Sa_Q+Zi': 'hidden field', 'Ver_mo_Q_Z': 'hidden field', 'Ver_mo_W_S': 'hidden field', 'For_Arbeit': 'hidden field', 'Ver_Ei_Arb': 'hidden field', 'Carsh_Fahr': 'hidden field', 'Anz_Fahrra': 'hidden field', 'Art_Fahrra': 'hidden field', });
lyr_AnzahlSPNVVerbindungenWerktag_8.set('fieldLabels', {'id': 'hidden field', 'gemeinde': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'haltestell': 'inline label - visible with data', 'stellplaet': 'inline label - visible with data', 'bemerkung': 'hidden field', 'echtzeit_b': 'hidden field', 'ÖPNVRegio': 'inline label - visible with data', 'ÖPNVS-Bah': 'inline label - visible with data', 'ÖPNV Bus': 'inline label - visible with data', 'SPFV': 'inline label - visible with data', 'ÖPNV Tram': 'inline label - visible with data', 'ÖPNV StaK': 'inline label - visible with data', 'ÖPNVRufta': 'inline label - visible with data', 'ÖPNVOn-De': 'inline label - visible with data', 'Urs. Daten': 'hidden field', 'Beschilder': 'hidden field', 'Bewirtscha': 'hidden field', 'Beschränk': 'hidden field', 'Betreiber': 'hidden field', 'Fahrradabs': 'hidden field', 'Fahrradbox': 'hidden field', 'Besonderhe': 'hidden field', 'Park_Ladem': 'hidden field', 'Carsh_Park': 'hidden field', 'Behin_Park': 'hidden field', 'Nextbike': 'hidden field', 'Datenquell': 'hidden field', 'Kursbuchst': 'hidden field', 'Zentralör': 'hidden field', 'Raumkatego': 'hidden field', 'SPNV/Stund': 'inline label - visible with data', 'Erhebungsa': 'hidden field', 'Fahrradb_n': 'hidden field', 'Anz_Fahrra': 'hidden field', 'Art_Fahrra': 'hidden field', 'Bundesland': 'hidden field', 'Bestand': 'hidden field', });
lyr_Multimodalittszugang_9.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'bemerkung': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Fahrradb_n': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', 'Bundesland': 'no label', 'Bestand': 'no label', });
lyr_Multimodalittszugang_10.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'bemerkung': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Fahrradb_n': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', 'Bundesland': 'no label', 'Bestand': 'no label', });
lyr_Multimodalittszugang_11.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'bemerkung': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Fahrradb_n': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', 'Bundesland': 'no label', 'Bestand': 'no label', });
lyr_Multimodalittszugang_12.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'bemerkung': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Fahrradb_n': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', 'Bundesland': 'no label', 'Bestand': 'no label', });
lyr_Multimodalittszugang_13.set('fieldLabels', {'id': 'no label', 'gemeinde': 'no label', 'stadtteil': 'no label', 'haltestell': 'no label', 'stellplaet': 'no label', 'bemerkung': 'no label', 'echtzeit_b': 'no label', 'ÖPNVRegio': 'no label', 'ÖPNVS-Bah': 'no label', 'ÖPNV Bus': 'no label', 'SPFV': 'no label', 'ÖPNV Tram': 'no label', 'ÖPNV StaK': 'no label', 'ÖPNVRufta': 'no label', 'ÖPNVOn-De': 'no label', 'Urs. Daten': 'no label', 'Beschilder': 'no label', 'Bewirtscha': 'no label', 'Beschränk': 'no label', 'Betreiber': 'no label', 'Fahrradabs': 'no label', 'Fahrradbox': 'no label', 'Besonderhe': 'no label', 'Park_Ladem': 'no label', 'Carsh_Park': 'no label', 'Behin_Park': 'no label', 'Nextbike': 'no label', 'Datenquell': 'no label', 'Kursbuchst': 'no label', 'Zentralör': 'no label', 'Raumkatego': 'no label', 'SPNV/Stund': 'no label', 'Erhebungsa': 'no label', 'Fahrradb_n': 'no label', 'Anz_Fahrra': 'no label', 'Art_Fahrra': 'no label', 'Bundesland': 'no label', 'Bestand': 'no label', });
lyr_BikeundRideBR_14.set('fieldLabels', {'id': 'hidden field', 'gemeinde': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'haltestell': 'inline label - visible with data', 'stellplaet': 'inline label - visible with data', 'bemerkung': 'hidden field', 'echtzeit_b': 'hidden field', 'ÖPNVRegio': 'hidden field', 'ÖPNVS-Bah': 'hidden field', 'ÖPNV Bus': 'hidden field', 'SPFV': 'hidden field', 'ÖPNV Tram': 'hidden field', 'ÖPNV StaK': 'hidden field', 'ÖPNVRufta': 'hidden field', 'ÖPNVOn-De': 'hidden field', 'Urs. Daten': 'hidden field', 'Beschilder': 'hidden field', 'Bewirtscha': 'hidden field', 'Beschränk': 'hidden field', 'Betreiber': 'hidden field', 'Fahrradabs': 'inline label - visible with data', 'Fahrradbox': 'inline label - visible with data', 'Besonderhe': 'hidden field', 'Park_Ladem': 'hidden field', 'Carsh_Park': 'hidden field', 'Behin_Park': 'hidden field', 'Nextbike': 'inline label - visible with data', 'Datenquell': 'hidden field', 'Kursbuchst': 'hidden field', 'Zentralör': 'hidden field', 'Raumkatego': 'hidden field', 'SPNV/Stund': 'hidden field', 'Erhebungsa': 'hidden field', 'Fahrradb_n': 'inline label - visible with data', 'Anz_Fahrra': 'inline label - visible with data', 'Art_Fahrra': 'inline label - visible with data', 'Bundesland': 'hidden field', 'Bestand': 'hidden field', });
lyr_BikeundRideBR_15.set('fieldLabels', {'id': 'hidden field', 'gemeinde': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'haltestell': 'inline label - visible with data', 'stellplaet': 'inline label - visible with data', 'bemerkung': 'hidden field', 'echtzeit_b': 'hidden field', 'ÖPNVRegio': 'hidden field', 'ÖPNVS-Bah': 'hidden field', 'ÖPNV Bus': 'hidden field', 'SPFV': 'hidden field', 'ÖPNV Tram': 'hidden field', 'ÖPNV StaK': 'hidden field', 'ÖPNVRufta': 'hidden field', 'ÖPNVOn-De': 'hidden field', 'Urs. Daten': 'hidden field', 'Beschilder': 'hidden field', 'Bewirtscha': 'hidden field', 'Beschränk': 'hidden field', 'Betreiber': 'hidden field', 'Fahrradabs': 'inline label - visible with data', 'Fahrradbox': 'inline label - visible with data', 'Besonderhe': 'hidden field', 'Park_Ladem': 'hidden field', 'Carsh_Park': 'hidden field', 'Behin_Park': 'hidden field', 'Nextbike': 'inline label - visible with data', 'Datenquell': 'hidden field', 'Kursbuchst': 'hidden field', 'Zentralör': 'hidden field', 'Raumkatego': 'hidden field', 'SPNV/Stund': 'hidden field', 'Erhebungsa': 'hidden field', 'Fahrradb_n': 'inline label - visible with data', 'Anz_Fahrra': 'inline label - visible with data', 'Art_Fahrra': 'inline label - visible with data', 'Bundesland': 'hidden field', 'Bestand': 'hidden field', });
lyr_BikeundRideBR_16.set('fieldLabels', {'id': 'hidden field', 'gemeinde': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'haltestell': 'inline label - visible with data', 'stellplaet': 'inline label - visible with data', 'bemerkung': 'hidden field', 'echtzeit_b': 'hidden field', 'ÖPNVRegio': 'hidden field', 'ÖPNVS-Bah': 'hidden field', 'ÖPNV Bus': 'hidden field', 'SPFV': 'hidden field', 'ÖPNV Tram': 'hidden field', 'ÖPNV StaK': 'hidden field', 'ÖPNVRufta': 'hidden field', 'ÖPNVOn-De': 'hidden field', 'Urs. Daten': 'hidden field', 'Beschilder': 'hidden field', 'Bewirtscha': 'hidden field', 'Beschränk': 'hidden field', 'Betreiber': 'hidden field', 'Fahrradabs': 'inline label - visible with data', 'Fahrradbox': 'inline label - visible with data', 'Besonderhe': 'hidden field', 'Park_Ladem': 'hidden field', 'Carsh_Park': 'hidden field', 'Behin_Park': 'hidden field', 'Nextbike': 'inline label - visible with data', 'Datenquell': 'hidden field', 'Kursbuchst': 'hidden field', 'Zentralör': 'hidden field', 'Raumkatego': 'hidden field', 'SPNV/Stund': 'hidden field', 'Erhebungsa': 'hidden field', 'Fahrradb_n': 'inline label - visible with data', 'Anz_Fahrra': 'inline label - visible with data', 'Art_Fahrra': 'inline label - visible with data', 'Bundesland': 'hidden field', 'Bestand': 'hidden field', });
lyr_BikeundRideBR_17.set('fieldLabels', {'id': 'hidden field', 'gemeinde': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'haltestell': 'inline label - visible with data', 'stellplaet': 'inline label - visible with data', 'bemerkung': 'hidden field', 'echtzeit_b': 'hidden field', 'ÖPNVRegio': 'hidden field', 'ÖPNVS-Bah': 'hidden field', 'ÖPNV Bus': 'hidden field', 'SPFV': 'hidden field', 'ÖPNV Tram': 'hidden field', 'ÖPNV StaK': 'hidden field', 'ÖPNVRufta': 'hidden field', 'ÖPNVOn-De': 'hidden field', 'Urs. Daten': 'hidden field', 'Beschilder': 'hidden field', 'Bewirtscha': 'hidden field', 'Beschränk': 'hidden field', 'Betreiber': 'hidden field', 'Fahrradabs': 'inline label - visible with data', 'Fahrradbox': 'inline label - visible with data', 'Besonderhe': 'hidden field', 'Park_Ladem': 'hidden field', 'Carsh_Park': 'hidden field', 'Behin_Park': 'hidden field', 'Nextbike': 'inline label - visible with data', 'Datenquell': 'hidden field', 'Kursbuchst': 'hidden field', 'Zentralör': 'hidden field', 'Raumkatego': 'hidden field', 'SPNV/Stund': 'hidden field', 'Erhebungsa': 'hidden field', 'Fahrradb_n': 'inline label - visible with data', 'Anz_Fahrra': 'inline label - visible with data', 'Art_Fahrra': 'inline label - visible with data', 'Bundesland': 'hidden field', 'Bestand': 'hidden field', });
lyr_AnlagenimBestandsdatensatz_18.set('fieldLabels', {'id': 'hidden field', 'gemeinde': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'haltestell': 'inline label - visible with data', 'stellplaet': 'inline label - visible with data', 'bemerkung': 'hidden field', 'echtzeit_b': 'hidden field', 'ÖPNVRegio': 'hidden field', 'ÖPNVS-Bah': 'hidden field', 'ÖPNV Bus': 'hidden field', 'SPFV': 'hidden field', 'ÖPNV Tram': 'hidden field', 'ÖPNV StaK': 'hidden field', 'ÖPNVRufta': 'hidden field', 'ÖPNVOn-De': 'hidden field', 'Urs. Daten': 'hidden field', 'Beschilder': 'hidden field', 'Bewirtscha': 'hidden field', 'Beschränk': 'hidden field', 'Betreiber': 'hidden field', 'Fahrradabs': 'hidden field', 'Fahrradbox': 'hidden field', 'Besonderhe': 'hidden field', 'Park_Ladem': 'hidden field', 'Carsh_Park': 'hidden field', 'Behin_Park': 'hidden field', 'Nextbike': 'hidden field', 'Datenquell': 'hidden field', 'Kursbuchst': 'hidden field', 'Zentralör': 'hidden field', 'Raumkatego': 'hidden field', 'SPNV/Stund': 'hidden field', 'Erhebungsa': 'hidden field', 'Fahrradb_n': 'hidden field', 'Anz_Fahrra': 'hidden field', 'Art_Fahrra': 'hidden field', 'Bundesland': 'hidden field', 'Bestand': 'inline label - visible with data', });
lyr_AnzahlStellpltze_19.set('fieldLabels', {'id': 'hidden field', 'gemeinde': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'haltestell': 'inline label - visible with data', 'stellplaet': 'inline label - visible with data', 'bemerkung': 'hidden field', 'echtzeit_b': 'hidden field', 'ÖPNVRegio': 'hidden field', 'ÖPNVS-Bah': 'hidden field', 'ÖPNV Bus': 'hidden field', 'SPFV': 'hidden field', 'ÖPNV Tram': 'hidden field', 'ÖPNV StaK': 'hidden field', 'ÖPNVRufta': 'hidden field', 'ÖPNVOn-De': 'hidden field', 'Urs. Daten': 'hidden field', 'Beschilder': 'inline label - visible with data', 'Bewirtscha': 'inline label - visible with data', 'Beschränk': 'inline label - visible with data', 'Betreiber': 'inline label - visible with data', 'Fahrradabs': 'hidden field', 'Fahrradbox': 'hidden field', 'Besonderhe': 'inline label - visible with data', 'Park_Ladem': 'hidden field', 'Carsh_Park': 'hidden field', 'Behin_Park': 'inline label - visible with data', 'Nextbike': 'hidden field', 'Datenquell': 'inline label - visible with data', 'Kursbuchst': 'hidden field', 'Zentralör': 'inline label - visible with data', 'Raumkatego': 'inline label - visible with data', 'SPNV/Stund': 'hidden field', 'Erhebungsa': 'hidden field', 'Fahrradb_n': 'hidden field', 'Anz_Fahrra': 'hidden field', 'Art_Fahrra': 'hidden field', 'Bundesland': 'inline label - visible with data', 'Bestand': 'hidden field', });
lyr_AnzahlStellpltze_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});