"use client";

import { useEffect, useState } from "react";
import { PRODUCTS } from "../../constants/mockdata";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="flex flex-col items-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative mb-3 w-full overflow-hidden rounded-md border border-gray-200 shadow-sm">
                <Image
                    height={300}
                    width={300}
                    src={product.image.replace("/public", "")}
                    alt={product.name}
                    className={`aspect-square w-full object-cover transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
                />
                {isHovered && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-3 text-center text-white transition-all duration-300">
                        {/* <h3 className="mb-1 text-base font-semibold">{product.name}</h3> */}
                        <p className="text-sm leading-tight" dangerouslySetInnerHTML={{ __html: product.description.replace(/\n/g, "<br />") }} />
                    </div>
                )}
            </div>
            <h3 className="text-center text-base font-medium">{product.name}</h3>
        </div>
    );
};

const ProductPage = () => {
    const searchParams = useSearchParams();

    const categoryParam = searchParams.get("category");
    const subCategoryParam = searchParams.get("subcategory");

    const [activeCategory, setActiveCategory] = useState("all");
    const [activeSpiceSubCategory, setActiveSpiceSubCategory] = useState("all");
    const [activeTableWareSubCategory, setActiveTableWareSubCategory] = useState("all");

    useEffect(() => {
        if (categoryParam) {
            setActiveCategory(categoryParam);

            if (categoryParam === "spices" && subCategoryParam) {
                setActiveSpiceSubCategory(subCategoryParam);
            }

            if (categoryParam === "tableWare" && subCategoryParam) {
                setActiveTableWareSubCategory(subCategoryParam);
            }
        }
    }, [categoryParam, subCategoryParam]);

    const getAllProducts = () => {
        const products = [];

        PRODUCTS.grains.forEach((product, index) => {
            products.push({
                id: `grain-${index}`,
                ...product,
                name: product.name,
                description: product.description,
                category: "grains",
            });
        });

        PRODUCTS.oilseeds.forEach((product, index) => {
            products.push({
                id: `oilseed-${index}`,
                ...product,
                name: product.name,
                description: product.description,
                category: "oilseeds",
            });
        });

        PRODUCTS.pulses.forEach((product, index) => {
            products.push({
                id: `pulse-${index}`,
                ...product,
                name: product.name,
                description: product.description,
                category: "pulses",
            });
        });

        PRODUCTS.spices.ground.forEach((product, index) => {
            products.push({
                id: `ground-spice-${index}`,
                ...product,
                name: product.name,
                description: product.description,
                category: "spices",
                subCategory: "ground",
            });
        });

        PRODUCTS.spices.wholw.forEach((product, index) => {
            products.push({
                id: `whole-spice-${index}`,
                ...product,
                name: product.name,
                description: product.description,
                category: "spices",
                subCategory: "whole",
            });
        });

        PRODUCTS.tableWare.roundPlates.forEach((product, index) => {
            products.push({
                id: `round-plate-${index}`,
                ...product,
                name: product.name,
                description: product.description,
                category: "tableWare",
                subCategory: "roundPlates",
            });
        });

        PRODUCTS.tableWare.squarePlates.forEach((product, index) => {
            products.push({
                id: `square-plate-${index}`,
                ...product,
                name: product.name,
                description: product.description,
                category: "tableWare",
                subCategory: "squarePlates",
            });
        });

        PRODUCTS.tableWare.bowls.forEach((product, index) => {
            products.push({
                id: `bowls-${index}`,
                ...product,
                name: product.name,
                description: product.description,
                category: "tableWare",
                subCategory: "bowls",
            });
        });

        PRODUCTS.tableWare.mealTrays.forEach((product, index) => {
            products.push({
                id: `meal-trays-${index}`,
                ...product,
                name: product.name,
                description: product.description,
                category: "tableWare",
                subCategory: "mealTrays",
            });
        });

        PRODUCTS.tableWare.clamShell.forEach((product, index) => {
            products.push({
                id: `clam-shell-${index}`,
                ...product,
                name: product.name,
                description: product.description,
                category: "tableWare",
                subCategory: "clamShell",
            });
        });

        PRODUCTS.tableWare.foodContainer.forEach((product, index) => {
            products.push({
                id: `food-container-${index}`,
                ...product,
                name: product.name,
                description: product.description,
                category: "tableWare",
                subCategory: "foodContainer",
            });
        });

        return products;
    };

    const allProducts = getAllProducts();

    const filteredProducts = (() => {
        if (activeCategory === "all") {
            return allProducts.filter((product) => product.category !== "tableWare");
        } else if (activeCategory === "spices") {
            if (activeSpiceSubCategory === "all") {
                return allProducts.filter((product) => product.category === "spices");
            } else {
                return allProducts.filter((product) => product.category === "spices" && product.subCategory === activeSpiceSubCategory);
            }
        } else if (activeCategory === "tableWare") {
            if (activeTableWareSubCategory === "all") {
                return allProducts.filter((product) => product.category === "tableWare");
            } else {
                return allProducts.filter((product) => product.category === "tableWare" && product.subCategory === activeTableWareSubCategory);
            }
        } else {
            return allProducts.filter((product) => product.category === activeCategory);
        }
    })();
    const categories = [
        { id: "all", name: "All Products" },
        { id: "spices", name: "Spices" },
        { id: "grains", name: "Grains" },
        { id: "pulses", name: "Pulses" },
        { id: "oilseeds", name: "Oilseeds" },
        { id: "tableWare", name: "Tableware" },
    ];

    const spiceSubCategories = [
        { id: "all", name: "All Spices" },
        { id: "ground", name: "Ground Spices" },
        { id: "whole", name: "Whole Spices" },
    ];

    const tableWareSubCategories = [
        { id: "all", name: "All Tableware" },
        { id: "roundPlates", name: "Round Plates" },
        { id: "squarePlates", name: "Square Plates" },
        { id: "bowls", name: "Bowls" },
        { id: "mealTrays", name: "Meal Trays" },
        { id: "clamShell", name: "Clam Shells" },
        { id: "foodContainer", name: "Food Containers" },
    ];

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        setActiveSpiceSubCategory("all");
        setActiveTableWareSubCategory("all");

        const url = new URL(window.location.href);
        url.searchParams.set("category", categoryId);
        url.searchParams.delete("subcategory");
        window.history.pushState({}, "", url);
    };

    const handleSubCategoryChange = (subCategoryId) => {
        setActiveSpiceSubCategory(subCategoryId);
        setActiveTableWareSubCategory(subCategoryId);

        const url = new URL(window.location.href);
        url.searchParams.set("subcategory", subCategoryId);
        window.history.pushState({}, "", url);
    };

    const getTitle = () => {
        if (activeCategory === "all") return "ALL PRODUCTS";
        if (activeCategory === "spices" && activeSpiceSubCategory !== "all") {
            return activeSpiceSubCategory === "ground" ? "GROUND SPICES" : "WHOLE SPICES";
        }
        if (activeCategory === "tableWare" && activeTableWareSubCategory !== "all") {
            return activeTableWareSubCategory.replace(/([A-Z])/g, " $1").toUpperCase();
        }
        return activeCategory.toUpperCase();
    };

    return (
        <div className="container mx-auto mt-48 mb-10 px-4 md:px-8">
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`cursor-pointer rounded-full px-6 py-2 font-medium transition-colors ${
                            activeCategory === category.id ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {activeCategory === "spices" && (
                <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
                    {spiceSubCategories.map((subCategory) => (
                        <button
                            key={subCategory.id}
                            onClick={() => handleSubCategoryChange(subCategory.id)}
                            className={`cursor-pointer rounded-full px-6 py-2 font-medium transition-colors ${
                                activeSpiceSubCategory === subCategory.id ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {subCategory.name}
                        </button>
                    ))}
                </div>
            )}

            {activeCategory === "tableWare" && (
                <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
                    {tableWareSubCategories.map((subCategory) => (
                        <button
                            key={subCategory.id}
                            onClick={() => handleSubCategoryChange(subCategory.id)}
                            className={`cursor-pointer rounded-full px-6 py-2 font-medium transition-colors ${
                                activeTableWareSubCategory === subCategory.id ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {subCategory.name}
                        </button>
                    ))}
                </div>
            )}

            <div className="mb-12 flex items-center justify-center">
                <div className="h-px w-16 bg-gray-300"></div>
                <h1 className="mx-4 text-center text-3xl font-bold md:text-4xl">{getTitle()}</h1>
                <div className="h-px w-16 bg-gray-300"></div>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
