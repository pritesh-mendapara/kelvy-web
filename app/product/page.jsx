import { Suspense } from "react";
import ProductPage from "./ProductPage";

const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductPage />;
        </Suspense>
    );
};

export default Page;
