export function ButtonPrefer({ gameData }) {
  function addToFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const existingItemIndex = favorites.findIndex(
      (item) => item.id === gameData.id
    );
    if (existingItemIndex !== -1) {
      favorites[existingItemIndex].quantity += 1;
    } else {
      favorites.push({ ...gameData, quantity: 1 });
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  return (
    <button className="addToPrefer" onClick={addToFavorites}>
      <h2 className="textButtonCart">Add to favorites</h2>
    </button>
  );
}
