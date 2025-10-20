// Create a client.js file
import { 
  createClient,
  LiveList,
  LiveMap,
  LiveObject
} from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

import { Layer, Color } from "./types/canvas";

const client = createClient({
  throttle: 16,
  authEndpoint: "/api/liveblocks-auth",
});

type Presence = {
  cursor: { x: number, y: number } | null;
  selection: string[];
  pencilDraft: [x: number, y: number, pressure: number][] | null;
  penColor: Color | null;
};

type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>;
  layerIds: LiveList<string>;
};

type UserMeta = {
  id?: string;
  info?: {
    name?: string;
    picture?: string;
  };
};

type RoomEvent = {

};

// Create the room context with your desired types
export const {
  RoomProvider,
  useRoom,
  useMyPresence,
  useUpdateMyPresence,
  useOthers,
  useOthersMapped,
  useOthersConnectionIds,
  useOther,
  useBroadcastEvent,
  useEventListener,
  useStorage,
  useMutation,
  useSelf,
  useCanRedo,
  useCanUndo,
  useHistory,
  useRedo,
  useUndo,
} = createRoomContext<
  Presence,
  Storage,
  UserMeta,
  RoomEvent
>(client);