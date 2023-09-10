import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import CatgegoriesClient from "./components/CategoriesClient";
import { CategoriesColumnProps } from "./components/CategoriesColumn";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedCategories: CategoriesColumnProps[] = categories.map(
    (item) => ({
      id: item.id,
      name: item.name,
      billboardLabel: item.billboard.label,
      createdAt: format(item.createdAt, "MMMM do, yyyy"),
    }),
  );
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CatgegoriesClient data={formatedCategories} />
      </div>
    </div>
  );
};
export default CategoriesPage;
