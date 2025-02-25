export const Participants = () => {
  return (
    <div
      className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md"
    >
      List of participants
    </div>
  )
}

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div
      className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]"
    />
  );
};