const productsObj = {
  products: [
    {
      name: "Classic Leather Jacket",
      image: "/leather_jacket_1.jpg",
      secondImage: "/leather_jacket_2.jpg",
      price: 199.99,
      compareAtPrice: 249.99,
      numberOfReviews: 45,
      rating: 4,
    },
    {
      name: "Wireless Noise-Cancelling Headphones",
      image: "/headphones_1.jpg",
      secondImage: "/headphones_2.jpg",
      price: 149.99,
      compareAtPrice: 199.99,
      numberOfReviews: 120,
      rating: 5,
    },
    {
      name: "Organic Cotton T-Shirt",
      image: "/t-shirt_1.jpg",
      secondImage: "/t-shirt_2.jpg",
      price: 29.99,
      compareAtPrice: 39.99,
      numberOfReviews: 87,
      rating: 4,
    },
    {
      name: "Stainless Steel Water Bottle",
      image: "/water_1.jpg",
      secondImage: "/water_2.jpg",
      price: 24.99,
      compareAtPrice: 34.99,
      numberOfReviews: 56,
      rating: 5,
    },
    {
      name: "Smart Home Security Camera",
      image: "/camera_1.jpg",
      secondImage: "/camera_2.jpg",
      price: 89.99,
      compareAtPrice: 129.99,
      numberOfReviews: 200,
      rating: 4,
    },
    {
      name: "Premium Yoga Mat",
      image: "/mat_1.jpg",
      secondImage: "/mat_2.jpg",
      price: 49.99,
      compareAtPrice: 69.99,
      numberOfReviews: 34,
      rating: 3,
    },
    {
      name: "Bluetooth Portable Speaker",
      image: "/speaker_1.jpg",
      secondImage: "/speaker_2.jpg",
      price: 59.99,
      compareAtPrice: 79.99,
      numberOfReviews: 92,
      rating: 4,
    },
    {
      name: "Electric Coffee Grinder",
      image: "/coffee_1.jpg",
      secondImage: "/coffee_2.jpg",
      price: 39.99,
      compareAtPrice: 49.99,
      numberOfReviews: 78,
      rating: 5,
    },
    {
      name: "LED Desk Lamp",
      image: "/lamp_1.jpg",
      secondImage: "/lamp_2.jpg",
      price: 34.99,
      compareAtPrice: 44.99,
      numberOfReviews: 65,
      rating: 4,
    },
    {
      name: "Wireless Charging Pad",
      image: "/pad_1.jpg",
      secondImage: "/pad_2.jpg",
      price: 19.99,
      compareAtPrice: 29.99,
      numberOfReviews: 43,
      rating: 3,
    },
  ],
};

function instantiateStar(rating) {
  let starHTML = [];

  for (let index = 0; index < rating; index++) {
    starHTML.push(`<svg
      class="tw-w-[9px] tw-h-[9px] md:tw-w-3 md:tw-h-3"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.7421 0.665844C4.58896 0.592831 4.41106 0.592831 4.25792 0.665844C4.12554 0.728962 4.05255 0.838551 4.01575 0.898671C3.97769 0.960823 3.93863 1.04 3.90056 1.11717L3.09216 2.7549L1.28389 3.0192C1.19877 3.03163 1.11143 3.04437 1.04059 3.06141C0.972051 3.07789 0.845335 3.11353 0.744493 3.21998C0.627834 3.34311 0.57297 3.51232 0.595178 3.68048C0.614375 3.82584 0.696066 3.92906 0.741891 3.98262C0.78926 4.03799 0.852504 4.09956 0.914141 4.15957L2.22206 5.43349L1.91345 7.23284C1.89888 7.31768 1.88394 7.40471 1.87818 7.47738C1.87262 7.54766 1.86724 7.67925 1.93725 7.80814C2.01824 7.95724 2.16219 8.06181 2.32902 8.09274C2.47324 8.11948 2.59672 8.07368 2.66184 8.04666C2.72917 8.01873 2.80733 7.9776 2.88351 7.93752L4.50001 7.08742L6.11652 7.93752C6.1927 7.97761 6.27085 8.01873 6.33818 8.04666C6.4033 8.07368 6.52678 8.11948 6.671 8.09274C6.83783 8.06181 6.98178 7.95724 7.06277 7.80814C7.13278 7.67925 7.1274 7.54766 7.12184 7.47738C7.11608 7.40472 7.10114 7.31769 7.08657 7.23285L6.77796 5.43349L8.08589 4.15956C8.14753 4.09955 8.21076 4.03798 8.25813 3.98262C8.30395 3.92906 8.38564 3.82584 8.40484 3.68048C8.42705 3.51232 8.37219 3.34311 8.25553 3.21998C8.15468 3.11353 8.02797 3.07789 7.95943 3.06141C7.88859 3.04437 7.80125 3.03163 7.71613 3.0192L5.90786 2.7549L5.09947 1.11719C5.0614 1.04002 5.02233 0.960828 4.98427 0.898671C4.94746 0.838551 4.87448 0.728962 4.7421 0.665844Z" fill="#231F20"/>
    </svg>`);
  }
  return starHTML.join("");
}

