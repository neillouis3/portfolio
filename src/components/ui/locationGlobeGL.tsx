"use client";

import { useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

const ST_JOHNS = { lat: 47.5615, lng: -52.7126 };

export default function LocationGlobeGL() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    globe.pointOfView(
      { lat: ST_JOHNS.lat, lng: ST_JOHNS.lng, altitude: 1.6 },
      0
    );

    const controls = globe.controls() as unknown as {
      autoRotate: boolean;
      autoRotateSpeed: number;
      enableZoom: boolean;
      enablePan: boolean;
    };
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.enableZoom = false;
    controls.enablePan = false;
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center">
      <Globe
        ref={globeRef}
        width={240}
        height={220}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        atmosphereColor="#7dd3fc"
        atmosphereAltitude={0.22}
        pointsData={[
          {
            lat: ST_JOHNS.lat,
            lng: ST_JOHNS.lng,
            color: "#ef4444",
          },
        ]}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0.12}
        pointRadius={1.2}
        ringsData={[
          {
            lat: ST_JOHNS.lat,
            lng: ST_JOHNS.lng,
          },
        ]}
        ringColor={(t: number) => `rgba(239, 68, 68, ${1 - t})`}
        ringMaxRadius={5}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1200}
        ringAltitude={0.005}
        animateIn={false}
      />

      <div className="pointer-events-none absolute bottom-0 right-0 text-[10px] text-default-500">
        47.56°N · 52.71°W
      </div>
    </div>
  );
}
