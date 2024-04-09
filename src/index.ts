import "./styles.css";
import { Viewer } from "@photo-sphere-viewer/core";
import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
import { GalleryPlugin } from "@photo-sphere-viewer/gallery-plugin";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";

const iconsUrl = "https://photo-sphere-viewer-data.netlify.app/assets/";
const caption = "";
const baseUrl = "https://strapi-dev.nkgroupofcompanies.com/uploads/";

const viewer = new Viewer({
  container: "viewer",
  // loadingImg: iconsUrl + "loader.gif",
  loadingImg: baseUrl + "nk_logo_028c9e16d7.png",
  touchmoveTwoFingers: true,
  mousewheelCtrlKey: true,
  defaultYaw: "0deg",
  navbar: "zoom move gallery caption fullscreen",
  defaultZoomLvl: 0,

  plugins: [
    MarkersPlugin,
    [
      GalleryPlugin,
      {
        thumbnailSize: { width: 100, height: 100 }
      }
    ],
    [
      VirtualTourPlugin,
      {
        positionMode: "manual",
        renderMode: "markers"
        // markerStyle: {
        //   element: null,
        //   image: iconsUrl + "pictos/pin-red.png"
        // }
      }
    ]
  ]
});

const virtualTour = viewer.getPlugin(VirtualTourPlugin);

const markerLighthouse = {
  id: "marker-1",
  image: iconsUrl + "pictos/pin-red.png",
  tooltip: "Cape Florida Light, Key Biscayne",
  size: { width: 32, height: 32 },
  //   position: { yaw: 0.12, pitch: 0.9 },
  position: {
    yaw: 0.002,
    pitch: -0.538
  },
  anchor: "bottom center"
  // gps: [-81.569973, 25.766601]
};

virtualTour.setNodes(
  [
    {
      id: "1",
      panorama: "./Rooms/Room1.jpg",
      thumbnail: "./Rooms/PANO.jpeg",
      name: "One",
      caption: `[1] ${caption}`,
      markers: [markerLighthouse],
      links: [
        {
          nodeId: "2",
          position: {
            yaw: 0.05,
            pitch: -0.5
          }
          // markerStyle: {
          //   element: null,
          //   image: iconsUrl + "pictos/pin-red.png"
          // }
        }
      ]
    },
    {
      id: "2",
      panorama: "./Rooms/Room2.jpg",
      thumbnail: "./Rooms/Room2.jpg",
      name: "Two",
      caption: `[2] ${caption}`,
      links: [
        {
          nodeId: "3",
          position: {
            yaw: 2.05,
            pitch: -0.3
          }
        },
        {
          nodeId: "4",
          position: {
            yaw: 4.429,
            pitch: -0.343
          }
        }
      ]
    },
    {
      id: "3",
      panorama: "./Pano4.jpeg",
      thumbnail: "./Pano4.jpeg",
      name: "Three",
      caption: `[3] ${caption}`,
      links: [
        {
          nodeId: "2",
          position: {
            yaw: 4.429,
            pitch: -0.343
          }
        }
      ]
    },
    {
      id: "4",
      panorama: baseUrl + "P_6_b1d3bc25b6.jpg",
      thumbnail: baseUrl + "P_6_b1d3bc25b6.jpg",
      name: "Four",
      caption: `[4] ${caption}`,
      links: [
        {
          nodeId: "2",
          position: {
            yaw: 4.429,
            pitch: -0.343
          }
        }
      ]
    }
  ],
  "1"
);
