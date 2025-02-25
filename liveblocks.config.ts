// Create a client.js file
import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  authEndpoint: "/api/liveblocks-auth",
});

type Presence = {

};

type Storage = {

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
} = createRoomContext(client);