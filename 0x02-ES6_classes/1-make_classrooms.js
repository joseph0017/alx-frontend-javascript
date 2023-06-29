import ClassRoom from "./0-classroom";

export default function initializeRooms() {
  const nineteen = new ClassRoom(19);
  const twenty = new ClassRoom(20);
  const thirtyFour = new ClassRoom(34);
  return [nineteen, twenty, thirtyFour];
}
