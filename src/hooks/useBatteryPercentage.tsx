// import { useEffect, useState } from "react";

// interface BatteryStatus {
//   batteryLevel: number | null;
//   charging: boolean;
// }

// function useBatteryStatus(): BatteryStatus {
//   const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
//   const [charging, setCharging] = useState<boolean>(false);

//   useEffect(() => {
//     let batteryManager: BatteryManager | undefined;

//     async function updateBatteryStatus() {
//       try {
//         batteryManager = await (navigator as any).getBattery(); // casting due to limited type support
//         setBatteryLevel(
//           (batteryManager.level * 100).toFixed(0) as unknown as number
//         );
//         setCharging(batteryManager.charging);

//         batteryManager.onlevelchange = () => {
//           setBatteryLevel(
//             (batteryManager!.level * 100).toFixed(0) as unknown as number
//           );
//         };

//         batteryManager.onchargingchange = () => {
//           setCharging(batteryManager!.charging);
//         };
//       } catch (error) {
//         console.error("Battery Status API is not supported on this browser.");
//       }
//     }

//     updateBatteryStatus();

//     return () => {
//       if (batteryManager) {
//         batteryManager.onlevelchange = null;
//         batteryManager.onchargingchange = null;
//       }
//     };
//   }, []);

//   return { batteryLevel, charging };
// }

// export default useBatteryStatus;
