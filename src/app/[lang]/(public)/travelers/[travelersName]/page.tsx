export default function TravelersName({
  params,
}: {
  params: { travelersName: string };
}) {
  const { travelersName } = params;

  return (
    <main>
      <p>
        Travelers name: <span>{travelersName}</span>
      </p>
    </main>
  );
}
