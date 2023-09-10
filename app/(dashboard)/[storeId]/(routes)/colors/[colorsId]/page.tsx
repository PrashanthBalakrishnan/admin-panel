import prismadb from "@/lib/prismadb";
import ColorForm from "./components/ColorForm";

const ColorPage = async ({ params }: { params: { colorsId: string } }) => {
  const Color = await prismadb.color.findUnique({
    where: {
      id: params.colorsId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={Color} />
      </div>
    </div>
  );
};
export default ColorPage;