function checkForDiscount(price, compareAtPrice) {
  if (price < compareAtPrice) {
    const discountAmount = compareAtPrice - price;
    const discountPercentage = Math.round(
      (discountAmount / compareAtPrice) * 100
    );
    return `<span class="tw-text-[#FFFFFA] tw-bg-[#5C7962] product-tag tw-right-1 md:tw-right-2"> ${discountPercentage}% off </span>`;
  }
  return "";
}

function productHTMLModel(product) {
  return `
    <a class="tw-font-best-seller lg:tw-w-[355px] swiper-slide">
        <div class="tw-relative tw-mb-3 lg:tw-mb-4 tw-group">
            <span class="product-tag tw-left-1 md:tw-left-2 tw-text-black tw-bg-[#FFFFFA]">
                Best Seller
            </span>
            <img class="product-image tw-cursor-pointer" src="${product.image}" alt="">
            <img class="product-image tw-absolute tw-top-0 tw-opacity-0 group-hover:tw-opacity-100 tw-z-[9] tw-cursor-pointer" src="${
              product.secondImage
            }" alt="">
            ${checkForDiscount(product.price, product.compareAtPrice)}
        </div>
        <div class="tw-flex tw-px-2 tw-flex-col tw-gap-2 lg:tw-w-[355px] lg:tw-px-3">
            <p class="tw-text-base md:tw-text-lg tw-line-clamp-1 tw-text-ellipsis lg:tw-line-clamp-none">${
              product.name
            }</p>
            <div class="tw-flex tw-flex-col tw-items-start tw-gap-1 md:tw-gap-[5px] xxs:tw-items-center xxs:tw-flex-row">
            <span class="tw-flex">${instantiateStar(product.rating)}</span>
            <p class="tw-font-best-seller-price tw-font-normal tw-text-[#707070] tw-text-[11px] md:tw-text-sm">
                ${product.numberOfReviews} Reviews
            </p>
            </div>
            <div class="tw-text-base md:tw-text-lg lg:tw-text-base tw-font-best-seller-price tw-font-medium">
                ${product.price}
            </div>
        </div>
    </a>
    `;
}

function hideSpinner(element, classToAdd) {
  const spinner = document.querySelector(".lds-ring");
  spinner.classList.add("vanished-ring");
  element.classList.add(classToAdd);
}

function buildMobileProducts() {
  const previewProducts = document.getElementById("preview-products");

  const previewProductsArr = productsObj.products.slice(0, 4);

  previewProductsArr.forEach((product) => {
    previewProducts.innerHTML += productHTMLModel(product);
  });

  const hiddenProducts = document.getElementById("remaining-products");

  const hiddenProductsArr = productsObj.products.slice(4);

  hiddenProductsArr.forEach((product) => {
    hiddenProducts.innerHTML += productHTMLModel(product);
  });

  hideSpinner(previewProducts, "!tw-grid");
}

function buildDesktopProducts() {
  const desktopProducts = document.getElementById("desktop-products");

  productsObj.products.forEach((product) => {
    desktopProducts.innerHTML += productHTMLModel(product);
  });

  hideSpinner(desktopProducts, "lg:!tw-flex");
}

document.addEventListener("DOMContentLoaded", () => {
  buildMobileProducts();
  buildDesktopProducts();
});
