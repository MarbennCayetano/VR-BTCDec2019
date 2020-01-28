(function(){
	var script = {
 "paddingRight": 0,
 "definitions": [{
 "id": "panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B51EB64_909F_647B_41D3_44B570AD9379",
 "automaticZoomSpeed": 10
},
{
 "fontSize": "22px",
 "paddingRight": 0,
 "data": {
  "name": "photoalbum"
 },
 "fontFamily": "Akhand-Bold",
 "shadowBlurRadius": 6,
 "minWidth": 1,
 "rollOverFontColor": "#048BE1",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "paddingLeft": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 130,
 "class": "Button",
 "fontColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderColor": "#000000",
 "id": "Button_748008CC_648F_B8AA_41C2_97E5C5DE0CD2",
 "mode": "push",
 "label": "PHOTOALBUM",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_3A863D9B_3513_E8A1_41BD_38320457DF78, true, 0, this.effect_F9B43781_E8FB_35D6_41E1_9C676996BAB5, 'showEffect', false); this.ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_FF940A14_EDCE_10C9_41AD_4C4637F1E5BC.set('selectedIndex', -1); }, this); this.playList_FF940A14_EDCE_10C9_41AD_4C4637F1E5BC.set('selectedIndex', 0)",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "iconWidth": 32,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "height": "100%",
 "minHeight": 1,
 "textDecoration": "none",
 "borderSize": 0,
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "normal",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "camera_FD26AE82_EDCE_11C9_41D4_CA255A68E6FC",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -106.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD26DE82_EDCE_11C9_41B1_66F82DE77D3A",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FDEE231D_EDCE_30FB_41A1_ABAFBB55D556",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 57.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDEE531D_EDCE_30FB_41E6_40A1BA92D920",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2B8714F_EDCE_3357_41D8_5C0EBB0379D1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -124.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2B8614F_EDCE_3357_41ED_36B9B4C2C5D2",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2F3B60_909F_647B_41D3_064C672F72EE",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FCF654FB_EDCE_313F_41E8_76477A30895F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -33.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FCF674FB_EDCE_313F_41E7_E77612191CE9",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2894117_EDCE_30F7_41E1_9F0821D38C73",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -28.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2897117_EDCE_30F7_41D9_6920749AF0A6",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FD4BC3FE_EDCE_3739_41EA_ED8CAD6FFB59",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -28.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD4BE3FE_EDCE_3739_41E8_3CD6EC90CB5F",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD",
   "yaw": 152.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 59.75
  },
  {
   "panorama": "this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0",
   "yaw": 72.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 73.6
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_41_16-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_872E40D8_9180_A44B_41E3_29758586D898",
  "this.overlay_81D08592_9183_6CDF_41D5_1E6518A410D5",
  "this.panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B71A94C_9083_A44B_41C8_7825541D894A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2E6B5E_909F_6447_41D5_9D2E14ECC7DD",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2B5A174_EDCE_3349_41EA_07FAA4B04886",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 6.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2B5D174_EDCE_3349_41B6_FE129475D0E8",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B243126_9083_65C7_41D1_9085754DD6BB",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00",
   "yaw": 135.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -131.33
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B243126_9083_65C7_41D1_9085754DD6BB_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B243126_9083_65C7_41D1_9085754DD6BB_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B243126_9083_65C7_41D1_9085754DD6BB_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B243126_9083_65C7_41D1_9085754DD6BB_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B243126_9083_65C7_41D1_9085754DD6BB_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_13_24-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B243126_9083_65C7_41D1_9085754DD6BB_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_CAB0861C_D773_06D2_41D1_58BA66BB3439",
  "this.panorama_9B243126_9083_65C7_41D1_9085754DD6BB_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B536B6A_909F_644F_41D9_FC757373D1EE",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E22AE2AC_EDCE_31D9_41E4_A3DF1204AB8C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -27.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E22A12AC_EDCE_31D9_41ED_577572FF9466",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973",
   "yaw": -175.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 75.39
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_32_08-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_836F1687_9081_ECC5_41D1_A2F8EC095272",
  "this.panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B531B69_909F_644D_41C4_C02FCD21AE22",
 "automaticZoomSpeed": 10
},
{
 "id": "photo_F8DC37B7_E919_353A_41E3_8A07D21663EC",
 "height": 640,
 "image": {
  "levels": [
   {
    "url": "media/photo_F8DC37B7_E919_353A_41E3_8A07D21663EC.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "IMG_9765",
 "width": 480,
 "thumbnailUrl": "media/photo_F8DC37B7_E919_353A_41E3_8A07D21663EC_t.jpg",
 "class": "Photo",
 "duration": 5000
},
{
 "id": "panorama_9B21B7C5_9083_6C45_41CA_B49786892330",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B",
   "yaw": 154.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -104.94
  },
  {
   "panorama": "this.panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6",
   "yaw": 5.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 93.61
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B21B7C5_9083_6C45_41CA_B49786892330_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B21B7C5_9083_6C45_41CA_B49786892330_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B21B7C5_9083_6C45_41CA_B49786892330_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B21B7C5_9083_6C45_41CA_B49786892330_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B21B7C5_9083_6C45_41CA_B49786892330_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_25_10-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B21B7C5_9083_6C45_41CA_B49786892330_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_B689A908_B187_E5CB_417D_AAB200E18052",
  "this.overlay_B49F4F38_B181_FDCB_4193_DAC98A027160",
  "this.panorama_9B21B7C5_9083_6C45_41CA_B49786892330_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_E25E21C0_EDCE_3349_41D7_4346A2E546D6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E25E51C1_EDCE_334B_41CB_4D049AD0F9B5",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B54EB6C_909F_644B_41E0_25BCE5B26222",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FCCA14D3_EDCE_314F_41E5_16DC4537BFE2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 61.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FCCA04D3_EDCE_314F_41D0_7DB2405598A5",
 "automaticZoomSpeed": 10
},
{
 "id": "photo_F8D9CBF7_E919_1D3A_41E2_444D09563B2C",
 "height": 640,
 "image": {
  "levels": [
   {
    "url": "media/photo_F8D9CBF7_E919_1D3A_41E2_444D09563B2C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "IMG_9758",
 "width": 480,
 "thumbnailUrl": "media/photo_F8D9CBF7_E919_1D3A_41E2_444D09563B2C_t.jpg",
 "class": "Photo",
 "duration": 5000
},
{
 "id": "camera_FD684DE9_EDCE_135B_41CF_AAA3DE009020",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -44.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD685DE9_EDCE_135B_41D8_8E2E32CA11BD",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B243126_9083_65C7_41D1_9085754DD6BB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B548B6A_909F_644F_41C1_CEA6660D50E4",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "left": "0%",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": "100%",
 "class": "Image",
 "id": "Image_965D4BBA_9080_E4CF_41E0_B4D3FB577FDC",
 "url": "skin/Image_965D4BBA_9080_E4CF_41E0_B4D3FB577FDC.jpg",
 "height": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingTop": 0,
 "minHeight": 1,
 "top": "0%",
 "borderSize": 0,
 "data": {
  "name": "Image39167"
 }
},
{
 "id": "camera_FD76443F_EDCE_3137_41D8_A608FB893B93",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -174.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD76743F_EDCE_3137_41E4_FAA85CFFE844",
 "automaticZoomSpeed": 10
},
{
 "id": "photo_F8C16F43_E919_155A_41AB_FE318F3B13C4",
 "height": 640,
 "image": {
  "levels": [
   {
    "url": "media/photo_F8C16F43_E919_155A_41AB_FE318F3B13C4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "IMG_9760",
 "width": 480,
 "thumbnailUrl": "media/photo_F8C16F43_E919_155A_41AB_FE318F3B13C4_t.jpg",
 "class": "Photo",
 "duration": 5000
},
{
 "id": "panorama_9B21F886_9081_E4C7_41D2_8884153818B3_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B50EB63_909F_647D_41DC_299E2624D0D1",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B252225_9081_67C5_41D9_4CFA717C84D2",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323",
   "yaw": -79.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 165.44
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_21_16-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_EA709BDE_D135_0D4E_41E5_55D42052323A",
  "this.panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_tcap0"
 ],
 "hfovMax": 130
},
{
 "paddingRight": 0,
 "left": "0%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "right": "0%",
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Container_7DE2D59A_6911_E2E0_41A7_D15D0A935C33",
 "children": [
  "this.Container_7DE3E59A_6911_E2E0_41D7_0925C3250BD2",
  "this.Container_7DE3059A_6911_E2E0_41C7_5A5AF3BF1498"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_7DE2D59A_6911_E2E0_41A7_D15D0A935C33, false, 0, null, null, false)",
 "visible": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "--INFO"
 }
},
{
 "id": "panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -33.56,
  "class": "PanoramaCameraPosition",
  "pitch": 1.56
 },
 "initialSequence": "this.sequence_9B2D7B5D_909F_6445_41B1_3719ADDB3C01",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "class": "Container",
 "width": 6,
 "backgroundColor": [
  "#048BE1"
 ],
 "id": "Container_5AE81736_7DCC_BACA_41B3_ED927D90F867",
 "maxWidth": 6,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "maxHeight": 6,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "height": "100%",
 "paddingTop": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 50,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "gap": 10,
 "data": {
  "name": "-"
 }
},
{
 "id": "camera_E2E46B07_EDCE_10D7_41E8_B08869960C68",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 10.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2E47B07_EDCE_10D7_41C9_25AC0DB53AD5",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "left": "0%",
 "minWidth": 1000,
 "right": "0%",
 "shadow": false,
 "paddingLeft": 0,
 "scaleMode": "fit_to_height",
 "horizontalAlign": "center",
 "propagateClick": false,
 "class": "Image",
 "id": "Image_6924E557_649A_33AC_41BA_A1E22386BC22",
 "height": 100,
 "maxHeight": 130,
 "url": "skin/Image_6924E557_649A_33AC_41BA_A1E22386BC22.png",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "minHeight": 100,
 "borderSize": 0,
 "bottom": "0%",
 "data": {
  "name": "img "
 }
},
{
 "paddingRight": 0,
 "left": "0%",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": "100%",
 "class": "Image",
 "id": "Image_7DE3B59A_6911_E2E0_41D3_E1AF7DF208C7",
 "url": "skin/Image_7DE3B59A_6911_E2E0_41D3_E1AF7DF208C7.jpg",
 "height": "100%",
 "visible": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingTop": 0,
 "minHeight": 1,
 "top": "0%",
 "borderSize": 0,
 "data": {
  "name": "Image"
 }
},
{
 "id": "panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2E5B61_909F_647D_41D6_072AA7C8857F",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2AAABB5_EDCE_17CB_41E2_7B5265C1BE94",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -31.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2AACBB5_EDCE_17CB_41EC_6301C4D3F7F9",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2A92188_EDCE_33D9_41E7_8EAF93586417",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 150.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2A95188_EDCE_33D9_41EC_502D739FD656",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FDFF9D09_EDCE_10DB_41D5_CA820BC2DE49",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 151.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDFFAD09_EDCE_10DB_41D0_0B7E41712F4B",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B",
   "yaw": -118.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -30.09
  },
  {
   "panorama": "this.panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8",
   "yaw": -91.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 139.69
  },
  {
   "panorama": "this.panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7",
   "yaw": 75.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -175.63
  },
  {
   "panorama": "this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097",
   "yaw": -28.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 151.71
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_28_57-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_9217A686_9081_ACC7_41C6_2F552F996B6A",
  "this.overlay_9295C59A_9183_6CCF_41DA_F58726064409",
  "this.overlay_83153BD3_9081_645D_41E5_099A253438CE",
  "this.overlay_8337EE8C_9087_9CC4_41D7_AE1A04D81896",
  "this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B52EB68_909F_644B_41D5_07A577B56FF3",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B53CB69_909F_644D_41D9_FA5183413EED",
 "automaticZoomSpeed": 10
},
{
 "id": "effect_77AF96BF_6F11_E523_41B8_61E169A25F9B",
 "duration": 500,
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "id": "panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2FEB5F_909F_6445_41D4_72C294502632",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B20296D_908F_E445_41D2_0D706062DA23_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2FCB61_909F_647D_41B0_52D68D7C50F1",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FDC2DCF3_EDCE_114F_41BF_5783469749E3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -39.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDC20CF3_EDCE_114F_41C1_E0417BD8DF78",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -17.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0.22
 },
 "initialSequence": "this.sequence_9B2EAB5D_909F_6445_41D1_7D09A5F9AFAA",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FD378E63_EDCE_114F_41D2_8F7708162C5B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -120.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD379E63_EDCE_114F_41EB_8A0C9FB3A04D",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097",
   "yaw": 130.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 72.53
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_54_59-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_C608B0C8_D735_1BB2_41E1_D3043EEE4031",
  "this.panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "photo_E56DE4C2_E8FA_FF4F_41E0_FE1244E87534",
 "height": 743,
 "image": {
  "levels": [
   {
    "url": "media/photo_E56DE4C2_E8FA_FF4F_41E0_FE1244E87534.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "BTC Bus stop",
 "width": 1040,
 "thumbnailUrl": "media/photo_E56DE4C2_E8FA_FF4F_41E0_FE1244E87534_t.png",
 "class": "Photo",
 "duration": 5000
},
{
 "id": "panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00",
   "yaw": 128.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 90.19
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_09_49-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E0FD3A70_D0FF_0F52_41D2_F131773A966D",
  "this.panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FC38DFD7_EDCE_2F77_41B7_FBD1F108960B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -29.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FC38EFD7_EDCE_2F77_41A4_BAB9A36B45D2",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2F7B62_909F_647F_41BE_0918D0E740CB",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5",
   "yaw": 133.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 134.39
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_04_00-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_EC8E5077_D0D5_1B5E_41C8_05EC8657768A",
  "this.panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FDE52D32_EDCE_10C9_41E6_3F58F0BD8ABD",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDE54D32_EDCE_10C9_41CD_4FABEDB2C213",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B259A6D_9087_6445_41B7_D766BE088033",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5",
   "yaw": 173.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 147.68
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B259A6D_9087_6445_41B7_D766BE088033_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B259A6D_9087_6445_41B7_D766BE088033_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B259A6D_9087_6445_41B7_D766BE088033_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B259A6D_9087_6445_41B7_D766BE088033_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B259A6D_9087_6445_41B7_D766BE088033_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_02_38-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B259A6D_9087_6445_41B7_D766BE088033_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E68350B2_D0D5_7BD6_41E7_7494DC8316B5",
  "this.panorama_9B259A6D_9087_6445_41B7_D766BE088033_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FC285FF1_EDCE_2F4B_41E5_790D5039B45E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 100.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FC287FF1_EDCE_2F4B_41E6_597E6A98B651",
 "automaticZoomSpeed": 10
},
{
 "id": "playList_FF940A14_EDCE_10C9_41AD_4C4637F1E5BC",
 "class": "PlayList",
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_FF940A14_EDCE_10C9_41AD_4C4637F1E5BC, 0)",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58PhotoAlbumPlayer",
   "media": "this.album_E6F99AD8_E8E7_6B7B_41DF_ACE39FC43039"
  }
 ]
},
{
 "id": "panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B253277_9080_A445_41D6_ADAC6560B5B0",
   "yaw": 28.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 131.38
  },
  {
   "panorama": "this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0",
   "class": "AdjacentPanorama"
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_06_11-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_CFFF99B3_D77D_0DD6_41A5_890ECCD70B2C",
  "this.overlay_CF4B32D1_D773_1F52_41CA_28548BC1E769",
  "this.panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_E29E1B1A_EDCE_10F9_41D2_D08C49E73408",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -107.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E29E2B1A_EDCE_10F9_41A1_F8EC43531E8F",
 "automaticZoomSpeed": 10
},
{
 "id": "photo_F8DA1644_E919_175E_419F_44E6114566D5",
 "height": 2016,
 "image": {
  "levels": [
   {
    "url": "media/photo_F8DA1644_E919_175E_419F_44E6114566D5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Gym2",
 "width": 1512,
 "thumbnailUrl": "media/photo_F8DA1644_E919_175E_419F_44E6114566D5_t.jpg",
 "class": "Photo",
 "duration": 5000
},
{
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "class": "Container",
 "width": 6,
 "backgroundColor": [
  "#048BE1"
 ],
 "id": "Container_59617767_7DC3_B94A_41DC_C81A90150A74",
 "maxWidth": 6,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "maxHeight": 6,
 "height": 6,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "visible": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 50,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "gap": 10,
 "data": {
  "name": "-"
 }
},
{
 "id": "camera_FD815D58_EDCE_1379_41E5_14E9B1FCE6EC",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD816D58_EDCE_1379_41E5_988F3EDE4987",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00",
   "yaw": 135.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -110.34
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_14_49-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_C90D236B_D775_FD76_41E7_3B39495F8F4C",
  "this.panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B547B6D_909F_6445_41D2_F561EC09E418",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2095C78_EDCE_1139_41EA_8C04F8BB1009",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 33.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2096C78_EDCE_1139_41EB_7C7E1A40E242",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B521B68_909F_644B_41DD_986FD2075D47",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2E7B61_909F_647D_41E1_54164FBD6E5B",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B545B6D_909F_6445_41D0_F9798B5D371F",
 "automaticZoomSpeed": 10
},
{
 "fontSize": "22px",
 "paddingRight": 0,
 "data": {
  "name": "august 2019"
 },
 "fontFamily": "Akhand-Bold",
 "shadowBlurRadius": 15,
 "minWidth": 1,
 "rollOverFontColor": "#048BE1",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "shadow": false,
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "propagateClick": false,
 "width": 130,
 "class": "Button",
 "fontColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "id": "Button_9D537950_D16D_0D52_41C7_3471379292B9",
 "mode": "push",
 "pressedBackgroundOpacity": 0,
 "rollOverShadow": false,
 "label": "AUGUST 2019",
 "iconBeforeLabel": true,
 "click": "this.openLink('https://marbenncayetano.github.io/VR-BergstromTechCenter/', '_blank')",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "iconWidth": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "iconHeight": 0,
 "verticalAlign": "middle",
 "height": "100%",
 "minHeight": 1,
 "textDecoration": "none",
 "borderSize": 0,
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "bold",
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "camera_FCDB24C0_EDCE_3149_41E1_C073D3FDD025",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 120.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FCDB44C0_EDCE_3149_41D5_14BFA64882C5",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B253752_9080_AC5F_41B5_7C26816C4261",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323",
   "yaw": -74.04,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 155.22
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B253752_9080_AC5F_41B5_7C26816C4261_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B253752_9080_AC5F_41B5_7C26816C4261_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B253752_9080_AC5F_41B5_7C26816C4261_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B253752_9080_AC5F_41B5_7C26816C4261_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B253752_9080_AC5F_41B5_7C26816C4261_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_23_20-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B253752_9080_AC5F_41B5_7C26816C4261_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_EA58FFB8_D13D_05D2_41A4_7EB38AF95D51",
  "this.panorama_9B253752_9080_AC5F_41B5_7C26816C4261_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00",
   "yaw": -164.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -95.06
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_16_13-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E329125C_D0F7_1F52_41E5_5AA39BFD9E39",
  "this.panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B50AB63_909F_647D_41C1_4B7EF67FCA57",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FD45E41B_EDCE_30FF_41C5_6CEF5F3EBF69",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -104.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD45141B_EDCE_30FF_41EB_0667AF0F8704",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B259A6D_9087_6445_41B7_D766BE088033_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B514B67_909F_6445_41DF_AD6725796D99",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B521B66_909F_6447_41B5_4ADC4C434999",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FCB28F33_EDCE_10CF_41E2_308EB6E8DCB3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -107.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FCB2AF33_EDCE_10CF_41EB_EBBD055FD6BD",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B508B60_909F_647B_41BC_6EE8D8D024DA",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FDDA6CC8_EDCE_1159_41E0_108093214F17",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -151.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDDA7CC8_EDCE_1159_41E6_F9E64823CAC0",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00",
   "yaw": 172.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 67.11
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_11_13-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E15119E8_D0FD_0D72_41E2_97031F7FCB69",
  "this.panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B559B6D_909F_6445_41D2_85D2F3344B32",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 20,
 "left": "12%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "right": "12%",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "propagateClick": false,
 "class": "Container",
 "id": "Container_7DE3059A_6911_E2E0_41C7_5A5AF3BF1498",
 "children": [
  "this.Button_78C5D2AD_6EF0_BD24_41BA_7914C520D22E"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "borderSize": 0,
 "gap": 10,
 "bottom": "80%",
 "data": {
  "name": "Container X"
 }
},
{
 "id": "panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00",
   "yaw": 176.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 48.95
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_12_37-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E30FA85E_D0F5_0B4E_41C9_D5130D33042E",
  "this.panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FCA2DF46_EDCE_2F49_41D3_C5A36689C49E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -45.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FCA2FF47_EDCE_2F57_41E6_762C4260D119",
 "automaticZoomSpeed": 10
},
{
 "id": "mainPlayList",
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B23CC00_9081_63BB_41E0_43DDC548F993"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_9C8A3557_9080_AC45_419A_2BD004435816_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C8A3557_9080_AC45_419A_2BD004435816"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_9B21B7C5_9083_6C45_41CA_B49786892330_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B21B7C5_9083_6C45_41CA_B49786892330"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B219945_9083_E445_41D8_7770EEDDE1AE"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_9B71A94C_9083_A44B_41C8_7825541D894A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B71A94C_9083_A44B_41C8_7825541D894A"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_9B20296D_908F_E445_41D2_0D706062DA23_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B20296D_908F_E445_41D2_0D706062DA23"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "camera": "this.panorama_9B21F886_9081_E4C7_41D2_8884153818B3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B21F886_9081_E4C7_41D2_8884153818B3"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "camera": "this.panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B22E349_9083_644D_41AD_7C207EB11BBF"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "camera": "this.panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "camera": "this.panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "camera": "this.panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "camera": "this.panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "camera": "this.panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "camera": "this.panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "camera": "this.panorama_9B259A6D_9087_6445_41B7_D766BE088033_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B259A6D_9087_6445_41B7_D766BE088033"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "camera": "this.panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "camera": "this.panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "camera": "this.panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "camera": "this.panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B253277_9080_A445_41D6_ADAC6560B5B0"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "camera": "this.panorama_9B24F442_9081_A3BF_41D3_E31A82821585_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B24F442_9081_A3BF_41D3_E31A82821585"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "camera": "this.panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "camera": "this.panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "camera": "this.panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "camera": "this.panorama_9B243126_9083_65C7_41D1_9085754DD6BB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B243126_9083_65C7_41D1_9085754DD6BB"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "camera": "this.panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "camera": "this.panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "camera": "this.panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "camera": "this.panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B247C43_9080_A3BD_41DB_F22698212DBB"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "camera": "this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "camera": "this.panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B252225_9081_67C5_41D9_4CFA717C84D2"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "camera": "this.panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "camera": "this.panorama_9B253752_9080_AC5F_41B5_7C26816C4261_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B253752_9080_AC5F_41B5_7C26816C4261"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "camera": "this.panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "camera": "this.panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7"
  },
  {
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 0)",
   "camera": "this.panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C"
  }
 ]
},
{
 "id": "camera_FCE06EFA_EDCE_1139_41EA_5044F34C5DC8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 132.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FCE18EFA_EDCE_1139_41CE_D8CD66700ECC",
 "automaticZoomSpeed": 10
},
{
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "data": {
  "name": "X"
 },
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "minWidth": 30,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "shadow": false,
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#0069A3"
 ],
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "width": 50,
 "iconURL": "skin/Button_78C5D2AD_6EF0_BD24_41BA_7914C520D22E.png",
 "backgroundColor": [
  "#048BE1"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "id": "Button_78C5D2AD_6EF0_BD24_41BA_7914C520D22E",
 "mode": "push",
 "pressedBackgroundOpacity": 1,
 "maxWidth": 50,
 "iconHeight": 32,
 "maxHeight": 50,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_7DE2D59A_6911_E2E0_41A7_D15D0A935C33, false, 0, this.effect_7E0FE099_696E_E2E0_4183_0FC331E0D87C, 'hideEffect', false)",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "textDecoration": "none",
 "layout": "horizontal",
 "minHeight": 30,
 "gap": 5,
 "fontSize": "1.29vmin",
 "fontWeight": "normal"
},
{
 "id": "panorama_9B71A94C_9083_A44B_41C8_7825541D894A",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B",
   "yaw": 101.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 168.99
  },
  {
   "panorama": "this.panorama_9B219945_9083_E445_41D8_7770EEDDE1AE",
   "yaw": -5.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 175.26
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B71A94C_9083_A44B_41C8_7825541D894A_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B71A94C_9083_A44B_41C8_7825541D894A_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B71A94C_9083_A44B_41C8_7825541D894A_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B71A94C_9083_A44B_41C8_7825541D894A_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B71A94C_9083_A44B_41C8_7825541D894A_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_27_23-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B71A94C_9083_A44B_41C8_7825541D894A_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_96932F17_9081_9DC5_41B3_6C2DFB6A5669",
  "this.overlay_962D4C72_9081_9C5F_41D9_8A393AC1C142",
  "this.panorama_9B71A94C_9083_A44B_41C8_7825541D894A_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FC4C2F71_EDCE_2F4B_41E3_CF496FF2BFE8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 69.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FC4C3F71_EDCE_2F4B_419A_66AADB810883",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FC092FC3_EDCE_2F4F_41B7_C56D751679A1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -112.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FC093FC3_EDCE_2F4F_41EB_DBB4F1614ECB",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E25FDBEF_EDCE_1757_4198_EE00FACE21D8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -40.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E25FEBEF_EDCE_1757_41DF_6291045743FA",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -26.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0.15
 },
 "initialSequence": "this.sequence_9B2FAB5F_909F_6445_41E1_095456C02C34",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B52AB67_909F_6445_41D4_038BFA738BC3",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FD4C9DA4_EDCE_13C9_41E7_088F28BD187C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 15.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD4CADA4_EDCE_13C9_41CB_DFE74A6DA294",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FFF8C02D_EDCE_30DB_41CF_B54A216F695B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 152.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FFF8F02E_EDCE_30D9_41EB_93A76D63872A",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E22E4CB2_EDCE_11C9_41D6_B51CA22E85BF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E22E5CB2_EDCE_11C9_41A1_72EDD6FB6553",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764",
   "yaw": -122.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -169.86
  },
  {
   "panorama": "this.panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8",
   "yaw": 73.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 72.87
  },
  {
   "panorama": "this.panorama_9B247C43_9080_A3BD_41DB_F22698212DBB",
   "yaw": -112.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -16.73
  },
  {
   "panorama": "this.panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44",
   "yaw": 154.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -27.89
  },
  {
   "panorama": "this.panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556",
   "yaw": -28.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 152.02
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_37_48-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_9B41E884_9180_E4BB_41DB_AE7C0613C319",
  "this.overlay_9A4EB0C8_9180_A44B_41DF_D22E9732F083",
  "this.overlay_87CA4F13_9181_BDDD_41C9_45A2E377FDBD",
  "this.overlay_FB3CC418_D737_1AD2_41E7_F292925514FB",
  "this.overlay_E3B463C9_D0ED_1DB2_41DF_A51268E1B7D0",
  "this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5",
   "yaw": -164.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 114.79
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_05_28-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_EDE5B170_D0D3_3D52_41DD_E5A418423027",
  "this.panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_E2E1A0BA_EDCE_3139_4183_5D3670015884",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -30.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2E1D0BA_EDCE_3139_41C0_1A02E4C2CD7F",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FD0D7483_EDCE_31CF_41E1_5C6F5CCB70FC",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -129.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD028483_EDCE_31CF_41D0_CCE84709A7B0",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2A37199_EDCE_33FB_41BC_541D69EDFC67",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -131.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2A09199_EDCE_33FB_41CA_47796481DCA1",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2FAB61_909F_647D_41D1_5BF69926CC1A",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FD61745A_EDCE_3179_41B4_9EA8AC393E5D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -57.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD61645A_EDCE_3179_41C9_0F111616E781",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FFD84005_EDCE_30CB_41B9_41E259FE2AC2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -167.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FFD87005_EDCE_30CB_41C6_9C8323BE3B73",
 "automaticZoomSpeed": 10
},
{
 "transparencyActive": true,
 "paddingRight": 0,
 "minWidth": 1,
 "pressedRollOverIconURL": "skin/IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D_pressed.png",
 "pressedIconURL": "skin/IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D_pressed.png",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 58,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D.png",
 "id": "IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D",
 "mode": "toggle",
 "maxWidth": 58,
 "maxHeight": 58,
 "height": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "cursor": "hand",
 "data": {
  "name": "fullscreen"
 }
},
{
 "id": "camera_FC193FAD_EDCE_2FDB_41D4_D2CA1DD3FC9C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FC194FAE_EDCE_2FD9_41E8_EFD22A96CA1F",
 "automaticZoomSpeed": 10
},
{
 "transparencyActive": true,
 "paddingRight": 0,
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 58,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2E60E1EE_347D_0EFC_41C3_A8DD2E2819ED.png",
 "rollOverIconURL": "skin/IconButton_2E60E1EE_347D_0EFC_41C3_A8DD2E2819ED_rollover.png",
 "id": "IconButton_2E60E1EE_347D_0EFC_41C3_A8DD2E2819ED",
 "mode": "push",
 "maxWidth": 58,
 "click": "this.openLink('http://www.facebook.com/loremipsum', '_blank')",
 "maxHeight": 58,
 "height": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "cursor": "hand",
 "data": {
  "name": "fb"
 }
},
{
 "id": "panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0",
   "yaw": -169.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -122.42
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_17_42-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E3FAB352_D0F5_1D56_41C0_B3243F0EE942",
  "this.panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_tcap0"
 ],
 "hfovMax": 130
},
{
 "transparencyActive": true,
 "paddingRight": 0,
 "minWidth": 1,
 "pressedRollOverIconURL": "skin/IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE_pressed.png",
 "pressedIconURL": "skin/IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE_pressed.png",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 58,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE.png",
 "id": "IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE",
 "mode": "toggle",
 "maxWidth": 58,
 "maxHeight": 58,
 "height": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "cursor": "hand",
 "data": {
  "name": "gyroscopic"
 }
},
{
 "paddingRight": 0,
 "minWidth": 1,
 "left": 0,
 "shadow": false,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": "20%",
 "class": "Image",
 "id": "Image_818F6EBF_9080_9CC5_41A6_F02063278CC1",
 "maxWidth": 338,
 "maxHeight": 216,
 "url": "skin/Image_818F6EBF_9080_9CC5_41A6_F02063278CC1.png",
 "height": "20%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "top": 10,
 "borderSize": 0,
 "data": {
  "name": "Image5079"
 }
},
{
 "id": "camera_E20A9270_EDCE_3149_41A8_FC632EF888EE",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 148.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E20AB270_EDCE_3149_41E7_A83AF1C32F15",
 "automaticZoomSpeed": 10
},
{
 "id": "ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 0, 1)",
   "camera": "this.panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 1, 2)",
   "camera": "this.panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 2, 3)",
   "camera": "this.panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B23CC00_9081_63BB_41E0_43DDC548F993"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 3, 4)",
   "camera": "this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 4, 5)",
   "camera": "this.panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 5, 6)",
   "camera": "this.panorama_9C8A3557_9080_AC45_419A_2BD004435816_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C8A3557_9080_AC45_419A_2BD004435816"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 6, 7)",
   "camera": "this.panorama_9B21B7C5_9083_6C45_41CA_B49786892330_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B21B7C5_9083_6C45_41CA_B49786892330"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 7, 8)",
   "camera": "this.panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 8, 9)",
   "camera": "this.panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B219945_9083_E445_41D8_7770EEDDE1AE"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 9, 10)",
   "camera": "this.panorama_9B71A94C_9083_A44B_41C8_7825541D894A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B71A94C_9083_A44B_41C8_7825541D894A"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 10, 11)",
   "camera": "this.panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 11, 12)",
   "camera": "this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 12, 13)",
   "camera": "this.panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 13, 14)",
   "camera": "this.panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 14, 15)",
   "camera": "this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 15, 16)",
   "camera": "this.panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 16, 17)",
   "camera": "this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 17, 18)",
   "camera": "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 18, 19)",
   "camera": "this.panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 19, 20)",
   "camera": "this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 20, 21)",
   "camera": "this.panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 21, 22)",
   "camera": "this.panorama_9B20296D_908F_E445_41D2_0D706062DA23_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B20296D_908F_E445_41D2_0D706062DA23"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 22, 23)",
   "camera": "this.panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 23, 24)",
   "camera": "this.panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 24, 25)",
   "camera": "this.panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 25, 26)",
   "camera": "this.panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 26, 27)",
   "camera": "this.panorama_9B21F886_9081_E4C7_41D2_8884153818B3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B21F886_9081_E4C7_41D2_8884153818B3"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 27, 28)",
   "camera": "this.panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B22E349_9083_644D_41AD_7C207EB11BBF"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 28, 29)",
   "camera": "this.panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 29, 30)",
   "camera": "this.panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 30, 31)",
   "camera": "this.panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 31, 32)",
   "camera": "this.panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 32, 33)",
   "camera": "this.panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 33, 34)",
   "camera": "this.panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 34, 35)",
   "camera": "this.panorama_9B259A6D_9087_6445_41B7_D766BE088033_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B259A6D_9087_6445_41B7_D766BE088033"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 35, 36)",
   "camera": "this.panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 36, 37)",
   "camera": "this.panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 37, 38)",
   "camera": "this.panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 38, 39)",
   "camera": "this.panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B253277_9080_A445_41D6_ADAC6560B5B0"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 39, 40)",
   "camera": "this.panorama_9B24F442_9081_A3BF_41D3_E31A82821585_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B24F442_9081_A3BF_41D3_E31A82821585"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 40, 41)",
   "camera": "this.panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 41, 42)",
   "camera": "this.panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 42, 43)",
   "camera": "this.panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 43, 44)",
   "camera": "this.panorama_9B243126_9083_65C7_41D1_9085754DD6BB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B243126_9083_65C7_41D1_9085754DD6BB"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 44, 45)",
   "camera": "this.panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 45, 46)",
   "camera": "this.panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 46, 47)",
   "camera": "this.panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 47, 48)",
   "camera": "this.panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B247C43_9080_A3BD_41DB_F22698212DBB"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 48, 49)",
   "camera": "this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 49, 50)",
   "camera": "this.panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B252225_9081_67C5_41D9_4CFA717C84D2"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 50, 51)",
   "camera": "this.panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 51, 52)",
   "camera": "this.panorama_9B253752_9080_AC5F_41B5_7C26816C4261_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B253752_9080_AC5F_41B5_7C26816C4261"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 52, 53)",
   "camera": "this.panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 53, 54)",
   "camera": "this.panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 54, 55)",
   "camera": "this.panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 55, 0)",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58PhotoAlbumPlayer",
   "media": "this.album_E6F99AD8_E8E7_6B7B_41DF_ACE39FC43039"
  }
 ],
 "class": "PlayList",
 "change": "if(event.source.get('selectedIndex') != -1) { this.setComponentVisibility(this.Container_7A542551_6EFF_A77C_41BD_77B516563B0F, false, 0, this.effect_7B8186D4_6EF3_A564_41D1_26B2B20529FE, 'hideEffect', false) }"
},
{
 "paddingRight": 0,
 "progressLeft": 0,
 "left": 0,
 "minWidth": 100,
 "toolTipOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "shadow": false,
 "playbackBarHeadHeight": 15,
 "toolTipPaddingRight": 6,
 "toolTipFontColor": "#606060",
 "progressBarBorderColor": "#000000",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "firstTransitionDuration": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarOpacity": 1,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarProgressBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowOpacity": 1,
 "progressBarBorderSize": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "top": 0,
 "transitionMode": "blending",
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipShadowSpread": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipPaddingBottom": 4,
 "toolTipDisplayTime": 600,
 "progressBottom": 0,
 "playbackBarBottom": 5,
 "playbackBarHeight": 10,
 "playbackBarProgressOpacity": 1,
 "toolTipFontSize": 12,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "vrPointerColor": "#FFFFFF",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "progressHeight": 10,
 "playbackBarHeadWidth": 6,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "progressBarOpacity": 1,
 "propagateClick": false,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarRight": 0,
 "width": "100%",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadow": true,
 "progressRight": 0,
 "paddingBottom": 0,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "progressOpacity": 1,
 "progressBackgroundOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBorderRadius": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowColor": "#000000"
},
{
 "id": "photo_F8C1EC64_E919_3B5E_41D9_C836587D92F9",
 "height": 640,
 "image": {
  "levels": [
   {
    "url": "media/photo_F8C1EC64_E919_3B5E_41D9_C836587D92F9.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "IMG_9761",
 "width": 480,
 "thumbnailUrl": "media/photo_F8C1EC64_E919_3B5E_41D9_C836587D92F9_t.jpg",
 "class": "Photo",
 "duration": 5000
},
{
 "id": "panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -33.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0.64
 },
 "initialSequence": "this.sequence_9B2F8B5F_909F_6445_41D9_34D61C3923CB",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B20296D_908F_E445_41D2_0D706062DA23",
   "yaw": -105.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 158.32
  },
  {
   "panorama": "this.panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD",
   "yaw": 50.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 140.76
  },
  {
   "panorama": "this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0",
   "yaw": 152.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -28.09
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_38_30-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_9AE58AD6_9180_A447_41C5_172BD4AD4B88",
  "this.overlay_9A563ACF_9180_A445_41D5_4FAB16EF4A3F",
  "this.overlay_9A3BBE8F_9180_BCC5_41E4_9430CAD8771F",
  "this.panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_E2939B2D_EDCE_10DB_41C2_C6580FBA6B03",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 163.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E293AB2D_EDCE_10DB_41E0_9F3364AABC89",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2AD8BC9_EDCE_175B_41C9_B8FD0470EE2A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -32.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2AD9BC9_EDCE_175B_41E3_9C5D231FF6E6",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "left": "12%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "right": "12%",
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": true,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "id": "Container_7DE3E59A_6911_E2E0_41D7_0925C3250BD2",
 "children": [
  "this.Container_7DE3959A_6911_E2E0_41D2_9D01577E4575",
  "this.Container_7DE3A59A_6911_E2E0_41D8_A93A28426D33"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "data": {
  "name": "Global"
 }
},
{
 "id": "camera_FD1ACE07_EDCE_10D7_41C4_94A419FC271C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -104.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD1ADE07_EDCE_10D7_41B8_A914395B0E59",
 "automaticZoomSpeed": 10
},
{
 "transparencyActive": true,
 "paddingRight": 0,
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 58,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2E60F1ED_347D_0EFF_41C9_4BA017DDD347.png",
 "rollOverIconURL": "skin/IconButton_2E60F1ED_347D_0EFF_41C9_4BA017DDD347_rollover.png",
 "id": "IconButton_2E60F1ED_347D_0EFF_41C9_4BA017DDD347",
 "mode": "push",
 "maxWidth": 58,
 "click": "this.openLink('http://twitter.com/loremipsum', '_blank')",
 "maxHeight": 58,
 "height": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "cursor": "hand",
 "data": {
  "name": "twitter"
 }
},
{
 "paddingRight": 0,
 "left": "0%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "right": "0%",
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "class": "Container",
 "id": "Container_1830289D_3415_1D5C_41BC_8E6011E2CDF1",
 "children": [
  "this.Container_59617767_7DC3_B94A_41DC_C81A90150A74",
  "this.Button_6B3DCC00_647A_DF9A_41D5_DC120403F72A",
  "this.Container_5BE2992D_7DCC_D6DF_41DE_80372CEC6D50",
  "this.Button_750C11A1_648F_A89A_41C9_2E58278A81A6",
  "this.Container_5B47D45D_7DCC_DF7F_41B7_5849D8EC0E03",
  "this.Button_748008CC_648F_B8AA_41C2_97E5C5DE0CD2",
  "this.Container_5AE81736_7DCC_BACA_41B3_ED927D90F867",
  "this.Button_9D537950_D16D_0D52_41C7_3471379292B9",
  "this.IconButton_FA572146_E939_0D5A_41AA_6688A671BD6C"
 ],
 "height": 80,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "gap": 0,
 "bottom": 0,
 "data": {
  "name": "buttons"
 }
},
{
 "id": "camera_E2B04BA2_EDCE_17C9_41A3_EE9EF053E244",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 12.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2B05BA2_EDCE_17C9_41D5_B40616644AD1",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E26BBC3E_EDCE_1139_41AC_6947E55E95B8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 135.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E26BCC3E_EDCE_1139_41E6_CF0D15FF9B21",
 "automaticZoomSpeed": 10
},
{
 "transparencyActive": true,
 "paddingRight": 0,
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 58,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2E6041ED_347D_0EFF_41BF_3C82AFA80CBB.png",
 "rollOverIconURL": "skin/IconButton_2E6041ED_347D_0EFF_41BF_3C82AFA80CBB_rollover.png",
 "id": "IconButton_2E6041ED_347D_0EFF_41BF_3C82AFA80CBB",
 "mode": "push",
 "maxWidth": 58,
 "maxHeight": 58,
 "height": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "cursor": "hand",
 "data": {
  "name": "VR"
 }
},
{
 "id": "camera_E21ED25E_EDCE_3179_41EB_CE1177D2B321",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -29.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E21EF25E_EDCE_3179_41E5_8F30BF2B4370",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "left": "0%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "right": "0%",
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Container_3A863D9B_3513_E8A1_41BD_38320457DF78",
 "children": [
  "this.Container_3A26EF53_3514_E9A2_4159_FC2DDA226A54"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "visible": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.8,
 "paddingTop": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "---PHOTOALBUM"
 }
},
{
 "id": "camera_E2744239_EDCE_313B_41EB_55811908C9B7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 88.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2746239_EDCE_313B_41D3_A09580E843EB",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E21D4C64_EDCE_1149_41C9_83E49737D76D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 151.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E21D5C64_EDCE_1149_41B7_4C54990A4474",
 "automaticZoomSpeed": 10
},
{
 "fontSize": "22px",
 "paddingRight": 0,
 "data": {
  "name": "360 views"
 },
 "fontFamily": "Akhand-Bold",
 "shadowBlurRadius": 6,
 "minWidth": 1,
 "rollOverFontColor": "#048BE1",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "paddingLeft": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 110,
 "class": "Button",
 "fontColor": "#000000",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderColor": "#000000",
 "id": "Button_6B3DCC00_647A_DF9A_41D5_DC120403F72A",
 "mode": "push",
 "label": "360\u00ba VIEWS",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_7A542551_6EFF_A77C_41BD_77B516563B0F, true, 0, this.effect_78B5ED2F_6F10_6723_41CB_017231EE0D8C, 'showEffect', false)",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "iconWidth": 32,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "height": "100%",
 "minHeight": 1,
 "textDecoration": "none",
 "borderSize": 0,
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "normal",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2E3B61_909F_647D_41BC_E334D0520066",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B543B6A_909F_644F_41D1_B7C8B1989AE3",
 "automaticZoomSpeed": 10
},
{
 "transparencyActive": true,
 "paddingRight": 0,
 "minWidth": 1,
 "pressedRollOverIconURL": "skin/IconButton_2E6091ED_347D_0EFF_41C6_E6D253232DA1_pressed.png",
 "pressedIconURL": "skin/IconButton_2E6091ED_347D_0EFF_41C6_E6D253232DA1_pressed.png",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 58,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2E6091ED_347D_0EFF_41C6_E6D253232DA1.png",
 "id": "IconButton_2E6091ED_347D_0EFF_41C6_E6D253232DA1",
 "mode": "toggle",
 "maxWidth": 58,
 "maxHeight": 58,
 "height": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "cursor": "hand",
 "data": {
  "name": "HS"
 }
},
{
 "id": "camera_FF9A4054_EDCE_3149_41D7_BA16B020C1D8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -86.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FF9A7054_EDCE_3149_41DB_8F2B2A6A2BDE",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00",
   "yaw": 151.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -27.89
  },
  {
   "panorama": "this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0",
   "yaw": -27.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 154.35
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_37_06-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_992E4F28_9180_9DCB_41C6_14A21E9020A6",
  "this.overlay_9EDB3FDE_9181_BC47_41DB_6F956D41502D",
  "this.panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6",
   "yaw": 122.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -59.42
  },
  {
   "panorama": "this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973",
   "yaw": -30.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -118.45
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_28_09-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_B23CC2AC_B080_E4CB_41A4_7ABCDD148C37",
  "this.overlay_918CF346_9080_A447_41E5_49DE3F731116",
  "this.panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C",
   "yaw": 151.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -28.95
  },
  {
   "panorama": "this.panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998",
   "yaw": -31.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -173.68
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_25_24-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_CC26BA66_D753_0F7E_41AC_7B4519C0E24C",
  "this.overlay_F16CC0DC_D755_1B52_41E0_A793A11C2783",
  "this.panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C",
   "yaw": -30.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 151.43
  },
  {
   "panorama": "this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097",
   "yaw": 156.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -108.87
  },
  {
   "panorama": "this.panorama_9B21F886_9081_E4C7_41D2_8884153818B3",
   "yaw": -44.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 112.15
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_44_17-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_F1FD3C4A_F183_BC4F_41C4_0A203F3DF3EB",
  "this.overlay_F078FA68_F180_A44B_41D6_0231AF6874A3",
  "this.overlay_DEF5C7D1_CF35_0552_41E1_8720C2B9AB34",
  "this.panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_E267DC51_EDCE_114B_41D3_A54755FB41DF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2670C51_EDCE_114B_41E7_B0BBF4AFB3E5",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B22E349_9083_644D_41AD_7C207EB11BBF",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B219945_9083_E445_41D8_7770EEDDE1AE",
   "yaw": -28.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -47.64
  },
  {
   "panorama": "this.panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C",
   "yaw": -122.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -30.32
  },
  {
   "panorama": "this.panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653",
   "yaw": 162.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 169.23
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_52_04-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_C4E24D6D_D753_0572_41CF_42C3241A9A9D",
  "this.overlay_FAAA14E2_D733_1B76_41D6_26679A538BE1",
  "this.overlay_FEA4BF30_D0D3_06D2_41E9_AEDAF1336C2D",
  "this.panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC",
   "yaw": -67.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -146.27
  },
  {
   "panorama": "this.panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7",
   "yaw": -173.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -31.35
  },
  {
   "panorama": "this.panorama_9B23CC00_9081_63BB_41E0_43DDC548F993",
   "yaw": -31.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 152.14
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_20_33-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_B6DFDA23_B181_67FD_41CF_76D42776AD69",
  "this.overlay_FDA0E8B3_F387_A4DD_41CF_B5A02D19CEED",
  "this.overlay_DDE64DC6_CF55_05BE_41BA_C3D1CFB59373"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FD2EC4AC_EDCE_31D9_41C5_644FBBBAFCDB",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD2EF4AC_EDCE_31D9_41E8_887A1D61CD6B",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FD9A7331_EDCE_30CB_41EA_FAE835B9DF93",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -28.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD9A6331_EDCE_30CB_41E1_2CDDA1FAB7D9",
 "automaticZoomSpeed": 10
},
{
 "id": "effect_78B5ED2F_6F10_6723_41CB_017231EE0D8C",
 "duration": 500,
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "id": "camera_E295EB40_EDCE_1749_41EA_9F41AF07EAF2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 152.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E295FB40_EDCE_1749_41B9_A7B531F828DA",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "right": "0%",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 110,
 "class": "Container",
 "id": "Container_2E6031ED_347D_0EFC_41A1_12EC3C0472FF",
 "height": 110,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minHeight": 1,
 "top": "0%",
 "borderSize": 0,
 "gap": 10,
 "data": {
  "name": "top"
 }
},
{
 "id": "camera_E2037282_EDCE_31C9_41DB_C7DEBA578B6C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -6.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2036282_EDCE_31C9_41AA_CC6270952C3C",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B52FB66_909F_6447_419E_1647EFC1E224",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E22652BF_EDCE_3137_41E7_478503A12DE3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 14.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E22672BF_EDCE_3137_41E4_79762972BBB6",
 "automaticZoomSpeed": 10
},
{
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "data": {
  "name": "X"
 },
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "minWidth": 50,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "right": 20,
 "fontStyle": "normal",
 "shadow": false,
 "rollOverBackgroundColor": [
  "#0069A3"
 ],
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "width": 50,
 "iconURL": "skin/Button_78C5D2AD_6EF0_BD24_41BA_7914C520D22E.png",
 "backgroundColor": [
  "#048BE1"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "id": "Button_7DC9A1F7_6916_6221_41A7_DA6068060007",
 "mode": "push",
 "pressedBackgroundOpacity": 1,
 "height": 50,
 "iconHeight": 32,
 "maxHeight": 50,
 "maxWidth": 50,
 "click": "this.setComponentVisibility(this.Container_3A863D9B_3513_E8A1_41BD_38320457DF78, false, 0, this.effect_77AF96BF_6F11_E523_41B8_61E169A25F9B, 'hideEffect', false)",
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "top": 20,
 "layout": "horizontal",
 "minHeight": 50,
 "textDecoration": "none",
 "gap": 5,
 "fontSize": "1.29vmin",
 "fontWeight": "normal"
},
{
 "paddingRight": 0,
 "progressLeft": 0,
 "left": "0%",
 "minWidth": 1,
 "toolTipOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "shadow": false,
 "playbackBarHeadHeight": 15,
 "toolTipPaddingRight": 6,
 "toolTipFontColor": "#606060",
 "progressBarBorderColor": "#000000",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "firstTransitionDuration": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarOpacity": 1,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarProgressBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowOpacity": 1,
 "progressBarBorderSize": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "top": "0%",
 "transitionMode": "blending",
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipShadowSpread": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipPaddingBottom": 4,
 "toolTipDisplayTime": 600,
 "progressBottom": 2,
 "playbackBarBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarProgressOpacity": 1,
 "toolTipFontSize": 12,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "vrPointerColor": "#FFFFFF",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "progressHeight": 10,
 "playbackBarHeadWidth": 6,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "progressBarOpacity": 1,
 "propagateClick": false,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarRight": 0,
 "width": "100%",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "id": "ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58",
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadow": true,
 "progressRight": 0,
 "paddingBottom": 0,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "progressOpacity": 1,
 "progressBackgroundOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBorderRadius": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer Photo"
 },
 "toolTipTextShadowColor": "#000000"
},
{
 "id": "panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2E2B5E_909F_6447_41B2_ECC9F8F7FCC8",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC",
   "yaw": 151.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -30.05
  },
  {
   "panorama": "this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323",
   "yaw": -27.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 146.8
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_24_01-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_F1000CBB_D755_0BD6_41B9_463D5876B1C0",
  "this.overlay_F7283B05_D755_0EB2_41C9_C531BEC31D28",
  "this.panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B247C43_9080_A3BD_41DB_F22698212DBB",
   "yaw": -30.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 150.51
  },
  {
   "panorama": "this.panorama_9B252225_9081_67C5_41D9_4CFA717C84D2",
   "yaw": 165.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -79.77
  },
  {
   "panorama": "this.panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F",
   "yaw": 132.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 12.05
  },
  {
   "panorama": "this.panorama_9B253752_9080_AC5F_41B5_7C26816C4261",
   "yaw": 155.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -74.04
  },
  {
   "panorama": "this.panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0",
   "yaw": 146.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -27.42
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_19_09-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_F7C96AC9_D753_0FB2_41DD_30A7A2B8ACAC",
  "this.overlay_F579EE6B_D72D_0776_41E6_99078910792D",
  "this.overlay_EFE1453F_D132_FACE_41B0_683FBC43BF8F",
  "this.overlay_EA722A13_D133_0ED6_41BD_BE0FCF5C0374",
  "this.overlay_EB855619_D13F_06D2_41D9_E7D167CE8277",
  "this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_E29320F1_EDCE_314B_41DD_BFC627F53016",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 150.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E29350F1_EDCE_314B_41E5_140CB6C08F93",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B55CB6D_909F_6445_41D2_72F3EB072DA0",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B24F442_9081_A3BF_41D3_E31A82821585",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5",
   "yaw": -165.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 55.6
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B24F442_9081_A3BF_41D3_E31A82821585_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B24F442_9081_A3BF_41D3_E31A82821585_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B24F442_9081_A3BF_41D3_E31A82821585_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B24F442_9081_A3BF_41D3_E31A82821585_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B24F442_9081_A3BF_41D3_E31A82821585_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_08_18-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B24F442_9081_A3BF_41D3_E31A82821585_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_CCEE62BD_D775_1FD2_41E6_859650A093CF",
  "this.panorama_9B24F442_9081_A3BF_41D3_E31A82821585_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FDDDD2D1_EDCE_314B_41EC_207E96206C01",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -46.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDDDF2D1_EDCE_314B_41E8_D1452BA8666D",
 "automaticZoomSpeed": 10
},
{
 "id": "effect_7874758E_6EF0_67E5_41D8_CFAFDB1F2DCE",
 "duration": 500,
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "id": "camera_FDE9BD1F_EDCE_10F7_41DF_459816C89471",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 67.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDE9DD1F_EDCE_10F7_41E8_75F4DCC1D882",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E204DC8B_EDCE_11DF_41E4_86B53B55519C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 148.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E204EC8B_EDCE_11DF_41DA_79D54FD693C3",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FC5C0F5C_EDCE_2F79_41C0_C62DC7C40246",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -65.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FC5C1F5C_EDCE_2F79_41D2_2C8A3924FC15",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2E0B61_909F_647D_41C5_3759CC6A1C5A",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2A431AD_EDCE_33DB_41E9_6C313D0E998F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2A451AE_EDCE_33D9_41D7_A0AB58AAAF81",
 "automaticZoomSpeed": 10
},
{
 "id": "photo_FB71355C_E919_756E_41E6_5C21688DA1FC",
 "height": 2016,
 "image": {
  "levels": [
   {
    "url": "media/photo_FB71355C_E919_756E_41E6_5C21688DA1FC.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Gym3",
 "width": 1512,
 "thumbnailUrl": "media/photo_FB71355C_E919_756E_41E6_5C21688DA1FC_t.jpg",
 "class": "Photo",
 "duration": 5000
},
{
 "id": "camera_FD975356_EDCE_3749_41E6_3D1E5E1D484D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD977356_EDCE_3749_41D6_97F517B182C2",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FDB0FD6B_EDCE_135F_41E7_C5E8E0575843",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -28.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDB01D6B_EDCE_135F_41CA_F1F124C3B48B",
 "automaticZoomSpeed": 10
},
{
 "gap": 26,
 "paddingRight": 70,
 "itemLabelFontSize": 16,
 "itemMinHeight": 50,
 "left": 0,
 "minWidth": 1,
 "itemPaddingBottom": 3,
 "shadow": false,
 "playList": "this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist",
 "itemBackgroundOpacity": 0,
 "itemWidth": 220,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#666666",
 "class": "ThumbnailGrid",
 "rollOverItemThumbnailShadowColor": "#048BE1",
 "itemOpacity": 1,
 "itemHeight": 160,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBackgroundColorDirection": "vertical",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "itemMaxHeight": 1000,
 "itemMinWidth": 50,
 "itemThumbnailOpacity": 1,
 "itemBorderRadius": 0,
 "itemLabelPosition": "bottom",
 "itemLabelFontStyle": "normal",
 "selectedItemLabelFontWeight": "bold",
 "selectedItemThumbnailShadow": true,
 "rollOverItemLabelFontColor": "#048BE1",
 "itemPaddingLeft": 3,
 "bottom": -0.2,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelGap": 7,
 "paddingLeft": 70,
 "itemPaddingRight": 3,
 "horizontalAlign": "center",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "propagateClick": false,
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadowColor": "#000000",
 "width": "100%",
 "itemBackgroundColor": [],
 "itemLabelFontFamily": "Exo",
 "id": "ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "scrollBarColor": "#048BE1",
 "itemHorizontalAlign": "center",
 "height": "92%",
 "itemBackgroundColorRatios": [],
 "itemThumbnailHeight": 125,
 "scrollBarVisible": "rollOver",
 "itemVerticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 70,
 "backgroundOpacity": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemPaddingTop": 3,
 "borderRadius": 5,
 "itemThumbnailBorderRadius": 0,
 "paddingTop": 10,
 "borderSize": 0,
 "minHeight": 1,
 "selectedItemLabelFontColor": "#048BE1",
 "itemThumbnailWidth": 220,
 "verticalAlign": "middle",
 "data": {
  "name": "ThumbnailList"
 },
 "rollOverItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "bold",
 "itemMaxWidth": 1000
},
{
 "id": "camera_FCC774E6_EDCE_3149_4195_EB96C7A500F2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FCC764E6_EDCE_3149_41E2_345E157CBA26",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2B39161_EDCE_334B_41D7_06A7059B6204",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 151.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2B3B161_EDCE_334B_41DC_B81BE05F1729",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B54DB6A_909F_644F_41D8_1A0C30073FF3",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E29950DE_EDCE_3179_41E4_D7C2B9B66D4C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -25.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E29940DE_EDCE_3179_41D7_A7D26EAA777D",
 "automaticZoomSpeed": 10
},
{
 "transparencyActive": false,
 "paddingRight": 0,
 "minWidth": 40,
 "pressedRollOverIconURL": "skin/IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4_pressed.png",
 "right": "1%",
 "pressedIconURL": "skin/IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4_pressed.png",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 70,
 "class": "IconButton",
 "iconURL": "skin/IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4.png",
 "rollOverIconURL": "skin/IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4_rollover.png",
 "id": "IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4",
 "mode": "push",
 "maxWidth": 60,
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 40,
 "top": "45.9%",
 "bottom": "45.9%",
 "cursor": "hand",
 "data": {
  "name": ">"
 }
},
{
 "id": "panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B22E349_9083_644D_41AD_7C207EB11BBF",
   "yaw": -30.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -122.3
  },
  {
   "panorama": "this.panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709",
   "yaw": 151.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -30.93
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_45_10-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_C09E19FA_CF33_0D56_41CA_A623FE6A76DF",
  "this.overlay_C5991E6D_D755_0772_41A7_608A4E0D4796",
  "this.panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FD791DCB_EDCE_135F_41D1_AB0B46D95D18",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD793DCB_EDCE_135F_41E8_55DBEE92675C",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E253D1D3_EDCE_334F_41D9_B31C55C1EDEA",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -37.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E253F1D3_EDCE_334F_41A8_967D914CCB1F",
 "automaticZoomSpeed": 10
},
{
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "buttonToggleGyroscope": "this.IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE",
 "buttonCardboardView": [
  "this.IconButton_2E6041ED_347D_0EFF_41BF_3C82AFA80CBB",
  "this.IconButton_FA572146_E939_0D5A_41AA_6688A671BD6C"
 ],
 "mouseControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleHotspots": "this.IconButton_2E6091ED_347D_0EFF_41C6_E6D253232DA1"
},
{
 "id": "album_E6F99AD8_E8E7_6B7B_41DF_ACE39FC43039",
 "label": "Bergstrom Technology Center Photos",
 "playList": "this.album_E6F99AD8_E8E7_6B7B_41DF_ACE39FC43039_AlbumPlayList",
 "thumbnailUrl": "media/album_E6F99AD8_E8E7_6B7B_41DF_ACE39FC43039_t.png",
 "class": "PhotoAlbum"
},
{
 "id": "panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B513B65_909F_6445_41D5_3AE95B1600E4",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "right": "0%",
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": "91.304%",
 "class": "Container",
 "id": "Container_2E6011ED_347D_0EFF_41C9_5AC77536D968",
 "children": [
  "this.IconButton_2E6041ED_347D_0EFF_41BF_3C82AFA80CBB",
  "this.IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE",
  "this.IconButton_2E60A1ED_347D_0EFF_41BC_A36ED8CE8127",
  "this.IconButton_2E6091ED_347D_0EFF_41C6_E6D253232DA1",
  "this.IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D",
  "this.IconButton_2E60F1ED_347D_0EFF_41C9_4BA017DDD347",
  "this.IconButton_2E60E1EE_347D_0EFC_41C3_A8DD2E2819ED"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "height": "85.959%",
 "scrollBarOpacity": 0.5,
 "visible": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "borderSize": 0,
 "gap": 3,
 "bottom": "0%",
 "data": {
  "name": "down"
 }
},
{
 "id": "camera_FD94DD45_EDCE_134B_41C1_AE10F7E6E246",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -51.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD94FD45_EDCE_134B_41E8_5BD644C7106C",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2ECB5D_909F_6445_41E0_9D7F47B6617E",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "class": "Container",
 "width": 6,
 "backgroundColor": [
  "#048BE1"
 ],
 "id": "Container_5BE2992D_7DCC_D6DF_41DE_80372CEC6D50",
 "maxWidth": 6,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "maxHeight": 6,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "height": "6.25%",
 "paddingTop": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 50,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "gap": 10,
 "data": {
  "name": "-"
 }
},
{
 "id": "panorama_9B253752_9080_AC5F_41B5_7C26816C4261_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B542B6C_909F_644B_41BB_9FEC1C23013E",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E230EC9D_EDCE_11FB_41E3_B7BAC18303C1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -27.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E230FC9D_EDCE_11FB_41DB_5B28118F3DF7",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9C8A3557_9080_AC45_419A_2BD004435816_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2EEB5E_909F_6447_41D1_B6460D12E4E7",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B2F4B99_9081_E4CD_41D9_C59790532097",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973",
   "yaw": 151.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -28.27
  },
  {
   "panorama": "this.panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709",
   "yaw": -108.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 156.82
  },
  {
   "panorama": "this.panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652",
   "yaw": 72.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 130.86
  },
  {
   "panorama": "this.panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5",
   "yaw": 55.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -167.62
  },
  {
   "panorama": "this.panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B",
   "yaw": -30.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 148.83
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_33_07-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_93AB6BD2_9181_A45F_41E1_E0936078F560",
  "this.overlay_929F6216_9180_E7C7_41DD_7C22D686E4CF",
  "this.overlay_F3BFC974_F381_645B_41E8_1C2A9542D639",
  "this.overlay_F0522C53_F381_9C5D_41D9_D1911EC22791",
  "this.overlay_F3A5EE09_F380_FFCD_418A_B321F2F61058",
  "this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FCD6BE9F_EDCE_11F7_41E7_059C7661C2F5",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -29.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FCD6EEA0_EDCE_11C9_41C1_FDD4AA4D5D84",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E262024C_EDCE_3159_41EC_A3E002D12BF4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -48.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E262324C_EDCE_3159_41EC_60E51D18D88E",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FD868379_EDCE_373B_41E6_B8EE4A7C1FF0",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 48.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD86A379_EDCE_373B_41AC_09113337F13F",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2F0B62_909F_647F_41DA_3EE29547C88C",
 "automaticZoomSpeed": 10
},
{
 "transparencyActive": false,
 "paddingRight": 0,
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 54,
 "class": "IconButton",
 "iconURL": "skin/IconButton_FA572146_E939_0D5A_41AA_6688A671BD6C.png",
 "id": "IconButton_FA572146_E939_0D5A_41AA_6688A671BD6C",
 "mode": "push",
 "maxWidth": 54,
 "maxHeight": 55,
 "height": 55,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton14830"
 }
},
{
 "id": "camera_FDB21396_EDCE_37C9_41E1_0E4EEBEE9C4D",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -17.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDB23396_EDCE_37C9_41DC_789DB86D6CC1",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2401210_EDCE_30C9_41E1_A0C659C2F860",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 152.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2400210_EDCE_30C9_41D3_478BA7FD85FA",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B219945_9083_E445_41D8_7770EEDDE1AE",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B71A94C_9083_A44B_41C8_7825541D894A",
   "yaw": 175.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -5.83
  },
  {
   "panorama": "this.panorama_9B22E349_9083_644D_41AD_7C207EB11BBF",
   "yaw": -47.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -28.79
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_26_40-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_97CAD4FE_908F_AC47_41A6_0739D0CF913C",
  "this.overlay_FB0FCCC7_D73F_0BBE_41EA_11FD10BA3FFF",
  "this.panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B24F442_9081_A3BF_41D3_E31A82821585_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B527B68_909F_644B_41CC_3315222B1A06",
 "automaticZoomSpeed": 10
},
{
 "id": "effect_7E0FE099_696E_E2E0_4183_0FC331E0D87C",
 "duration": 500,
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "id": "panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097",
   "yaw": -167.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 55.23
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_56_23-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_C6364770_D75D_0552_41C6_BF36D0840AD5",
  "this.panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FDC9A2E5_EDCE_314B_41A3_252F007666D9",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 150.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDC9C2E5_EDCE_314B_41E0_1EDE46B29360",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B530B6B_909F_644D_41C8_2BB28A7BFCA6",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E241DC16_EDCE_10C9_41BD_CD395AFC9DA2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -28.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E241EC16_EDCE_10C9_41C5_260F2A84903B",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2857B7A_EDCE_1739_41E2_4C6EF2306501",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -23.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2BA8B7A_EDCE_1739_41EA_31051E25E86B",
 "automaticZoomSpeed": 10
},
{
 "id": "album_E6F99AD8_E8E7_6B7B_41DF_ACE39FC43039_0",
 "height": 863,
 "image": {
  "levels": [
   {
    "url": "media/album_E6F99AD8_E8E7_6B7B_41DF_ACE39FC43039_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "BTC_Floorplan_Collab",
 "width": 1144,
 "thumbnailUrl": "media/album_E6F99AD8_E8E7_6B7B_41DF_ACE39FC43039_0_t.jpg",
 "class": "Photo",
 "duration": 5000
},
{
 "id": "effect_757D2F2A_6F10_A32C_41C3_CCBEB7AD57F6",
 "duration": 500,
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "id": "panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B21B7C5_9083_6C45_41CA_B49786892330",
   "yaw": 93.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 5.34
  },
  {
   "panorama": "this.panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B",
   "yaw": -59.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 122.31
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_25_57-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_B4EFC550_B183_6C5B_41D3_CA48B70D010E",
  "this.overlay_B34D57B4_B083_ACDB_41D7_0FB98692F4ED",
  "this.panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097",
   "yaw": 148.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -30.98
  },
  {
   "panorama": "this.panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD",
   "yaw": 43.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 142.92
  },
  {
   "panorama": "this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5",
   "yaw": -29.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -117.41
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_33_58-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_9D46B1AF_9180_E4C5_41C4_E071DD3FAF8C",
  "this.overlay_9C7E2D98_9187_FCCB_41D5_469300DCD79F",
  "this.overlay_F770A360_F383_E47B_41E3_E128B890C714",
  "this.panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "effect_7B8186D4_6EF3_A564_41D1_26B2B20529FE",
 "duration": 500,
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "id": "camera_FDAC03BA_EDCE_3739_41DA_51962C6C4442",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -17.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDAC53BA_EDCE_373E_41D8_719BF07555FF",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FFCB601A_EDCE_30F9_41D0_266109C31373",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 105.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FFC8901A_EDCE_30F9_4194_4D965DAECC9B",
 "automaticZoomSpeed": 10
},
{
 "transparencyActive": true,
 "paddingRight": 0,
 "minWidth": 1,
 "pressedRollOverIconURL": "skin/IconButton_2E60A1ED_347D_0EFF_41BC_A36ED8CE8127_pressed.png",
 "pressedIconURL": "skin/IconButton_2E60A1ED_347D_0EFF_41BC_A36ED8CE8127_pressed.png",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 58,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2E60A1ED_347D_0EFF_41BC_A36ED8CE8127.png",
 "id": "IconButton_2E60A1ED_347D_0EFF_41BC_A36ED8CE8127",
 "mode": "toggle",
 "maxWidth": 58,
 "maxHeight": 58,
 "height": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "cursor": "hand",
 "data": {
  "name": "audio"
 }
},
{
 "paddingRight": 0,
 "minWidth": 100,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "class": "Container",
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "id": "Container_7DE3459A_6911_E2E0_41CE_F97D3E361A8D",
 "children": [
  "this.HTMLText_7DE3759A_6911_E2E0_41A7_C2659986BA1F"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "paddingBottom": 50,
 "backgroundOpacity": 0.3,
 "height": "100%",
 "paddingTop": 70,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 300,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Container text"
 }
},
{
 "id": "panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B22E349_9083_644D_41AD_7C207EB11BBF",
   "yaw": 169.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 162.92
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_53_28-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_F97B34EE_D72E_FB4E_41D5_9B7F425A9374",
  "this.panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FD07DE44_EDCE_1149_41D2_8FD736F64077",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -28.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD07FE44_EDCE_1149_41E9_FD0CF506325E",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B54BB6C_909F_644B_41D7_DE2FD8236A38",
 "automaticZoomSpeed": 10
},
{
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "data": {
  "name": "X"
 },
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "minWidth": 50,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "right": 20,
 "fontStyle": "normal",
 "shadow": false,
 "rollOverBackgroundColor": [
  "#0069A3"
 ],
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "class": "Button",
 "fontColor": "#FFFFFF",
 "width": 50,
 "iconURL": "skin/Button_78C5D2AD_6EF0_BD24_41BA_7914C520D22E.png",
 "backgroundColor": [
  "#048BE1"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "id": "Button_775D3775_6F10_A324_41B1_8092A2023E17",
 "mode": "push",
 "pressedBackgroundOpacity": 1,
 "height": 50,
 "iconHeight": 32,
 "maxHeight": 50,
 "maxWidth": 50,
 "click": "this.setComponentVisibility(this.Container_7A542551_6EFF_A77C_41BD_77B516563B0F, false, 0, this.effect_7874758E_6EF0_67E5_41D8_CFAFDB1F2DCE, 'hideEffect', false)",
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "top": 20,
 "layout": "horizontal",
 "minHeight": 50,
 "textDecoration": "none",
 "gap": 5,
 "fontSize": "1.29vmin",
 "fontWeight": "normal"
},
{
 "id": "camera_FD145E26_EDCE_10D6_41D9_CD5C5711946E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 148.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD146E27_EDCE_10D7_41E9_52930CE7ACE4",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48",
   "yaw": -29.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 150.71
  },
  {
   "panorama": "this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5",
   "yaw": 158.65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 162.64
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_59_14-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E411266E_D0D3_074E_41E9_D2BF4C0D04E0",
  "this.overlay_FB332151_D0D5_1D52_41E4_B2D1EA478956",
  "this.panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_E2BEFB8D_EDCE_17DB_41E5_EFB011316D1E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -49.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2BE0B8D_EDCE_17DB_41E0_DF597B1EBC85",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B51AB64_909F_647B_41D4_6342A2A84CD0",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FC6FCF99_EDCE_2FFB_41E7_E745BFCB81E1",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -11.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FC6FEF99_EDCE_2FFB_41EB_EDA7CD79B378",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509",
   "yaw": 150.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -29.25
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_00_36-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_FB0E24DE_D0DF_3B4E_41E8_3B7B2D86E971",
  "this.panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FD13D46E_EDCE_3159_41E1_19B827FBDE7C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -27.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD13C46E_EDCE_3159_41DE_920AECC622FC",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FDD1BCDE_EDCE_1179_41C9_56A4D8EE64EC",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -21.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDD1CCDE_EDCE_1179_41DE_E672D91409D5",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E284C13B_EDCE_333F_41E5_5CBD45553B02",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -67.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E284F13B_EDCE_333F_41B5_1A0D12855338",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B533B6B_909F_644D_41B8_D53022915D32",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B523B68_909F_644B_41D0_252CD8D8B8E6",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FD5E63DB_EDCE_377F_41E3_9F2D2D2D5C4F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 112.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD5F93DB_EDCE_377F_41A1_81A9F06E0A21",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -29.6,
  "class": "PanoramaCameraPosition",
  "pitch": -3.17
 },
 "initialSequence": "this.sequence_9B2D5B5C_909F_644B_41C1_A65E4DAF0EC0",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FD3FA497_EDCE_31F7_41E7_44AA0FFFB32E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 57.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD3FD497_EDCE_31F7_41A7_F581991A3212",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E24EA1F8_EDCE_3339_41E1_54617C5D265F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -89.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E24ED1F8_EDCE_3339_41E2_EC40040F36FE",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6",
   "yaw": 90.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 128.89
  },
  {
   "panorama": "this.panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B",
   "yaw": 67.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 172.51
  },
  {
   "panorama": "this.panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44",
   "yaw": -27.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 151.15
  },
  {
   "panorama": "this.panorama_9B243126_9083_65C7_41D1_9085754DD6BB",
   "yaw": -131.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 135.57
  },
  {
   "panorama": "this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5",
   "yaw": 152.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -27.9
  },
  {
   "panorama": "this.panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4",
   "yaw": -95.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -164.53
  },
  {
   "panorama": "this.panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6",
   "yaw": 48.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 176.84
  },
  {
   "panorama": "this.panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC",
   "yaw": -110.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 135.78
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_36_22-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_9E7C5957_9181_A445_41DC_DB13A2D198F8",
  "this.overlay_993CCD9F_9180_9CC5_41D5_3393552E0605",
  "this.overlay_CAC08C4C_D76D_0AB2_41DE_E7CB934A7BC1",
  "this.overlay_E17CD204_D0F5_1EB2_41E4_CC79E88120EE",
  "this.overlay_E79D3022_D0F7_1AF6_41E9_1435D5241395",
  "this.overlay_E7CC0120_D0F5_1AF2_41B2_2EA9F4E8774A",
  "this.overlay_E0D509E1_D0F5_0D72_41D9_168E5A574EB5",
  "this.overlay_E04EA4A7_D0F3_1BFE_41D7_4B26DEBF76DC",
  "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_E2E5E0CD_EDCE_315B_41C5_5EB5E49C2CF6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -78.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2E510CD_EDCE_315B_41C4_3F396A4C27D1",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B23CC00_9081_63BB_41E0_43DDC548F993",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC",
   "yaw": 162.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 75.92
  },
  {
   "panorama": "this.panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998",
   "yaw": 152.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -31.82
  },
  {
   "panorama": "this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B",
   "yaw": -29.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 151.89
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_21_23-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_B27617E1_B380_AC7D_419F_10BF930FA453",
  "this.overlay_B87962A8_B180_E4CB_41D5_B78651E850C2",
  "this.overlay_F5A6E512_F380_EDDF_41B8_3BDAD74909CC",
  "this.panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58",
 "buttonPrevious": "this.IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC",
 "buttonNext": "this.IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4"
},
{
 "id": "camera_E2799225_EDCE_30CB_41D2_F5D3477F7EB5",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -25.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2798225_EDCE_30CB_41CA_0CC8011E7D54",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E2552C03_EDCE_10CF_41D0_155512275D17",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2554C03_EDCE_10CF_41E2_CE7C7C974C99",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973",
   "yaw": 139.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -91.16
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_30_26-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_82582657_9081_6C45_41A3_4265CC4E354A",
  "this.panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B21B7C5_9083_6C45_41CA_B49786892330_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -27.79,
  "class": "PanoramaCameraPosition",
  "pitch": -0.49
 },
 "initialSequence": "this.sequence_9B2E0B5E_909F_6447_4192_73F84A1CCCA6",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "left": "0%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "right": "0%",
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Container_7A542551_6EFF_A77C_41BD_77B516563B0F",
 "children": [
  "this.Container_7A549551_6EFF_A77C_41D5_C1ADFF60CE66"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "click": "this.setComponentVisibility(this.Container_7A542551_6EFF_A77C_41BD_77B516563B0F, false, 0, null, null, false)",
 "visible": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "shadow": false,
 "propagateClick": false,
 "width": "100%",
 "class": "HTMLText",
 "id": "HTMLText_7DE3759A_6911_E2E0_41A7_C2659986BA1F",
 "scrollBarColor": "#048BE1",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "scrollBarOpacity": 0.2,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.9vw;font-family:'Exo';\"><B><I>CTM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.9vw;font-family:'Exo';\"><B><I>Bergstrom Technology Center</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#048be1;font-size:1.45vw;font-family:'Exo';\"><B><I>Progress Update (December Shoot)</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.21vw;\"><BR STYLE=\"letter-spacing:0vw;color:#000000;font-size:5vw;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Take a Virtual Reality tour of the Bergstrom Technology Center. Use your computer, smartphone, tablet, or virtual reality devices to explore the new space. For a more immersive experience, the tour is also viewable through Google Cardboard, Oculus Go, and most VR headsets by selecting the \"VR headset mode\" button which will display on compatible devices.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vw;\"><BR STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">CTM\u2019s Collaboration Services, Web Services, Design and Delivery, the Enterprise PMO and the Public Safety PMO will have a new home at the </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://goo.gl/maps/UGe4oMGmYDKafajR9\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>Bergstrom Technology Center (6800 Burleson Road)</U></A></SPAN><SPAN STYLE=\"color:#333333;\">. The new space will be specifically designed to bring customers and teams together to collaborate on solution delivery.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vw;\"><BR STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Building ammenties include:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\"> \u2022 Shared conference rooms on main floor</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\"> \u2022 Coffee bar with barista</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\"> \u2022 Ping pong tables, miniature putt-putt, Frisbee golf, a gym and walking trails</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\"> \u2022 City of Austin employee childcare facility on-site</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\"> \u2022 While there is not a cafeteria, there are plans to have various food trucks available for meals </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vw;\"><BR STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Other City of Austin departments moving to the same building include Public Works, Fleet and Austin Public Health.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vw;\"><BR STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">If you have questions about the space or to provide any preliminary requirements, please contact:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\"><B>Terry Carroll (Project Manager)</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Terry.Carroll@austintexas.gov</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\"><B>Whitney Sklar (Acting CTM Administrator)</B></SPAN><SPAN STYLE=\"color:#333333;\"> Whitney.Sklar@ausps.org</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vw;\"><BR STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">For any questions regarding this </SPAN>360 <SPAN STYLE=\"color:#333333;\">VR Viewer, please contact </SPAN><SPAN STYLE=\"color:#333333;\"><B>Marbenn Cayetano</B></SPAN><SPAN STYLE=\"color:#333333;\">, marbenn.cayetano@austintexas.gov.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vw;\"><BR STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw;color:#000000;font-size:1.03vw;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">*This product is for informational purposes only and does not guarantee the accuracy, relevance, timeliness, or completeness of information contained.</SPAN></SPAN></DIV></div>",
 "minHeight": 1,
 "borderSize": 0,
 "data": {
  "name": "HTMLText"
 }
},
{
 "id": "panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B23CC00_9081_63BB_41E0_43DDC548F993",
   "yaw": 75.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 162.57
  },
  {
   "panorama": "this.panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998",
   "yaw": -146.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -67.79
  },
  {
   "panorama": "this.panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0",
   "yaw": -30.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 151.34
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_24_42-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_F312F2C5_F380_E445_419A_B15F6AF01A16",
  "this.overlay_F3333551_F381_AC5D_41E1_5B4F5F8B0110",
  "this.overlay_F25D1D20_D755_0AF2_41DA_DEE4199F512B",
  "this.panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2F6B60_909F_647B_41DB_7C1EC9876772",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FC930F0D_EDCE_10DB_41D1_D01EF5BBB0A6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FC931F0D_EDCE_10DB_41D2_624D1E324F51",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 50,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": false,
 "paddingLeft": 50,
 "horizontalAlign": "left",
 "propagateClick": false,
 "class": "Container",
 "width": "60%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "id": "Container_7DE3A59A_6911_E2E0_41D8_A93A28426D33",
 "children": [
  "this.Container_7DE3459A_6911_E2E0_41CE_F97D3E361A8D"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "data": {
  "name": "-right"
 }
},
{
 "paddingRight": 0,
 "left": "24%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "right": "24%",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": true,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "propagateClick": false,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "id": "Container_7A549551_6EFF_A77C_41D5_C1ADFF60CE66",
 "children": [
  "this.Container_7A547551_6EFF_A77C_41C6_43235B32276F",
  "this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "18%",
 "bottom": "18%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "id": "panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43",
   "yaw": -31.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 149.92
  },
  {
   "panorama": "this.panorama_9B71A94C_9083_A44B_41C8_7825541D894A",
   "yaw": 168.99,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 101.27
  },
  {
   "panorama": "this.panorama_9B21B7C5_9083_6C45_41CA_B49786892330",
   "yaw": -104.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 154.06
  },
  {
   "panorama": "this.panorama_9B23CC00_9081_63BB_41E0_43DDC548F993",
   "yaw": 151.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -29.77
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_22_33-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_B25711A0_B383_A4FB_41D9_22794D619718",
  "this.overlay_B81CAE1A_B180_BFCF_41D6_09ABC5AE9FB9",
  "this.overlay_B52E66E2_B181_6C7F_41DA_16C1CDA3C3E5",
  "this.overlay_96085A0D_9081_67C5_41AF_433A520DC41F",
  "this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_tcap0"
 ],
 "hfovMax": 130
},
{
 "transparencyActive": false,
 "paddingRight": 0,
 "left": "1%",
 "minWidth": 40,
 "pressedIconURL": "skin/IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC_pressed.png",
 "shadow": false,
 "pressedRollOverIconURL": "skin/IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC_pressed.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 170,
 "class": "IconButton",
 "iconURL": "skin/IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC.png",
 "rollOverIconURL": "skin/IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC_rollover.png",
 "id": "IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC",
 "mode": "push",
 "maxWidth": 60,
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 40,
 "top": "42%",
 "bottom": "42%",
 "cursor": "hand",
 "data": {
  "name": "<"
 }
},
{
 "id": "panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323",
   "yaw": 12.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 132.52
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_21_58-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_EAC2D697_D137_07DE_41E9_236BF405FBE6",
  "this.panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "effect_F9B43781_E8FB_35D6_41E1_9C676996BAB5",
 "duration": 500,
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "id": "panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2E4B5E_909F_6447_41E0_0D2F34F800DD",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9C8A3557_9080_AC45_419A_2BD004435816",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43",
   "yaw": 150.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -30.15
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9C8A3557_9080_AC45_419A_2BD004435816_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9C8A3557_9080_AC45_419A_2BD004435816_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9C8A3557_9080_AC45_419A_2BD004435816_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9C8A3557_9080_AC45_419A_2BD004435816_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9C8A3557_9080_AC45_419A_2BD004435816_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_24_15-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9C8A3557_9080_AC45_419A_2BD004435816_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_B72FC0FC_B180_E44B_41E3_80C6510764EB",
  "this.panorama_9C8A3557_9080_AC45_419A_2BD004435816_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FCF03EDC_EDCE_1179_41A1_3BC2D65D4FBB",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -47.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FCF06EDC_EDCE_1179_41EA_6E2DC4B8B34E",
 "automaticZoomSpeed": 10
},
{
 "fontSize": "22px",
 "paddingRight": 0,
 "data": {
  "name": "info"
 },
 "fontFamily": "Akhand-Bold",
 "shadowBlurRadius": 6,
 "minWidth": 1,
 "rollOverFontColor": "#048BE1",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "rollOverBackgroundColorRatios": [
  1,
  1
 ],
 "fontStyle": "normal",
 "paddingLeft": 0,
 "rollOverBackgroundColor": [
  "#000000",
  "#FFFFFF"
 ],
 "shadow": false,
 "horizontalAlign": "center",
 "propagateClick": false,
 "width": 130,
 "class": "Button",
 "fontColor": "#000000",
 "rollOverShadowBlurRadius": 66,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderColor": "#000000",
 "id": "Button_750C11A1_648F_A89A_41C9_2E58278A81A6",
 "mode": "push",
 "rollOverShadow": false,
 "label": "INFORMATION",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "click": "this.setComponentVisibility(this.Container_7DE2D59A_6911_E2E0_41A7_D15D0A935C33, true, 0, this.effect_757D2F2A_6F10_A32C_41C3_CCBEB7AD57F6, 'showEffect', false)",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "iconWidth": 32,
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "height": "100%",
 "minHeight": 1,
 "textDecoration": "none",
 "borderSize": 0,
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "normal",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "camera_FC7FCF85_EDCE_2FCB_41CE_45AEF0587F9F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -124.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FC7FDF85_EDCE_2FCB_41A7_A40BE300E3AE",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B",
   "yaw": 142.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 43.89
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_58_32-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_F86C37F1_D0D5_0552_41BF_F594704CF977",
  "this.panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_E2A60BDC_EDCE_1779_41E6_4E403A071219",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2A61BDC_EDCE_1779_41EA_AA885FEC696A",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9C8A3557_9080_AC45_419A_2BD004435816",
   "yaw": -30.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 150.42
  },
  {
   "panorama": "this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B",
   "yaw": 149.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -31.3
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_23_25-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_B73B3357_B183_6445_41E2_6165FB1288FF",
  "this.overlay_B8912F73_B181_9C5D_4184_FCC13EBCD5EC",
  "this.panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B253277_9080_A445_41D6_ADAC6560B5B0",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259",
   "yaw": 131.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 28.05
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_06_54-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_CF65228B_D772_FFB6_41E8_4EF289E07D66",
  "this.panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B247C43_9080_A3BD_41DB_F22698212DBB",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0",
   "yaw": -16.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -112.82
  },
  {
   "panorama": "this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323",
   "yaw": 150.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -30.23
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_18_26-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_F51DEED5_D72F_0752_41E8_EE03288867B3",
  "this.overlay_F427F569_D72D_0572_41E2_5F4FE61F008D",
  "this.panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_FC83EF20_EDCE_10C9_41E8_1C44DB24352A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FC83FF20_EDCE_10C9_41EA_E10F32BF4509",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "left": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "class": "Container",
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "id": "Container_7A547551_6EFF_A77C_41C6_43235B32276F",
 "children": [
  "this.Button_775D3775_6F10_A324_41B1_8092A2023E17"
 ],
 "height": 167,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "header"
 }
},
{
 "id": "camera_FDC762F9_EDCE_313B_41ED_B1713BEE17DE",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -21.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDC482F9_EDCE_313B_41C2_23862F171356",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FCC0FEBF_EDCE_1137_41C7_A58EF425693E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -17.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FCC01EBF_EDCE_1137_41AF_DABC49DB26FA",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "class": "Container",
 "width": 6,
 "backgroundColor": [
  "#048BE1"
 ],
 "id": "Container_5B47D45D_7DCC_DF7F_41B7_5849D8EC0E03",
 "maxWidth": 6,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "maxHeight": 6,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "height": "100%",
 "paddingTop": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "borderRadius": 50,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "gap": 10,
 "data": {
  "name": "-"
 }
},
{
 "id": "camera_E2948105_EDCE_30CB_41C3_0B36D11ABD01",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 74.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E294B105_EDCE_30CB_41A1_FB93E13134D9",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B20296D_908F_E445_41D2_0D706062DA23",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556",
   "yaw": 158.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -105.88
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B20296D_908F_E445_41D2_0D706062DA23_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B20296D_908F_E445_41D2_0D706062DA23_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B20296D_908F_E445_41D2_0D706062DA23_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B20296D_908F_E445_41D2_0D706062DA23_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B20296D_908F_E445_41D2_0D706062DA23_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_39_30-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B20296D_908F_E445_41D2_0D706062DA23_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_9BF7CC44_918F_63BB_41D0_0C2A21914197",
  "this.panorama_9B20296D_908F_E445_41D2_0D706062DA23_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8",
   "yaw": 59.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 152.72
  },
  {
   "panorama": "this.panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556",
   "yaw": 140.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 50.31
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_40_27-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_84E97237_9180_A7C5_41DF_71848E1FED4B",
  "this.overlay_81D9138A_9181_A4CF_41E3_4014EFA63B02",
  "this.panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_E2835B68_EDCE_1759_41DD_B39165113962",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 151.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E2836B68_EDCE_1759_41E4_A9893AA583EA",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B259A6D_9087_6445_41B7_D766BE088033",
   "yaw": 147.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 173.93
  },
  {
   "panorama": "this.panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD",
   "yaw": 114.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -164.28
  },
  {
   "panorama": "this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00",
   "yaw": -27.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 152.3
  },
  {
   "panorama": "this.panorama_9B24F442_9081_A3BF_41D3_E31A82821585",
   "yaw": 55.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -165.71
  },
  {
   "panorama": "this.panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F",
   "yaw": 134.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 133.06
  },
  {
   "panorama": "this.panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B",
   "yaw": -117.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -29.72
  },
  {
   "panorama": "this.panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509",
   "yaw": 162.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 158.65
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_35_04-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_9E6DF159_9181_A44D_41C1_207AF9C0EE56",
  "this.overlay_846C3DCE_919F_BC47_41A6_63947BFE88DE",
  "this.overlay_C89BD9B7_D77D_0DDE_41E2_3F08B0D79EC2",
  "this.overlay_CED2AFC3_D777_05B6_41B1_95445E777C8F",
  "this.overlay_E56CA7E3_D0D3_0576_41E4_90DE70C6530D",
  "this.overlay_E6C6118E_D0ED_1DCE_41D7_6B5F25C1C964",
  "this.overlay_EDB3625A_D0DF_7F56_41E8_EFEB25F95889",
  "this.overlay_E8E28364_D0DD_1D72_41E6_3E8146BB4F00",
  "this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_E28FDB55_EDCE_174B_41B0_4CE90633B4E9",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -27.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E28FEB55_EDCE_174B_41C6_9160FB99C8CD",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B517B65_909F_6445_41D6_6810B7C037FF",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "left": "14%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "right": "14%",
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Container_3A26EF53_3514_E9A2_4159_FC2DDA226A54",
 "children": [
  "this.ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58",
  "this.IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC",
  "this.IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4",
  "this.Button_7DC9A1F7_6916_6221_41A7_DA6068060007"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "verticalAlign": "top",
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "10%",
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "data": {
  "name": "Global"
 }
},
{
 "id": "camera_FD5D8D8F_EDCE_13D7_41EA_13E9A2A6D339",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 152.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FD5DAD8F_EDCE_13D7_41C0_18D8A86B956E",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B21F886_9081_E4C7_41D2_8884153818B3",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709",
   "yaw": 112.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -44.25
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B21F886_9081_E4C7_41D2_8884153818B3_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B21F886_9081_E4C7_41D2_8884153818B3_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B21F886_9081_E4C7_41D2_8884153818B3_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B21F886_9081_E4C7_41D2_8884153818B3_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B21F886_9081_E4C7_41D2_8884153818B3_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_10_46_36-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B21F886_9081_E4C7_41D2_8884153818B3_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_C6B86274_D753_1F52_4199_FF75D1772C45",
  "this.panorama_9B21F886_9081_E4C7_41D2_8884153818B3_tcap0"
 ],
 "hfovMax": 130
},
{
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "right": "0%",
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "width": 115,
 "class": "Container",
 "id": "Container_2E6121EE_347D_0EFC_41AD_FCF661FCEEBC",
 "children": [
  "this.Container_2E6031ED_347D_0EFC_41A1_12EC3C0472FF",
  "this.Container_2E6011ED_347D_0EFF_41C9_5AC77536D968"
 ],
 "height": 641,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "minHeight": 400,
 "top": "0%",
 "borderSize": 0,
 "gap": 10,
 "data": {
  "name": "--- SETTINGS"
 }
},
{
 "id": "camera_FDA3FD7D_EDCE_133B_41E0_D456F5A7D28C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -44.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDA30D7D_EDCE_133B_41E1_F84A157BC507",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E255F1E4_EDCE_3349_41BB_56C44366A757",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 62.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E25501E5_EDCE_334B_41EA_66646A131C85",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E282C129_EDCE_30DB_41DA_D9616D1F05D5",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 71.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E282F129_EDCE_30DB_41BC_2B969FB4B754",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_E27FCC2B_EDCE_10DF_41D0_887014D44A22",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -136.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E27FDC2B_EDCE_10DF_41D3_65A010DA239A",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B51DB66_909F_6447_41B6_B3A46322675D",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B53EB6B_909F_644D_41C5_078C14AA947F",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FFEA4041_EDCE_314B_41DD_9972879E57FF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 75.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FFEA7041_EDCE_314B_41E5_3F825BBEACBD",
 "automaticZoomSpeed": 10
},
{
 "id": "camera_FDF0830B_EDCE_30DF_41E1_1937B3CB481A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -24.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_FDF0B30B_EDCE_30DF_41D2_FDE51D4050B0",
 "automaticZoomSpeed": 10
},
{
 "id": "panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7",
   "yaw": -28.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 151.63
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_t.jpg",
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "levels": [
     {
      "tags": "ondemand",
      "width": 30720,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 60,
      "rowCount": 5,
      "url": "media/panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_0/0/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 36,
      "rowCount": 3,
      "url": "media/panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_0/1/{row}_{column}.jpg"
     },
     {
      "tags": "ondemand",
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 24,
      "rowCount": 2,
      "url": "media/panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_0/2/{row}_{column}.jpg"
     },
     {
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 12,
      "rowCount": 1,
      "url": "media/panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_0/3/{row}_{column}.jpg"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PIC_2019_12_31_11_26_08-3d",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_DB266B2D_CF57_0EF2_41DE_4ECAAC823223",
  "this.panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_tcap0"
 ],
 "hfovMax": 130
},
{
 "id": "camera_E23C829A_EDCE_31F9_41EB_AC60CCCF7ADF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 15.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_E23CB29A_EDCE_31F9_41DE_D518A1F7C1F6",
 "automaticZoomSpeed": 10
},
{
 "paddingRight": 0,
 "left": "0%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "propagateClick": false,
 "width": "100%",
 "class": "Container",
 "id": "Container_685CC558_649E_53A4_41C3_031C34B7328A",
 "children": [
  "this.Image_6924E557_649A_33AC_41BA_A1E22386BC22",
  "this.Container_1830289D_3415_1D5C_41BC_8E6011E2CDF1"
 ],
 "height": 144,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "minHeight": 1,
 "borderSize": 0,
 "gap": 10,
 "bottom": "0%",
 "data": {
  "name": "---BUTTON SET"
 }
},
{
 "id": "panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_9B2FEB62_909F_647F_41B7_FDC1564C03D1",
 "automaticZoomSpeed": 10
},
{
 "id": "photo_FB44D686_E91E_F7DA_41DA_45E368AB5650",
 "height": 2016,
 "image": {
  "levels": [
   {
    "url": "media/photo_FB44D686_E91E_F7DA_41DA_45E368AB5650.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Gym4",
 "width": 1512,
 "thumbnailUrl": "media/photo_FB44D686_E91E_F7DA_41DA_45E368AB5650_t.jpg",
 "class": "Photo",
 "duration": 5000
},
{
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "shadow": false,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "propagateClick": false,
 "class": "Container",
 "width": "65%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "id": "Container_7DE3959A_6911_E2E0_41D2_9D01577E4575",
 "children": [
  "this.Image_7DE3B59A_6911_E2E0_41D3_E1AF7DF208C7",
  "this.Image_965D4BBA_9080_E4CF_41E0_B4D3FB577FDC"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "gap": 10,
 "data": {
  "name": "-left"
 }
},
{
 "id": "sequence_9B51EB64_909F_647B_41D3_44B570AD9379",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD26DE82_EDCE_11C9_41B1_66F82DE77D3A",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FDEE531D_EDCE_30FB_41E6_40A1BA92D920",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2B8614F_EDCE_3357_41ED_36B9B4C2C5D2",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2F3B60_909F_647B_41D3_064C672F72EE",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FCF674FB_EDCE_313F_41E7_E77612191CE9",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2897117_EDCE_30F7_41D9_6920749AF0A6",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD4BE3FE_EDCE_3739_41E8_3CD6EC90CB5F",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_872E40D8_9180_A44B_41E3_29758586D898",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0, this.camera_FD26AE82_EDCE_11C9_41D4_CA255A68E6FC); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -10.58,
   "yaw": 72.87,
   "image": "this.AnimatedImageResource_E3C9BE49_EDC6_115B_41E4_BEE5530F5C5B",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.05
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 72.87,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.05,
   "pitch": -10.58,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_81D08592_9183_6CDF_41D5_1E6518A410D5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD, this.camera_FD378E63_EDCE_114F_41D2_8F7708162C5B); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9.74,
   "yaw": 152.72,
   "image": "this.AnimatedImageResource_E3C9EE49_EDC6_115B_41D8_26FD5FD32F47",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.09
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 152.72,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.09,
   "pitch": -9.74,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_9B2E6B5E_909F_6447_41D5_9D2E14ECC7DD",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2B5D174_EDCE_3349_41B6_FE129475D0E8",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_CAB0861C_D773_06D2_41D1_58BA66BB3439",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00, this.camera_FD868379_EDCE_373B_41E6_B8EE4A7C1FF0); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -11.57,
   "yaw": 135.57,
   "image": "this.AnimatedImageResource_E3F38E53_EDC6_114F_4192_99B259760DF7",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.01
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 135.57,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.01,
   "pitch": -11.57,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B243126_9083_65C7_41D1_9085754DD6BB_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B243126_9083_65C7_41D1_9085754DD6BB_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_9B536B6A_909F_644F_41D9_FC757373D1EE",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E22A12AC_EDCE_31D9_41ED_577572FF9466",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_836F1687_9081_ECC5_41D1_A2F8EC095272",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973, this.camera_FD45E41B_EDCE_30FF_41C5_6CEF5F3EBF69); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -18.35,
   "yaw": -175.63,
   "image": "this.AnimatedImageResource_E3CC8E3E_EDC6_1139_41EB_6449893E5F5D",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 13.57
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": -175.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.57,
   "pitch": -18.35,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_9B531B69_909F_644D_41C4_C02FCD21AE22",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_B689A908_B187_E5CB_417D_AAB200E18052",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B, this.camera_FFEA4041_EDCE_314B_41DD_9972879E57FF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -36.63,
   "yaw": 154.06,
   "image": "this.AnimatedImageResource_E3CE2E39_EDC6_113B_41EC_2899B6E9BA73",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 21.61
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 154.06,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.61,
   "pitch": -36.63,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B21B7C5_9083_6C45_41CA_B49786892330_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_B49F4F38_B181_FDCB_4193_DAC98A027160",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6, this.camera_FF9A4054_EDCE_3149_41D7_BA16B020C1D8); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -28.91,
   "yaw": 5.34,
   "image": "this.AnimatedImageResource_E3CE1E39_EDC6_113B_41E5_407554CEE01E",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 23.57
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 5.34,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.57,
   "pitch": -28.91,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B21B7C5_9083_6C45_41CA_B49786892330_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B21B7C5_9083_6C45_41CA_B49786892330_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E25E51C1_EDCE_334B_41CB_4D049AD0F9B5",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B54EB6C_909F_644B_41E0_25BCE5B26222",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FCCA04D3_EDCE_314F_41D0_7DB2405598A5",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD685DE9_EDCE_135B_41D8_8E2E32CA11BD",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B548B6A_909F_644F_41C1_CEA6660D50E4",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD76743F_EDCE_3137_41E4_FAA85CFFE844",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B50EB63_909F_647D_41DC_299E2624D0D1",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_EA709BDE_D135_0D4E_41E5_55D42052323A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323, this.camera_FD975356_EDCE_3749_41E6_3D1E5E1D484D); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -32.47,
   "yaw": -79.77,
   "image": "this.AnimatedImageResource_E3F15E57_EDC6_1177_41DC_5968E5C4744F",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 12.06
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "maps": [
  {
   "yaw": -79.77,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.06,
   "pitch": -32.47,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_9B2D7B5D_909F_6445_41B1_3719ADDB3C01",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2E47B07_EDCE_10D7_41C9_25AC0DB53AD5",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2E5B61_909F_647D_41D6_072AA7C8857F",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2AACBB5_EDCE_17CB_41EC_6301C4D3F7F9",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2A95188_EDCE_33D9_41EC_502D739FD656",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FDFFAD09_EDCE_10DB_41D0_0B7E41712F4B",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_9217A686_9081_ACC7_41C6_2F552F996B6A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B, this.camera_E2A60BDC_EDCE_1779_41E6_4E403A071219); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9.51,
   "yaw": -118.45,
   "image": "this.AnimatedImageResource_E3CC6E3D_EDC6_113B_41E0_D4160ABB3EF2",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.1
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -118.45,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.1,
   "pitch": -9.51,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_9295C59A_9183_6CCF_41DA_F58726064409",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097, this.camera_E241DC16_EDCE_10C9_41BD_CD395AFC9DA2); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9.12,
   "yaw": -28.27,
   "image": "this.AnimatedImageResource_E3CC4E3D_EDC6_113B_41ED_513B028BE70D",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.88
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -28.27,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.88,
   "pitch": -9.12,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_83153BD3_9081_645D_41E5_099A253438CE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7, this.camera_E2552C03_EDCE_10CF_41D0_155512275D17); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151,
      "url": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_1_HS_2_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.07,
   "pitch": -2.4,
   "yaw": 75.39
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 75.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.07,
   "pitch": -2.4,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_8337EE8C_9087_9CC4_41D7_AE1A04D81896",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8, this.camera_E25FDBEF_EDCE_1757_4198_EE00FACE21D8); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150,
      "url": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_1_HS_3_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.08,
   "pitch": 0.96,
   "yaw": -91.16
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": -91.16,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.08,
   "pitch": 0.96,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_1_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_9B52EB68_909F_644B_41D5_07A577B56FF3",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B53CB69_909F_644D_41D9_FA5183413EED",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2FEB5F_909F_6445_41D4_72C294502632",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2FCB61_909F_647D_41B0_52D68D7C50F1",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FDC20CF3_EDCE_114F_41C1_E0417BD8DF78",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2EAB5D_909F_6445_41D1_7D09A5F9AFAA",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD379E63_EDCE_114F_41EB_8A0C9FB3A04D",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_C608B0C8_D735_1BB2_41E1_D3043EEE4031",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097, this.camera_FCB28F33_EDCE_10CF_41E2_308EB6E8DCB3); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -29.88,
   "yaw": 130.86,
   "image": "this.AnimatedImageResource_E3F74E4D_EDC6_115B_41A0_A8CEA212EF5F",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.4
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 130.86,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.4,
   "pitch": -29.88,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_E0FD3A70_D0FF_0F52_41D2_F131773A966D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00, this.camera_E24EA1F8_EDCE_3339_41E1_54617C5D265F); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -27.78,
   "yaw": 128.89,
   "image": "this.AnimatedImageResource_E3F29E52_EDC6_1149_41BC_06C16D6923D3",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 12.65
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": 128.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.65,
   "pitch": -27.78,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FC38EFD7_EDCE_2F77_41A4_BAB9A36B45D2",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2F7B62_909F_647F_41BE_0918D0E740CB",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_EC8E5077_D0D5_1B5E_41C8_05EC8657768A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5, this.camera_FCA2DF46_EDCE_2F49_41D3_C5A36689C49E); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -27.32,
   "yaw": 133.06,
   "image": "this.AnimatedImageResource_E3F2AE50_EDC6_1149_41D1_33C1C1F38A0B",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.7
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 133.06,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.7,
   "pitch": -27.32,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FDE54D32_EDCE_10C9_41CD_4FABEDB2C213",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_E68350B2_D0D5_7BD6_41E7_7494DC8316B5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5, this.camera_E2AD8BC9_EDCE_175B_41C9_B8FD0470EE2A); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -29.46,
   "yaw": 173.93,
   "image": "this.AnimatedImageResource_E3F51E4F_EDC6_1157_41D6_4019487CC8AE",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.45
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 173.93,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.45,
   "pitch": -29.46,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B259A6D_9087_6445_41B7_D766BE088033_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B259A6D_9087_6445_41B7_D766BE088033_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FC287FF1_EDCE_2F4B_41E6_597E6A98B651",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_CFFF99B3_D77D_0DD6_41A5_890ECCD70B2C",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -8.08,
   "yaw": 155.12,
   "image": "this.AnimatedImageResource_E3F20E50_EDC6_1149_41E1_CF568220AF38",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.16
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 155.12,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.16,
   "pitch": -8.08,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_CF4B32D1_D773_1F52_41CA_28548BC1E769",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B253277_9080_A445_41D6_ADAC6560B5B0, this.camera_E262024C_EDCE_3159_41EC_A3E002D12BF4); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -17.02,
   "yaw": 28.05,
   "image": "this.AnimatedImageResource_E3F27E51_EDC6_114B_41CF_A66F5EF55BD4",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.67
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 28.05,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.67,
   "pitch": -17.02,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E29E2B1A_EDCE_10F9_41A1_F8EC43531E8F",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD816D58_EDCE_1379_41E5_988F3EDE4987",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_C90D236B_D775_FD76_41E7_3B39495F8F4C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00, this.camera_FC4C2F71_EDCE_2F4B_41E3_CF496FF2BFE8); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -25.05,
   "yaw": 135.78,
   "image": "this.AnimatedImageResource_E3F32E54_EDC6_1149_41E8_7F3C63D7643C",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 12.95
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": 135.78,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.95,
   "pitch": -25.05,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_9B547B6D_909F_6445_41D2_F561EC09E418",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2096C78_EDCE_1139_41EB_7C7E1A40E242",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B521B68_909F_644B_41DD_986FD2075D47",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2E7B61_909F_647D_41E1_54164FBD6E5B",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B545B6D_909F_6445_41D0_F9798B5D371F",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FCDB44C0_EDCE_3149_41D5_14BFA64882C5",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_EA58FFB8_D13D_05D2_41A4_7EB38AF95D51",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323, this.camera_FDF0830B_EDCE_30DF_41E1_1937B3CB481A); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -40.74,
   "yaw": -74.04,
   "image": "this.AnimatedImageResource_E3FE3E58_EDC6_1179_41EA_C88C9476AE69",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 10.83
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "maps": [
  {
   "yaw": -74.04,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.83,
   "pitch": -40.74,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B253752_9080_AC5F_41B5_7C26816C4261_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B253752_9080_AC5F_41B5_7C26816C4261_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_E329125C_D0F7_1F52_41E5_5AA39BFD9E39",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00, this.camera_E2A431AD_EDCE_33DB_41E9_6C313D0E998F); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -19.47,
   "yaw": -164.53,
   "image": "this.AnimatedImageResource_E3F37E54_EDC6_1149_41B0_B0E695A83CF8",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 13.48
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "maps": [
  {
   "yaw": -164.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.48,
   "pitch": -19.47,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_9B50AB63_909F_647D_41C1_4B7EF67FCA57",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD45141B_EDCE_30FF_41EB_0667AF0F8704",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B514B67_909F_6445_41DF_AD6725796D99",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B521B66_909F_6447_41B5_4ADC4C434999",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FCB2AF33_EDCE_10CF_41EB_EBBD055FD6BD",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B508B60_909F_647B_41BC_6EE8D8D024DA",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FDDA7CC8_EDCE_1159_41E6_F9E64823CAC0",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_E15119E8_D0FD_0D72_41E2_97031F7FCB69",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00, this.camera_FC092FC3_EDCE_2F4F_41B7_C56D751679A1); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -29.33,
   "yaw": 172.51,
   "image": "this.AnimatedImageResource_E3F22E52_EDC6_1149_41EC_A68AC132380B",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.46
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 172.51,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.46,
   "pitch": -29.33,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_9B559B6D_909F_6445_41D2_85D2F3344B32",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_E30FA85E_D0F5_0B4E_41C9_D5130D33042E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00, this.camera_E2A37199_EDCE_33FB_41BC_541D69EDFC67); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -31.32,
   "yaw": 176.84,
   "image": "this.AnimatedImageResource_E3F27E53_EDC6_114F_41E5_9882F161E717",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 12.21
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "maps": [
  {
   "yaw": 176.84,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.21,
   "pitch": -31.32,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FCA2FF47_EDCE_2F57_41E6_762C4260D119",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FCE18EFA_EDCE_1139_41CE_D8CD66700ECC",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_96932F17_9081_9DC5_41B3_6C2DFB6A5669",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B219945_9083_E445_41D8_7770EEDDE1AE, this.camera_FC193FAD_EDCE_2FDB_41D4_D2CA1DD3FC9C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -20.97,
   "yaw": -5.83,
   "image": "this.AnimatedImageResource_E3CF4E3B_EDC6_113F_41C4_AB256AEF5076",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 25.12
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -5.83,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.12,
   "pitch": -20.97,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B71A94C_9083_A44B_41C8_7825541D894A_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_962D4C72_9081_9C5F_41D9_8A393AC1C142",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B, this.camera_FC6FCF99_EDCE_2FFB_41E7_E745BFCB81E1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -20.74,
   "yaw": 101.27,
   "image": "this.AnimatedImageResource_E3CCAE3B_EDC6_113F_41DE_10C42C91CE69",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 25.16
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "maps": [
  {
   "yaw": 101.27,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.16,
   "pitch": -20.74,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B71A94C_9083_A44B_41C8_7825541D894A_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B71A94C_9083_A44B_41C8_7825541D894A_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FC4C3F71_EDCE_2F4B_419A_66AADB810883",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FC093FC3_EDCE_2F4F_41EB_DBB4F1614ECB",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E25FEBEF_EDCE_1757_41DF_6291045743FA",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2FAB5F_909F_6445_41E1_095456C02C34",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B52AB67_909F_6445_41D4_038BFA738BC3",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD4CADA4_EDCE_13C9_41CB_DFE74A6DA294",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FFF8F02E_EDCE_30D9_41EB_93A76D63872A",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E22E5CB2_EDCE_11C9_41A1_72EDD6FB6553",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_9B41E884_9180_E4BB_41DB_AE7C0613C319",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44, this.camera_E295EB40_EDCE_1749_41EA_9F41AF07EAF2); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -13.28,
   "yaw": 154.35,
   "image": "this.AnimatedImageResource_E3C8FE45_EDC6_114B_41EA_9AE2A87A6747",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.91
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 154.35,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.91,
   "pitch": -13.28,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_9A4EB0C8_9180_A44B_41DF_D22E9732F083",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556, this.camera_E28FDB55_EDCE_174B_41B0_4CE90633B4E9); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -7.53,
   "yaw": -28.09,
   "image": "this.AnimatedImageResource_E3C8DE46_EDC6_1149_41C7_CCA7C1F2D7FF",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.17
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -28.09,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.17,
   "pitch": -7.53,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_87CA4F13_9181_BDDD_41C9_45A2E377FDBD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8, this.camera_E29E1B1A_EDCE_10F9_41D2_D08C49E73408); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -12,
   "yaw": 73.6,
   "image": "this.AnimatedImageResource_E3C83E46_EDC6_1149_41B4_3BC8664964D0",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.98
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 73.6,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.98,
   "pitch": -12,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_FB3CC418_D737_1AD2_41E7_F292925514FB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B247C43_9080_A3BD_41DB_F22698212DBB, this.camera_E2939B2D_EDCE_10DB_41C2_C6580FBA6B03); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -6.09,
   "yaw": -112.82,
   "image": "this.AnimatedImageResource_E3C86E46_EDC6_1149_41C7_C5C7E42FD28A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.22
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -112.82,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.22,
   "pitch": -6.09,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_1_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_E3B463C9_D0ED_1DB2_41DF_A51268E1B7D0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764, this.camera_E2E46B07_EDCE_10D7_41E8_B08869960C68); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150,
      "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_1_HS_4_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.08,
   "pitch": 0.55,
   "yaw": -122.42
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": -122.42,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.08,
   "pitch": 0.55,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_1_HS_4_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_EDE5B170_D0D3_3D52_41DD_E5A418423027",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5, this.camera_FC5C0F5C_EDCE_2F79_41C0_C62DC7C40246); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -20.75,
   "yaw": -164.28,
   "image": "this.AnimatedImageResource_E3F2FE50_EDC6_1149_41CA_2458B42BF262",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 13.37
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": -164.28,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.37,
   "pitch": -20.75,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E2E1D0BA_EDCE_3139_41C0_1A02E4C2CD7F",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD028483_EDCE_31CF_41D0_CCE84709A7B0",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2A09199_EDCE_33FB_41CA_47796481DCA1",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2FAB61_909F_647D_41D1_5BF69926CC1A",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD61645A_EDCE_3179_41C9_0F111616E781",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FFD87005_EDCE_30CB_41C6_9C8323BE3B73",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FC194FAE_EDCE_2FD9_41E8_EFD22A96CA1F",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_E3FAB352_D0F5_1D56_41C0_B3243F0EE942",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0, this.camera_FDEE231D_EDCE_30FB_41A1_ABAFBB55D556); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -21.12,
   "yaw": -169.86,
   "image": "this.AnimatedImageResource_E3F08E54_EDC6_1149_41E3_96530760FD66",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 13.34
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": -169.86,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.34,
   "pitch": -21.12,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E20AB270_EDCE_3149_41E7_A83AF1C32F15",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2F8B5F_909F_6445_41D9_34D61C3923CB",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_9AE58AD6_9180_A447_41C5_172BD4AD4B88",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0, this.camera_FDFF9D09_EDCE_10DB_41D5_CA820BC2DE49); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -11.42,
   "yaw": 152.02,
   "image": "this.AnimatedImageResource_E3C98E47_EDC6_1157_41D7_D29075740A2A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.01
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 152.02,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.01,
   "pitch": -11.42,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_9A563ACF_9180_A445_41D5_4FAB16EF4A3F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B20296D_908F_E445_41D2_0D706062DA23, this.camera_FDD1BCDE_EDCE_1179_41C9_56A4D8EE64EC); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -8.84,
   "yaw": -105.88,
   "image": "this.AnimatedImageResource_E3C9FE47_EDC6_1157_41EB_E5295A92F872",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.13
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -105.88,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.13,
   "pitch": -8.84,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_9A3BBE8F_9180_BCC5_41E4_9430CAD8771F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD, this.camera_FDC2DCF3_EDCE_114F_41BF_5783469749E3); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -11.3,
   "yaw": 50.31,
   "image": "this.AnimatedImageResource_E3C9DE47_EDC6_1157_41D0_BA199D1216DE",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.02
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 50.31,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.02,
   "pitch": -11.3,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E293AB2D_EDCE_10DB_41E0_9F3364AABC89",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2AD9BC9_EDCE_175B_41E3_9C5D231FF6E6",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD1ADE07_EDCE_10D7_41B8_A914395B0E59",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2B05BA2_EDCE_17C9_41D5_B40616644AD1",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E26BCC3E_EDCE_1139_41E6_CF0D15FF9B21",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E21EF25E_EDCE_3179_41E5_8F30BF2B4370",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2746239_EDCE_313B_41D3_A09580E843EB",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E21D5C64_EDCE_1149_41B7_4C54990A4474",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2E3B61_909F_647D_41BC_E334D0520066",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B543B6A_909F_644F_41D1_B7C8B1989AE3",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FF9A7054_EDCE_3149_41DB_8F2B2A6A2BDE",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_992E4F28_9180_9DCB_41C6_14A21E9020A6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00, this.camera_E2401210_EDCE_30C9_41E1_A0C659C2F860); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -12.98,
   "yaw": 151.15,
   "image": "this.AnimatedImageResource_E3CB4E45_EDC6_114B_41E9_F0EEFACA96B4",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.7
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 151.15,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.7,
   "pitch": -12.98,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_9EDB3FDE_9181_BC47_41DB_6F956D41502D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0, this.camera_E2799225_EDCE_30CB_41D2_F5D3477F7EB5); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -6.81,
   "yaw": -27.89,
   "image": "this.AnimatedImageResource_E3C8AE45_EDC6_114B_41ED_2E91324B1C8C",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.96
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -27.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.96,
   "pitch": -6.81,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_B23CC2AC_B080_E4CB_41A4_7ABCDD148C37",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6, this.camera_FCDB24C0_EDCE_3149_41E1_C073D3FDD025); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -28.6,
   "yaw": 122.31,
   "image": "this.AnimatedImageResource_E3CCFE3C_EDC6_1139_41E5_A7A01771BECA",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 23.64
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 122.31,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.64,
   "pitch": -28.6,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_918CF346_9080_A447_41E5_49DE3F731116",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973, this.camera_FCCA14D3_EDCE_314F_41E5_16DC4537BFE2); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -8.74,
   "yaw": -30.09,
   "image": "this.AnimatedImageResource_E3CCDE3C_EDC6_1139_41BD_7DD23BB45AC5",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.13
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -30.09,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.13,
   "pitch": -8.74,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_CC26BA66_D753_0F7E_41AC_7B4519C0E24C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C, this.camera_E2B39161_EDCE_334B_41D7_06A7059B6204); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -14.1,
   "yaw": 151.63,
   "image": "this.AnimatedImageResource_E3FFCE59_EDC6_117B_41A4_51BA967FB8B6",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.87
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 151.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.87,
   "pitch": -14.1,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_F16CC0DC_D755_1B52_41E0_A793A11C2783",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998, this.camera_E2B5A174_EDCE_3349_41EA_07FAA4B04886); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9.16,
   "yaw": -31.35,
   "image": "this.AnimatedImageResource_E3FF2E59_EDC6_117B_41EA_2C6D2A097E22",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.11
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -31.35,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.11,
   "pitch": -9.16,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_F1FD3C4A_F183_BC4F_41C4_0A203F3DF3EB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C, this.camera_E2894117_EDCE_30F7_41E1_9F0821D38C73); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -16.03,
   "yaw": -30.93,
   "image": "this.AnimatedImageResource_E3C92E4A_EDC6_1159_41A4_C00911581EA2",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.74
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -30.93,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.74,
   "pitch": -16.03,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_F078FA68_F180_A44B_41D6_0231AF6874A3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097, this.camera_E282C129_EDCE_30DB_41DA_D9616D1F05D5); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -11.76,
   "yaw": 156.82,
   "image": "this.AnimatedImageResource_E3C96E4A_EDC6_1159_41D6_36B18A88A7A0",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 156.82,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14,
   "pitch": -11.76,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_DEF5C7D1_CF35_0552_41E1_8720C2B9AB34",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B21F886_9081_E4C7_41D2_8884153818B3, this.camera_E284C13B_EDCE_333F_41E5_5CBD45553B02); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -19.29,
   "yaw": -44.25,
   "image": "this.AnimatedImageResource_E3C94E4A_EDC6_1159_41CB_E4058720DEA9",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 13.49
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left"
 },
 "maps": [
  {
   "yaw": -44.25,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.49,
   "pitch": -19.29,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E2670C51_EDCE_114B_41E7_B0BBF4AFB3E5",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_C4E24D6D_D753_0572_41CF_42C3241A9A9D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C, this.camera_FC930F0D_EDCE_10DB_41D1_D01EF5BBB0A6); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -11.47,
   "yaw": -122.3,
   "image": "this.AnimatedImageResource_E3F7AE4C_EDC6_1159_41C9_AAE718E58BA9",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.01
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -122.3,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.01,
   "pitch": -11.47,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_FAAA14E2_D733_1B76_41D6_26679A538BE1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B219945_9083_E445_41D8_7770EEDDE1AE, this.camera_FCE06EFA_EDCE_1139_41EA_5044F34C5DC8); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -13.86,
   "yaw": -28.79,
   "image": "this.AnimatedImageResource_E3F78E4C_EDC6_1159_41D4_802F39869C04",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.88
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -28.79,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.88,
   "pitch": -13.86,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_FEA4BF30_D0D3_06D2_41E9_AEDAF1336C2D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653, this.camera_FC83EF20_EDCE_10C9_41E8_1C44DB24352A); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 266,
      "class": "ImageResourceLevel",
      "height": 266,
      "url": "media/panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_1_HS_2_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 12.48,
   "pitch": -2.92,
   "yaw": 162.92
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 162.92,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.48,
   "pitch": -2.92,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_B6DFDA23_B181_67FD_41CF_76D42776AD69",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B23CC00_9081_63BB_41E0_43DDC548F993, this.camera_E230EC9D_EDCE_11FB_41E3_B7BAC18303C1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9.83,
   "yaw": -31.82,
   "image": "this.AnimatedImageResource_E3C0EE31_EDC6_10CB_41E9_F851EA0CF400",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.09
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -31.82,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.09,
   "pitch": -9.83,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_FDA0E8B3_F387_A4DD_41CF_B5A02D19CEED",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC, this.camera_E2095C78_EDCE_1139_41EA_8C04F8BB1009); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -29.78,
   "yaw": -67.79,
   "image": "this.AnimatedImageResource_E3C38E33_EDC6_10CF_41E8_9D84EFC07832",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 12.41
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "maps": [
  {
   "yaw": -67.79,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.41,
   "pitch": -29.78,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_DDE64DC6_CF55_05BE_41BA_C3D1CFB59373",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7, this.camera_E204DC8B_EDCE_11DF_41E4_86B53B55519C); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -11.1,
   "yaw": -173.68,
   "image": "this.AnimatedImageResource_E3C3EE34_EDC6_10C9_41C3_3CCAC3BF6F0A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.03
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -173.68,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.03,
   "pitch": -11.1,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "sequence_FD2EF4AC_EDCE_31D9_41E8_887A1D61CD6B",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD9A6331_EDCE_30CB_41E1_2CDDA1FAB7D9",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E295FB40_EDCE_1749_41B9_A7B531F828DA",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2036282_EDCE_31C9_41AA_CC6270952C3C",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B52FB66_909F_6447_419E_1647EFC1E224",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E22672BF_EDCE_3137_41E4_79762972BBB6",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2E2B5E_909F_6447_41B2_ECC9F8F7FCC8",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_F1000CBB_D755_0BD6_41B9_463D5876B1C0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC, this.camera_FCC774E6_EDCE_3149_4195_EB96C7A500F2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -17.64,
   "yaw": 151.34,
   "image": "this.AnimatedImageResource_E3FE4E58_EDC6_1179_41DC_247FF69EAB86",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.62
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 151.34,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.62,
   "pitch": -17.64,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_F7283B05_D755_0EB2_41C9_C531BEC31D28",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323, this.camera_FCF654FB_EDCE_313F_41E8_76477A30895F); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -4.87,
   "yaw": -27.42,
   "image": "this.AnimatedImageResource_E3FFAE58_EDC6_1179_41E7_11E7EF45E3B9",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.25
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -27.42,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.25,
   "pitch": -4.87,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_F7C96AC9_D753_0FB2_41DD_30A7A2B8ACAC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0, this.camera_FFF8C02D_EDCE_30DB_41CF_B54A216F695B); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -8.88,
   "yaw": 146.8,
   "image": "this.AnimatedImageResource_E3F1AE56_EDC6_1149_41E4_EADB9FDAAD0F",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.13
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 146.8,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.13,
   "pitch": -8.88,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_F579EE6B_D72D_0776_41E6_99078910792D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B247C43_9080_A3BD_41DB_F22698212DBB, this.camera_FC38DFD7_EDCE_2F77_41B7_FBD1F108960B); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -10.72,
   "yaw": -30.23,
   "image": "this.AnimatedImageResource_E3F19E56_EDC6_1149_41D8_7EB4D1082CAD",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.05
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -30.23,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.05,
   "pitch": -10.72,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_EFE1453F_D132_FACE_41B0_683FBC43BF8F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B252225_9081_67C5_41D9_4CFA717C84D2, this.camera_FC285FF1_EDCE_2F4B_41E5_790D5039B45E); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -24.78,
   "yaw": 165.44,
   "image": "this.AnimatedImageResource_E3F1FE56_EDC6_1149_4199_45F55BCEC80E",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 12.98
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right"
 },
 "maps": [
  {
   "yaw": 165.44,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.98,
   "pitch": -24.78,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_EA722A13_D133_0ED6_41BD_BE0FCF5C0374",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F, this.camera_FFD84005_EDCE_30CB_41B9_41E259FE2AC2); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -19.73,
   "yaw": 132.52,
   "image": "this.AnimatedImageResource_E3F1DE56_EDC6_1149_41E8_BCBC8184D8D4",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 13.46
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left"
 },
 "maps": [
  {
   "yaw": 132.52,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.46,
   "pitch": -19.73,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_1_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_EB855619_D13F_06D2_41D9_E7D167CE8277",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B253752_9080_AC5F_41B5_7C26816C4261, this.camera_FFCB601A_EDCE_30F9_41D0_266109C31373); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -15.28,
   "yaw": 155.22,
   "image": "this.AnimatedImageResource_E3F13E56_EDC6_1149_4197_767DB15E2B87",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 13.79
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": 155.22,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.79,
   "pitch": -15.28,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_1_HS_4_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E29350F1_EDCE_314B_41E5_140CB6C08F93",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B55CB6D_909F_6445_41D2_72F3EB072DA0",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_CCEE62BD_D775_1FD2_41E6_859650A093CF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5, this.camera_FC7FCF85_EDCE_2FCB_41CE_45AEF0587F9F); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -22.45,
   "yaw": -165.71,
   "image": "this.AnimatedImageResource_E3F57E52_EDC6_1149_41EB_81F8F9141E71",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 13.21
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": -165.71,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.21,
   "pitch": -22.45,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B24F442_9081_A3BF_41D3_E31A82821585_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B24F442_9081_A3BF_41D3_E31A82821585_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FDDDF2D1_EDCE_314B_41E8_D1452BA8666D",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FDE9DD1F_EDCE_10F7_41E8_75F4DCC1D882",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E204EC8B_EDCE_11DF_41DA_79D54FD693C3",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FC5C1F5C_EDCE_2F79_41D2_2C8A3924FC15",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2E0B61_909F_647D_41C5_3759CC6A1C5A",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2A451AE_EDCE_33D9_41D7_A0AB58AAAF81",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD977356_EDCE_3749_41D6_97F517B182C2",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FDB01D6B_EDCE_135F_41CA_F1F124C3B48B",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FCC764E6_EDCE_3149_41E2_345E157CBA26",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2B3B161_EDCE_334B_41DC_B81BE05F1729",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B54DB6A_909F_644F_41D8_1A0C30073FF3",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E29940DE_EDCE_3179_41D7_A7D26EAA777D",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_C09E19FA_CF33_0D56_41CA_A623FE6A76DF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709, this.camera_FD2EC4AC_EDCE_31D9_41C5_644FBBBAFCDB); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -20.13,
   "yaw": 151.43,
   "image": "this.AnimatedImageResource_E3F69E4B_EDC6_115F_41DD_9C2B1CFF43DD",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.42
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 151.43,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.42,
   "pitch": -20.13,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_C5991E6D_D755_0772_41A7_608A4E0D4796",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B22E349_9083_644D_41AD_7C207EB11BBF, this.camera_FD3FA497_EDCE_31F7_41E7_44AA0FFFB32E); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -13.48,
   "yaw": -30.32,
   "image": "this.AnimatedImageResource_E3F6FE4B_EDC6_115F_41E9_505574D6BBA5",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.9
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -30.32,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.9,
   "pitch": -13.48,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FD793DCB_EDCE_135F_41E8_55DBEE92675C",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E253F1D3_EDCE_334F_41A8_967D914CCB1F",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "album_E6F99AD8_E8E7_6B7B_41DF_ACE39FC43039_AlbumPlayList",
 "class": "PhotoPlayList",
 "items": [
  {
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_E6F99AD8_E8E7_6B7B_41DF_ACE39FC43039_0"
  },
  {
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_F8D9CBF7_E919_1D3A_41E2_444D09563B2C"
  },
  {
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_F8C16F43_E919_155A_41AB_FE318F3B13C4"
  },
  {
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_F8DC37B7_E919_353A_41E3_8A07D21663EC"
  },
  {
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_F8C1EC64_E919_3B5E_41D9_C836587D92F9"
  },
  {
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_F8DA1644_E919_175E_419F_44E6114566D5"
  },
  {
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_FB44D686_E91E_F7DA_41DA_45E368AB5650"
  },
  {
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_FB71355C_E919_756E_41E6_5C21688DA1FC"
  },
  {
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_E56DE4C2_E8FA_FF4F_41E0_FE1244E87534"
  }
 ]
},
{
 "id": "sequence_9B513B65_909F_6445_41D5_3AE95B1600E4",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD94FD45_EDCE_134B_41E8_5BD644C7106C",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2ECB5D_909F_6445_41E0_9D7F47B6617E",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B542B6C_909F_644B_41BB_9FEC1C23013E",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E230FC9D_EDCE_11FB_41DB_5B28118F3DF7",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2EEB5E_909F_6447_41D1_B6460D12E4E7",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_93AB6BD2_9181_A45F_41E1_E0936078F560",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973, this.camera_E2835B68_EDCE_1759_41DD_B39165113962); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -12.35,
   "yaw": 151.71,
   "image": "this.AnimatedImageResource_E3CCDE3F_EDC6_1137_41E1_DD4935727045",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.74
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 151.71,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.74,
   "pitch": -12.35,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_929F6216_9180_E7C7_41DD_7C22D686E4CF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B, this.camera_E2AAABB5_EDCE_17CB_41E2_7B5265C1BE94); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -4.49,
   "yaw": -30.98,
   "image": "this.AnimatedImageResource_E3CC0E40_EDC6_1149_41E2_F26D44560F13",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.02
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -30.98,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.02,
   "pitch": -4.49,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_F3BFC974_F381_645B_41E8_1C2A9542D639",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652, this.camera_E2BEFB8D_EDCE_17DB_41E5_EFB011316D1E); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151,
      "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_1_HS_2_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.08,
   "pitch": -1.05,
   "yaw": 72.53
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 72.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.08,
   "pitch": -1.05,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_F0522C53_F381_9C5D_41D9_D1911EC22791",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5, this.camera_E2B04BA2_EDCE_17C9_41A3_EE9EF053E244); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151,
      "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_1_HS_3_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.08,
   "pitch": -0.57,
   "yaw": 55.23
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 55.23,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.08,
   "pitch": -0.57,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_1_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_F3A5EE09_F380_FFCD_418A_B321F2F61058",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709, this.camera_E2857B7A_EDCE_1739_41E2_4C6EF2306501); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -7.76,
   "yaw": -108.87,
   "image": "this.AnimatedImageResource_E3CC5E40_EDC6_1149_41E4_9C69FA8AF268",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.17
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -108.87,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.17,
   "pitch": -7.76,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_1_HS_4_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FCD6EEA0_EDCE_11C9_41C1_FDD4AA4D5D84",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E262324C_EDCE_3159_41EC_60E51D18D88E",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD86A379_EDCE_373B_41AC_09113337F13F",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2F0B62_909F_647F_41DA_3EE29547C88C",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FDB23396_EDCE_37C9_41DC_789DB86D6CC1",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2400210_EDCE_30C9_41D3_478BA7FD85FA",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_97CAD4FE_908F_AC47_41A6_0739D0CF913C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B71A94C_9083_A44B_41C8_7825541D894A, this.camera_E267DC51_EDCE_114B_41D3_A54755FB41DF); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -17.98,
   "yaw": 175.26,
   "image": "this.AnimatedImageResource_E3CFDE3B_EDC6_113F_41E4_F66285C3F0CD",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 25.59
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 175.26,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.59,
   "pitch": -17.98,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_FB0FCCC7_D73F_0BBE_41EA_11FD10BA3FFF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B22E349_9083_644D_41AD_7C207EB11BBF, this.camera_E21D4C64_EDCE_1149_41C9_83E49737D76D); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -10.78,
   "yaw": -47.64,
   "image": "this.AnimatedImageResource_E3CF3E3B_EDC6_113F_41A6_41C61CA37F41",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 14.04
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": -47.64,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.04,
   "pitch": -10.78,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_9B527B68_909F_644B_41CC_3315222B1A06",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_C6364770_D75D_0552_41C6_BF36D0840AD5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097, this.camera_E2B8714F_EDCE_3357_41D8_5C0EBB0379D1); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -20.71,
   "yaw": -167.62,
   "image": "this.AnimatedImageResource_E3F49E4D_EDC6_115B_41EA_A34128DE72F8",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 13.37
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": -167.62,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.37,
   "pitch": -20.71,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FDC9C2E5_EDCE_314B_41E0_1EDE46B29360",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B530B6B_909F_644D_41C8_2BB28A7BFCA6",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E241EC16_EDCE_10C9_41C5_260F2A84903B",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2BA8B7A_EDCE_1739_41EA_31051E25E86B",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_B4EFC550_B183_6C5B_41D3_CA48B70D010E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B21B7C5_9083_6C45_41CA_B49786892330, this.camera_FD76443F_EDCE_3137_41D8_A608FB893B93); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -27.07,
   "yaw": 93.61,
   "image": "this.AnimatedImageResource_E3CE5E3A_EDC6_1139_41EB_27FC5CA8CFA1",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 23.98
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 93.61,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.98,
   "pitch": -27.07,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_B34D57B4_B083_ACDB_41D7_0FB98692F4ED",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B, this.camera_FD61745A_EDCE_3179_41B4_9EA8AC393E5D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -21.71,
   "yaw": -59.42,
   "image": "this.AnimatedImageResource_E3CF8E3A_EDC6_1139_41E4_5BAC747EDF8B",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 25.02
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -59.42,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.02,
   "pitch": -21.71,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_9D46B1AF_9180_E4C5_41C4_E071DD3FAF8C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2F4B99_9081_E4CD_41D9_C59790532097, this.camera_E25E21C0_EDCE_3349_41D7_4346A2E546D6); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9.9,
   "yaw": 148.83,
   "image": "this.AnimatedImageResource_E3CDEE41_EDC6_114B_41BB_1CF1CF8AEF10",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.85
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 148.83,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.85,
   "pitch": -9.9,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_9C7E2D98_9187_FCCB_41D5_469300DCD79F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5, this.camera_E255F1E4_EDCE_3349_41BB_56C44366A757); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -5.81,
   "yaw": -29.72,
   "image": "this.AnimatedImageResource_E3CDCE41_EDC6_114B_41EA_267C3227AA11",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.22
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -29.72,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.22,
   "pitch": -5.81,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_F770A360_F383_E47B_41E3_E128B890C714",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD, this.camera_E253D1D3_EDCE_334F_41D9_B31C55C1EDEA); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151,
      "url": "media/panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_1_HS_2_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.08,
   "pitch": 1.2,
   "yaw": 43.89
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 43.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.08,
   "pitch": 1.2,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FDAC53BA_EDCE_373E_41D8_719BF07555FF",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FFC8901A_EDCE_30F9_4194_4D965DAECC9B",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_F97B34EE_D72E_FB4E_41D5_9B7F425A9374",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B22E349_9083_644D_41AD_7C207EB11BBF, this.camera_FDB21396_EDCE_37C9_41E1_0E4EEBEE9C4D); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -24.45,
   "yaw": 169.23,
   "image": "this.AnimatedImageResource_E3F73E4D_EDC6_115B_41E5_70DBDE6381A4",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 11.98
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": 169.23,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.98,
   "pitch": -24.45,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FD07FE44_EDCE_1149_41E9_FD0CF506325E",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B54BB6C_909F_644B_41D7_DE2FD8236A38",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD146E27_EDCE_10D7_41E9_52930CE7ACE4",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_E411266E_D0D3_074E_41E9_D2BF4C0D04E0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5, this.camera_FCC0FEBF_EDCE_1137_41C7_A58EF425693E); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -17.81,
   "yaw": 158.65,
   "image": "this.AnimatedImageResource_E3F45E4E_EDC6_1159_41E9_36CE4AF116A1",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.61
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 158.65,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.61,
   "pitch": -17.81,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_FB332151_D0D5_1D52_41E4_B2D1EA478956",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48, this.camera_FCD6BE9F_EDCE_11F7_41E7_059C7661C2F5); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -25.84,
   "yaw": -29.25,
   "image": "this.AnimatedImageResource_E3F5BE4E_EDC6_1159_41E1_F3C718C043FD",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.87
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -29.25,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.87,
   "pitch": -25.84,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E2BE0B8D_EDCE_17DB_41E0_DF597B1EBC85",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B51AB64_909F_647B_41D4_6342A2A84CD0",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FC6FEF99_EDCE_2FFB_41EB_EDA7CD79B378",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_FB0E24DE_D0DF_3B4E_41E8_3B7B2D86E971",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509, this.camera_E2A92188_EDCE_33D9_41E7_8EAF93586417); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -30.08,
   "yaw": 150.71,
   "image": "this.AnimatedImageResource_E3F5CE4F_EDC6_1157_41E7_B99858723541",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.37
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 150.71,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.37,
   "pitch": -30.08,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FD13C46E_EDCE_3159_41DE_920AECC622FC",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FDD1CCDE_EDCE_1179_41DE_E672D91409D5",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E284F13B_EDCE_333F_41B5_1A0D12855338",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B533B6B_909F_644D_41B8_D53022915D32",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B523B68_909F_644B_41D0_252CD8D8B8E6",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD5F93DB_EDCE_377F_41A1_81A9F06E0A21",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2D5B5C_909F_644B_41C1_A65E4DAF0EC0",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD3FD497_EDCE_31F7_41A7_F581991A3212",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E24ED1F8_EDCE_3339_41E2_EC40040F36FE",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_9E7C5957_9181_A445_41DC_DB13A2D198F8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44, this.camera_FDB0FD6B_EDCE_135F_41E7_C5E8E0575843); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -5.65,
   "yaw": -27.89,
   "image": "this.AnimatedImageResource_E3CA4E43_EDC6_114F_41E9_8227B5D0D218",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.99
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -27.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.99,
   "pitch": -5.65,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_993CCD9F_9180_9CC5_41D5_3393552E0605",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5, this.camera_FD5D8D8F_EDCE_13D7_41EA_13E9A2A6D339); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9.51,
   "yaw": 152.3,
   "image": "this.AnimatedImageResource_E3CBAE43_EDC6_114F_41B1_4CCDC5FEDCC5",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.87
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 152.3,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.87,
   "pitch": -9.51,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_CAC08C4C_D76D_0AB2_41DE_E7CB934A7BC1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B243126_9083_65C7_41D1_9085754DD6BB, this.camera_FDA3FD7D_EDCE_133B_41E0_D456F5A7D28C); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9,
   "yaw": -131.33,
   "image": "this.AnimatedImageResource_E3CB8E43_EDC6_114F_41E9_4B84C2711CEE",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.12
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -131.33,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.12,
   "pitch": -9,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_E17CD204_D0F5_1EB2_41E4_CC79E88120EE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC, this.camera_FD684DE9_EDCE_135B_41CF_AAA3DE009020); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_3_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.07,
   "pitch": 1.73,
   "yaw": -110.34
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": -110.34,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.07,
   "pitch": 1.73,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_E79D3022_D0F7_1AF6_41E9_1435D5241395",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4, this.camera_FD4C9DA4_EDCE_13C9_41E7_088F28BD187C); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_4_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.07,
   "pitch": 1.95,
   "yaw": -95.06
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": -95.06,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.07,
   "pitch": 1.95,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_4_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_E7CC0120_D0F5_1AF2_41B2_2EA9F4E8774A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6, this.camera_FD791DCB_EDCE_135F_41D1_AB0B46D95D18); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_5_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.08,
   "pitch": -0.16,
   "yaw": 48.95
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 48.95,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.08,
   "pitch": -0.16,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_5_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_E0D509E1_D0F5_0D72_41D9_168E5A574EB5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B, this.camera_FD815D58_EDCE_1379_41E5_14E9B1FCE6EC); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_6_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.08,
   "pitch": -0.66,
   "yaw": 67.11
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 67.11,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.08,
   "pitch": -0.66,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_6_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_E04EA4A7_D0F3_1BFE_41D7_4B26DEBF76DC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6, this.camera_FD94DD45_EDCE_134B_41C1_AE10F7E6E246); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_7_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.08,
   "pitch": -0.83,
   "yaw": 90.19
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 90.19,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.08,
   "pitch": -0.83,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_7_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E2E510CD_EDCE_315B_41C4_3F396A4C27D1",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_B27617E1_B380_AC7D_419F_10BF930FA453",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998, this.camera_FD145E26_EDCE_10D6_41D9_CD5C5711946E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9.86,
   "yaw": 152.14,
   "image": "this.AnimatedImageResource_E3C0DE35_EDC6_10CB_41EA_B57E7F459DC7",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.09
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 152.14,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.09,
   "pitch": -9.86,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_B87962A8_B180_E4CB_41D5_B78651E850C2",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B, this.camera_FD07DE44_EDCE_1149_41D2_8FD736F64077); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -8.31,
   "yaw": -29.77,
   "image": "this.AnimatedImageResource_E3C03E36_EDC6_10C9_41D3_98055EA1EA80",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.15
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -29.77,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.15,
   "pitch": -8.31,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_F5A6E512_F380_EDDF_41B8_3BDAD74909CC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC, this.camera_FD1ACE07_EDCE_10D7_41C4_94A419FC271C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -11.18,
   "yaw": 162.57,
   "image": "this.AnimatedImageResource_E3C06E36_EDC6_10C9_41E8_5A6B7C4DAED7",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 14.03
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": 162.57,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.03,
   "pitch": -11.18,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E2798225_EDCE_30CB_41CA_0CC8011E7D54",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E2554C03_EDCE_10CF_41E2_CE7C7C974C99",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_82582657_9081_6C45_41A3_4265CC4E354A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973, this.camera_E2744239_EDCE_313B_41EB_55811908C9B7); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -28.54,
   "yaw": 139.69,
   "image": "this.AnimatedImageResource_E3CDCE3E_EDC6_1139_41E1_BDD5DB663715",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.56
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 139.69,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.56,
   "pitch": -28.54,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_9B2E0B5E_909F_6447_4192_73F84A1CCCA6",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_F312F2C5_F380_E445_419A_B15F6AF01A16",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B23CC00_9081_63BB_41E0_43DDC548F993, this.camera_FDAC03BA_EDCE_3739_41DA_51962C6C4442); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -14.54,
   "yaw": 75.92,
   "image": "this.AnimatedImageResource_E3C30E34_EDC6_10C9_41ED_8CBCE4A887E8",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 13.84
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "maps": [
  {
   "yaw": 75.92,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.84,
   "pitch": -14.54,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_F3333551_F381_AC5D_41E1_5B4F5F8B0110",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998, this.camera_FD5E63DB_EDCE_377F_41E3_9F2D2D2D5C4F); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -31.89,
   "yaw": -146.27,
   "image": "this.AnimatedImageResource_E3C36E35_EDC6_10CB_41B3_0F417EA162C6",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 12.14
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": -146.27,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.14,
   "pitch": -31.89,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_F25D1D20_D755_0AF2_41DA_DEE4199F512B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0, this.camera_FD4BC3FE_EDCE_3739_41EA_ED8CAD6FFB59); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -14.15,
   "yaw": -30.05,
   "image": "this.AnimatedImageResource_E3C34E35_EDC6_10CB_41E1_73FE047540E6",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.86
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -30.05,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.86,
   "pitch": -14.15,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_9B2F6B60_909F_647B_41DB_7C1EC9876772",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FC931F0D_EDCE_10DB_41D2_624D1E324F51",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_B25711A0_B383_A4FB_41D9_22794D619718",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B23CC00_9081_63BB_41E0_43DDC548F993, this.camera_E29320F1_EDCE_314B_41DD_BFC627F53016); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -10.98,
   "yaw": 151.89,
   "image": "this.AnimatedImageResource_E3C1BE37_EDC6_1137_41E9_D361DC71D07A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.04
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 151.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.04,
   "pitch": -10.98,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_B81CAE1A_B180_BFCF_41D6_09ABC5AE9FB9",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43, this.camera_E2E1A0BA_EDCE_3139_4183_5D3670015884); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -7.54,
   "yaw": -31.3,
   "image": "this.AnimatedImageResource_E3C19E37_EDC6_1137_41D8_CEF960EE750B",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.17
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -31.3,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.17,
   "pitch": -7.54,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_B52E66E2_B181_6C7F_41DA_16C1CDA3C3E5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B21B7C5_9083_6C45_41CA_B49786892330, this.camera_E29950DE_EDCE_3179_41E4_D7C2B9B66D4C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -33.19,
   "yaw": -104.94,
   "image": "this.AnimatedImageResource_E3C1FE37_EDC6_1137_41C3_00B1BBDD405C",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 22.53
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -104.94,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.53,
   "pitch": -33.19,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_96085A0D_9081_67C5_41AF_433A520DC41F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B71A94C_9083_A44B_41C8_7825541D894A, this.camera_E2E5E0CD_EDCE_315B_41C5_5EB5E49C2CF6); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -13.1,
   "yaw": 168.99,
   "image": "this.AnimatedImageResource_E3C1DE37_EDC6_1137_41E7_EA8CB945F18C",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 14.29
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": 168.99,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.29,
   "pitch": -13.1,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_1_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_EAC2D697_D137_07DE_41E9_236BF405FBE6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323, this.camera_FCF03EDC_EDCE_1179_41A1_3BC2D65D4FBB); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -36.54,
   "yaw": 12.05,
   "image": "this.AnimatedImageResource_E3FEEE57_EDC6_1177_4194_19FBE88FBABE",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 11.49
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": 12.05,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.49,
   "pitch": -36.54,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_9B2E4B5E_909F_6447_41E0_0D2F34F800DD",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_B72FC0FC_B180_E44B_41E3_80C6510764EB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43, this.camera_E22E4CB2_EDCE_11C9_41D6_B51CA22E85BF); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -12.52,
   "yaw": 150.42,
   "image": "this.AnimatedImageResource_E3CE9E39_EDC6_113B_41A0_D83323BFA37F",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.96
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 150.42,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.96,
   "pitch": -12.52,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9C8A3557_9080_AC45_419A_2BD004435816_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9C8A3557_9080_AC45_419A_2BD004435816_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FCF06EDC_EDCE_1179_41EA_6E2DC4B8B34E",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FC7FDF85_EDCE_2FCB_41A7_A40BE300E3AE",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_F86C37F1_D0D5_0552_41BF_F594704CF977",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B, this.camera_E27FCC2B_EDCE_10DF_41D0_887014D44A22); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -27.85,
   "yaw": 142.92,
   "image": "this.AnimatedImageResource_E3F40E4E_EDC6_1159_41BC_498C914CCE84",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.64
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 142.92,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.64,
   "pitch": -27.85,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E2A61BDC_EDCE_1779_41EA_AA885FEC696A",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_B73B3357_B183_6445_41E2_6165FB1288FF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B, this.camera_E20A9270_EDCE_3149_41A8_FC632EF888EE); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -10.74,
   "yaw": 149.92,
   "image": "this.AnimatedImageResource_E3C16E38_EDC6_1139_41D0_B6BB70DEA4F4",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.05
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 149.92,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.05,
   "pitch": -10.74,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_B8912F73_B181_9C5D_4184_FCC13EBCD5EC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C8A3557_9080_AC45_419A_2BD004435816, this.camera_E21ED25E_EDCE_3179_41EB_CE1177D2B321); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9.07,
   "yaw": -30.15,
   "image": "this.AnimatedImageResource_E3C15E38_EDC6_1139_41E0_8738DB6571D3",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.12
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -30.15,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.12,
   "pitch": -9.07,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_CF65228B_D772_FFB6_41E8_4EF289E07D66",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259, this.camera_FDDA6CC8_EDCE_1159_41E0_108093214F17); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -20.15,
   "yaw": 131.38,
   "image": "this.AnimatedImageResource_E3F3BE51_EDC6_114B_41D4_D61AEBF6C759",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 13.42
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "maps": [
  {
   "yaw": 131.38,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.42,
   "pitch": -20.15,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_F51DEED5_D72F_0752_41E8_EE03288867B3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323, this.camera_FDE52D32_EDCE_10C9_41E6_3F58F0BD8ABD); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -13,
   "yaw": 150.51,
   "image": "this.AnimatedImageResource_E3F02E55_EDC6_114B_41B6_591A22DE1EA5",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.93
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 150.51,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.93,
   "pitch": -13,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_F427F569_D72D_0572_41E2_5F4FE61F008D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0, this.camera_FDE9BD1F_EDCE_10F7_41DF_459816C89471); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -5.63,
   "yaw": -16.73,
   "image": "this.AnimatedImageResource_E3F00E55_EDC6_114B_41E2_2AB1088F6B69",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.23
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -16.73,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.23,
   "pitch": -5.63,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FC83FF20_EDCE_10C9_41EA_E10F32BF4509",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FDC482F9_EDCE_313B_41C2_23862F171356",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FCC01EBF_EDCE_1137_41AF_DABC49DB26FA",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E294B105_EDCE_30CB_41A1_FB93E13134D9",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_9BF7CC44_918F_63BB_41D0_0C2A21914197",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556, this.camera_E2948105_EDCE_30CB_41C3_0B36D11ABD01); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9.97,
   "yaw": 158.32,
   "image": "this.AnimatedImageResource_E3C97E48_EDC6_1159_41E6_83DB81A3E46B",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.08
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 158.32,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.08,
   "pitch": -9.97,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B20296D_908F_E445_41D2_0D706062DA23_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B20296D_908F_E445_41D2_0D706062DA23_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "overlay_84E97237_9180_A7C5_41DF_71848E1FED4B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556, this.camera_FD0D7483_EDCE_31CF_41E1_5C6F5CCB70FC); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -13.32,
   "yaw": 140.76,
   "image": "this.AnimatedImageResource_E3C83E48_EDC6_1159_41EB_7ABFD5E9883A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.91
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 140.76,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.91,
   "pitch": -13.32,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_81D9138A_9181_A4CF_41E3_4014EFA63B02",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8, this.camera_FD13D46E_EDCE_3159_41E1_19B827FBDE7C); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -6.71,
   "yaw": 59.75,
   "image": "this.AnimatedImageResource_E3C86E49_EDC6_115B_41CF_522FD94BF842",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.2
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 59.75,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.2,
   "pitch": -6.71,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E2836B68_EDCE_1759_41E4_A9893AA583EA",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_9E6DF159_9181_A44D_41C1_207AF9C0EE56",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B, this.camera_FDC9A2E5_EDCE_314B_41A3_252F007666D9); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -7.19,
   "yaw": -117.41,
   "image": "this.AnimatedImageResource_E3CD6E41_EDC6_114B_41E4_BECC95AD63AE",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.95
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -117.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.95,
   "pitch": -7.19,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_846C3DCE_919F_BC47_41A6_63947BFE88DE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00, this.camera_E22AE2AC_EDCE_31D9_41E4_A3DF1204AB8C); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -4.2,
   "yaw": -27.9,
   "image": "this.AnimatedImageResource_E3CD5E41_EDC6_114A_41EA_7B37641335F3",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.02
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -27.9,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.02,
   "pitch": -4.2,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_1_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_C89BD9B7_D77D_0DDE_41E2_3F08B0D79EC2",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -8.15,
   "yaw": 67.37,
   "image": "this.AnimatedImageResource_E3CA8E42_EDC6_1149_41DA_E6693753FC8A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.15
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 67.37,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.15,
   "pitch": -8.15,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_2_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_CED2AFC3_D777_05B6_41B1_95445E777C8F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B24F442_9081_A3BF_41D3_E31A82821585, this.camera_E22652BF_EDCE_3137_41E7_478503A12DE3); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_3_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.08,
   "pitch": -0.05,
   "yaw": 55.6
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 55.6,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.08,
   "pitch": -0.05,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_3_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_E56CA7E3_D0D3_0576_41E4_90DE70C6530D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B259A6D_9087_6445_41B7_D766BE088033, this.camera_E2037282_EDCE_31C9_41DB_C7DEBA578B6C); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_4_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.07,
   "pitch": -1.83,
   "yaw": 147.68
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 147.68,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.07,
   "pitch": -1.83,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_4_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_E6C6118E_D0ED_1DCE_41D7_6B5F25C1C964",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509, this.camera_FDC762F9_EDCE_313B_41ED_B1713BEE17DE); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9.93,
   "yaw": 162.64,
   "image": "this.AnimatedImageResource_E3CACE42_EDC6_1149_41EC_DD886DFF08B3",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.08
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": 162.64,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.08,
   "pitch": -9.93,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_5_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_EDB3625A_D0DF_7F56_41E8_EFEB25F95889",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F, this.camera_FDDDD2D1_EDCE_314B_41EC_207E96206C01); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_6_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.07,
   "pitch": -1.89,
   "yaw": 134.39
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 134.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.07,
   "pitch": -1.89,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_6_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "overlay_E8E28364_D0DD_1D72_41E6_3E8146BB4F00",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD, this.camera_E23C829A_EDCE_31F9_41EB_AC60CCCF7ADF); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_7_0.png"
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.07,
   "pitch": -1.8,
   "yaw": 114.79
  }
 ],
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 114.79,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.07,
   "pitch": -1.8,
   "image": {
    "levels": [
     {
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_7_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E28FEB55_EDCE_174B_41C6_9160FB99C8CD",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B517B65_909F_6445_41D6_6810B7C037FF",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FD5DAD8F_EDCE_13D7_41C0_18D8A86B956E",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_C6B86274_D753_1F52_4199_FF75D1772C45",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709, this.camera_E26BBC3E_EDCE_1139_41AC_6947E55E95B8); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -33.92,
   "yaw": 112.15,
   "image": "this.AnimatedImageResource_E3F61E4B_EDC6_115F_41DE_40A87EE39ED7",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 11.86
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "maps": [
  {
   "yaw": 112.15,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.86,
   "pitch": -33.92,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B21F886_9081_E4C7_41D2_8884153818B3_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B21F886_9081_E4C7_41D2_8884153818B3_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_FDA30D7D_EDCE_133B_41E1_F84A157BC507",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E25501E5_EDCE_334B_41EA_66646A131C85",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E282F129_EDCE_30DB_41BC_2B969FB4B754",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_E27FDC2B_EDCE_10DF_41D3_65A010DA239A",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B51DB66_909F_6447_41B6_B3A46322675D",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B53EB6B_909F_644D_41C5_078C14AA947F",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FFEA7041_EDCE_314B_41E5_3F825BBEACBD",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_FDF0B30B_EDCE_30DF_41D2_FDE51D4050B0",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "overlay_DB266B2D_CF57_0EF2_41DE_4ECAAC823223",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7, this.camera_FD9A7331_EDCE_30CB_41EA_FAE835B9DF93); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "pitch": -9.65,
   "yaw": -28.95,
   "image": "this.AnimatedImageResource_E3FF5E59_EDC6_117B_41E5_6241B68E27A8",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.09
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "maps": [
  {
   "yaw": -28.95,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.09,
   "pitch": -9.65,
   "image": {
    "levels": [
     {
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16,
      "url": "media/panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_1_HS_0_0_0_map.gif"
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "id": "panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "hfov": 37.5,
 "image": {
  "levels": [
   {
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850,
    "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_tcap0.png"
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "inertia": false,
 "distance": 50
},
{
 "id": "sequence_E23CB29A_EDCE_31F9_41DE_D518A1F7C1F6",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_9B2FEB62_909F_647F_41B7_FDC1564C03D1",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "AnimatedImageResource_E3C9BE49_EDC6_115B_41E4_BEE5530F5C5B",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C9EE49_EDC6_115B_41D8_26FD5FD32F47",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B20FF1B_908F_7DCD_41C4_E5C123FD6AD8_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F38E53_EDC6_114F_4192_99B259760DF7",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B243126_9083_65C7_41D1_9085754DD6BB_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CC8E3E_EDC6_1139_41EB_6449893E5F5D",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C8219E2_9081_A47F_41C5_AF0EFADB43B7_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CE2E39_EDC6_113B_41EC_2899B6E9BA73",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B21B7C5_9083_6C45_41CA_B49786892330_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CE1E39_EDC6_113B_41E5_407554CEE01E",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B21B7C5_9083_6C45_41CA_B49786892330_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F15E57_EDC6_1177_41DC_5968E5C4744F",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B252225_9081_67C5_41D9_4CFA717C84D2_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CC6E3D_EDC6_113B_41E0_D4160ABB3EF2",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CC4E3D_EDC6_113B_41ED_513B028BE70D",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C8395AB_9080_ACCD_41B9_41390D3D5973_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F74E4D_EDC6_115B_41A0_A8CEA212EF5F",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B23874C_9080_AC4B_41E1_FF29F27BB652_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F29E52_EDC6_1149_41BC_06C16D6923D3",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B24A994_9081_A4DB_41B4_5D1CCD35EBA6_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F2AE50_EDC6_1149_41D1_33C1C1F38A0B",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B25FD3B_9087_9DCD_41C2_0594F2D2BF5F_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F51E4F_EDC6_1157_41D6_4019487CC8AE",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B259A6D_9087_6445_41B7_D766BE088033_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F20E50_EDC6_1149_41E1_CF568220AF38",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F27E51_EDC6_114B_41CF_A66F5EF55BD4",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2511C0_9080_E4BB_41D0_56B8239A3259_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F32E54_EDC6_1149_41E8_7F3C63D7643C",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B247441_9083_E3BD_41D0_7302CCD1FFEC_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3FE3E58_EDC6_1179_41EA_C88C9476AE69",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B253752_9080_AC5F_41B5_7C26816C4261_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F37E54_EDC6_1149_41B0_B0E695A83CF8",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B24C6C0_9083_6CBB_4196_E2D20CB812F4_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F22E52_EDC6_1149_41EC_A68AC132380B",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B27AC51_9080_BC5D_41C4_76BF68DDC94B_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F27E53_EDC6_114F_41E5_9882F161E717",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B27CFF2_9080_BC5F_4163_2131B7D405C6_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CF4E3B_EDC6_113F_41C4_AB256AEF5076",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B71A94C_9083_A44B_41C8_7825541D894A_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CCAE3B_EDC6_113F_41DE_10C42C91CE69",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B71A94C_9083_A44B_41C8_7825541D894A_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C8FE45_EDC6_114B_41EA_9AE2A87A6747",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C8DE46_EDC6_1149_41C7_CCA7C1F2D7FF",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C83E46_EDC6_1149_41B4_3BC8664964D0",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_1_HS_2_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C86E46_EDC6_1149_41C7_C5C7E42FD28A",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2034E1_908F_6C7D_41BC_3F346B1965C0_1_HS_3_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F2FE50_EDC6_1149_41CA_2458B42BF262",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B256028_9080_A3CB_41D2_C45B3B5B37FD_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F08E54_EDC6_1149_41E3_96530760FD66",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B24AA66_9080_E447_41D3_A1E5FC6DB764_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C98E47_EDC6_1157_41D7_D29075740A2A",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C9FE47_EDC6_1157_41EB_E5295A92F872",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C9DE47_EDC6_1157_41D0_BA199D1216DE",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B206691_908F_ACDD_41DD_CD10E0EA1556_1_HS_2_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CB4E45_EDC6_114B_41E9_F0EEFACA96B4",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C8AE45_EDC6_114B_41ED_2E91324B1C8C",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2FD3ED_9080_A445_41C7_9737A863AA44_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CCFE3C_EDC6_1139_41E5_A7A01771BECA",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CCDE3C_EDC6_1139_41BD_7DD23BB45AC5",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2146C1_9083_6CBD_41CD_794151C3D77B_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3FFCE59_EDC6_117B_41A4_51BA967FB8B6",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3FF2E59_EDC6_117B_41EA_2C6D2A097E22",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B3A990D_909F_E5C5_41CF_78860AF4AEF7_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C92E4A_EDC6_1159_41A4_C00911581EA2",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C96E4A_EDC6_1159_41D6_36B18A88A7A0",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C94E4A_EDC6_1159_41CB_E4058720DEA9",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2072A5_9080_A4C5_41D8_1A79437E8709_1_HS_2_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F7AE4C_EDC6_1159_41C9_AAE718E58BA9",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F78E4C_EDC6_1159_41D4_802F39869C04",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B22E349_9083_644D_41AD_7C207EB11BBF_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C0EE31_EDC6_10CB_41E9_F851EA0CF400",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C38E33_EDC6_10CF_41E8_9D84EFC07832",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C3EE34_EDC6_10C9_41C3_3CCAC3BF6F0A",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C0AD96B_9081_A44D_41CB_9F3AE883D998_1_HS_2_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3FE4E58_EDC6_1179_41DC_247FF69EAB86",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3FFAE58_EDC6_1179_41E7_11E7EF45E3B9",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B3AE6BF_909F_6CC5_41DE_652737A237D0_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F1AE56_EDC6_1149_41E4_EADB9FDAAD0F",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F19E56_EDC6_1149_41D8_7EB4D1082CAD",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F1FE56_EDC6_1149_4199_45F55BCEC80E",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_1_HS_2_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F1DE56_EDC6_1149_41E8_BCBC8184D8D4",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_1_HS_3_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F13E56_EDC6_1149_4197_767DB15E2B87",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B258F24_9081_9DFB_41E0_7BE3BE0B4323_1_HS_4_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F57E52_EDC6_1149_41EB_81F8F9141E71",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B24F442_9081_A3BF_41D3_E31A82821585_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F69E4B_EDC6_115F_41DD_9C2B1CFF43DD",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F6FE4B_EDC6_115F_41E9_505574D6BBA5",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B21B46B_9081_6C4D_41C8_BDD8BADD4E7C_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CCDE3F_EDC6_1137_41E1_DD4935727045",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CC0E40_EDC6_1149_41E2_F26D44560F13",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CC5E40_EDC6_1149_41E4_9C69FA8AF268",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2F4B99_9081_E4CD_41D9_C59790532097_1_HS_4_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CFDE3B_EDC6_113F_41E4_F66285C3F0CD",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CF3E3B_EDC6_113F_41A6_41C61CA37F41",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B219945_9083_E445_41D8_7770EEDDE1AE_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F49E4D_EDC6_115B_41EA_A34128DE72F8",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B23FC69_9080_BC4D_41D2_69D5E5B863B5_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CE5E3A_EDC6_1139_41EB_27FC5CA8CFA1",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CF8E3A_EDC6_1139_41E4_5BAC747EDF8B",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C87F831_9083_A3DD_41D0_1E64CDCE06D6_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CDEE41_EDC6_114B_41BB_1CF1CF8AEF10",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CDCE41_EDC6_114B_41EA_267C3227AA11",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C8F7D2D_9081_9DC5_41D5_984F8601F05B_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F73E4D_EDC6_115B_41E5_70DBDE6381A4",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B22ACC9_9083_FC4D_41C8_A6ED88350653_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F45E4E_EDC6_1159_41E9_36CE4AF116A1",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F5BE4E_EDC6_1159_41E1_F3C718C043FD",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2214F3_9081_AC5D_41E0_DE5FBA82E509_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F5CE4F_EDC6_1157_41E7_B99858723541",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B22C7E7_9080_AC45_41B0_5195D9934A48_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CA4E43_EDC6_114F_41E9_8227B5D0D218",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CBAE43_EDC6_114F_41B1_4CCDC5FEDCC5",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CB8E43_EDC6_114F_41E9_4B84C2711CEE",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C80609F_9080_E4C5_41C5_1CDFF0464F00_1_HS_2_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C0DE35_EDC6_10CB_41EA_B57E7F459DC7",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C03E36_EDC6_10C9_41D3_98055EA1EA80",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C06E36_EDC6_10C9_41E8_5A6B7C4DAED7",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B23CC00_9081_63BB_41E0_43DDC548F993_1_HS_2_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CDCE3E_EDC6_1139_41E1_BDD5DB663715",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B7C2973_9080_A45D_41DF_9D646CED79A8_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C30E34_EDC6_10C9_41ED_8CBCE4A887E8",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C36E35_EDC6_10CB_41B3_0F417EA162C6",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C34E35_EDC6_10CB_41E1_73FE047540E6",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B3AF7C0_909F_ACBB_41D1_36711A977FEC_1_HS_2_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C1BE37_EDC6_1137_41E9_D361DC71D07A",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C19E37_EDC6_1137_41D8_CEF960EE750B",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C1FE37_EDC6_1137_41C3_00B1BBDD405C",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_1_HS_2_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C1DE37_EDC6_1137_41E7_EA8CB945F18C",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C800DE3_9080_BC7D_41C9_A5E10E435A4B_1_HS_3_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3FEEE57_EDC6_1177_4194_19FBE88FBABE",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B250425_9080_A3C5_41C4_737AF23BDA9F_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CE9E39_EDC6_113B_41A0_D83323BFA37F",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9C8A3557_9080_AC45_419A_2BD004435816_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F40E4E_EDC6_1159_41BC_498C914CCE84",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B22114E_9081_E447_41C8_E1B224A0C0FD_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C16E38_EDC6_1139_41D0_B6BB70DEA4F4",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C15E38_EDC6_1139_41E0_8738DB6571D3",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2270AD_9080_E4C5_41A7_D43166C2EC43_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F3BE51_EDC6_114B_41D4_D61AEBF6C759",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B253277_9080_A445_41D6_ADAC6560B5B0_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F02E55_EDC6_114B_41B6_591A22DE1EA5",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F00E55_EDC6_114B_41E2_2AB1088F6B69",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B247C43_9080_A3BD_41DB_F22698212DBB_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C97E48_EDC6_1159_41E6_83DB81A3E46B",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B20296D_908F_E445_41D2_0D706062DA23_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C83E48_EDC6_1159_41EB_7ABFD5E9883A",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3C86E49_EDC6_115B_41CF_522FD94BF842",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B20FC3C_908F_A3CB_41C4_BB34BE65C7BD_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CD6E41_EDC6_114B_41E4_BECC95AD63AE",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CD5E41_EDC6_114A_41EA_7B37641335F3",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_1_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CA8E42_EDC6_1149_41DA_E6693753FC8A",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_2_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3CACE42_EDC6_1149_41EC_DD886DFF08B3",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B2F9F12_9080_9DDF_4182_93A0AB19B4A5_1_HS_5_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3F61E4B_EDC6_115F_41DE_40A87EE39ED7",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B21F886_9081_E4C7_41D2_8884153818B3_1_HS_0_0.png"
  }
 ]
},
{
 "id": "AnimatedImageResource_E3FF5E59_EDC6_117B_41E5_6241B68E27A8",
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780,
   "url": "media/panorama_9B3B6AC2_909F_A4BF_41C5_B6B77E804A6C_1_HS_0_0.png"
  }
 ]
}],
 "mouseWheelEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scrollBarWidth": 10,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FA572146_E939_0D5A_41AA_6688A671BD6C], 'cardboardAvailable'); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE], 'gyroscopeAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "overflow": "hidden",
 "shadow": false,
 "vrPolyfillScale": 1,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "scripts": {
  "playGlobalAudio": function(audio, endCallback, asBackground){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = {'audio': audio, 'asBackground': asBackground || false}; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "_getPlayListsWithViewer": function(viewer){  var playLists = this.getByClassName('PlayList'); var containsViewer = function(playList) { var items = playList.get('items'); for(var j=items.length-1; j>=0; --j) { var item = items[j]; var player = item.get('player'); if(player !== undefined && player.get('viewerArea') == viewer) return true; } return false; }; for(var i=playLists.length-1; i>=0; --i) { if(!containsViewer(playLists[i])) playLists.splice(i, 1); } return playLists; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext, true); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListsWithMedia": function(media, onlySelected){  var result = []; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) result.push(playList); } return result; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "keepCompVisible": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "stopGlobalAudios": function(onlyForeground){  var audios = window.currentGlobalAudios; var self = this; if(audios){ Object.keys(audios).forEach(function(key){ var data = audios[key]; if(!onlyForeground || (onlyForeground && !data.asBackground)) { self.stopGlobalAudio(data.audio); } }); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerTextVariable": function(obj){  var property = (function() { switch (obj.get('class')) { case 'Label': return 'text'; case 'Button': case 'BaseButton': return 'label'; case 'HTMLText': return 'html'; } })(); if (property == undefined) return; var re = new RegExp('\\{\\{\\s*(\\w+)\\s*\\}\\}', 'g'); var text = obj.get(property); var data = obj.get('data') || {}; data[property] = text; obj.set('data', data); var updateLabel = function(vars) { var text = data[property]; for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) { var dispatcher = dispatchers[j]; var index = dispatcher.get('selectedIndex'); if (index >= 0) { var srcPropArray = info.src.split('.'); var src = dispatcher.get('items')[index]; if(src == undefined || (info.itemCondition !== undefined && !info.itemCondition.call(this, src))) continue; for (var z = 0; z < srcPropArray.length; ++z) src = 'get' in src ? src.get(srcPropArray[z]) : src[srcPropArray[z]]; text = text.replace(info.replace, src); } } } if(text != data[property]) obj.set(property, text); }; var vars = []; var addVars = function(dispatchers, eventName, src, replace, itemCondition) { vars.push({ 'dispatchers': dispatchers, 'eventName': eventName, 'src': src, 'replace': replace, 'itemCondition': itemCondition }); }; var viewerAreaItemCondition = function(item) { var player = item.get('player'); return player !== undefined && player.get('viewerArea') == this.MainViewer; }; while (null != (result = re.exec(text))) { switch (result[1]) { case 'title': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.label', result[0], viewerAreaItemCondition); break; case 'subtitle': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.data.subtitle', result[0], viewerAreaItemCondition); break; } } if (vars.length > 0) { var func = updateLabel.bind(this, vars); for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) dispatchers[j].bind(info.eventName, func, this); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setOverlayBehaviour": function(overlay, media, action, preventDoubleClick){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(preventDoubleClick){ if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 1000); } }; if(preventDoubleClick && window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getFirstPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; } return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData){ audio = audioData.audio; delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\\text-align:left\\><SPAN STYLE=\\color:#FFFFFF;font-size:12px;font-family:Verdana\\><span color=\\white\\ font-family=\\Verdana\\ font-size=\\12px\\>' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getFirstPlayListWithMedia": function(media, onlySelected){  var playLists = this.getPlayListsWithMedia(media, onlySelected); return playLists.length > 0 ? playLists[0] : undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "_initItemWithComps": function(playList, index, components, eventName, visible, effectToApply, delay, restoreStateAt){  var item = playList.get('items')[index]; var registerVisibility = restoreStateAt > 0; var rootPlayer = this.rootPlayer; var cloneEffect = function(visible) { var klass = effectToApply ? effectToApply.get('class') : undefined; var effect = undefined; switch(klass) { case 'FadeInEffect': case 'FadeOutEffect': effect = rootPlayer.createInstance(visible ? 'FadeInEffect' : 'FadeOutEffect'); break; case 'SlideInEffect': case 'SlideOutEffect': effect = rootPlayer.createInstance(visible ? 'SlideInEffect' : 'SlideOutEffect'); break; } if(effect){ effect.set('duration', effectToApply.get('duration')); effect.set('easing', effectToApply.get('easing')); if(klass.indexOf('Slide') != -1) effect.set(visible ? 'from' : 'to', effectToApply.get(visible ? 'to' : 'from')); } return effect; }; var endFunc = function() { for(var i = 0, count = components.length; i<count; ++i) { var component = components[i]; if(restoreStateAt > 0){ this.setComponentVisibility(component, !visible, 0, cloneEffect(!visible)); } else { var key = 'visibility_' + component.get('id'); if(this.existsKey(key)) { if(this.getKey(key)) this.setComponentVisibility(component, true, 0, cloneEffect(true)); else this.setComponentVisibility(component, false, 0, cloneEffect(false)); this.unregisterKey(key); } } } item.unbind('end', endFunc, this); if(addMediaEndEvent) media.unbind('end', endFunc, this); }; var stopFunc = function() { item.unbind('stop', stopFunc, this, true); item.unbind('stop', stopFunc, this); item.unbind('begin', stopFunc, this, true); item.unbind('begin', stopFunc, this); for(var i = 0, count = components.length; i<count; ++i) { this.keepCompVisible(components[i], false); } }; var addEvent = function(eventName, delay, restoreStateAt){ var changeFunc = function(){ var changeVisibility = function(component, visible, effect) { rootPlayer.setComponentVisibility(component, visible, delay, effect, visible ? 'showEffect' : 'hideEffect', false); if(restoreStateAt > 0){ var time = delay + restoreStateAt + (effect != undefined ? effect.get('duration') : 0); rootPlayer.setComponentVisibility(component, !visible, time, cloneEffect(!visible), visible ? 'hideEffect' : 'showEffect', true); } }; for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; if(visible == 'toggle'){ if(!component.get('visible')) changeVisibility(component, true, cloneEffect(true)); else changeVisibility(component, false, cloneEffect(false)); } else { changeVisibility(component, visible, cloneEffect(visible)); } } item.unbind(eventName, changeFunc, this); }; item.bind(eventName, changeFunc, this) }; if(eventName == 'begin'){ for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; this.keepCompVisible(component, true); if(registerVisibility) { var key = 'visibility_' + component.get('id'); this.registerKey(key, component.get('visible')); } } item.bind('stop', stopFunc, this, true); item.bind('stop', stopFunc, this); item.bind('begin', stopFunc, this, true); item.bind('begin', stopFunc, this); if(registerVisibility){ item.bind('end', endFunc, this); var media = item.get('media'); var addMediaEndEvent = media.get('loop') != undefined && !(media.get('loop')); if(addMediaEndEvent) media.bind('end', endFunc, this); } } else if(eventName == 'end' && restoreStateAt > 0){ addEvent('begin', restoreStateAt, 0); restoreStateAt = 0; } if(eventName != undefined) addEvent(eventName, delay, restoreStateAt); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios).map(function(v) { return v.audio })); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback, stopBackgroundAudio){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } var src = this.playGlobalAudio(audio, endCallback); if(stopBackgroundAudio === true){ var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); } return src; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData) audio = audioData.audio; } if(audio.get('state') == 'playing') audio.pause(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = undefined; if(mediaDispatcher){ var playListsWithMedia = this.getPlayListsWithMedia(mediaDispatcher, true); playListDispatcher = playListsWithMedia.indexOf(playList) != -1 ? playList : (playListsWithMedia.length > 0 ? playListsWithMedia[0] : undefined); } if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } item.bind('begin', onBeginFunction, self); this.executeFunctionWhenChange(playList, index, disposeCallback);  },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareSocial": function(socialID, url, deepLink){  if(url == undefined) { url = deepLink ? location.href : location.href.split(location.search||location.hash||/[?#]/)[0]; } else if(deepLink) { url += location.hash; } url = (function(id){ switch(id){ case 'fb': return 'https://www.facebook.com/sharer/sharer.php?u='+url; case 'wa': return 'https://api.whatsapp.com/send/?text='+encodeURIComponent(url); case 'tw': return 'https://twitter.com/intent/tweet?source=webclient&url='+url; default: return undefined; } })(socialID); this.openLink(url, '_blank'); },
  "existsKey": function(key){  return key in window; }
 },
 "propagateClick": false,
 "class": "Player",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "id": "rootPlayer",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "children": [
  "this.MainViewer",
  "this.Container_2E6121EE_347D_0EFC_41AD_FCF661FCEEBC",
  "this.Container_685CC558_649E_53A4_41C3_031C34B7328A",
  "this.Container_7DE2D59A_6911_E2E0_41A7_D15D0A935C33",
  "this.Container_7A542551_6EFF_A77C_41BD_77B516563B0F",
  "this.Container_3A863D9B_3513_E8A1_41BD_38320457DF78",
  "this.Image_818F6EBF_9080_9CC5_41A6_F02063278CC1"
 ],
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "buttonToggleMute": "this.IconButton_2E60A1ED_347D_0EFF_41BC_A36ED8CE8127",
 "paddingBottom": 0,
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "buttonToggleFullscreen": "this.IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D",
 "verticalAlign": "top",
 "minHeight": 20,
 "borderSize": 0,
 "gap": 10,
 "data": {
  "name": "Player464"
 }
};


	function HistoryData(playList) {
		this.playList = playList;
		this.list = [];
		this.pointer = -1;
	}

	HistoryData.prototype.add = function(index){
		if(this.pointer < this.list.length && this.list[this.pointer] == index) {
			return;
		}
		++this.pointer;
		this.list.splice(this.pointer, this.list.length - this.pointer, index);
	};

	HistoryData.prototype.back = function(){
		if(!this.canBack()) return;
		this.playList.set('selectedIndex', this.list[--this.pointer]);
	};

	HistoryData.prototype.forward = function(){
		if(!this.canForward()) return;
		this.playList.set('selectedIndex', this.list[++this.pointer]);
	};

	HistoryData.prototype.canBack = function(){
		return this.pointer > 0;
	};

	HistoryData.prototype.canForward = function(){
		return this.pointer >= 0 && this.pointer < this.list.length-1;
	};


	if(script.data == undefined)
		script.data = {};
	script.data["history"] = {};   

	TDV.PlayerAPI.defineScript(script);
})();
