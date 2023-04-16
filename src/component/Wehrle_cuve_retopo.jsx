import * as THREE from 'three'
import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";
import ObjectInstance from '../ObjectInstance';


export default function Model(props) {

  const { nodes, materials } = useGLTF("./reception.glb");

  const toitValeurs = useMemo(() => [
    new THREE.Vector3(0, 0,0),
    new THREE.Vector3(58, 0, 0),
    new THREE.Vector3(116, 0, 0),
    new THREE.Vector3(174, 0, 0),
    new THREE.Vector3(232, 0, 0),
    new THREE.Vector3(290, 0, 0),
    new THREE.Vector3(348, 0, 0),
    new THREE.Vector3(406, 0, 0)
  ])

  return (
    <group {...props} dispose={null}>
      <group
        name="RetopoMBR"
        position={[5.4, 0, 22.81]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh
          name="NEMO_Pumpe_NM053BY_1_1_1_body1_1_001"
          geometry={nodes.NEMO_Pumpe_NM053BY_1_1_1_body1_1_001.geometry}
          material={materials.lambert1}
          position={[-19.35, -51.75, -3.23]}
        />
        <mesh
          name="NEMO_Pumpe_NM053BY_1_1_1_body1_4_001"
          geometry={nodes.NEMO_Pumpe_NM053BY_1_1_1_body1_4_001.geometry}
          material={materials.lambert1}
          position={[-19.45, -52.9, -3.15]}
        />
        <mesh
          name="NEMO_Pumpe_NM053BY_1_1_1_body1_3_001"
          geometry={nodes.NEMO_Pumpe_NM053BY_1_1_1_body1_3_001.geometry}
          material={materials.lambert1}
          position={[-19.35, -52.5, -3.22]}
        />
        <mesh
          name="NEMO_Pumpe_NM053BY_1_1_1_body1_2_001"
          geometry={nodes.NEMO_Pumpe_NM053BY_1_1_1_body1_2_001.geometry}
          material={materials.lambert1}
          position={[-19.35, -51.84, -3.23]}
        />
        <mesh
          name="Fundament_1_1_1001"
          geometry={nodes.Fundament_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-13.99, 8.38, -1.75]}
        />
        <mesh
          name="R06365_Kreiselpumpe_NB_125_200_221_A_F_N_BBQV_1_1001"
          geometry={
            nodes.R06365_Kreiselpumpe_NB_125_200_221_A_F_N_BBQV_1_1001.geometry
          }
          material={materials.lambert1}
          position={[-11.72, 11.49, -3.96]}
        />
        <mesh
          name="R10523_Drehkolbengeblä_1002"
          geometry={nodes.R10523_Drehkolbengeblä_1002.geometry}
          material={materials.lambert1}
          position={[-13.78, 3.17, -7.03]}
        />
        <mesh
          name="R09871_Kreiselpumpe_NB_65_125_133_A_F2_K_V_BQQV_U1S1P01_1_1001"
          geometry={
            nodes.R09871_Kreiselpumpe_NB_65_125_133_A_F2_K_V_BQQV_U1S1P01_1_1001
              .geometry
          }
          material={materials.lambert1}
          position={[-11.9, 15.34, -3.44]}
        />
        <mesh
          name="polySurface33"
          geometry={nodes.polySurface33.geometry}
          material={materials.lambert1}
          position={[6.36, 52.95, -3.72]}
        />
        <mesh
          name="polySurface40"
          geometry={nodes.polySurface40.geometry}
          material={materials.lambert1}
          position={[6.37, 51.7, -5.12]}
        />
        <mesh
          name="polySurface43"
          geometry={nodes.polySurface43.geometry}
          material={materials.lambert1}
          position={[6.36, 51.7, -8.47]}
        />
        <mesh
          name="polySurface42"
          geometry={nodes.polySurface42.geometry}
          material={materials.lambert1}
          position={[6.36, 51.7, -5.63]}
        />
        <mesh
          name="polySurface35"
          geometry={nodes.polySurface35.geometry}
          material={materials.lambert1}
          position={[6.36, 54.5, -4.87]}
        />
        <mesh
          name="polySurface37"
          geometry={nodes.polySurface37.geometry}
          material={materials.lambert1}
          position={[6.36, 51.7, -4.73]}
        />
        <mesh
          name="polySurface45"
          geometry={nodes.polySurface45.geometry}
          material={materials.lambert1}
          position={[7.41, 37.24, -11.65]}
        />
        <mesh
          name="polySurface30"
          geometry={nodes.polySurface30.geometry}
          material={materials.lambert1}
          position={[6.36, 52.37, -3.72]}
        />
        <mesh
          name="R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_9001"
          geometry={
            nodes["R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_9001"].geometry
          }
          material={materials.lambert1}
          position={[14.88, 41.56, -11.95]}
        />
        <mesh
          name="R07680_Rohr_d139_7x1_6_PN10_16_1_4404_1_1_2_1_1_1_1_1001"
          geometry={
            nodes.R07680_Rohr_d139_7x1_6_PN10_16_1_4404_1_1_2_1_1_1_1_1001
              .geometry
          }
          material={materials.lambert1}
          position={[7.9, 36.99, -12.51]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_1_1_1_1_1_2_1001"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_1_1_1_1_1_2_1001.geometry
          }
          material={materials.lambert1}
          position={[6.35, 53.44, -3.72]}
        />
        <mesh
          name="R07810_Bogen_90°_139_7x2_1_4404_1_1_1_1_1001"
          geometry={
            nodes["R07810_Bogen_90°_139_7x2_1_4404_1_1_1_1_1001"].geometry
          }
          material={materials.lambert1}
          position={[6.14, 37.22, -11.65]}
        />
        <mesh
          name="R09344_Bogen_60°_140x8_3_SDR17_PE100_1_1_2001"
          geometry={
            nodes["R09344_Bogen_60°_140x8_3_SDR17_PE100_1_1_2001"].geometry
          }
          material={materials.lambert1}
          position={[8.94, 36.99, -13.78]}
        />
        <mesh
          name="polySurface38"
          geometry={nodes.polySurface38.geometry}
          material={materials.lambert1}
          position={[6.37, 51.7, -4.74]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_1_1_2_1_1_1_1_1_1001"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_1_1_2_1_1_1_1_1_1001.geometry
          }
          material={materials.lambert1}
          position={[14.89, 39.28, -11.65]}
        />
        <mesh
          name="R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_10001"
          geometry={
            nodes["R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_10001"].geometry
          }
          material={materials.lambert1}
          position={[14.58, 41.87, -14.76]}
        />
        <mesh
          name="R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_11001"
          geometry={
            nodes["R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_11001"].geometry
          }
          material={materials.lambert1}
          position={[6.36, 54.26, -3.96]}
        />
        <mesh
          name="R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_12001"
          geometry={
            nodes["R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_12001"].geometry
          }
          material={materials.lambert1}
          position={[6.22, 51.44, -11.41]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_1_1_1_1_1_1_1_1001"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_1_1_1_1_1_1_1_1001.geometry
          }
          material={materials.lambert1}
          position={[10.33, 36.99, -14.05]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_1_1_2_1_1_1001"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_1_1_2_1_1_1001.geometry
          }
          material={materials.lambert1}
          position={[14.88, 41.86, -13.36]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_1_1_3_1_1_1__1001"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_1_1_3_1_1_1__1001.geometry
          }
          material={materials.lambert1}
          position={[12.28, 41.86, -15.07]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_1_1_3_1_1_1__1_1001"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_1_1_3_1_1_1__1_1001.geometry
          }
          material={materials.lambert1}
          position={[9.86, 41.85, -15.06]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_2__1001"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_2__1001.geometry
          }
          material={materials.lambert1}
          position={[5.91, 43.72, -11.64]}
        />
        <mesh
          name="R07680_Rohr_d139_7x1_6_PN10_16_1_4404_1_1_2_1_1_2_1_1_1_1_1"
          geometry={
            nodes.R07680_Rohr_d139_7x1_6_PN10_16_1_4404_1_1_2_1_1_2_1_1_1_1_1
              .geometry
          }
          material={materials.lambert1}
          position={[14.03, 37, -11.65]}
        />
        <mesh
          name="R07810_Bogen_90°_139_7x2_1_4404_1_1_1_1_2001"
          geometry={
            nodes["R07810_Bogen_90°_139_7x2_1_4404_1_1_1_1_2001"].geometry
          }
          material={materials.lambert1}
          position={[14.65, 37.25, -11.65]}
        />
        <mesh
          name="R09308_Bogen_30°_140x8_3_SDR17_PE100_gekürzt_1_1001"
          geometry={
            nodes["R09308_Bogen_30°_140x8_3_SDR17_PE100_gekürzt_1_1001"]
              .geometry
          }
          material={materials.lambert1}
          position={[5.94, 50.86, -11.65]}
        />
        <mesh
          name="R09344_Bogen_60°_140x8_3_SDR17_PE100_1_1_1001"
          geometry={
            nodes["R09344_Bogen_60°_140x8_3_SDR17_PE100_1_1_1001"].geometry
          }
          material={materials.lambert1}
          position={[11.78, 37, -13.6]}
        />
        <mesh
          name="R20278_Bogen_60°_139_7x2_1_4404_1_2001"
          geometry={nodes["R20278_Bogen_60°_139_7x2_1_4404_1_2001"].geometry}
          material={materials.lambert1}
          position={[13.35, 37, -11.83]}
        />
        <mesh
          name="R20278_Bogen_60°_139_7x2_1_4404_1_1001"
          geometry={nodes["R20278_Bogen_60°_139_7x2_1_4404_1_1001"].geometry}
          material={materials.lambert1}
          position={[7.33, 36.99, -11.82]}
        />
        <mesh
          name="Halteclip_Fl_120x12_rechts_5_1_1_1001"
          geometry={nodes.Halteclip_Fl_120x12_rechts_5_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.35, -45.89, -30.68]}
        />
        <mesh
          name="Holm_48_3x3_6_links_1_1_1001"
          geometry={nodes.Holm_48_3x3_6_links_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-10.08, -45.88, -21]}
        />
        <mesh
          name="Knieleiste_26_9x2_6_1_4_2_3_1_1_1_1001"
          geometry={nodes.Knieleiste_26_9x2_6_1_4_2_3_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.35, -45.79, -42.6]}
        />
        <mesh
          name="Knieleiste_26_9x2_6_5_1_1_1_1_1_1001"
          geometry={nodes.Knieleiste_26_9x2_6_5_1_1_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-2.05, -47.4, -40.52]}
        />
        <mesh
          name="Flach_50x5_1_1_1001"
          geometry={nodes.Flach_50x5_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-10.91, -47.46, -26.52]}
        />
        <mesh
          name="Flach_50x5_1_1_1_1001"
          geometry={nodes.Flach_50x5_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-10.73, -48.78, -26.52]}
        />
        <mesh
          name="Leiterclip_Fl_120x12_links_2_1_1_1001"
          geometry={nodes.Leiterclip_Fl_120x12_links_2_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.91, -45.31, -9.82]}
        />
        <mesh
          name="Flach_50x5_2_1_1_1001"
          geometry={nodes.Flach_50x5_2_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.67, -49.6, -26.52]}
        />
        <mesh
          name="Flach_50x5_3_1_1_1001"
          geometry={nodes.Flach_50x5_3_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-8.34, -49.42, -26.52]}
        />
        <mesh
          name="Leiterclip_Fl_120x12_links_4_1_1_1001"
          geometry={nodes.Leiterclip_Fl_120x12_links_4_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.91, -45.31, -23.73]}
        />
        <mesh
          name="Leiterclip_Fl_120x12_rechts_2_1_1_1_1001"
          geometry={nodes.Leiterclip_Fl_120x12_rechts_2_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.34, -45.99, -2.87]}
        />
        <mesh
          name="Leiterclip_Fl_120x12_rechts_5_1_1_1001"
          geometry={nodes.Leiterclip_Fl_120x12_rechts_5_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.34, -45.99, -30.68]}
        />
        <mesh
          name="Gelä_1006"
          geometry={nodes.Gelä_1006.geometry}
          material={materials.lambert1}
          position={[-7.35, -44.58, -42.3]}
        />
        <mesh
          name="Halteclip_Fl_120x12_links_2_1_1_1001"
          geometry={nodes.Halteclip_Fl_120x12_links_2_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.81, -45.24, -9.82]}
        />
        <mesh
          name="Halteclip_Fl_120x12_links_2_1_1_1_1001"
          geometry={nodes.Halteclip_Fl_120x12_links_2_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.81, -45.24, -2.87]}
        />
        <mesh
          name="Stützbügel_Flach_50x5_4_1_1_2_1_2"
          geometry={nodes.Stützbügel_Flach_50x5_4_1_1_2_1_2.geometry}
          material={materials.lambert1}
          position={[-9.35, -48.38, -11.28]}
        />
        <mesh
          name="Halteclip_Fl_120x12_links_4_1_1_1001"
          geometry={nodes.Halteclip_Fl_120x12_links_4_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.81, -45.24, -23.73]}
        />
        <mesh
          name="Halteclip_Fl_120x12_rechts_2_1_1_1001"
          geometry={nodes.Halteclip_Fl_120x12_rechts_2_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.35, -45.89, -9.82]}
        />
        <mesh
          name="Stützbügel_Flach_50x5_4_2_1_1_1_1001"
          geometry={nodes.Stützbügel_Flach_50x5_4_2_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.29, -48.8, -39.91]}
        />
        <mesh
          name="Halteclip_Fl_120x12_rechts_3_1_1_1001"
          geometry={nodes.Halteclip_Fl_120x12_rechts_3_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.35, -45.89, -16.77]}
        />
        <mesh
          name="Handlauf_48_3x4_4_1_1_1001"
          geometry={nodes.Handlauf_48_3x4_4_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-2.05, -47.48, -44.74]}
        />
        <mesh
          name="Handlauf_48_3x4_4_1_1_2"
          geometry={nodes.Handlauf_48_3x4_4_1_1_2.geometry}
          material={materials.lambert1}
          position={[-7.33, -47.79, -44.74]}
        />
        <mesh
          name="Stützbügel_Flach_50x5_4_2_1_1_1_3"
          geometry={nodes.Stützbügel_Flach_50x5_4_2_1_1_1_3.geometry}
          material={materials.lambert1}
          position={[-9.29, -48.8, -43.12]}
        />
        <mesh
          name="Holm_48_3x3_6_links_1_1_2"
          geometry={nodes.Holm_48_3x3_6_links_1_1_2.geometry}
          material={materials.lambert1}
          position={[-7.45, -46.59, -21]}
        />
        <mesh
          name="Flach_50x5_4_1_1_1001"
          geometry={nodes.Flach_50x5_4_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.52, -48.36, -23.19]}
        />
        <mesh
          name="Gelä_1_4001"
          geometry={nodes.Gelä_1_4001.geometry}
          material={materials.lambert1}
          position={[-2.05, -50.19, -41.65]}
        />
        <mesh
          name="Gelä_1_6"
          geometry={nodes.Gelä_1_6.geometry}
          material={materials.lambert1}
          position={[-2.05, -44.67, -41.65]}
        />
        <mesh
          name="Gelä_1_7"
          geometry={nodes.Gelä_1_7.geometry}
          material={materials.lambert1}
          position={[-7.33, -49.72, -41.65]}
        />
        <mesh
          name="Knieleiste_26_9x2_6_1_4_2_3_1_1_1_1_1001"
          geometry={nodes.Knieleiste_26_9x2_6_1_4_2_3_1_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.35, -45.79, -40.52]}
        />
        <mesh
          name="Knieleiste_26_9x2_6_5_1_1_1_1_1_2"
          geometry={nodes.Knieleiste_26_9x2_6_5_1_1_1_1_1_2.geometry}
          material={materials.lambert1}
          position={[-2.05, -47.4, -42.6]}
        />
        <mesh
          name="Gelä_1_8"
          geometry={nodes.Gelä_1_8.geometry}
          material={materials.lambert1}
          position={[-7.33, -44.57, -41.65]}
        />
        <mesh
          name="Gelä_1_9"
          geometry={nodes.Gelä_1_9.geometry}
          material={materials.lambert1}
          position={[-7.32, -50.49, -41.65]}
        />
        <mesh
          name="Leiterclip_Fl_120x12_links_3_1_1_1001"
          geometry={nodes.Leiterclip_Fl_120x12_links_3_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.91, -45.31, -16.77]}
        />
        <mesh
          name="Leiterclip_Fl_120x12_rechts_2_1_1_1001"
          geometry={nodes.Leiterclip_Fl_120x12_rechts_2_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.34, -45.99, -9.82]}
        />
        <mesh
          name="Leiterclip_Fl_120x12_rechts_4_1_1_1001"
          geometry={nodes.Leiterclip_Fl_120x12_rechts_4_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.34, -45.99, -23.73]}
        />
        <mesh
          name="polySurface128"
          geometry={nodes.polySurface128.geometry}
          material={materials.lambert1}
          position={[-4.7, -47.51, -38.99]}
        />
        <mesh
          name="group3_Sprosse_14_17_1_1_9"
          geometry={nodes.group3_Sprosse_14_17_1_1_9.geometry}
          material={materials.lambert1}
          position={[-8.77, -46.23, -21.03]}
        />
        <mesh
          name="Sprosse_14_17_1_1_2"
          geometry={nodes.Sprosse_14_17_1_1_2.geometry}
          material={materials.lambert1}
          position={[-8.77, -46.23, -45.34]}
        />
        <mesh
          name="Halteclip_Fl_120x12_links_3_1_1_1001"
          geometry={nodes.Halteclip_Fl_120x12_links_3_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.81, -45.24, -16.77]}
        />
        <mesh
          name="Halteclip_Fl_120x12_links_5_1_1_1001"
          geometry={nodes.Halteclip_Fl_120x12_links_5_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.81, -45.24, -30.68]}
        />
        <mesh
          name="Halteclip_Fl_120x12_rechts_2_1_1_1_1001"
          geometry={nodes.Halteclip_Fl_120x12_rechts_2_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.35, -45.89, -2.87]}
        />
        <mesh
          name="Halteclip_Fl_120x12_rechts_4_1_1_1001"
          geometry={nodes.Halteclip_Fl_120x12_rechts_4_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.35, -45.89, -23.73]}
        />
        <mesh
          name="Stützbügel_Flach_50x5_4_1_1_1_1001"
          geometry={nodes.Stützbügel_Flach_50x5_4_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.44, -48.78, -14.26]}
        />
        <mesh
          name="Handlauf_48_3x4_4_1_1_1_1_1001"
          geometry={nodes.Handlauf_48_3x4_4_1_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.35, -45.62, -44.74]}
        />
        <mesh
          name="Leiterclip_Fl_120x12_links_2_1_1_1_1001"
          geometry={nodes.Leiterclip_Fl_120x12_links_2_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.91, -45.31, -2.87]}
        />
        <mesh
          name="Leiterclip_Fl_120x12_links_5_1_1_1001"
          geometry={nodes.Leiterclip_Fl_120x12_links_5_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.91, -45.31, -30.68]}
        />
        <mesh
          name="Leiterclip_Fl_120x12_rechts_3_1_1_1001"
          geometry={nodes.Leiterclip_Fl_120x12_rechts_3_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-7.34, -45.99, -16.77]}
        />
        <mesh
          name="polySurface126"
          geometry={nodes.polySurface126.geometry}
          material={materials.lambert1}
          position={[-9.35, -48.38, -32.09]}
        />
        <mesh
          name="Stützbügel_Flach_50x5_4_1_1_2_1_3"
          geometry={nodes.Stützbügel_Flach_50x5_4_1_1_2_1_3.geometry}
          material={materials.lambert1}
          position={[-9.35, -48.38, -23.17]}
        />
        <mesh
          name="Stützbügel_Flach_50x5_4_2_1_1_1_2"
          geometry={nodes.Stützbügel_Flach_50x5_4_2_1_1_1_2.geometry}
          material={materials.lambert1}
          position={[-9.29, -48.8, -41.52]}
        />
        <mesh
          name="Stützbügel_Flach_50x5_4_2_1_1_1_4"
          geometry={nodes.Stützbügel_Flach_50x5_4_2_1_1_1_4.geometry}
          material={materials.lambert1}
          position={[-9.29, -48.8, -44.73]}
        />
        <mesh
          name="Fundament_2_1_remesh001"
          geometry={nodes.Fundament_2_1_remesh001.geometry}
          material={materials.lambert1}
          position={[-4.36, -23.42, -1.49]}
        />
        <mesh
          name="polySurface134"
          geometry={nodes.polySurface134.geometry}
          material={materials.lambert1}
          position={[-4.25, -23.57, -49]}
        />
        <mesh
          name="polySurface129"
          geometry={nodes.polySurface129.geometry}
          material={materials.lambert1}
          position={[-4.29, -23.45, -28.5]}
        />
        <mesh
          name="polySurface136"
          geometry={nodes.polySurface136.geometry}
          material={materials.lambert1}
          position={[-23.49, -31.98, -4.56]}
        />
        <mesh
          name="polySurface135"
          geometry={nodes.polySurface135.geometry}
          material={materials.lambert1}
          position={[-4.18, -47.18, -41.22]}
        />
        <mesh
          name="HANDGRIFF__S_X8X70X46_PRT_1__2"
          geometry={nodes.HANDGRIFF__S_X8X70X46_PRT_1__2.geometry}
          material={materials.lambert1}
          position={[-4.25, -42.45, -43.95]}
        />
        <mesh
          name="Fundament_2_1_remesh002"
          geometry={nodes.Fundament_2_1_remesh002.geometry}
          material={materials.lambert1}
          position={[-4.36, -23.42, -1.49]}
        />
        <mesh
          name="polySurface129001"
          geometry={nodes.polySurface129001.geometry}
          material={materials.lambert1}
          position={[-4.29, -23.45, -28.5]}
        />
        <mesh
          name="polySurface136001"
          geometry={nodes.polySurface136001.geometry}
          material={materials.lambert1}
          position={[-23.49, -31.98, -4.56]}
        />
        <mesh
          name="polySurface134001"
          geometry={nodes.polySurface134001.geometry}
          material={materials.lambert1}
          position={[-4.25, -23.57, -49]}
        />
        <mesh
          name="HANDGRIFF__S_X8X70X46_PRT_1__2001"
          geometry={nodes.HANDGRIFF__S_X8X70X46_PRT_1__2001.geometry}
          material={materials.lambert1}
          position={[-4.25, -42.45, -43.95]}
        />
        <mesh
          name="polySurface135001"
          geometry={nodes.polySurface135001.geometry}
          material={materials.lambert1}
          position={[-4.18, -47.18, -41.22]}
        />
        <mesh
          name="polySurface149"
          geometry={nodes.polySurface149.geometry}
          material={materials.lambert1}
          position={[-6.99, -4.91, -46.23]}
        />
        <mesh
          name="R07587_Rohr_d168_3x2_PN10_16_1_4404_1_1_1001"
          geometry={nodes.R07587_Rohr_d168_3x2_PN10_16_1_4404_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-9.92, 2.5, -3.69]}
        />
        <mesh
          name="R07587_Rohr_d168_3x2_PN10_16_1_4404_1_1_2"
          geometry={nodes.R07587_Rohr_d168_3x2_PN10_16_1_4404_1_1_2.geometry}
          material={materials.lambert1}
          position={[-10.39, 2.5, -3.69]}
        />
        <mesh
          name="R07591_Rohr_d219_1x2_PN10_16_1_4404_1_1_1_1_1_1001"
          geometry={
            nodes.R07591_Rohr_d219_1x2_PN10_16_1_4404_1_1_1_1_1_1001.geometry
          }
          material={materials.lambert1}
          position={[-8.1, 2.51, -24.17]}
        />
        <mesh
          name="R07591_Rohr_d219_1x2_PN10_16_1_4404_1_1_1_1_1_2"
          geometry={
            nodes.R07591_Rohr_d219_1x2_PN10_16_1_4404_1_1_1_1_1_2.geometry
          }
          material={materials.lambert1}
          position={[-7.03, -4.91, -35.2]}
        />
        <mesh
          name="R07591_Rohr_d219_1x2_PN10_16_1_4404_1_2_1_1_1_2__1001"
          geometry={
            nodes.R07591_Rohr_d219_1x2_PN10_16_1_4404_1_2_1_1_1_2__1001.geometry
          }
          material={materials.lambert1}
          position={[-7.54, -1.21, -48.53]}
        />
        <mesh
          name="R00133_Absperrklappe_Z014_A_HG_DN250_1_2"
          geometry={nodes.R00133_Absperrklappe_Z014_A_HG_DN250_1_2.geometry}
          material={materials.lambert1}
          position={[-4.03, -1.26, -4.26]}
        />
        <mesh
          name="R07681_Rohr_d273x2_6_PN10_16_1_4404_1_1_1001"
          geometry={nodes.R07681_Rohr_d273x2_6_PN10_16_1_4404_1_1_1001.geometry}
          material={materials.lambert1}
          position={[-11.01, 11.52, -7.39]}
        />
        <mesh
          name="R08471_Losflansch_DN125_PN16_d139_7_1_4404_1_1_1_1002"
          geometry={
            nodes.R08471_Losflansch_DN125_PN16_d139_7_1_4404_1_1_1_1002.geometry
          }
          material={materials.lambert1}
          position={[-11.02, 15.35, -4.36]}
        />
        <mesh
          name="R07787_Bogen_90°_168_3x2_1_4404_1_1001"
          geometry={nodes["R07787_Bogen_90°_168_3x2_1_4404_1_1001"].geometry}
          material={materials.lambert1}
          position={[-8.56, 2.51, -4.09]}
        />
        <mesh
          name="R07790_Bogen_90°_219_1x2_0_1_4404_1_1_23"
          geometry={nodes["R07790_Bogen_90°_219_1x2_0_1_4404_1_1_23"].geometry}
          material={materials.lambert1}
          position={[-8, 1.93, -47.94]}
        />
        <mesh
          name="R07793_Bogen_90°_273x2_1_4404_1_1001"
          geometry={nodes["R07793_Bogen_90°_273x2_1_4404_1_1001"].geometry}
          material={materials.lambert1}
          position={[-5.01, 10.79, -11.73]}
        />
        <mesh
          name="R07793_Bogen_90°_273x2_1_4404_1_3"
          geometry={nodes["R07793_Bogen_90°_273x2_1_4404_1_3"].geometry}
          material={materials.lambert1}
          position={[-10.28, 11.52, -11]}
        />
        <mesh
          name="R08474_Losflansch_DN250_PN10_d273_0_1_4404_1_3"
          geometry={
            nodes.R08474_Losflansch_DN250_PN10_d273_0_1_4404_1_3.geometry
          }
          material={materials.lambert1}
          position={[-4.29, -4.92, -11.78]}
        />
        <mesh
          name="R07681_Rohr_d273x2_6_PN10_16_1_4404_1_1_1_2_1001"
          geometry={
            nodes.R07681_Rohr_d273x2_6_PN10_16_1_4404_1_1_1_2_1001.geometry
          }
          material={materials.lambert1}
          position={[-7.65, 11.54, -11.73]}
        />
        <mesh
          name="R07681_Rohr_d273x2_6_PN10_16_1_4404_1_1_1_2_1_1001"
          geometry={
            nodes.R07681_Rohr_d273x2_6_PN10_16_1_4404_1_1_1_2_1_1001.geometry
          }
          material={materials.lambert1}
          position={[-4.27, 2.36, -11.72]}
        />
        <mesh
          name="R07681_Rohr_d273x2_6_PN10_16_1_4404_1_1_1_2_1_1002"
          geometry={
            nodes.R07681_Rohr_d273x2_6_PN10_16_1_4404_1_1_1_2_1_1002.geometry
          }
          material={materials.lambert1}
          position={[-19.42, -59.11, -3.19]}
        />
        <mesh
          name="R07681_Rohr_d273x2_6_PN10_16_1_4404_1_1_1_2_1_2"
          geometry={
            nodes.R07681_Rohr_d273x2_6_PN10_16_1_4404_1_1_1_2_1_2.geometry
          }
          material={materials.lambert1}
          position={[-4.27, 2.36, -3.82]}
        />
        <mesh
          name="R07681_Rohr_d273x2_6_PN10_16_1_4404_1_1_1_2_2"
          geometry={
            nodes.R07681_Rohr_d273x2_6_PN10_16_1_4404_1_1_1_2_2.geometry
          }
          material={materials.lambert1}
          position={[-7.29, 11.54, -3.82]}
        />
        <mesh
          name="R07790_Bogen_90°_219_1x2_0_1_4404_1_1_4001"
          geometry={
            nodes["R07790_Bogen_90°_219_1x2_0_1_4404_1_1_4001"].geometry
          }
          material={materials.lambert1}
          position={[-7.08, -4.34, -47.94]}
        />
        <mesh
          name="R08222_Vorschweissboerdel_DN250_PN10_d273_0_1_4404_1_2"
          geometry={
            nodes.R08222_Vorschweissboerdel_DN250_PN10_d273_0_1_4404_1_2
              .geometry
          }
          material={materials.lambert1}
          position={[-4.26, -0.99, -3.82]}
        />
        <mesh
          name="R07793_Bogen_90°_273x2_1_4404_1_1002"
          geometry={nodes["R07793_Bogen_90°_273x2_1_4404_1_1002"].geometry}
          material={materials.lambert1}
          position={[-19.1, -61.78, -3.19]}
          rotation={[0, 0, -Math.PI]}
        />
        <mesh
          name="R07793_Bogen_90°_273x2_1_4404_1_4"
          geometry={nodes["R07793_Bogen_90°_273x2_1_4404_1_4"].geometry}
          material={materials.lambert1}
          position={[-5.01, 10.79, -3.82]}
        />
        <mesh
          name="R08472_Losflansch_DN150_PN16_d168_3_1_4404_1_2001"
          geometry={
            nodes.R08472_Losflansch_DN150_PN16_d168_3_1_4404_1_2001.geometry
          }
          material={materials.lambert1}
          position={[-10.26, 11.52, -3.81]}
        />
        <mesh
          name="R08474_Losflansch_DN250_PN10_d273_0_1_4404_1_5"
          geometry={
            nodes.R08474_Losflansch_DN250_PN10_d273_0_1_4404_1_5.geometry
          }
          material={materials.lambert1}
          position={[-4.29, -4.92, -3.87]}
        />
        <mesh
          name="R08471_Losflansch_DN125_PN16_d139_7_1_4404_1_1_1_1001"
          geometry={
            nodes.R08471_Losflansch_DN125_PN16_d139_7_1_4404_1_1_1_1001.geometry
          }
          material={materials.lambert1}
          position={[-11.01, 11.52, -5.45]}
        />
        <mesh
          name="R08474_Losflansch_DN250_PN10_d273_0_1_4404_1_2"
          geometry={
            nodes.R08474_Losflansch_DN250_PN10_d273_0_1_4404_1_2.geometry
          }
          material={materials.lambert1}
          position={[-4.29, -1.56, -11.78]}
        />
        <mesh
          name="R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_7001"
          geometry={
            nodes["R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_7001"].geometry
          }
          material={materials.lambert1}
          position={[17.04, 27.03, -14.05]}
        />
        <mesh
          name="R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_7002"
          geometry={
            nodes["R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_7002"].geometry
          }
          material={materials.lambert1}
          position={[14.64, 35.32, -14.05]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1_2002"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1_2002.geometry
          }
          material={materials.lambert1}
          position={[-7.41, 15.36, -3.38]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1_2004"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1_2004.geometry
          }
          material={materials.lambert1}
          position={[-4.27, 15.37, -5.13]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="R00191_Absperrklappe_Z011_A_HG_DN125_U1S1K08_1_1001"
          geometry={
            nodes.R00191_Absperrklappe_Z011_A_HG_DN125_U1S1K08_1_1001.geometry
          }
          material={materials.lambert1}
          position={[10.93, -7.92, -13.51]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__1001"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__1001.geometry
          }
          material={materials.lambert1}
          position={[3.36, 21.69, -14.04]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__4"
          geometry={nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__4.geometry}
          material={materials.lambert1}
          position={[13.46, -5.85, -14.04]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__7"
          geometry={nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__7.geometry}
          material={materials.lambert1}
          position={[5.53, 28.97, -14.05]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__7003"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__7003.geometry
          }
          material={materials.lambert1}
          position={[-10.68, 15.35, -13.82]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__7005"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__7005.geometry
          }
          material={materials.lambert1}
          position={[-4.61, 15.37, -3.61]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1_2"
          geometry={nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1_2.geometry}
          material={materials.lambert1}
          position={[-3.75, 15.36, -14.05]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1_2001"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1_2001.geometry
          }
          material={materials.lambert1}
          position={[-11.01, 15.36, -9.47]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1_2003"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1_2003.geometry
          }
          material={materials.lambert1}
          position={[-4.25, 7.96, -7.51]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1_3"
          geometry={nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1_3.geometry}
          material={materials.lambert1}
          position={[10.33, 35.61, -14.05]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__3"
          geometry={nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__3.geometry}
          material={materials.lambert1}
          position={[17.37, 12.87, -14.04]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__6"
          geometry={nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__6.geometry}
          material={materials.lambert1}
          position={[15.12, 28.34, -14.05]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__7001"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__7001.geometry
          }
          material={materials.lambert1}
          position={[5.53, 28.97, -14.05]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__7002"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__7002.geometry
          }
          material={materials.lambert1}
          position={[3.13, 15.7, -14.05]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__7004"
          geometry={
            nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1_1_1__7004.geometry
          }
          material={materials.lambert1}
          position={[-4.26, 15.13, -7.18]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="R09326_Bogen_45°_140x8_3_SDR17_PE100_1001"
          geometry={nodes["R09326_Bogen_45°_140x8_3_SDR17_PE100_1001"].geometry}
          material={materials.lambert1}
          position={[17.14, -1.81, -14.05]}
        />
        <mesh
          name="polySurface61"
          geometry={nodes.polySurface61.geometry}
          material={materials.lambert1}
          position={[14.27, 56.2, -4.55]}
        />
        <mesh
          name="polySurface73"
          geometry={nodes.polySurface73.geometry}
          material={materials.lambert1}
          position={[7.45, 56.19, -4.55]}
        />
        <mesh
          name="polySurface49"
          geometry={nodes.polySurface49.geometry}
          material={materials.lambert1}
          position={[11.77, 54.25, -4.34]}
        />
        <mesh
          name="R00893_T_Stück_reduziert_d90_50_KM_2_1_body1_1__10001"
          geometry={
            nodes.R00893_T_Stück_reduziert_d90_50_KM_2_1_body1_1__10001.geometry
          }
          material={materials.lambert1}
          position={[5.98, 23.93, -13.02]}
        />
        <mesh
          name="R00893_T_Stück_reduziert_d90_50_KM_2_1_body1_1__11001"
          geometry={
            nodes.R00893_T_Stück_reduziert_d90_50_KM_2_1_body1_1__11001.geometry
          }
          material={materials.lambert1}
          position={[5.98, 23.93, -15]}
        />
        <mesh
          name="R00893_T_Stück_reduziert_d90_50_KM_2_1_body1_1__8001"
          geometry={
            nodes.R00893_T_Stück_reduziert_d90_50_KM_2_1_body1_1__8001.geometry
          }
          material={materials.lambert1}
          position={[5.98, 23.93, -5.07]}
        />
        <mesh
          name="P02088_BB_d90_KM_PN16_PVC_U_1_1_1_1_1_1_1_1_12001"
          geometry={
            nodes.P02088_BB_d90_KM_PN16_PVC_U_1_1_1_1_1_1_1_1_12001.geometry
          }
          material={materials.lambert1}
          position={[6.13, 56.19, -3.91]}
        />
        <mesh
          name="R07519_Rohr_d63x3_PN10_PVC_U_1_1_2_1001"
          geometry={nodes.R07519_Rohr_d63x3_PN10_PVC_U_1_1_2_1001.geometry}
          material={materials.lambert1}
          position={[13.14, 55.18, -3.91]}
        />
        <mesh
          name="R07520_Rohr_d75x3_6_PN10_PVC_U_1_1_1_1_1001"
          geometry={nodes.R07520_Rohr_d75x3_6_PN10_PVC_U_1_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[8.94, 55.65, -3.91]}
        />
        <mesh
          name="R07521_Rohr_d90x4_3_PN10_PVC_U_3_1_1_1001"
          geometry={nodes.R07521_Rohr_d90x4_3_PN10_PVC_U_3_1_1_1001.geometry}
          material={materials.lambert1}
          position={[7.45, 56.19, -4.43]}
        />
        <mesh
          name="R00368_WI_90°_d90_PVC_U_1_1_1_10001"
          geometry={nodes["R00368_WI_90°_d90_PVC_U_1_1_1_10001"].geometry}
          material={materials.lambert1}
          position={[14.08, 56.2, -4.1]}
        />
        <mesh
          name="R07520_Rohr_d75x3_6_PN10_PVC_U_1_1_1_1001"
          geometry={nodes.R07520_Rohr_d75x3_6_PN10_PVC_U_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[8.94, 54.01, -4.39]}
        />
        <mesh
          name="R07521_Rohr_d90x4_3_PN10_PVC_U_1_2_1_1001"
          geometry={nodes.R07521_Rohr_d90x4_3_PN10_PVC_U_1_2_1_1001.geometry}
          material={materials.lambert1}
          position={[11.04, 56.2, -3.9]}
        />
        <mesh
          name="R07521_Rohr_d90x4_3_PN10_PVC_U_3_1_1_1_1001"
          geometry={nodes.R07521_Rohr_d90x4_3_PN10_PVC_U_3_1_1_1_1001.geometry}
          material={materials.lambert1}
          position={[14.28, 56.2, -4.4]}
        />
        <mesh
          name="polySurface51"
          geometry={nodes.polySurface51.geometry}
          material={materials.lambert1}
          position={[9.79, 52.79, -3.32]}
        />
        <mesh
          name="polySurface69"
          geometry={nodes.polySurface69.geometry}
          material={materials.lambert1}
          position={[8.94, 54.01, -4.57]}
        />
        <mesh
          name="polySurface57"
          geometry={nodes.polySurface57.geometry}
          material={materials.lambert1}
          position={[13.14, 54.27, -4.36]}
        />
        <mesh
          name="polySurface118"
          geometry={nodes.polySurface118.geometry}
          material={materials.lambert1}
          position={[11.7, 56.37, -13.43]}
        />
        <mesh
          name="polySurface119"
          geometry={nodes.polySurface119.geometry}
          material={materials.lambert1}
          position={[11.7, 56.37, -13.8]}
        />
        <mesh
          name="polySurface53"
          geometry={nodes.polySurface53.geometry}
          material={materials.lambert1}
          position={[14.28, 53.29, -3.69]}
        />
        <mesh
          name="polySurface47"
          geometry={nodes.polySurface47.geometry}
          material={materials.lambert1}
          position={[11.78, 54.26, -4.81]}
        />
        <mesh
          name="R06320_Winkel_90°_d110_KM_1_1_2001"
          geometry={nodes["R06320_Winkel_90°_d110_KM_1_1_2001"].geometry}
          material={materials.lambert1}
          position={[11.46, 56.4, -14.83]}
        />
        <mesh
          name="R00368_WI_90°_d90_PVC_U_1_1_1_1001"
          geometry={nodes["R00368_WI_90°_d90_PVC_U_1_1_1_1001"].geometry}
          material={materials.lambert1}
          position={[11.58, 54.26, -3.52]}
        />
        <mesh
          name="R00368_WI_90°_d90_PVC_U_1_1_1_3001"
          geometry={nodes["R00368_WI_90°_d90_PVC_U_1_1_1_3001"].geometry}
          material={materials.lambert1}
          position={[9.98, 50.39, -13.85]}
        />
        <mesh
          name="R07430_Losflansch_DN125_PN16_d140_PP_GF_3_1_1_1_20001"
          geometry={
            nodes.R07430_Losflansch_DN125_PN16_d140_PP_GF_3_1_1_1_20001.geometry
          }
          material={materials.lambert1}
          position={[14.28, 53.26, -3.7]}
        />
        <mesh
          name="R06320_Winkel_90°_d110_KM_1_1_1001"
          geometry={nodes["R06320_Winkel_90°_d110_KM_1_1_1001"].geometry}
          material={materials.lambert1}
          position={[9.69, 56.16, -15.07]}
        />
        <mesh
          name="R00368_WI_90°_d90_PVC_U_1_1_1_13001"
          geometry={nodes["R00368_WI_90°_d90_PVC_U_1_1_1_13001"].geometry}
          material={materials.lambert1}
          position={[9, 21.44, -15.07]}
        />
        <mesh
          name="R00368_WI_90°_d90_PVC_U_1_1_1_2001"
          geometry={nodes["R00368_WI_90°_d90_PVC_U_1_1_1_2001"].geometry}
          material={materials.lambert1}
          position={[9.98, 54.07, -3.32]}
        />
        <mesh
          name="R00368_WI_90°_d90_PVC_U_1_1_1_5001"
          geometry={nodes["R00368_WI_90°_d90_PVC_U_1_1_1_5001"].geometry}
          material={materials.lambert1}
          position={[9.79, 50.59, -3.52]}
        />
        <mesh
          name="R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_13001"
          geometry={
            nodes["R07026_Bogen_90°_140x8_3_SDR17_PE100_1_1_1_1_13001"].geometry
          }
          material={materials.lambert1}
          position={[14.28, 54.09, -4]}
        />
        <mesh
          name="R07427_Losflansch_DN80_PN16_d90_PP_GF_1_1_5001"
          geometry={
            nodes.R07427_Losflansch_DN80_PN16_d90_PP_GF_1_1_5001.geometry
          }
          material={materials.lambert1}
          position={[11.77, 54.26, -4.82]}
        />
        <mesh
          name="R07429_Losflansch_DN100_PN16_d125_PP_GF_1001"
          geometry={nodes.R07429_Losflansch_DN100_PN16_d125_PP_GF_1001.geometry}
          material={materials.lambert1}
          position={[11.69, 56.39, -13.49]}
        />
        <mesh
          name="P02521_Losflansch_DN100_PN10_d110_KM_LK_PN10_1_1001"
          geometry={
            nodes.P02521_Losflansch_DN100_PN10_d110_KM_LK_PN10_1_1001.geometry
          }
          material={materials.lambert1}
          position={[11.69, 56.39, -13.73]}
        />
        <mesh
          name="R07478_Rohr_d140x8_3_PN10_PE100_3_1_1001"
          geometry={nodes.R07478_Rohr_d140x8_3_PN10_PE100_3_1_1001.geometry}
          material={materials.lambert1}
          position={[14.28, 54.39, -4.94]}
        />
        <mesh
          name="R07521_Rohr_d90x4_3_PN10_PVC_U_1_1_1_1_1_1_1001"
          geometry={
            nodes.R07521_Rohr_d90x4_3_PN10_PVC_U_1_1_1_1_1_1_1001.geometry
          }
          material={materials.lambert1}
          position={[11.78, 54.26, -3.99]}
        />
        <mesh
          name="R07521_Rohr_d90x4_3_PN10_PVC_U_1_1_1_1_1_1_1_1001"
          geometry={
            nodes.R07521_Rohr_d90x4_3_PN10_PVC_U_1_1_1_1_1_1_1_1001.geometry
          }
          material={materials.lambert1}
          position={[10.78, 54.27, -3.32]}
        />
        <mesh
          name="R07521_Rohr_d90x4_3_PN10_PVC_U_1_1_1_1_1_1_1_1_1001"
          geometry={
            nodes.R07521_Rohr_d90x4_3_PN10_PVC_U_1_1_1_1_1_1_1_1_1001.geometry
          }
          material={materials.lambert1}
          position={[9.78, 53.42, -3.32]}
        />
        <mesh
          name="R07521_Rohr_d90x4_3_PN10_PVC_U_1_1_1_1_1_2_1001"
          geometry={
            nodes.R07521_Rohr_d90x4_3_PN10_PVC_U_1_1_1_1_1_2_1001.geometry
          }
          material={materials.lambert1}
          position={[19.42, 50.41, -14.04]}
        />
        <mesh
          name="R07521_Rohr_d90x4_3_PN10_PVC_U_1_1_2_1001"
          geometry={nodes.R07521_Rohr_d90x4_3_PN10_PVC_U_1_1_2_1001.geometry}
          material={materials.lambert1}
          position={[9.79, 50.4, -8.67]}
        />
        <mesh
          name="R07522_Rohr_d110x5_3_PN10_PVC_U_1_1001"
          geometry={nodes.R07522_Rohr_d110x5_3_PN10_PVC_U_1_1001.geometry}
          material={materials.lambert1}
          position={[11.69, 56.39, -14.22]}
        />
        <mesh
          name="R07522_Rohr_d110x5_3_PN10_PVC_U_1_1_1001"
          geometry={nodes.R07522_Rohr_d110x5_3_PN10_PVC_U_1_1_1001.geometry}
          material={materials.lambert1}
          position={[10.58, 56.4, -15.06]}
        />
        <mesh
          name="R07522_Rohr_d110x5_3_PN10_PVC_U_2_1_1_1__1001"
          geometry={
            nodes.R07522_Rohr_d110x5_3_PN10_PVC_U_2_1_1_1__1001.geometry
          }
          material={materials.lambert1}
          position={[9.48, 38.96, -15.06]}
        />
        <mesh
          name="polySurface112"
          geometry={nodes.polySurface112.geometry}
          material={materials.lambert1}
          position={[10.31, 55.16, -13.08]}
        />
        <mesh
          name="Rechteck_DIN_10210_2_60x40x4_2_1_body1_1_001"
          geometry={nodes.Rechteck_DIN_10210_2_60x40x4_2_1_body1_1_001.geometry}
          material={materials.lambert1}
          position={[10.8, 54.96, -10.03]}
        />
        <mesh
          name="Rechteck_DIN_10210_2_60x40x4_2_1_body1_2_001"
          geometry={nodes.Rechteck_DIN_10210_2_60x40x4_2_1_body1_2_001.geometry}
          material={materials.lambert1}
          position={[10.31, 55.16, -10.03]}
        />
        <mesh
          name="Rechteck_DIN_10210_2_60x40x4_2_1_body1_1__3001"
          geometry={
            nodes.Rechteck_DIN_10210_2_60x40x4_2_1_body1_1__3001.geometry
          }
          material={materials.lambert1}
          position={[10.8, 54.96, -6.55]}
        />
        <mesh
          name="polySurface107"
          geometry={nodes.polySurface107.geometry}
          material={materials.lambert1}
          position={[10.31, 55.16, -11.76]}
        />
        <mesh
          name="polySurface108"
          geometry={nodes.polySurface108.geometry}
          material={materials.lambert1}
          position={[10.31, 55.16, -10.03]}
        />
        <mesh
          name="polySurface109"
          geometry={nodes.polySurface109.geometry}
          material={materials.lambert1}
          position={[10.31, 55.16, -8.28]}
        />
        <mesh
          name="polySurface110"
          geometry={nodes.polySurface110.geometry}
          material={materials.lambert1}
          position={[10.31, 55.16, -6.55]}
        />
        <mesh
          name="Rechteck_DIN_10210_2_60x40x4_2_1_body1_1__4001"
          geometry={
            nodes.Rechteck_DIN_10210_2_60x40x4_2_1_body1_1__4001.geometry
          }
          material={materials.lambert1}
          position={[10.8, 54.96, -11.76]}
        />
        <mesh
          name="Rechteck_DIN_10210_2_60x40x4_2_1_body1_2__4001"
          geometry={
            nodes.Rechteck_DIN_10210_2_60x40x4_2_1_body1_2__4001.geometry
          }
          material={materials.lambert1}
          position={[10.31, 55.16, -11.76]}
        />
        <mesh
          name="polySurface105"
          geometry={nodes.polySurface105.geometry}
          material={materials.lambert1}
          position={[10.31, 55.16, -9.16]}
        />
        <mesh
          name="Boden_1001"
          geometry={nodes.Boden_1001.geometry}
          material={materials.lambert1}
          position={[10.82, 54.83, -5.23]}
        />
        <mesh
          name="Q_Hohlprofil_60x60x5_L895_1001"
          geometry={nodes.Q_Hohlprofil_60x60x5_L895_1001.geometry}
          material={materials.lambert1}
          position={[12.28, 55.16, -5.04]}
        />
        <mesh
          name="R20004_Fussplatte_60x60x10_4_1001"
          geometry={nodes.R20004_Fussplatte_60x60x10_4_1001.geometry}
          material={materials.lambert1}
          position={[10.31, 53.34, -2.72]}
        />
        <mesh
          name="R20004_Fussplatte_60x60x10_4_2001"
          geometry={nodes.R20004_Fussplatte_60x60x10_4_2001.geometry}
          material={materials.lambert1}
          position={[10.3, 56.97, -2.72]}
        />
        <mesh
          name="R20004_Fussplatte_60x60x10_4_3001"
          geometry={nodes.R20004_Fussplatte_60x60x10_4_3001.geometry}
          material={materials.lambert1}
          position={[14.08, 56.97, -2.72]}
        />
        <mesh
          name="R20004_Fussplatte_60x60x10_4_4001"
          geometry={nodes.R20004_Fussplatte_60x60x10_4_4001.geometry}
          material={materials.lambert1}
          position={[6.53, 56.96, -2.72]}
        />
        <mesh
          name="R20004_Fussplatte_60x60x10_4_5001"
          geometry={nodes.R20004_Fussplatte_60x60x10_4_5001.geometry}
          material={materials.lambert1}
          position={[5.57, 53.34, -2.72]}
        />
        <mesh
          name="R20004_Fussplatte_60x60x10_4_6001"
          geometry={nodes.R20004_Fussplatte_60x60x10_4_6001.geometry}
          material={materials.lambert1}
          position={[15.05, 53.35, -2.72]}
        />
        <mesh
          name="R20010_Q_Hohlprofil_60x60x5_L670_1001"
          geometry={nodes.R20010_Q_Hohlprofil_60x60x5_L670_1001.geometry}
          material={materials.lambert1}
          position={[8.22, 55.43, -5.04]}
        />
        <mesh
          name="R20010_Q_Hohlprofil_60x60x5_L670_2001"
          geometry={nodes.R20010_Q_Hohlprofil_60x60x5_L670_2001.geometry}
          material={materials.lambert1}
          position={[10.31, 55.44, -5.04]}
        />
        <mesh
          name="R20xxx_Rohrstück_d90x5_4x45_PN10_PE100_1001"
          geometry={nodes.R20xxx_Rohrstück_d90x5_4x45_PN10_PE100_1001.geometry}
          material={materials.lambert1}
          position={[11.77, 54.26, -5.21]}
        />
        <mesh
          name="polySurface55"
          geometry={nodes.polySurface55.geometry}
          material={materials.lambert1}
          position={[13.14, 54.27, -4.78]}
        />
        <mesh
          name="R20022_Rohrstück_d63x3_8x70_PN10_PE100_1_1001"
          geometry={
            nodes.R20022_Rohrstück_d63x3_8x70_PN10_PE100_1_1001.geometry
          }
          material={materials.lambert1}
          position={[13.14, 54.26, -5.13]}
        />
        <mesh
          name="R07425_Losflansch_DN50_PN16_d63_PP_GF_1_1001"
          geometry={nodes.R07425_Losflansch_DN50_PN16_d63_PP_GF_1_1001.geometry}
          material={materials.lambert1}
          position={[13.14, 54.27, -4.8]}
        />
        <mesh
          name="polySurface59"
          geometry={nodes.polySurface59.geometry}
          material={materials.lambert1}
          position={[14.28, 56.2, -4.84]}
        />
        <mesh
          name="R07427_Losflansch_DN80_PN16_d90_PP_GF_1_1_4001"
          geometry={
            nodes.R07427_Losflansch_DN80_PN16_d90_PP_GF_1_1_4001.geometry
          }
          material={materials.lambert1}
          position={[14.28, 56.2, -4.82]}
        />
        <mesh
          name="R20024_Rohrstück_d90x5_4x1500_PN10_PE100_1_2001"
          geometry={
            nodes.R20024_Rohrstück_d90x5_4x1500_PN10_PE100_1_2001.geometry
          }
          material={materials.lambert1}
          position={[14.28, 56.2, -5.17]}
        />
        <mesh
          name="R01192_â_3002"
          geometry={nodes.R01192_â_3002.geometry}
          material={materials.lambert1}
          position={[13.51, 56.41, -13.35]}
        />
        <mesh
          name="R08931_Einschraubteil_DN50_PN16_d63_SS_1_3001"
          geometry={
            nodes.R08931_Einschraubteil_DN50_PN16_d63_SS_1_3001.geometry
          }
          material={materials.lambert1}
          position={[13.51, 56.4, -13.24]}
        />
        <mesh
          name="N06_Füllstand_DN15_1002"
          geometry={nodes.N06_Füllstand_DN15_1002.geometry}
          material={materials.lambert1}
          position={[14.73, 53.24, -5.68]}
        />
        <mesh
          name="R07430_Losflansch_DN125_PN16_d140_PP_GF_3_1_1_1_19001"
          geometry={
            nodes.R07430_Losflansch_DN125_PN16_d140_PP_GF_3_1_1_1_19001.geometry
          }
          material={materials.lambert1}
          position={[6.36, 54.5, -4.84]}
        />
        <mesh
          name="R20027_Rohrstück_d140x8_3x45_PN10_PE100_1001"
          geometry={nodes.R20027_Rohrstück_d140x8_3x45_PN10_PE100_1001.geometry}
          material={materials.lambert1}
          position={[6.36, 54.5, -5.21]}
        />
        <mesh
          name="polySurface75"
          geometry={nodes.polySurface75.geometry}
          material={materials.lambert1}
          position={[7.45, 56.2, -4.81]}
        />
        <mesh
          name="R07427_Losflansch_DN80_PN16_d90_PP_GF_1_1_3001"
          geometry={
            nodes.R07427_Losflansch_DN80_PN16_d90_PP_GF_1_1_3001.geometry
          }
          material={materials.lambert1}
          position={[7.45, 56.19, -4.82]}
        />
        <mesh
          name="R20024_Rohrstück_d90x5_4x1500_PN10_PE100_1_1001"
          geometry={
            nodes.R20024_Rohrstück_d90x5_4x1500_PN10_PE100_1_1001.geometry
          }
          material={materials.lambert1}
          position={[7.45, 56.19, -9.27]}
        />
        <mesh
          name="polySurface67"
          geometry={nodes.polySurface67.geometry}
          material={materials.lambert1}
          position={[8.94, 54.01, -4.79]}
        />
        <mesh
          name="R20023_Rohrstück_d75x4_5x69_PN10_PE100_1001"
          geometry={nodes.R20023_Rohrstück_d75x4_5x69_PN10_PE100_1001.geometry}
          material={materials.lambert1}
          position={[8.94, 54.01, -5.14]}
        />
        <mesh
          name="R07426_Losflansch_DN65_PN16_d75_PP_GF_1_1_3001"
          geometry={
            nodes.R07426_Losflansch_DN65_PN16_d75_PP_GF_1_1_3001.geometry
          }
          material={materials.lambert1}
          position={[8.94, 54.01, -4.81]}
        />
        <mesh
          name="R08931_Einschraubteil_DN50_PN16_d63_SS_1_1001"
          geometry={
            nodes.R08931_Einschraubteil_DN50_PN16_d63_SS_1_1001.geometry
          }
          material={materials.lambert1}
          position={[8.79, 56.39, -13.24]}
        />
        <mesh
          name="R01192_â_1002"
          geometry={nodes.R01192_â_1002.geometry}
          material={materials.lambert1}
          position={[8.79, 56.4, -13.35]}
        />
        <mesh
          name="R07021_Bogen_90°_63x3_8_SDR17_PE100_1_1001"
          geometry={
            nodes["R07021_Bogen_90°_63x3_8_SDR17_PE100_1_1001"].geometry
          }
          material={materials.lambert1}
          position={[6.13, 54.53, -12.71]}
        />
        <mesh
          name="P04747_Einlegteil_DN50_PN16_d63_KM_1_2001"
          geometry={nodes.P04747_Einlegteil_DN50_PN16_d63_KM_1_2001.geometry}
          material={materials.lambert1}
          position={[6.14, 54.65, -13.41]}
        />
        <mesh
          name="R01192_â_2002"
          geometry={nodes.R01192_â_2002.geometry}
          material={materials.lambert1}
          position={[6.14, 54.65, -13.37]}
        />
        <mesh
          name="R08931_Einschraubteil_DN50_PN16_d63_SS_1_2001"
          geometry={
            nodes.R08931_Einschraubteil_DN50_PN16_d63_SS_1_2001.geometry
          }
          material={materials.lambert1}
          position={[6.13, 54.65, -13.24]}
        />
        <mesh
          name="N05_Temperatur_DN15_1002"
          geometry={nodes.N05_Temperatur_DN15_1002.geometry}
          material={materials.lambert1}
          position={[5.89, 53.23, -7.67]}
        />
        <mesh
          name="N04_Füllstand_DN15_1002"
          geometry={nodes.N04_Füllstand_DN15_1002.geometry}
          material={materials.lambert1}
          position={[5.89, 53.23, -5.68]}
        />
        <mesh
          name="P01716_Losflansch_DN65_PN10_d75_KM_LK_PN10_1_1_1_1_3001"
          geometry={
            nodes.P01716_Losflansch_DN65_PN10_d75_KM_LK_PN10_1_1_1_1_3001
              .geometry
          }
          material={materials.lambert1}
          position={[8.94, 54.01, -4.58]}
        />
        <mesh
          name="P00972_Winkel_90°_d63_KM_1_1_1_1_1_2001"
          geometry={nodes["P00972_Winkel_90°_d63_KM_1_1_1_1_1_2001"].geometry}
          material={materials.lambert1}
          position={[6.13, 54.73, -13.97]}
        />
        <mesh
          name="P00934_Reduktion_kurz_d32_KS_d20_KM_1_1001"
          geometry={nodes.P00934_Reduktion_kurz_d32_KS_d20_KM_1_1001.geometry}
          material={materials.lambert1}
          position={[9.62, 53.35, -3.15]}
        />
        <mesh
          name="P00972_Winkel_90°_d63_KM_1_1_1_1_1_3001"
          geometry={nodes["P00972_Winkel_90°_d63_KM_1_1_1_1_1_3001"].geometry}
          material={materials.lambert1}
          position={[13.14, 54.43, -4.01]}
        />
        <mesh
          name="P01715_Losflansch_DN80_PN10_d90_KM_LK_PN10_1_2_1_1_1_1_15001"
          geometry={
            nodes.P01715_Losflansch_DN80_PN10_d90_KM_LK_PN10_1_2_1_1_1_1_15001
              .geometry
          }
          material={materials.lambert1}
          position={[14.28, 56.2, -4.59]}
        />
        <mesh
          name="P01715_Losflansch_DN80_PN10_d90_KM_LK_PN10_1_2_1_1_1_1_14001"
          geometry={
            nodes.P01715_Losflansch_DN80_PN10_d90_KM_LK_PN10_1_2_1_1_1_1_14001
              .geometry
          }
          material={materials.lambert1}
          position={[7.45, 56.19, -4.59]}
        />
        <mesh
          name="P01716_Losflansch_DN65_PN10_d75_KM_LK_PN10_1_1_1_1_1001"
          geometry={
            nodes.P01716_Losflansch_DN65_PN10_d75_KM_LK_PN10_1_1_1_1_1001
              .geometry
          }
          material={materials.lambert1}
          position={[9.79, 52.8, -3.32]}
        />
        <mesh
          name="P01715_Losflansch_DN80_PN10_d90_KM_LK_PN10_1_2_1_1_1_1_4001"
          geometry={
            nodes.P01715_Losflansch_DN80_PN10_d90_KM_LK_PN10_1_2_1_1_1_1_4001
              .geometry
          }
          material={materials.lambert1}
          position={[11.77, 54.26, -4.36]}
        />
        <mesh
          name="P01904_Losflansch_DN50_PN10_d63_KM_LK_PN10_1_1001"
          geometry={
            nodes.P01904_Losflansch_DN50_PN10_d63_KM_LK_PN10_1_1001.geometry
          }
          material={materials.lambert1}
          position={[13.14, 54.27, -4.37]}
        />
        <mesh
          name="P02750_Absperrklappe_Z011_A_RG_DN80_U1P1K01_1_1001"
          geometry={
            nodes.P02750_Absperrklappe_Z011_A_RG_DN80_U1P1K01_1_1001.geometry
          }
          material={materials.lambert1}
          position={[11.75, 54.09, -4.57]}
        />
        <mesh
          name="P01718_Bundbuchse_DN65_PN16_d75_KM_1_1_2001"
          geometry={nodes.P01718_Bundbuchse_DN65_PN16_d75_KM_1_1_2001.geometry}
          material={materials.lambert1}
          position={[9.79, 51.03, -3.32]}
        />
        <mesh
          name="P03012_Winkel_90°_d75_KM_1_1_1_1001"
          geometry={nodes["P03012_Winkel_90°_d75_KM_1_1_1_1001"].geometry}
          material={materials.lambert1}
          position={[8.94, 54.13, -4.1]}
        />
        <mesh
          name="PE_Platte_U1P1P01_1_1001"
          geometry={nodes.PE_Platte_U1P1P01_1_1001.geometry}
          material={materials.lambert1}
          position={[9.79, 51.9, -2.76]}
        />
        <mesh
          name="R10955_Losflansch_ANSI_B_16_5_3_Class_150_1_1001"
          geometry={
            nodes.R10955_Losflansch_ANSI_B_16_5_3_Class_150_1_1001.geometry
          }
          material={materials.lambert1}
          position={[6.14, 56.19, -3.91]}
        />
        <mesh
          name="P00972_Winkel_90°_d63_KM_1_1_1_1_1_1001"
          geometry={nodes["P00972_Winkel_90°_d63_KM_1_1_1_1_1_1001"].geometry}
          material={materials.lambert1}
          position={[6.06, 56.26, -14.05]}
        />
        <mesh
          name="R01168_Absperrklappe_Z011_A_RG_DN50_U1P1K02_1_1001"
          geometry={
            nodes.R01168_Absperrklappe_Z011_A_RG_DN50_U1P1K02_1_1001.geometry
          }
          material={materials.lambert1}
          position={[13.12, 54.11, -4.58]}
        />
        <mesh
          name="R07519_Rohr_d63x3_PN10_PVC_U_2_1_1_1001"
          geometry={nodes.R07519_Rohr_d63x3_PN10_PVC_U_2_1_1_1001.geometry}
          material={materials.lambert1}
          position={[5.6, 56.34, -14.05]}
        />
        <mesh
          name="R07519_Rohr_d63x3_PN10_PVC_U_3_1_1001"
          geometry={nodes.R07519_Rohr_d63x3_PN10_PVC_U_3_1_1001.geometry}
          material={materials.lambert1}
          position={[6.13, 54.65, -13.59]}
        />
        <mesh
          name="P01716_Losflansch_DN65_PN10_d75_KM_LK_PN10_1_1_1_1_2001"
          geometry={
            nodes.P01716_Losflansch_DN65_PN10_d75_KM_LK_PN10_1_1_1_1_2001
              .geometry
          }
          material={materials.lambert1}
          position={[9.79, 51, -3.32]}
        />
        <mesh
          name="P01905_Bundbuchse_DN50_PN16_d63_KM_1_2001"
          geometry={nodes.P01905_Bundbuchse_DN50_PN16_d63_KM_1_2001.geometry}
          material={materials.lambert1}
          position={[5.17, 56.34, -14.05]}
        />
        <mesh
          name="R09872_Kreiselpumpe_CRN_32_1_A_F_G_V_HQQV_60Hz_1_1001"
          geometry={
            nodes.R09872_Kreiselpumpe_CRN_32_1_A_F_G_V_HQQV_60Hz_1_1001.geometry
          }
          material={materials.lambert1}
          position={[9.79, 51.87, -3.83]}
        />
        <mesh
          name="R06239_Kugelhahn_SK_EE_FC_DN65_PN10_d75_KM_U1S1H02_1_1001"
          geometry={
            nodes.R06239_Kugelhahn_SK_EE_FC_DN65_PN10_d75_KM_U1S1H02_1_1001
              .geometry
          }
          material={materials.lambert1}
          position={[8.36, 54.98, -3.95]}
        />
        <mesh
          name="R02356_Kugelhahn_SK_EE_FC_DN50_PN10_d63_KM_U1S1H01_1_1001"
          geometry={
            nodes.R02356_Kugelhahn_SK_EE_FC_DN50_PN10_d63_KM_U1S1H01_1_1001
              .geometry
          }
          material={materials.lambert1}
          position={[6.1, 55.52, -14.5]}
        />
        <mesh
          name="R09538_Blindverschluss_1_1_body1001"
          geometry={nodes.R09538_Blindverschluss_1_1_body1001.geometry}
          material={materials.lambert1}
          position={[14.76, 46.02, -7.88]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="R09538_Blindverschluss_1_1_body1_instance001"
          geometry={nodes.R09538_Blindverschluss_1_1_body1_instance001.geometry}
          material={materials.lambert1}
          position={[14.76, 46.31, -7.88]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="R09539_Schildträ_body1005"
          geometry={nodes.R09539_Schildträ_body1005.geometry}
          material={materials.lambert1}
          position={[14.74, 46.31, -7.96]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="R09539_Schildträ_body1_instance001"
          geometry={nodes.R09539_Schildträ_body1_instance001.geometry}
          material={materials.lambert1}
          position={[14.74, 46.02, -7.96]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="R09539_Schildträ_body1_instance_2001"
          geometry={nodes.R09539_Schildträ_body1_instance_2001.geometry}
          material={materials.lambert1}
          position={[14.74, 45.72, -7.96]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="R09539_Schildträ_body1_instance_3001"
          geometry={nodes.R09539_Schildträ_body1_instance_3001.geometry}
          material={materials.lambert1}
          position={[14.74, 45.42, -7.96]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="R09540_Bezeichnungsschild_17_5x28mm_2_1_body1001"
          geometry={
            nodes.R09540_Bezeichnungsschild_17_5x28mm_2_1_body1001.geometry
          }
          material={materials.lambert1}
          position={[14.74, 46.31, -8]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="R09540_Bezeichnungsschild_17_5x28mm_2_1_body1_instance001"
          geometry={
            nodes.R09540_Bezeichnungsschild_17_5x28mm_2_1_body1_instance001
              .geometry
          }
          material={materials.lambert1}
          position={[14.74, 46.02, -8]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="R09540_Bezeichnungsschild_17_5x28mm_2_1_body1_instance_2001"
          geometry={
            nodes.R09540_Bezeichnungsschild_17_5x28mm_2_1_body1_instance_2001
              .geometry
          }
          material={materials.lambert1}
          position={[14.74, 45.72, -8]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="R09540_Bezeichnungsschild_17_5x28mm_2_1_body1_instance_3001"
          geometry={
            nodes.R09540_Bezeichnungsschild_17_5x28mm_2_1_body1_instance_3001
              .geometry
          }
          material={materials.lambert1}
          position={[14.74, 45.42, -8]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="R09711_Wandbefestigungshalter_für_AE_Schrä_body1_1_001"
          geometry={
            nodes.R09711_Wandbefestigungshalter_für_AE_Schrä_body1_1_001
              .geometry
          }
          material={materials.lambert1}
          position={[15.83, 47.36, -10.59]}
          rotation={[Math.PI, 0, Math.PI / 2]}
        />
        <mesh
          name="R09711_Wandbefestigungshalter_für_AE_Schrä_body1_2_001"
          geometry={
            nodes.R09711_Wandbefestigungshalter_für_AE_Schrä_body1_2_001
              .geometry
          }
          material={materials.lambert1}
          position={[15.83, 44.37, -10.59]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          name="R09711_Wandbefestigungshalter_für_AE_Schrä_body1_1__insta"
          geometry={
            nodes.R09711_Wandbefestigungshalter_für_AE_Schrä_body1_1__insta
              .geometry
          }
          material={materials.lambert1}
          position={[15.83, 44.37, -7.9]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="R09711_Wandbefestigungshalter_für_AE_Schrä_body1_2__insta"
          geometry={
            nodes.R09711_Wandbefestigungshalter_für_AE_Schrä_body1_2__insta
              .geometry
          }
          material={materials.lambert1}
          position={[15.83, 47.36, -7.9]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
        />
        <mesh
          name="R08909_HMI_TP_1500_COMFORT_Panel_1001"
          geometry={nodes.R08909_HMI_TP_1500_COMFORT_Panel_1001.geometry}
          material={materials.lambert1}
          position={[14.7, 46.02, -9.56]}
        />
        <mesh
          name="R09536_Not_Halt_Pilzdrucktaster_Rot_1001"
          geometry={nodes.R09536_Not_Halt_Pilzdrucktaster_Rot_1001.geometry}
          material={materials.lambert1}
          position={[14.66, 45.87, -8.32]}
        />
        <mesh
          name="Touchscreen002"
          geometry={nodes.Touchscreen002.geometry}
          material={materials.lambert1}
          position={[14.7, 46.02, -9.57]}
        />
        <mesh
          name="Würfel_2001"
          geometry={nodes.Würfel_2001.geometry}
          material={materials.lambert1}
          position={[15.96, 45.85, -7.19]}
        />
        <mesh
          name="R09710_Kompakt_Schaltschrank001"
          geometry={nodes.R09710_Kompakt_Schaltschrank001.geometry}
          material={materials.lambert1}
          position={[15.2, 45.42, -9.05]}
        />
        <mesh
          name="R09537_Schutzkragen_für_Not_Halt_Pilzdrucktaster001"
          geometry={
            nodes.R09537_Schutzkragen_für_Not_Halt_Pilzdrucktaster001.geometry
          }
          material={materials.lambert1}
          position={[14.68, 45.87, -8.26]}
        />
        <mesh
          name="R00180_Gruvlok_Kupplung_Fig_705_DN65_d73_0_1_15001"
          geometry={
            nodes.R00180_Gruvlok_Kupplung_Fig_705_DN65_d73_0_1_15001.geometry
          }
          material={materials.lambert1}
          position={[7.05, 26.96, -10.79]}
        />
        <mesh
          name="R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_25"
          geometry={
            nodes.R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_25.geometry
          }
          material={materials.lambert1}
          position={[7.42, 27.69, -12.04]}
        />
        <mesh
          name="R00180_Gruvlok_Kupplung_Fig_705_DN65_d73_0_1_16001"
          geometry={
            nodes.R00180_Gruvlok_Kupplung_Fig_705_DN65_d73_0_1_16001.geometry
          }
          material={materials.lambert1}
          position={[7.03, 26.96, -4.83]}
        />
        <mesh
          name="R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_29"
          geometry={
            nodes.R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_29.geometry
          }
          material={materials.lambert1}
          position={[7.42, 27.69, -6.09]}
        />
        <mesh
          name="R00180_Gruvlok_Kupplung_Fig_705_DN65_d73_0_1_13001"
          geometry={
            nodes.R00180_Gruvlok_Kupplung_Fig_705_DN65_d73_0_1_13001.geometry
          }
          material={materials.lambert1}
          position={[7.04, 26.96, -6.81]}
        />
        <mesh
          name="R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_26"
          geometry={
            nodes.R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_26.geometry
          }
          material={materials.lambert1}
          position={[7.44, 12.8, -12.04]}
        />
        <mesh
          name="R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_33"
          geometry={
            nodes.R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_33.geometry
          }
          material={materials.lambert1}
          position={[7.44, 12.8, -10.04]}
        />
        <mesh
          name="R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_17001"
          geometry={
            nodes.R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_17001
              .geometry
          }
          material={materials.lambert1}
          position={[7.44, 12.8, -14.02]}
        />
        <mesh
          name="R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_30"
          geometry={
            nodes.R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_30.geometry
          }
          material={materials.lambert1}
          position={[7.44, 12.8, -6.09]}
        />
        <mesh
          name="R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_27"
          geometry={
            nodes.R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_27.geometry
          }
          material={materials.lambert1}
          position={[7.42, 27.69, -8.08]}
        />
        <mesh
          name="R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_34"
          geometry={
            nodes.R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_34.geometry
          }
          material={materials.lambert1}
          position={[7.42, 27.69, -10.04]}
        />
        <mesh
          name="R00180_Gruvlok_Kupplung_Fig_705_DN65_d73_0_1_14001"
          geometry={
            nodes.R00180_Gruvlok_Kupplung_Fig_705_DN65_d73_0_1_14001.geometry
          }
          material={materials.lambert1}
          position={[7.07, 26.96, -8.8]}
        />
        <mesh
          name="R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_24"
          geometry={
            nodes.R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_24.geometry
          }
          material={materials.lambert1}
          position={[7.42, 27.69, -14.02]}
        />
        <mesh
          name="R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_31"
          geometry={
            nodes.R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_31.geometry
          }
          material={materials.lambert1}
          position={[7.42, 27.69, -4.09]}
        />
        <mesh
          name="R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_28"
          geometry={
            nodes.R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_28.geometry
          }
          material={materials.lambert1}
          position={[7.44, 12.8, -8.08]}
        />
        <mesh
          name="R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_32"
          geometry={
            nodes.R00181_Gruvlok_Kupplung_Fig_705_DN200_d219_1_3_1_1_32.geometry
          }
          material={materials.lambert1}
          position={[7.44, 12.8, -4.09]}
        />
        <mesh
          name="P02132_Reduktion_kurz_d90_KS_d50_KM_1_2001"
          geometry={nodes.P02132_Reduktion_kurz_d90_KS_d50_KM_1_2001.geometry}
          material={materials.lambert1}
          position={[5.78, 23.83, -15.43]}
        />
        <mesh
          name="R00368_WI_90°_d90_PVC_U_1_1_1_15001"
          geometry={nodes["R00368_WI_90°_d90_PVC_U_1_1_1_15001"].geometry}
          material={materials.lambert1}
          position={[5.98, 21.34, -14.87]}
        />
        <mesh
          name="R06282_Reduktion_kurz_d50_KS_d20_KM_1_2001"
          geometry={nodes.R06282_Reduktion_kurz_d50_KS_d20_KM_1_2001.geometry}
          material={materials.lambert1}
          position={[5.78, 23.83, -15.47]}
        />
        <mesh
          name="P00967_Winkel_90°_d20_PVC_U_1_3_1_1_3_1_1001"
          geometry={
            nodes["P00967_Winkel_90°_d20_PVC_U_1_3_1_1_3_1_1001"].geometry
          }
          material={materials.lambert1}
          position={[5.81, 23.83, -15.66]}
        />
        <mesh
          name="P01906_Druckschlauchtülle_d50_KS_d50_ST_1_8001"
          geometry={
            nodes.P01906_Druckschlauchtülle_d50_KS_d50_ST_1_8001.geometry
          }
          material={materials.lambert1}
          position={[6.38, 24.43, -5.14]}
        />
        <mesh
          name="R00368_WI_90°_d90_PVC_U_1_1_1_14001"
          geometry={nodes["R00368_WI_90°_d90_PVC_U_1_1_1_14001"].geometry}
          material={materials.lambert1}
          position={[5.79, 21.54, -4.14]}
        />
        <mesh
          name="R00368_WI_90°_d90_PVC_U_1_1_1_16"
          geometry={nodes["R00368_WI_90°_d90_PVC_U_1_1_1_16"].geometry}
          material={materials.lambert1}
          position={[5.78, 23.65, -4.14]}
        />
        <mesh
          name="R07521_Rohr_d90x4_3_PN10_PVC_U_2_1_2_1_1001"
          geometry={nodes.R07521_Rohr_d90x4_3_PN10_PVC_U_2_1_2_1_1001.geometry}
          material={materials.lambert1}
          position={[5.79, 22.68, -3.94]}
        />
        <mesh
          name="R07521_Rohr_d90x4_3_PN10_PVC_U_4_1_1_1_1_1_1_1001"
          geometry={
            nodes.R07521_Rohr_d90x4_3_PN10_PVC_U_4_1_1_1_1_1_1_1001.geometry
          }
          material={materials.lambert1}
          position={[5.79, 21.35, -9.41]}
        />
        <mesh
          name="R07521_Rohr_d90x4_3_PN10_PVC_U_4_1_1_1_1_1_1_2"
          geometry={
            nodes.R07521_Rohr_d90x4_3_PN10_PVC_U_4_1_1_1_1_1_1_2.geometry
          }
          material={materials.lambert1}
          position={[5.79, 23.84, -9.41]}
        />
        <mesh
          name="R07521_Rohr_d90x4_3_PN10_PVC_U_4_1_1_1_1__1001"
          geometry={
            nodes.R07521_Rohr_d90x4_3_PN10_PVC_U_4_1_1_1_1__1001.geometry
          }
          material={materials.lambert1}
          position={[7.54, 21.34, -15.06]}
        />
        <mesh
          name="polySurface121"
          geometry={nodes.polySurface121.geometry}
          material={materials.lambert1}
          position={[7.41, 35.17, -2.75]}
        />
        <mesh
          name="R09870_Kreiselpumpe_NB_125_315_288_AS_F_N_BQQV_U1F1P01_1_2001"
          geometry={
            nodes.R09870_Kreiselpumpe_NB_125_315_288_AS_F_N_BQQV_U1F1P01_1_2001
              .geometry
          }
          material={materials.lambert1}
          position={[7.41, 35.79, -4.24]}
        />
        <mesh
          name="R07427_Losflansch_DN80_PN16_d90_PP_GF_1_1_2001"
          geometry={
            nodes.R07427_Losflansch_DN80_PN16_d90_PP_GF_1_1_2001.geometry
          }
          material={materials.lambert1}
          position={[6.36, 52.33, -3.72]}
        />
        <mesh
          name="PE_Platte_U1S1P01_1_1_1001"
          geometry={nodes.PE_Platte_U1S1P01_1_1_1001.geometry}
          material={materials.lambert1}
          position={[6.36, 51.7, -2.76]}
        />
        <mesh
          name="R07430_Losflansch_DN125_PN16_d140_PP_GF_3_1_1_1_13001"
          geometry={
            nodes.R07430_Losflansch_DN125_PN16_d140_PP_GF_3_1_1_1_13001.geometry
          }
          material={materials.lambert1}
          position={[6.36, 54.51, -4.54]}
        />
        <mesh
          name="R09871_Kreiselpumpe_NB_65_125_133_A_F2_K_V_BQQV_U1S1P01_1_2001"
          geometry={
            nodes.R09871_Kreiselpumpe_NB_65_125_133_A_F2_K_V_BQQV_U1S1P01_1_2001
              .geometry
          }
          material={materials.lambert1}
          position={[6.38, 50.81, -3.74]}
        />
        <mesh
          name="polySurface123"
          geometry={nodes.polySurface123.geometry}
          material={materials.lambert1}
          position={[7.4, 37.04, -6.8]}
        />
        <mesh
          name="polySurface124"
          geometry={nodes.polySurface124.geometry}
          material={materials.lambert1}
          position={[7.4, 38.85, -4.2]}
        />
        <mesh
          name="R07790_Bogen_90°_219_1x2_0_1_4404_1_1_22001"
          geometry={
            nodes["R07790_Bogen_90°_219_1x2_0_1_4404_1_1_22001"].geometry
          }
          material={materials.lambert1}
          position={[7.4, 33.62, -12.23]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          name="R08494_Vorschweissboerdel_kurz_DN125_PN10_d139_7_1_4404_2_1"
          geometry={
            nodes.R08494_Vorschweissboerdel_kurz_DN125_PN10_d139_7_1_4404_2_1
              .geometry
          }
          material={materials.lambert1}
          position={[7.4, 37.05, -6.01]}
        />
        <mesh
          name="R07591_Rohr_d219_1x2_PN10_16_1_44042_1_1_1_2001"
          geometry={
            nodes.R07591_Rohr_d219_1x2_PN10_16_1_44042_1_1_1_2001.geometry
          }
          material={materials.lambert1}
          position={[7.42, 33.91, -8.69]}
        />
        <mesh
          name="R07591_Rohr_d219_1x2_PN10_16_1_4404_1_1_1_2001"
          geometry={
            nodes.R07591_Rohr_d219_1x2_PN10_16_1_4404_1_1_1_2001.geometry
          }
          material={materials.lambert1}
          position={[7.43, 28.55, -4.11]}
        />
        <mesh
          name="R07591_Rohr_d219_1x2_PN10_16_1_4404_1_1_1_3"
          geometry={nodes.R07591_Rohr_d219_1x2_PN10_16_1_4404_1_1_1_3.geometry}
          material={materials.lambert1}
          position={[7.43, 30.79, -6.4]}
        />
        <mesh
          name="R20282_Flachdichtung_DN125_PN16_2mm_1_1001"
          geometry={nodes.R20282_Flachdichtung_DN125_PN16_2mm_1_1001.geometry}
          material={materials.lambert1}
          position={[7.4, 37.05, -5.96]}
        />
        <mesh
          name="R07790_Bogen_90°_219_1x2_0_1_4404_1_1_15001"
          geometry={
            nodes["R07790_Bogen_90°_219_1x2_0_1_4404_1_1_15001"].geometry
          }
          material={materials.lambert1}
          position={[7.41, 30.2, -4.7]}
        />
        <mesh
          name="R07790_Bogen_90°_219_1x2_0_1_4404_1_1_20"
          geometry={nodes["R07790_Bogen_90°_219_1x2_0_1_4404_1_1_20"].geometry}
          material={materials.lambert1}
          position={[7.41, 36.46, -8.11]}
        />
        <mesh
          name="R08254_Losflansch_DN125_PN16_d139_7_1_4301_1_2_7001"
          geometry={
            nodes.R08254_Losflansch_DN125_PN16_d139_7_1_4301_1_2_7001.geometry
          }
          material={materials.lambert1}
          position={[7.4, 37.05, -6.02]}
        />
        <mesh
          name="R07790_Bogen_90°_219_1x2_0_1_4404_1_1_19"
          geometry={nodes["R07790_Bogen_90°_219_1x2_0_1_4404_1_1_19"].geometry}
          material={materials.lambert1}
          position={[7.41, 31.37, -8.11]}
        />
        <mesh
          name="R07790_Bogen_90°_219_1x2_0_1_4404_1_1_21"
          geometry={nodes["R07790_Bogen_90°_219_1x2_0_1_4404_1_1_21"].geometry}
          material={materials.lambert1}
          position={[7.4, 40.24, -4.77]}
        />
        <mesh
          name="R07674_Rohr_d33_7x1_PN10_16_1_4404_1_1_2001"
          geometry={nodes.R07674_Rohr_d33_7x1_PN10_16_1_4404_1_1_2001.geometry}
          material={materials.lambert1}
          position={[7.4, 39.43, -3.56]}
        />
        <mesh
          name="R08495_Vorschweissboerdel_kurz_DN150_PN10_d168_3_1_4404_1_1"
          geometry={
            nodes.R08495_Vorschweissboerdel_kurz_DN150_PN10_d168_3_1_4404_1_1
              .geometry
          }
          material={materials.lambert1}
          position={[7.4, 37.8, -4.19]}
        />
        <mesh
          name="R08255_Losflansch_DN150_PN16_d168_3_1_4301_1_1_2001"
          geometry={
            nodes.R08255_Losflansch_DN150_PN16_d168_3_1_4301_1_1_2001.geometry
          }
          material={materials.lambert1}
          position={[7.4, 37.82, -4.19]}
        />
        <mesh
          name="R20283_Flachdichtung_DN150_PN16_2mm_1_2001"
          geometry={nodes.R20283_Flachdichtung_DN150_PN16_2mm_1_2001.geometry}
          material={materials.lambert1}
          position={[7.4, 37.75, -4.19]}
        />
        <mesh
          name="R03103_Dummyrohr_UF_D_C200_3000_1_3001"
          geometry={nodes.R03103_Dummyrohr_UF_D_C200_3000_1_3001.geometry}
          material={materials.lambert1}
          position={[7.42, 23.31, -14.05]}
        />
        <mesh
          name="R03103_Dummyrohr_UF_D_C200_3000_1_5"
          geometry={nodes.R03103_Dummyrohr_UF_D_C200_3000_1_5.geometry}
          material={materials.lambert1}
          position={[7.42, 20.2, -12.06]}
        />
        <mesh
          name="R03103_Dummyrohr_UF_D_C200_3000_1_6"
          geometry={nodes.R03103_Dummyrohr_UF_D_C200_3000_1_6.geometry}
          material={materials.lambert1}
          position={[7.42, 20.2, -10.08]}
        />
        <mesh
          name="R03103_Dummyrohr_UF_D_C200_3000_1_7"
          geometry={nodes.R03103_Dummyrohr_UF_D_C200_3000_1_7.geometry}
          material={materials.lambert1}
          position={[7.42, 20.2, -8.09]}
        />
        <mesh
          name="R03103_Dummyrohr_UF_D_C200_3000_1_8"
          geometry={nodes.R03103_Dummyrohr_UF_D_C200_3000_1_8.geometry}
          material={materials.lambert1}
          position={[7.42, 20.2, -6.09]}
        />
        <mesh
          name="R03103_Dummyrohr_UF_D_C200_3000_1_9"
          geometry={nodes.R03103_Dummyrohr_UF_D_C200_3000_1_9.geometry}
          material={materials.lambert1}
          position={[7.42, 20.2, -4.12]}
        />
        <mesh
          name="Würfel002"
          geometry={nodes.Würfel002.geometry}
          material={materials.lambert1}
          position={[7.15, 20.11, -9]}
        />
        <mesh
          name="Containerboden001"
          geometry={nodes.Containerboden001.geometry}
          material={materials.lambert1}
          position={[10.33, 39.6, -1.85]}
        />
        <mesh
          name="pCylinder4"
          geometry={nodes.pCylinder4.geometry}
          material={materials.lambert1}
          position={[7.85, 13.55, -7.37]}
        />
        <mesh
          name="polySurface115"
          geometry={nodes.polySurface115.geometry}
          material={materials.lambert1}
          position={[7.93, 54.77, -13.32]}
        />
        <mesh
          name="polySurface71"
          geometry={nodes.polySurface71.geometry}
          material={materials.lambert1}
          position={[7.45, 56.2, -4.06]}
        />
        <mesh
          name="pCylinder2"
          geometry={nodes.pCylinder2.geometry}
          material={materials.lambert1}
          position={[7.85, 13.55, -3.4]}
        />
        <mesh
          name="R07790_Bogen_90°_219_1x2_0_1_4404_gekürzt_3_1_4_22"
          geometry={
            nodes["R07790_Bogen_90°_219_1x2_0_1_4404_gekürzt_3_1_4_22"].geometry
          }
          material={materials.lambert1}
          position={[7.44, 11.87, -9.07]}
        />
        <mesh
          name="R07790_Bogen_90°_219_1x2_0_1_4404_gekürzt_3_1_4_25"
          geometry={
            nodes["R07790_Bogen_90°_219_1x2_0_1_4404_gekürzt_3_1_4_25"].geometry
          }
          material={materials.lambert1}
          position={[7.44, 28.62, -7.09]}
        />
        <mesh
          name="R20716_Druckschlauchtülle_d50_KS_d52_ST_2_6001"
          geometry={
            nodes.R20716_Druckschlauchtülle_d50_KS_d52_ST_2_6001.geometry
          }
          material={materials.lambert1}
          position={[6.56, 25.28, -5.12]}
        />
        <mesh
          name="R20716_Druckschlauchtülle_d50_KS_d52_ST_2_9"
          geometry={nodes.R20716_Druckschlauchtülle_d50_KS_d52_ST_2_9.geometry}
          material={materials.lambert1}
          position={[6.56, 25.28, -11.11]}
        />
        <mesh
          name="pCylinder5"
          geometry={nodes.pCylinder5.geometry}
          material={materials.lambert1}
          position={[7.85, 13.55, -9.35]}
        />
        <mesh
          name="pCylinder3"
          geometry={nodes.pCylinder3.geometry}
          material={materials.lambert1}
          position={[7.85, 13.55, -5.39]}
        />
        <mesh
          name="polySurface103"
          geometry={nodes.polySurface103.geometry}
          material={materials.lambert1}
          position={[10.31, 55.16, -3.66]}
        />
        <mesh
          name="polySurface114"
          geometry={nodes.polySurface114.geometry}
          material={materials.lambert1}
          position={[12.91, 54.77, -13.32]}
        />
        <mesh
          name="polySurface65"
          geometry={nodes.polySurface65.geometry}
          material={materials.lambert1}
          position={[13.13, 56.03, -3.91]}
        />
        <mesh
          name="polySurface70"
          geometry={nodes.polySurface70.geometry}
          material={materials.lambert1}
          position={[8.94, 56.03, -3.91]}
        />
        <mesh
          name="R07790_Bogen_90°_219_1x2_0_1_4404_gekürzt_3_1_4_16001"
          geometry={
            nodes["R07790_Bogen_90°_219_1x2_0_1_4404_gekürzt_3_1_4_16001"]
              .geometry
          }
          material={materials.lambert1}
          position={[7.44, 11.87, -13.06]}
        />
        <mesh
          name="R07790_Bogen_90°_219_1x2_0_1_4404_gekürzt_3_1_4_24"
          geometry={
            nodes["R07790_Bogen_90°_219_1x2_0_1_4404_gekürzt_3_1_4_24"].geometry
          }
          material={materials.lambert1}
          position={[7.44, 28.62, -11.08]}
        />
        <mesh
          name="R20716_Druckschlauchtülle_d50_KS_d52_ST_2_11"
          geometry={nodes.R20716_Druckschlauchtülle_d50_KS_d52_ST_2_11.geometry}
          material={materials.lambert1}
          position={[5.99, 24.03, -15.07]}
        />
        <mesh
          name="polySurface77"
          geometry={nodes.polySurface77.geometry}
          material={materials.lambert1}
          position={[9.65, 54.9, -5.03]}
        />
        <mesh
          name="R07790_Bogen_90°_219_1x2_0_1_4404_gekürzt_3_1_4_23"
          geometry={
            nodes["R07790_Bogen_90°_219_1x2_0_1_4404_gekürzt_3_1_4_23"].geometry
          }
          material={materials.lambert1}
          position={[7.44, 11.87, -5.11]}
        />
        <mesh
          name="R20716_Druckschlauchtülle_d50_KS_d52_ST_2_8001"
          geometry={
            nodes.R20716_Druckschlauchtülle_d50_KS_d52_ST_2_8001.geometry
          }
          material={materials.lambert1}
          position={[6.56, 25.28, -9.15]}
        />
        <mesh
          name="R20716_Druckschlauchtülle_d50_KS_d52_ST_2_10"
          geometry={nodes.R20716_Druckschlauchtülle_d50_KS_d52_ST_2_10.geometry}
          material={materials.lambert1}
          position={[5.99, 24.03, -13.08]}
        />
        <mesh
          name="R20716_Druckschlauchtülle_d50_KS_d52_ST_2_7001"
          geometry={
            nodes.R20716_Druckschlauchtülle_d50_KS_d52_ST_2_7001.geometry
          }
          material={materials.lambert1}
          position={[6.56, 25.28, -7.14]}
        />
        <mesh
          name="polySurface7"
          geometry={nodes.polySurface7.geometry}
          material={materials.lambert1}
          position={[-4.19, -61.81, -46.23]}
        />
        <mesh
          name="R07285_Reduktion_125_90_PE100_SDR11_1_1_1_1001"
          geometry={
            nodes.R07285_Reduktion_125_90_PE100_SDR11_1_1_1_1001.geometry
          }
          material={materials.lambert1}
          position={[-4.14, -75.45, -42.96]}
        />
        <mesh
          name="R07389_Bund_DN100_d125_PN16_PE100_2_1_1_1_1001"
          geometry={
            nodes.R07389_Bund_DN100_d125_PN16_PE100_2_1_1_1_1001.geometry
          }
          material={materials.lambert1}
          position={[-4.14, -74.6, -42.08]}
        />
        <mesh
          name="R07475_Rohr_d90x5_4_PN10_PE100_2_1_1_2_1001"
          geometry={nodes.R07475_Rohr_d90x5_4_PN10_PE100_2_1_1_2_1001.geometry}
          material={materials.lambert1}
          position={[-4.13, -75.45, -48.46]}
        />
        <mesh
          name="Fundament_2_1_remesh1"
          geometry={nodes.Fundament_2_1_remesh1.geometry}
          material={materials.lambert1}
          position={[-4.3, -61.73, -1.49]}
        />
        <mesh
          name="R07475_Rohr_d90x5_4_PN10_PE100_2_1_1_2_1_1001"
          geometry={
            nodes.R07475_Rohr_d90x5_4_PN10_PE100_2_1_1_2_1_1001.geometry
          }
          material={materials.lambert1}
          position={[-4.08, -78.27, -54.49]}
        />
        <mesh
          name="polySurface1"
          geometry={nodes.polySurface1.geometry}
          material={materials.lambert1}
          position={[-4.15, -73.18, -42.09]}
        />
        <mesh
          name="Rohrbogen_DIN_EN_ISO_15494_90_122_125x7_1_1_1_1_1_1_1_1_1001"
          geometry={
            nodes.Rohrbogen_DIN_EN_ISO_15494_90_122_125x7_1_1_1_1_1_1_1_1_1001
              .geometry
          }
          material={materials.lambert1}
          position={[-4.14, -75.21, -42.32]}
        />
        <mesh
          name="Rohrbogen_DIN_EN_ISO_15494_90_87_90x5_1_1_1_1_1001"
          geometry={
            nodes.Rohrbogen_DIN_EN_ISO_15494_90_87_90x5_1_1_1_1_1001.geometry
          }
          material={materials.lambert1}
          position={[-4.09, -75.62, -54.32]}
        />
        <mesh
          name="polySurface17"
          geometry={nodes.polySurface17.geometry}
          material={materials.lambert1}
          position={[-4.19, -61.81, -47.3]}
        />
        <mesh
          name="ST_6KT_MUTTER_M16_PRT_1__2001"
          geometry={nodes.ST_6KT_MUTTER_M16_PRT_1__2001.geometry}
          material={materials.lambert1}
          position={[-4.49, -54.45, -44.56]}
        />
        <mesh
          name="polySurface6"
          geometry={nodes.polySurface6.geometry}
          material={materials.lambert1}
          position={[-4.12, -74.4, -42.08]}
        />
        <mesh
          name="ST_6KT_MUTTER_M16_PRT_1__4001"
          geometry={nodes.ST_6KT_MUTTER_M16_PRT_1__4001.geometry}
          material={materials.lambert1}
          position={[-3.16, -54.53, -44.48]}
        />
        <mesh
          name="polySurface16"
          geometry={nodes.polySurface16.geometry}
          material={materials.lambert1}
          position={[-4.19, -61.81, -47.43]}
        />
        <mesh
          name="polySurface5"
          geometry={nodes.polySurface5.geometry}
          material={materials.lambert1}
          position={[-4.12, -74.62, -42.08]}
        />
        <mesh
          name="ST_6KT_MUTTER_M16_PRT_1__3001"
          geometry={nodes.ST_6KT_MUTTER_M16_PRT_1__3001.geometry}
          material={materials.lambert1}
          position={[-3.16, -54.52, -44.56]}
        />
        <mesh
          name="LASCHE_5X50X95_PRT_1__3001"
          geometry={nodes.LASCHE_5X50X95_PRT_1__3001.geometry}
          material={materials.lambert1}
          position={[-3.16, -54.49, -44.51]}
        />
        <mesh
          name="polySurface21"
          geometry={nodes.polySurface21.geometry}
          material={materials.lambert1}
          position={[-4.26, -61.74, -20.81]}
        />
        <mesh
          name="polySurface23"
          geometry={nodes.polySurface23.geometry}
          material={materials.lambert1}
          position={[-17.91, -62.11, -3.22]}
        />
        <mesh
          name="polySurface24"
          geometry={nodes.polySurface24.geometry}
          material={materials.lambert1}
          position={[-7.81, -72.92, -4.56]}
        />
        <mesh
          name="HANDGRIFF__S_X8X70X46_PRT_1__1001"
          geometry={nodes.HANDGRIFF__S_X8X70X46_PRT_1__1001.geometry}
          material={materials.lambert1}
          position={[-3.67, -52.42, -43.94]}
        />
      </group>
      <group name="Walls" position={[95.91, 38.27, -42.08]}>
        <mesh
          name="Walls_1"
          geometry={nodes.Walls_1.geometry}
          material={materials.Wall}
        />
        <mesh
          name="Walls_2"
          geometry={nodes.Walls_2.geometry}
          material={materials.glass}
        />
      </group>
      <mesh
        name="R07429_Losflansch_DN100_d125_PN16_PP-GF_2111_2"
        geometry={
          nodes["R07429_Losflansch_DN100_d125_PN16_PP-GF_2111_2"].geometry
        }
        material={
          nodes["R07429_Losflansch_DN100_d125_PN16_PP-GF_2111_2"].material
        }
        position={[-13.16, 3.18, -39.32]}
        rotation={[Math.PI, -1.57, Math.PI]}
      />
      <group name="Toit" position={[43.34, 76.95, 0.89]}>
          <ObjectInstance 
          name="Toit_contour"
          Positions={toitValeurs}
          object={nodes.Toit_1}
          />
          <ObjectInstance 
          name="Toit_fenster"
          Positions={toitValeurs}
          object={nodes.Toit_2}
          />
        </group>
      <mesh
        name="P02743-Z014-A_DN100_RG_E111_1"
        geometry={nodes["P02743-Z014-A_DN100_RG_E111_1"].geometry}
        material={nodes["P02743-Z014-A_DN100_RG_E111_1"].material}
        position={[-12.87, 3.31, -39.33]}
        rotation={[-Math.PI / 2, 0, -1.57]}
      />
    </group>


  );
}

useGLTF.preload("./reception.glb");
