import useData from "@/core/store";

export function TitleUser() {
  const selectedUser = useData((state) => state.selectedUser);

  return selectedUser && (
    <div className="text-center text-lg text-gray-500">{selectedUser.ID} - {selectedUser.Nome} ({selectedUser.Fantasia})</div>
  )
}
