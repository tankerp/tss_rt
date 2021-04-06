import React, { useState } from "react"
import "./Maps.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Icon } from "leaflet"
import * as siteData from "./../data_maps/mapsdata.json"
function Maps() {
  const [activePark, setActivePark] = useState(null)
  return (
    <div className="maps_border">
      <div className="maps_container" style={{ width: "650px" }}>
        <MapContainer center={[28.38, 77.12]} zoom={4.25}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
          {siteData.features.map(park => (
            <Marker
              key={park.properties.PARK_ID}
              position={[park.geometry.coordinates[1], park.geometry.coordinates[0]]}
              onClick={() => {
                setActivePark(park)
              }}
            />
          ))}

          {activePark && (
            <Popup
              position={[activePark.geometry.coordinates[1], activePark.geometry.coordinates[0]]}
              onClose={() => {
                setActivePark(null)
              }}
            >
              <div>
                <h2>{activePark.properties.NAME}</h2>
                <p>{activePark.properties.DESCRIPTIO}</p>
              </div>
            </Popup>
          )}
        </MapContainer>
      </div>
    </div>
  )
}

export default Maps
