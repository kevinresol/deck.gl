// deck.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors

// core layers
import coreLayersTests from './core-layers';
import arcLayersTests from './arc-layer';
import columnLayerTests from './column-layer';
import geojsonLayerTests from './geojson-layer';
import pathLayerTests from './path-layer';
import pointCloudLayerTests from './point-cloud-layer';
import polygonLayerTests from './polygon-layer';
import iconLayerTests from './icon-layer';
import textLayerTests from './text-layer';
// aggregation-layers
import contourLayerTests from './contour-layer';
import gridLayerTests from './grid-layer';
import screenGridLayerTests from './screen-grid-layer';
import heatmapLayerTests from './heatmap-layer';
import hexagonLayerTests from './hexagon-layer';
// geo-layers
import a5LayerTests from './a5-layer';
import h3LayersTests from './h3-layers';
import quadkeyLayerTests from './quadkey-layer';
import s2LayerTests from './s2-layer';
import tripsLayerTests from './trips-layer';
import mvtLayerTests from './mvt-layer';
import geohashLayerTests from './geohash-layer';
import terrainLayerTests from './terrain-layer';
// mesh-layers
import simpleMeshLayerTests from './simple-mesh-layer';
import scenegraphLayerTests from './scenegraph-layer';
// other
import viewsTests from './views';
import effectsTests from './effects';
import collisionFilterExtensionTests from './collision-filter-extension';
import transitionTests from './transitions';
import dataFilterExtensionTests from './data-filter-extension';

export default [].concat(
  coreLayersTests,
  arcLayersTests,
  columnLayerTests,
  geojsonLayerTests,
  pathLayerTests,
  pointCloudLayerTests,
  polygonLayerTests,
  iconLayerTests,
  textLayerTests,
  contourLayerTests,
  gridLayerTests,
  hexagonLayerTests,
  screenGridLayerTests,
  heatmapLayerTests,
  a5LayerTests,
  h3LayersTests,
  quadkeyLayerTests,
  s2LayerTests,
  tripsLayerTests,
  mvtLayerTests,
  geohashLayerTests,
  simpleMeshLayerTests,
  scenegraphLayerTests,
  viewsTests,
  effectsTests,
  transitionTests,
  collisionFilterExtensionTests,
  dataFilterExtensionTests,
  /* It is important to run this last for now - TerrainEffect once added cannot be removed */
  terrainLayerTests
);
