import EmptyList from "@/components/home/empty-list";
import PropertiesList from "@/components/home/properties-list";
import { fetchFavorites } from "@/utils/actions";

async function FavoritesPage() {
  const favorites = await fetchFavorites();

  if (favorites.length === 0) {
    return <EmptyList />;
  }
  return <PropertiesList properties={favorites} />;
}

export default FavoritesPage;
