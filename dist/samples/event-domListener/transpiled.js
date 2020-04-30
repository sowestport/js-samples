(function(exports) {
  "use strict";
  /*
   * Copyright 2019 Google LLC. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  function initMap() {
    var mapDiv = document.getElementById("map");
    var map = new google.maps.Map(mapDiv, {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644)
    }); // We add a DOM event here to show an alert if the DIV containing the
    // map is clicked.

    google.maps.event.addDomListener(mapDiv, "click", function() {
      window.alert("Map was clicked!");
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));
