


"use client"

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Create custom blue marker icon
const customIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="32" height="48">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path d="M12 0C7.03 0 3 4.03 3 9c0 5.25 9 18 9 18s9-12.75 9-18c0-4.97-4.03-9-9-9z"
            fill="url(#grad1)"
            stroke="#1e3a8a"
            stroke-width="1.5"
            filter="url(#shadow)"/>
      <circle cx="12" cy="9" r="4" fill="white" opacity="0.9"/>
      <circle cx="12" cy="9" r="2.5" fill="#1e40af"/>
    </svg>
  `),
  iconSize: [32, 48],
  iconAnchor: [16, 48],
  popupAnchor: [0, -48],
  tooltipAnchor: [0, -48],
})

// ✅ All export locations
const exportLocations = [
  {
    name: "AUSTRALIA",
    coords: [-25.2744, 133.7751],
    projects: ["12.5 MVA & 10 MVA, 66/11 POWER TRANSFORMER"],
    color: "#3498db",
  },
  {
    name: "BANGLADESH",
    coords: [23.685, 90.3563],
    projects: [
      "35 MVA, 33/11 KV – 16 NOS. IN OPERATION & 9 UNDER EXECUTION",
      "28 MVA, 33/11 KV – 75 NOS. IN OPERATION",
      "26.66 MVA, 33/11 KV – 34 NOS. IN OPERATION",
      "20 MVA, 33/11 KV – 10 NOS. IN OPERATION",
      "13.33 MVA, 33/11 KV – 88 NOS. IN OPERATION",
    ],
    color: "#9b59b6",
  },
  {
    name: "CANADA",
    coords: [56.1304, -106.3468],
    projects: ["60 MVA, 230-125/34.5 kV DUAL RATIO (KINROSS GOLD CORP.)"],
    color: "#f39c12",
  },
  {
    name: "IRAQ",
    coords: [33.2232, 43.6793],
    projects: ["25 MVA, 132/6.3 kV POWER TRANSFORMER"],
    color: "#1abc9c",
  },
  {
    name: "INDIA",
    coords: [20.5937, 78.9629],
    projects: ["100 MVA, 220 KV CLASS", "70 MVA, 132 KV POWER TRANSFORMERS"],
    color: "#e74c3c",
  },
  {
    name: "JORDAN",
    coords: [30.5852, 36.2384],
    projects: ["10 MVA, 33/6.6 kV POWER TRANSFORMER"],
    color: "#2ecc71",
  },
  {
    name: "NEPAL",
    coords: [28.3949, 84.124],
    projects: ["15 MVA, 132 KV POWER TRANSFORMER"],
    color: "#16a085",
  },
  {
    name: "NIGERIA",
    coords: [9.082, 8.6753],
    projects: ["2.5 MVA, 11/0.433 kV TRANSFORMER"],
    color: "#d35400",
  },
  {
    name: "OMAN",
    coords: [21.4735, 55.9754],
    projects: ["10 MVA, 33/11.5 KV POWER TRANSFORMER"],
    color: "#2980b9",
  },
  {
    name: "PALESTINE",
    coords: [31.9522, 35.2332],
    projects: ["10 MVA, 33/11-6.6 kV POWER TRANSFORMER"],
    color: "#8e44ad",
  },
  {
    name: "QATAR",
    coords: [25.3548, 51.1839],
    projects: ["2 MVA, 6.6 kV/415V TRANSFORMER"],
    color: "#c0392b",
  },
  {
    name: "SAUDI ARABIA",
    coords: [23.8859, 45.0792],
    projects: ["2.5 MVA, 13.8 kV/416 V, 60 Hz POWER TRANSFORMER"],
    color: "#27ae60",
  },
  {
    name: "SOUTH KOREA",
    coords: [35.9078, 127.7669],
    projects: ["12.5 MVA, 22.9/10.5 kV, 60 Hz POWER TRANSFORMER"],
    color: "#f1c40f",
  },
  {
    name: "SPAIN",
    coords: [40.4637, -3.7492],
    projects: ["12.5 MVA, 20/66 kV ELEVATOR TRANSFORMER"],
    color: "#34495e",
  },
  {
    name: "KAZAKHSTAN",
    coords: [48.0196, 66.9237],
    projects: ["6.3 MVA, 11/6 kV GENERATOR TRANSFORMER"],
    color: "#9b59b6",
  },
  {
    name: "KENYA",
    coords: [-0.0236, 37.9062],
    projects: ["5 MVA, 132/6.6 kV POWER TRANSFORMER"],
    color: "#e67e22",
  },
  {
    name: "LIBYA",
    coords: [26.3351, 17.2283],
    projects: ["20 MVA, 30/11 kV POWER TRANSFORMER"],
    color: "#1abc9c",
  },
  {
    name: "LIBERIA",
    coords: [6.4281, -9.4295],
    projects: ["2 MVA, 132 kV POWER TRANSFORMER"],
    color: "#2980b9",
  },
  {
    name: "NAMIBIA",
    coords: [-22.9576, 18.4904],
    projects: ["7.5 MVA, 30/6.6 kV (DE BEERS DIAMOND CORP.)"],
    color: "#8e44ad",
  },
  {
    name: "SUDAN",
    coords: [12.8628, 30.2176],
    projects: ["2.5 MVA, 6.6/0.433 kV CONVERTER DUTY TRANSFORMER"],
    color: "#c0392b",
  },
  {
    name: "TANZANIA",
    coords: [-6.369, 34.8888],
    projects: ["3 MVA, 66/3.3 kV POWER TRANSFORMER"],
    color: "#27ae60",
  },
  {
    name: "USA",
    coords: [37.0902, -95.7129],
    projects: [
      "35 MVA, 13.8/13.8 kV UNITY RATIO TRANSFORMER (60 Hz)",
      "12 MVA, 13.8/12.47 kV INTERCONNECTION TRANSFORMER (60 Hz)",
    ],
    color: "#f39c12",
  },
  {
    name: "ZAMBIA",
    coords: [-13.1339, 27.8493],
    projects: ["10 MVA, 66/33 kV POWER TRANSFORMER"],
    color: "#d35400",
  },
  {
    name: "ZIMBABWE",
    coords: [-19.0154, 29.1549],
    projects: ["6 MVA, 18/11 kV POWER TRANSFORMER"],
    color: "#3498db",
  },
]

export default function GlobalExportMap() {
  return (
    <div className="relative">
      {/* Map Container */}
      {/* <div className="h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-2"> */}
  
<div 
  className="h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-200 p-2"
  style={{ backgroundColor: 'rgb(212, 218, 220)' }}
>
        <MapContainer
          center={[10, 15] as [number, number]}
          // zoom={1.0}
          // minZoom={1.0}
          // maxZoom={1.0}


          zoom={2.0}
minZoom={2.0}
maxZoom={2.0}

          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          dragging={true}
          zoomControl={false}
          attributionControl={false}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "12px",
            zIndex: 1,
            backgroundColor: 'rgb(212, 218, 220)',
            objectFit:"contain",
          
          }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            noWrap={true} 
          />

          {exportLocations.map((loc) => (
            <Marker
              key={loc.name}
              position={loc.coords as [number, number]}
              icon={customIcon}
            >
              {/* Hover Tooltip */}
              <Tooltip
                permanent={false}
                className="!bg-white !text-gray-900 !border-2 !border-blue-500 !rounded-lg !shadow-xl !p-3"
              >
                <div className="min-w-[200px]">
                  <p className="font-bold text-blue-600 text-base mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {loc.name}
                  </p>
                  <div className="text-xs text-gray-700 space-y-1">
                    {loc.projects.slice(0, 2).map((p, i) => (
                      <div key={i} className="flex items-start gap-1">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="flex-1">{p}</span>
                      </div>
                    ))}
                    {loc.projects.length > 2 && (
                      <p className="text-blue-600 font-semibold mt-1">
                        +{loc.projects.length - 2} more projects
                      </p>
                    )}
                  </div>
                </div>
              </Tooltip>

              {/* Click Popup */}
              <Popup className="!min-w-[300px]">
                <div className="p-2">
                  <h3 className="font-bold text-lg text-blue-700 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {loc.name}
                  </h3>
                  <div className="mb-3 pb-3 border-b border-gray-200">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-700">Projects:</span> {loc.projects.length}
                    </p>
                  </div>
                  <ul className="space-y-2 max-h-[200px] overflow-y-auto">
                    {loc.projects.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                        <span className="text-gray-700">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Legend/Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900">{exportLocations.length}</p>
              <p className="text-xs text-blue-700 font-medium">Countries</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-900">
                {exportLocations.reduce((acc, loc) => acc + loc.projects.length, 0)}
              </p>
              <p className="text-xs text-green-700 font-medium">Projects</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-900">6</p>
              <p className="text-xs text-purple-700 font-medium">Continents</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-900">50+</p>
              <p className="text-xs text-orange-700 font-medium">Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


