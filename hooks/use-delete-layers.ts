import { useSelf, useMutation } from "@/liveblocks.config";
import { c } from "@liveblocks/react/dist/room-Bf3S78LF";

export const useDeleteLayers = () => {
  const selection = useSelf((me) => me.presence.selection);

  return useMutation((
    { storage, setMyPresence}
  ) => {
    const liveLayers = storage.get("layers");
    const liveLayerIds = storage.get("layerIds");

    if (selection) {
      for (const id of selection) {
        liveLayers.delete(id);

        const index = liveLayerIds.indexOf(id);

        if (index !== -1) {
          liveLayerIds.delete(index);
        }
      }

      setMyPresence({ selection: [] }, { addToHistory: true });
    }
  }, [selection])
};